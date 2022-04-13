import Link from "next/link";
import {useRouter} from "next/router";

export const LanguageSwitcher = () => {
    const {asPath} = useRouter()
    return <>
        <Link href={asPath} locale="en">🇺🇸</Link>
        <Link href={asPath} locale="de">🇩🇪</Link>
    </>
}