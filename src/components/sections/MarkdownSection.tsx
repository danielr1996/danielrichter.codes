import {FunctionComponent} from "react"
import {TranslatedString} from "lib/model"
import {CommonSectionData} from "components/sections/Section"
import {Markdown} from "components/lib/Markdown"


export type MarkdownSectionData = CommonSectionData & {
    type: 'MarkdownSection'
    content: TranslatedString
}

export const MarkdownSection: FunctionComponent<MarkdownSectionData> = ({content}) => <>
    <section className="container mx-auto flex justify-center grid grid-cols-12 mb-32">
        <Markdown className="col-span-12 mx-3 text-center sm:text-left sm:mx-0 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3">{content}</Markdown>
    </section>
</>
