import Link from 'next/link'
import logo from 'assets/img/logo.png'
import {LanguageSwitcher} from "components/lib/LanguageSwitcher";
import {useContext} from "react"
import {HeaderMenuContext} from "pages/[...slug]"

export const Header = () => {
    const menu = useContext(HeaderMenuContext)
    return (<>
        <header className="p-3 flex items-center justify-between">
            <div className="flex items-center">
                <img alt="logo" src={logo.src} className="mr-3 w-10 ml-3 rounded-full"/>
                {menu.entries.map(({title, link})=><span key={link} className="text-xl mr-3"><Link href={link}>{title}</Link></span>)}
            </div>
            <div className="mr-3">
                <LanguageSwitcher/>
            </div>
        </header>
    </>)
}