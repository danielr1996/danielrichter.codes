import type {NextPage} from 'next'
import {GetStaticProps} from "next";
import {getPage} from "lib/markdown";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Page, {PageData} from "pages/[slug]"



const Home: NextPage<PageData> = (props) => <Page {...props} />
export default Home

export const getStaticProps: GetStaticProps = async ({locale = 'de'}) => {
    const props = await getPage(locale, 'home')
    return {
        props: {
            ...props,
            ...(await serverSideTranslations(locale, ['footer'])),
        }
    }
}


