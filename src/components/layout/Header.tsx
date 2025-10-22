import logo from 'assets/img/logo.png'
import {LanguageSwitcher} from "components/lib/LanguageSwitcher";
import {Menu, MenuData} from "components/layout/Menu";
import {ThemeSwitcher} from "../lib/ThemeSwitcher";

const menu: MenuData[] = [
    {
        title: {
            en: 'About me',
            de: 'Über mich',
        },
        link: '/'
    },
    // {
    //     title: '/dev/',
    //     link: '/dev'
    // },
]

export const Header = () => {
    return (<>
        <header className="p-3 flex items-center justify-between">
            <div className="flex items-center">
                <img alt="logo" src={logo.src} className="mr-3 w-10 ml-3 rounded-full"/>
                <Menu menu={menu}/>
            </div>
            <div className="mr-3">
                {/*<ThemeSwitcher />*/}
                <LanguageSwitcher/>
            </div>
        </header>
    </>)
}
