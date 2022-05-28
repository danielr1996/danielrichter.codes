import {FunctionComponent} from "react"
import {Section, SectionData} from "components/sections/Section"
import Head from "next/head"
import Layout from "components/layout/Layout"
import {CommonPageData} from "components/pages/Page"

export type SectionPageData = CommonPageData & {
    type: 'SectionPage'
    sections: SectionData[]
}

export const SectionPage: FunctionComponent<SectionPageData> = ({sections, title})=>{
    const publishedSections = sections.filter(section => section.published || section.published === undefined)
    return <>
        <Layout>
            <Head>
                <title key="title">Daniel Richter -  {title}</title>
            </Head>
            <div className="mt-10">
                {publishedSections.map(section => <Section key={section.id} {...section} />)}
            </div>
        </Layout>
    </>
}


