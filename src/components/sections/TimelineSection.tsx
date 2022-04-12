import {FunctionComponent} from "react"
import {CommonSectionData} from "components/sections/Section"
import {DataObject, TranslatedString} from "lib/model"
import {Markdown} from "components/Markdown"


export type TimelineSectionData = CommonSectionData & {
    type: 'TimelineSection'
    stations: (DataObject & {
        startDate: string,
        title: string,
        content: TranslatedString
    })[]
}

export const TimelineSection: FunctionComponent<TimelineSectionData> = ({stations}) => {

    return <section>
        <ul>
            {stations.map(({id, startDate, title, content})=><li key={id}>
                <h1>{title}</h1>
                <span>{startDate}</span>
                <div className="prose dark:prose-invert">
                    <Markdown>{content}</Markdown>
                </div>
            </li>)}
        </ul>
    </section>
}