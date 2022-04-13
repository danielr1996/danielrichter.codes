import Link from 'next/link'
import logo from 'assets/img/logo.png'
import {LanguageSwitcher} from "components/lib/LanguageSwitcher";
import {ThemeSwitcher} from "components/lib/ThemeSwitcher";

export const Header = () => {

    return (<>
        <header className="bg-zinc-500 dark:bg-bluegray-dark p-3 flex items-center justify-between">
            <div className="flex items-center">
                <img alt="logo" src={logo.src} className="mr-3 w-10 ml-3 rounded-full"/>
                <span className="text-xl mr-3"><Link href="/">Home</Link></span>
                {/*<span className="text-sm mr-3"><Link href="/aboutme">Über mich</Link></span>*/}
                {/*<span className="text-sm mr-3"><Link href="/projects">Projekte</Link></span>*/}
            </div>
            <div className="mr-3">
                <ThemeSwitcher />
                <LanguageSwitcher/>
            </div>
        </header>
    </>)
}