import type {GetStaticPaths, NextPage} from 'next'
import {GetStaticProps} from "next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import {getAvailablePages, getMenu, getPage, Menu} from "lib/yaml"
import {Page, PageData} from "components/pages/Page"
import React from "react"

export const FooterMenuContext = React.createContext<Menu>({entries:[]})
export const HeaderMenuContext = React.createContext<Menu>({entries:[]})

const Slug: NextPage<PageData & {footer: any, header: any}> = (props) =>
<FooterMenuContext.Provider value={props.footer}>
    <HeaderMenuContext.Provider value={props.header}>
        <Page {...props} />
    </HeaderMenuContext.Provider>
</FooterMenuContext.Provider>
export default Slug

export const getStaticProps: GetStaticProps = async ({locale = 'de', params}) => {
    const page = getPage(locale, params?.slug as string[])
    const footer = getMenu(locale, 'footer')
    const header = getMenu(locale, 'header')
    return {
        props: {
            ...page,
            footer,
            header,
            ...(await serverSideTranslations(locale, ['footer', 'timelinesection'])),
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAvailablePages()
    return {
        paths,
        fallback: false
    }
}


