import type {GetStaticPaths, NextPage} from 'next'
import Head from 'next/head'
import {GetStaticProps} from "next";
import {Markdown} from "components/Markdown";
import {getAvailablePages, getPage, Page} from "lib/graphql";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Slug: NextPage<Page> = ({Title, content}) => {
    return (
        <>
            <Head>
                <title key="title">Daniel Richter - {Title}</title>
            </Head>
            <div className="prose dark:prose-invert mx-auto mt-10">
                <Markdown>{content}</Markdown>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({locale = 'de',params}) => {
    // let slug = ''
    // if(params){
    //     slug = params.slug as string
    // }
    // const props = await getPage(locale, slug)
    return {
        props: {
            // ...props,
            ...(await serverSideTranslations(locale, ['footer'])),
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    // const paths = await getAvailablePages()
    return {
        // paths,
        paths: [],
        fallback: false
    };
}


export default Slug
