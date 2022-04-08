import type {GetStaticPaths, NextPage} from 'next'
import Head from 'next/head'
import {GetStaticProps} from "next";
import {Markdown} from "components/Markdown";
import {getPage, Page} from "lib/graphql";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Home: NextPage<Page> = ({ content}) => {
    return (
        <>
            <Head>
                <title key="title">Daniel Richter</title>
            </Head>
            <div className="prose dark:prose-invert mx-auto mt-10">
                <Markdown>{content}</Markdown>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({locale = 'de'}) => {
    // const props = await getPage(locale, 'home')
    return {
        props: {
            // ...props,
            ...(await serverSideTranslations(locale, ['footer'])),
        }
    }
}


export default Home
