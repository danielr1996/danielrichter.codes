export type locale = 'de' | 'en'

export type TranslatedString = string | {
    [key in locale]: string
}

export type DataObject = {
    id: string
    // name!: string
    // created_at!: string
    // updated_at!: string
    published?: boolean
}

// export type BlogPage = PageData &{
//     category: string
//     tags: string[]
// }

// export type HeroSection = Section &{
//     type: 'HeroSection'
//     slogans: TranslatedString[]
// }
//
//
// export type ColumnSection = Section & {
//     type: 'ColumnSection'
//     columns: Column[]
// }
//
// export type Column = DataObject & {
//     icon: string
//     headline: TranslatedString
//     subheadline: TranslatedString
// }