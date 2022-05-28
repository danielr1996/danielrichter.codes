import 'styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type {AppProps} from 'next/app'
import {appWithTranslation} from 'next-i18next'
import SuperJSON from 'superjson'
import {Temporal} from "@js-temporal/polyfill"

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

SuperJSON.registerCustom<Temporal.PlainDate, string>(
    {
        isApplicable: (v): v is Temporal.PlainDate => {
            try {
                Temporal.PlainDate.from(v)
                return true
            } catch (e) {
                return false
            }
        },
        serialize: (v: Temporal.PlainDate) => {
            return v.toString()
        },
        deserialize: (v: string) => Temporal.PlainDate.from(v),
    },
    'Temporal.PlainDate'
)

const MyApp = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}
export default appWithTranslation(MyApp)

