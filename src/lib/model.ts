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