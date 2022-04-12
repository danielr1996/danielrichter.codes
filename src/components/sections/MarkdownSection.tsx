import {FunctionComponent} from "react"
import {TranslatedString} from "lib/model"
import {CommonSectionData} from "components/sections/Section"
import {Markdown} from "components/Markdown"


export type MarkdownSectionData = CommonSectionData & {
    type: 'MarkdownSection'
    content: TranslatedString
}

export const MarkdownSection: FunctionComponent<MarkdownSectionData> = ({content}) => {

    return <section>
        <div className="prose dark:prose-invert mx-auto">
        <Markdown>{content}</Markdown>
        </div>
    </section>
}