import Head from "next/head"
import {Header} from "components/layout/Header"
import {Footer} from "components/layout/Footer"
import {Breakpoint} from "components/lib/Breakpoint"

export default function Layout({children}: any) {
    return <>
        <Head>
            <title key="title">Daniel Richter</title>
            <meta name="description" content="My personal website"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover,target-densityDpi=device-dpi" />
            <link rel="icon" href="/favicon.png"/>
        </Head>
        <div className="flex flex-col  bg-primary-dark text-gray-300">
            <div className="gradient h-screen-min">
                <Header/>
                <main className="flex-grow">
                    {children}
                </main>
                <Footer/>
            </div>
            <Breakpoint/>
        </div>
    </>
}