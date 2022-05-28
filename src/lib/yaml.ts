import {locale, TranslatedString} from "lib/model"
import { parse } from 'yaml'
import fs from 'fs'
import {Temporal} from "@js-temporal/polyfill"
import {PageData} from "components/pages/Page"
function isTranslatedString(str: string | TranslatedString): str is TranslatedString {
    return typeof str === 'object'
}

const translate = (locale: locale) => (str: string | TranslatedString | undefined): string => {
    if(str === undefined){
        return ''
    }

    if (isTranslatedString(str)) {
        // @ts-ignore
        return str[locale]
    }
    return str
}

export const yaml = fs.readFileSync('./src/content/payload.yml', 'utf8')
const parsed = parse(yaml)
export const pages: PageData[] = parsed.pages
const menus: any = parsed.menus
export type Menu = {
    entries: {
        title: TranslatedString,
        link: string,
    }[]
}
export const getMenu = (locale:string, location: string): Menu=>{
    const translateLocale = translate(locale as locale)
    const menu = menus[location]
    return ({...menu,entries: menu.entries.map((entry: any)=>({...entry, title: translateLocale(entry.title)}))})
}
export const getPage = (locale: string, slug: string[]): PageData => {
    const translateLocale = translate(locale as locale)
    const page = pages.filter(page => page.slug.every((val, i)=>val === slug[i]))[0]
    switch(page.type){
        case 'SectionPage':
            return {
                ...page,
                title: translateLocale(page.title),
                sections: page.sections.map(section => {
                    switch (section.type) {
                        case 'MarkdownSection':
                            return {
                                ...section,
                                content: translateLocale(section.content)
                            }
                        case 'TimelineSection':
                            return {
                                ...section,
                                headline: translateLocale(section?.headline),
                                stations: section.stations.map(station=>({
                                    ...station,
                                    position: translateLocale(station.position),
                                    content: translateLocale(station.content),
                                    //@ts-ignore
                                    startDate: Temporal.PlainDate.from(station.startDate),
                                    //@ts-ignore
                                    endDate: station.endDate ? Temporal.PlainDate.from(station.endDate) : undefined
                                }))
                            }
                        default:
                            return section
                    }
                })
            }
        default:
            return page;
    }

}
export const getAvailablePages = async () => {
    const { i18n: {locales} } = require('../../next-i18next.config');
    return pages.flatMap(({slug})=>locales.map((locale:string)=>( {params: {slug}, locale})))
}