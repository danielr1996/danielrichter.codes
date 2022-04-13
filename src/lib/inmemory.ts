import { v4 as uuid } from 'uuid'
import {PageData} from "pages/[slug]"

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
                stations: [
                    {
                        id: uuid(),
                        startDate: '2022-01-01',
                        title: 'Headtrip GmbH',
                        position: {
                            de: 'Fullstack Entwickler',
                            en: 'Fullstack Developer'
                        },
                        tags: ['Next.js','React','Tailwind CSS'],
                        content: {
                            de: `Seit Anfang 2022 bin ich bei der [Headtrip GmbH](https://headtrip.eu/) als Fullstack Entwickler angestellt und kümmere mich dort um die 
                            Betreuung der Website eines Kunden`,
                            en: `Since 2022 I work at [Headtrip GmbH](https://headtrip.eu/) as a fullstack developer where I'm responsible for the website of our customer`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: '2020-01-01',
                        endDate: '2021-12-31',
                        title: 'TeamBank AG',
                        tags: ['PHP','Wordpress','WebComponents'],
                        position: {
                            de: 'Fullstack Entwickler',
                            en: 'Fullstack Developer'
                        },
                        content: {
                            de: `Von 2020 bis 2022 arbeitete ich bei der [TeamBank AG](https://www.teambank.de/) als Fullstack Entwickler wo ich für ein internes Schulungsportal
                            der Partnerbanken sowie ein Informationsportal für Partnerbankmitarbeiter zustädig war`,
                            en: `Von 2020 bis 2022 arbeitete ich bei der [TeamBank AG](https://www.teambank.de/) als Fullstack Entwickler wo ich für ein internes Schulungsportal
                            der Partnerbanken sowie ein Informationsportal für Partnerbankmitarbeiter zustädig war`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: '2018-01-08',
                        endDate: '2019-12-31',
                        title: 'Bundesagentur für Arbeit',
                        tags: ['Angular','Java','Spring'],
                        position: {
                            de: 'Frontend Entwickler',
                            en: 'Frontend Developer'
                        },
                        content: {
                            de: `Nachdem ich 2018 meine Ausbildung bei der [Bundesagentur für Arbeit](https://www.arbeitsagentur.de/) abgeschlossen hatte, habe ich dort bis 2020 im Projekt gE-Online an
                            der Digitalisierung der Anträge aus dem SGB II Bereich mitgewirkt`,
                            en: `Nachdem ich 2018 meine Ausbildung bei der [Bundesagentur für Arbeit](https://www.arbeitsagentur.de/) abgeschlossen hatte, habe ich dort bis 2020 im Projekt gE-Online an
                            der Digitalisierung der Anträge aus dem SGB II Bereich mitgewirkt`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: '2015-10-01',
                        endDate: '2018-01-18',
                        title: 'Bundesagentur für Arbeit',
                        tags: ['Angular','Java','Spring'],
                        position: {
                            de: 'Azubi',
                            en: 'Trainee'
                        },
                        content: {
                            de: `Von 2015 bis 2018 habe ich meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der [Bundesagentur für Arbeit](https://www.arbeitsagentur.de/) absolviert. 
                            Dabei habe ich in mehreren Abteilungen die Programmierung mit Java und Javascript sowie die Anbindung an Datenbanken mit SQL gelernt`,
                            en: `Von 2015 bis 2018 habe ich meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der [Bundesagentur für Arbeit](https://www.arbeitsagentur.de/) absolviert. 
                            Dabei habe ich in mehreren Abteilungen die Programmierung mit Java und Javascript sowie die Anbindung an Datenbanken mit SQL gelernt`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: '2007-09-01',
                        endDate: '2015-06-1',
                        position: {
                            de: 'Schüler',
                            en: 'Student'
                        },
                        tags: ['HTML','CSS','Javascript'],
                        title: 'Abitur',
                        content: {
                            de: `2015 habe ich mein Abitur am [PPG Hersbruck](https://gymnasium-hersbruck.de/) abgeschlossen`,
                            en: `2015 I took my Abitur (A-level) at the [PPG Hersbruck](https://gymnasium-hersbruck.de/)`
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