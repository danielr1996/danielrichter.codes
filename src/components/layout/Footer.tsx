import github from 'assets/img/github.png'
import stackoverflow from 'assets/img/stackoverflow.svg'
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import {Temporal} from "@js-temporal/polyfill";

export const Footer = () => {
    const { t } = useTranslation('footer');

    return (<>
        <footer className="p-3 flex flex-col sm:flex-row items-center justify-between text-xs">
            <div className="mb-8 sm:mb-0">
                <span className="mr-3 inline-flex items-center">
                    <img src={github.src} alt="" className="inline mr-1 h-4"/>
                    <a href="https://github.com/danielr1996">Github</a>
                </span>
                {/*<span className="mr-3 inline-flex items-center">*/}
                {/*    <img src={stackoverflow.src} alt="" className="inline mr-1 h-4"/>*/}
                {/*    <a href="https://stackoverflow.com/users/3340372/danielr1996">StackOverflow</a>*/}
                {/*</span>*/}
            </div>
            <div className="inline-flex items-center mb-8 sm:mb-0">
                Copyright © {Temporal.Now.plainDateISO().year} Daniel Richter<span className="hidden md:inline whitespace-pre-wrap"> - Powered by <a className="underline"
                                                                href="https://nextjs.org/">Next.js</a> & <a
                className="underline" href="https://tailwindcss.com/">tailwindcss</a></span>
            </div>
            <div className="inline-flex items-center ">
                <Link href="/imprint">{t('imprint')}</Link>
            </div>

        </footer>

    </>)
}