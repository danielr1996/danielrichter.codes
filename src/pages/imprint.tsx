import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import {loadMarkdown} from "../lib/markdown";
import {Markdown} from "../components/Markdown";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

type Props = {
    fileContent: string
}
const Home: NextPage<Props> = ({fileContent}) => {
    return (
        <>
            <Head>
                <title key="title">Daniel Richter - Impressum</title>
            </Head>
            <div className="prose dark:prose-invert mx-auto mt-10">
                <Markdown>{fileContent}</Markdown>
            </div>
        </>
    )
}


export const getStaticProps: GetStaticProps = async ({locale = 'de'}) => ({
    props: {
        fileContent: loadMarkdown('imprint', locale),
        ...(await serverSideTranslations(locale, ['footer'])),
    }
})
export default Home
