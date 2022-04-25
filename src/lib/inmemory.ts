import { v4 as uuid } from 'uuid'
import {PageData} from "pages/[slug]"
import {Temporal} from "@js-temporal/polyfill"

export const pages: PageData[] = [
    {
        id: uuid(),
        slug: 'home',
        title: 'Home',
        sections: [
            {
                type: 'MarkdownSection',
                id: uuid(),
                content: {
                    de: `# Daniel Richter

Hi 👋, ich bin Daniel, Software Entwickler aus Deutschland spezialisiert auf moderne Frontend Technologien wie React, Next.js & tailwindcss.
Privat beschäftige ich mich aber auch mit Backend Entwicklung in Go und NodeJS oder Deno sowie DevOps Themen wie Kubernetes.

Bei allem was ich tue liegt mir die Qualität und Wartbarkeit des Codes Herzen, außerdem versuche ich immer am Zahn der Zeit zu bleiben und mich mit den neusten Entwicklungen auseinanderzusetzten.

In meiner Freizeit spiele ich gerne Volleyball, fahre Fahrrad oder gehe Wandern. Wenn das Wetter mal nicht so gut ist experimentiere ich mit meinem 3D Drucker und Mikrocontrollern.`,
                    en: `# Daniel Richter

Hi 👋, I'm Daniel, a software developer from germany specialized on modern frontend technologies like React, Next.js & tailwindcss.
Personally I also do a lot of backend development with Go & NodeJS or Deno as well as DevOps topics like Kubernetes

While doing this I always watch out for code qualitiy and maintainability, furthermore I try to keep up to date with the newest developments in the IT industry.

In my spare time I like to play Volleyball, ride the bike or go hiking. When the weather is too bad I like to experiment with my 3D printer and microcontrollers.`,
                }
            },
            {
                type: 'TimelineSection',
                id: uuid(),
                headline: {
                    de: 'Mein Werdegang',
                    en: 'My Career'
                },
                stations: [
                    {
                        id: uuid(),
                        startDate: Temporal.PlainDate.from('2022-01-01'),
                        title: 'Headtrip GmbH',
                        position: {
                            de: 'Fullstack Entwickler',
                            en: 'Fullstack Developer'
                        },
                        tags: ['Next.js','React','Tailwind CSS'],
                        content: {
                            de: `Seit Anfang 2022 bin ich bei der [Headtrip GmbH](https://headtrip.eu/) als Fullstack Entwickler angestellt und kümmere mich dort um die 
                            Betreuung der Website eines Kunden`,
                            en: `Since 2022 I work at [Headtrip GmbH](https://headtrip.eu/) as a fullstack developer where I take care of one of our customers website`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: Temporal.PlainDate.from('2020-01-01'),
                        endDate: Temporal.PlainDate.from('2021-12-31'),
                        title: 'TeamBank AG',
                        tags: ['PHP','Wordpress','WebComponents'],
                        position: {
                            de: 'Fullstack Entwickler',
                            en: 'Fullstack Developer'
                        },
                        content: {
                            de: `Von 2020 bis 2022 arbeitete ich bei der [TeamBank AG](https://www.teambank.de/) als Fullstack Entwickler und Application Manager wo ich für ein internes Schulungsportal
                            der Partnerbanken sowie ein Informationsportal für Partnerbankmitarbeiter zustädig war`,
                            en: `From 2020 to 2022 I worked at [TeamBank AG](https://www.teambank.de/) as a Fullstack Developer and Application Manager where I was responsible for an internal learning management system as well as an informational website for employees of associated banks`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: Temporal.PlainDate.from('2018-01-08'),
                        endDate: Temporal.PlainDate.from('2019-12-31'),
                        title: 'Bundesagentur für Arbeit',
                        tags: ['Angular','Java','Spring'],
                        position: {
                            de: 'Frontend Entwickler',
                            en: 'Frontend Developer'
                        },
                        content: {
                            de: `Nachdem ich 2018 meine Ausbildung bei der [Bundesagentur für Arbeit](https://www.arbeitsagentur.de/) abgeschlossen hatte, habe ich dort bis 2020 im Projekt "gE-Online" an
                            der Digitalisierung der Anträge aus dem SGB II Bereich mitgewirkt`,
                            en: `After finishing my education at [Bundesagentur für Arbeit](https://www.arbeitsagentur.de/) in 2018 I was involved in the project "gE-Online" where we digitalized forms used in filing for unemployment benefits`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: Temporal.PlainDate.from('2015-10-01'),
                        endDate: Temporal.PlainDate.from('2018-01-18'),
                        title: 'Bundesagentur für Arbeit',
                        tags: ['Angular','Java','Spring'],
                        position: {
                            de: 'Azubi',
                            en: 'Trainee'
                        },
                        content: {
                            de: `Von 2015 bis 2018 habe ich meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der [Bundesagentur für Arbeit](https://www.arbeitsagentur.de/) absolviert. 
                            Dabei habe ich in mehreren Abteilungen die Programmierung mit Java und Javascript sowie die Anbindung an Datenbanken mit SQL gelernt`,
                            en: `From 2015 to 2018 I got my education as "Fachinformatiker für Anwendungsentwicklung" (IT specialist for application development) at the [Bundesagentur für Arbeit](https://www.arbeitsagentur.de/) where I learned programming with Java and Javascript as well as connecting applications to databases using SQL`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: Temporal.PlainDate.from('2007-09-01'),
                        endDate: Temporal.PlainDate.from('2015-06-01'),
                        position: {
                            de: 'Schüler',
                            en: 'Student'
                        },
                        tags: ['HTML','CSS','Javascript'],
                        title: 'Paul-Pfinzing Gymnasium',
                        content: {
                            de: `2015 habe ich mein Abitur am [PPG Hersbruck](https://gymnasium-hersbruck.de/) abgeschlossen`,
                            en: `In 2015 I finished my "Abitur" (A-level) at the [PPG Hersbruck](https://gymnasium-hersbruck.de/)`
                        }
                    },
                ]
            },
        ]
    },
    {
        id: uuid(),
        slug: 'imprint',
        title: {
            'en': 'Imprint',
            'de': 'Impressum',
        },
        sections: [
            {
                type: 'MarkdownSection',
                id: uuid(),
                content: {
                    de: `# Impressum

## Anbieter:  

Daniel Richter  
Rothenburger Straße 253  
90439 Nürnberg  

## Kontakt:  

E-Mail: danielrichter@posteo.de  
Webseite: danielr1996.de  `,
                    en: `# Imprint

## Provider:  

Daniel Richter  
Rothenburger Straße 253  
90439 Nürnberg  

## Contact:

E-Mail: danielrichter@posteo.de  
Website: danielr1996.de  `,
                }
            }
        ]
    },
]