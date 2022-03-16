import type {NextPage} from 'next'
import Head from 'next/head'
import {GetStaticProps} from "next";
import {loadMarkdown} from "../lib/markdown";
import {Markdown} from "../components/Markdown";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import stackoverflow from "../assets/img/stackoverflow.svg";

type Props = {
    fileContent: string,
}
const Home: NextPage<Props> = ({fileContent}) => {
    return (
        <>
            <Head>
                <title key="title">Daniel Richter</title>
            </Head>
            <div className="prose dark:prose-invert mx-auto mt-10">
                <Markdown>{fileContent}</Markdown>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({locale = 'de'}) => ({
    props: {
        fileContent: loadMarkdown('index', locale),
        ...(await serverSideTranslations(locale, ['common', 'footer'])),
    }
})
export default Home
