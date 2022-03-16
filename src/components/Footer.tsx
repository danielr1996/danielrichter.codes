// import github from '../assets/img/github.png'
// import stackoverflow from '../assets/img/stackoverflow.svg'
import Link from "next/link";
import { useTranslation } from 'next-i18next';

export const Footer = () => {
    const { t } = useTranslation('footer');

    return (<>
        <footer className=" bg-zinc-300 dark:bg-bluegray-light p-3 flex items-center justify-between text-xs">
            <div>
                <span className="mr-3 inline-flex items-center">
                    {/*<img src={github.src} alt="" className="inline mr-1 h-4"/>*/}
                    <a href="https://github.com/danielr1996">Github</a>
                </span>
                <span className="mr-3 inline-flex items-center">
                    {/*<img src={stackoverflow.src} alt="" className="inline mr-1 h-4"/>*/}
                    <a href="https://stackoverflow.com/users/3340372/danielr1996">StackOverflow</a>
                </span>
            </div>
            <div>
                Copyright © 2022 Daniel Richter - Powered by <a className="underline"
                                                                href="https://nextjs.org/">Next.js</a> & <a
                className="underline" href="https://tailwindcss.com/">tailwindcss</a>
            </div>
            <div>
                <Link href="/imprint">{t('imprint')}</Link>
            </div>

        </footer>

    </>)
}