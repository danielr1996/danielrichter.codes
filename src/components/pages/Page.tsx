import {FunctionComponent} from "react"
import {SectionPage, SectionPageData} from "components/pages/SectionPage"
import {DataObject, TranslatedString} from "lib/model"

export type PageData =  SectionPageData
export type CommonPageData = DataObject & {
    slug: string[],
    type: 'SectionPage' | 'LandingPage'
    title: TranslatedString
}

export const Page: FunctionComponent<PageData> = (page)=>{
    switch (page.type) {
        case 'SectionPage':
            return <SectionPage {...page} />
        default:
            return <></>
    }
}