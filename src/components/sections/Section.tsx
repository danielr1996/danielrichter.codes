import {FunctionComponent} from "react"
import {DataObject, TranslatedString} from "lib/model"
import {MarkdownSectionData, MarkdownSection} from "components/sections/MarkdownSection"
import {TimelineSection, TimelineSectionData} from "components/sections/TimelineSection"

export type SectionData = MarkdownSectionData | TimelineSectionData

export type CommonSectionData = DataObject & {
    type: 'HeroSection' | 'MarkdownSection' | 'ColumnSection' | 'TimelineSection'
    headline?: TranslatedString
    subheadline?: TranslatedString
}

export const Section: FunctionComponent<SectionData> = (section) => {
    switch (section.type) {
        case 'MarkdownSection':
            return <MarkdownSection {...section}/>
        case 'TimelineSection':
            return <TimelineSection {...section}/>
        default:
            return <></>
    }
}