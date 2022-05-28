import type {GetStaticPaths, NextPage} from 'next'
import Head from 'next/head'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Section, SectionData} from "components/sections/Section"
import {getAvailablePages, getPage} from "lib/markdown"
import {DataObject, TranslatedString} from "lib/model"

export type PageData = DataObject & {
    slug: string[],
    title: TranslatedString
    sections: SectionData[]
}

const Page: NextPage<PageData> = ({title, sections}) => {
    const publishedSections = sections.filter(section=>section.published || section.published === undefined)
    return <>
            <Head>
                <title key="title">Daniel Richter - {title}</title>
            </Head>
            <div className="mt-10">
                {publishedSections.map(section=><Section key={section.id} {...section} />)}
            </div>
        </>
}

export default Page

export const getStaticProps: GetStaticProps = async ({locale = 'de',params}) => {
    // @ts-ignore
    const props = getPage(locale, params.slug)
    return {
        props: {
            ...props,
            ...(await serverSideTranslations(locale, ['footer','timelinesection'])),
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAvailablePages()
    return {
        paths,
        fallback: false
    };
}


