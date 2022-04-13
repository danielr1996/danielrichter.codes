import {FunctionComponent} from "react"
import {CommonSectionData} from "components/sections/Section"
import {DataObject, TranslatedString} from "lib/model"
import {Markdown} from "components/lib/Markdown"

export type TimelineSectionData = CommonSectionData & {
    type: 'TimelineSection'
    stations: Station[]
}

export const TimelineSection: FunctionComponent<TimelineSectionData> = ({stations}) => <>
    <section className="container mx-auto">
        <ul className={`grid grid-cols-[1fr_25px_1fr]`}>
            {stations.map((station,i) =>
                /**
                 * row-start-1 row-start-2 row-start-3 row-start-4 row-start-5
                 * @param station
                 * @param i
                 */
                <li className={`col-span-1 odd:col-start-1 even:col-start-3 row-start-${i+1}`} key={station.id}>
                    <StationCard {...station}/>
                </li>
            )}
        </ul>
    </section>
</>

type Station = DataObject & {
    startDate: string,
    endDate?: string,
    title: string,
    content: TranslatedString,
    position: TranslatedString,
    tags?: string[],
}
const StationCard: FunctionComponent<Station> = ({startDate, endDate, position, tags, title, content}) => <>
    <div className="inline-block bg-slate-700 p-5 ">
        <h1 className="text-white text-xl mb-2">{title}</h1>
        <div className="mb-4 text-white bg-slate-800 text-sm py-1 px-2 flex justify-between">
            <span>{position}</span>
            <span>
                <span>{startDate}</span>
                <span>{endDate || 'Present'}</span>
            </span>
        </div>
        <Markdown className="mb-4">{content}</Markdown>
        <ul className="text-white">
            {tags?.map(tag => <li className="inline bg-slate-800 mr-1 py-1 px-2 rounded" key={tag}>{tag}</li>)}
        </ul>
    </div>
</>
