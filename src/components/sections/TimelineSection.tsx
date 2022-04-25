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

export const TimelineSection: FunctionComponent<TimelineSectionData> = ({stations}) => {
    return <>
        <section className="container mx-auto grid grid-cols-12 mb-32 ">
            <ul className="col-span-12 xl:col-span-10 xl:col-start-2 grid grid-cols-[100px_1fr] md:grid-cols-[1fr_100px_1fr]">
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

type Station = DataObject & {
    startDate: any,
    endDate?: Temporal.PlainDate,
    title: string,
    content: TranslatedString,
    position: TranslatedString,
    tags?: string[],
}

const StationCard: FunctionComponent<Station> = ({startDate, endDate, position, tags, title, content}) => {
    const {t, i18n: {language}} = useTranslation('timelinesection')

    return <>
        <div className="flex">
            <div
                className="bg-primary md:group-odd:hidden triangle-left w-[1.25rem] h-[2rem] shrink-0 relative top-[1.25rem] left-[1px]"/>
            <div className="p-5 bg-primary grow">
                <h1 className="text-xl mb-2 pl-2">{title}</h1>
                <div className="mb-4 text-sm py-1 px-2 flex justify-between bg-primary-light">
                    <span><FontAwesomeIcon icon={faSuitcase}/> {position}</span>
                    <span><FontAwesomeIcon icon={faCalendar}/> {startDate.toLocaleString(language)} - {endDate?.toLocaleString(language) || t('present')}</span>
                </div>
                <Markdown className="mb-4 pl-2">{content}</Markdown>
                <ul className="text-white">
                    {tags?.map(tag => <li className="inline mr-1 py-1 px-2 rounded bg-secondary-dark text-gray-900"
                                          key={tag}>{tag}</li>)}
                </ul>
            </div>
            <div
                className="bg-primary hidden md:block group-even:hidden triangle-right w-[1.25rem] h-[2rem] shrink-0 relative top-[1.25rem] right-[1px]"/>
        </div>
    </>
}
