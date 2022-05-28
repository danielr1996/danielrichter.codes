import {pages} from "lib/inmemory"
import {locale, TranslatedString} from "lib/model"
import {PageData} from "pages/[...slug]"

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

export const getPage = (locale: string, slug: string[]): PageData => {
    const translateLocale = translate(locale as locale)
    const page = pages.filter(page => page.slug.every((val, i)=>val === slug[i]))[0]
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
                            content: translateLocale(station.content)
                        }))
                    }
                default:
                    return section
            }
        })
    }
}
export const getAvailablePages = async () => {
    const { i18n: {locales} } = require('../../next-i18next.config');
    return pages.flatMap(({slug})=>locales.map((locale:string)=>( {params: {slug}, locale})))
}