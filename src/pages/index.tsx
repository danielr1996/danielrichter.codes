import type {NextPage} from 'next'
import Head from 'next/head'
import {GetStaticProps} from "next";
import {loadMarkdown} from "../lib/markdown";
import {Markdown} from "../components/Markdown";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import stackoverflow from "../assets/img/stackoverflow.svg";

type Props = {
    content: any,
}
const Home: NextPage<Props> = ({content}) => {
    return (
        <>
            <Head>
                <title key="title">Daniel Richter - {content.title}</title>
            </Head>
            <div className="prose dark:prose-invert mx-auto mt-10">
                <Markdown>{content.content}</Markdown>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({locale = 'de'}) => ({
    props: {
        content: loadMarkdown('index', locale),
        ...(await serverSideTranslations(locale, ['footer'])),
    }
})
export default Home
