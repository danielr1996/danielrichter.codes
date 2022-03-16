import Head from "next/head";
import Link from "next/link";
import {Header} from "./Header";
import {Footer} from "./Footer";

export default function Layout({children}: any) {

    return (<>
            <Head>
                {/* A JSX comment */}
                <title key="title">Daniel Richter</title>
                <meta name="description" content="My personal website"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className="bg-zinc-400 flex flex-col h-screen-min dark:bg-bluegray dark:text-gray-400">
               <Header/>
                <main className="flex-grow">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}