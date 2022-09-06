import {FunctionComponent} from "react";
import Link from "next/link";
import {locale, TranslatedString} from "lib/model";
import {useTranslation} from "next-i18next";
import {translate} from "lib/markdown";

export type MenuData = {
    link: string,
    title: TranslatedString
}

type Props = {
    menu: MenuData[]
}

export const Menu: FunctionComponent<Props> = ({menu})=>{
    const { i18n: {language} } = useTranslation('menu');
    return <>
        {menu.map(({title,link})=><span key={link} className="text-xl mr-3"><Link href={link}>{translate(language as locale)(title)}</Link></span>)}
    </>
}
