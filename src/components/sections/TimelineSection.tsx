import {FunctionComponent} from "react"
import {CommonSectionData} from "components/sections/Section"
import {DataObject, TranslatedString} from "lib/model"
import {Markdown} from "components/lib/Markdown"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSuitcase} from '@fortawesome/free-solid-svg-icons'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import {Temporal} from "@js-temporal/polyfill"
import {useTranslation} from "next-i18next"

export type TimelineSectionData = CommonSectionData & {
    type: 'TimelineSection'
    stations: Station[]
}

export const TimelineSection: FunctionComponent<TimelineSectionData> = ({stations, headline}) => {
    return <>
        <section className="container mx-auto grid grid-cols-12 mb-32">
            <h1 className="col-span-12 text-3xl text-center mb-8">{headline}</h1>
            <ul className="col-span-12 xl:col-span-10 xl:col-start-2 grid grid-cols-[60px_1fr] md:grid-cols-[1fr_60px_1fr]">
                {stations.map((station, i) =>
                    <li className="contents group" key={station.id}>
                        <div
                            className={`col-span-1 col-start-2 row-start-${i + 1} pb-10 md:group-odd:col-start-1 md:group-even:col-start-3`}>
                            <StationCard {...station}/>
                        </div>
                        <span className={`col-span-1 col-start-1 md:col-start-2 md:col-start-2 row-start-${i + 1}`}>
                        <div
                            className="w-[2.5rem] h-[2.5rem] mx-auto rounded-full bg-accent-light flex justify-center items-center relative top-[1.125rem]">
                            <div className="w-[1.875rem] h-[1.875rem] bg-accent-dark rounded-full"/>
                        </div>
                        <div className="w-[.25rem] mx-auto h-full bg-accent-light"/>
                    </span>
                    </li>
                )}
            </ul>
        </section>
    </>
}

function isDateRange(value: any): value is DateRange {
    return value && typeof value === "object" && "start" in value;
}

function isDate(value: any): value is Date {
    return value.date instanceof Temporal.PlainDate;
}

type DateFormat = {
    date: Temporal.PlainDate,
    format: any
}

type DateRange = {
    start: DateFormat
    end?: DateFormat
}
type Station = DataObject & {
    date?: DateFormat | DateRange,
    title: string,
    content: TranslatedString,
    position?: TranslatedString,
    tags?: string[],
}

const StationCard: FunctionComponent<Station> = ({date, position, tags, title, content}) => {
    const {t, i18n: {language}} = useTranslation('timelinesection')

    return <>
        <div className="flex">
            <div
                className="bg-primary md:group-odd:hidden triangle-left w-[1.25rem] h-[2rem] shrink-0 relative top-[1.25rem] left-[1px]"/>
            <div className="p-5 bg-primary grow">
                <h1 className="text-xl mb-2 pl-2">{title}</h1>
                <div className="mb-4 text-sm py-1 px-2 flex flex-wrap justify-between bg-primary-light">
                    {/*<span><FontAwesomeIcon icon={faSuitcase}/> {position}</span>*/}
                    {(()=>{
                        if (date === undefined) {
                            return <></>;
                        } else if (isDateRange(date)) {
                            return <span><FontAwesomeIcon
                                icon={faCalendar}/> {date.start?.date.toLocaleString(language,date.start?.format)} - {date.end?.date?.toLocaleString(language,date.end?.format) || t('present')}</span>;
                        } else if (isDate(date)) {
                            return <span><FontAwesomeIcon
                                icon={faCalendar}/> {date.date.toLocaleString(language,date.format)}</span>
                        }
                    })()}
                </div>
                <Markdown className="mb-4 pl-2">{content}</Markdown>
                <ul className="text-white flex flex-wrap gap-y-1.5">
                    {tags?.map(tag => <li className="mr-1 py-1 px-2 rounded bg-secondary-dark text-gray-900"
                                          key={tag}>{tag}</li>)}
                </ul>
            </div>
            <div
                className="bg-primary hidden md:block group-even:hidden triangle-right w-[1.25rem] h-[2rem] shrink-0 relative top-[1.25rem] right-[1px]"/>
        </div>
    </>
}
