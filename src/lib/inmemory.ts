import { v4 as uuid } from 'uuid'
import {PageData} from "pages/[...slug]"
import {Temporal} from "@js-temporal/polyfill"

export const pages: PageData[] = [
    {
        id: uuid(),
        slug: ['about'],
        title: {
            de:'Über mich',
            en: 'About me'
        },
        sections: [
            {
                type: 'MarkdownSection',
                id: uuid(),
                content: {
                    de: `# Daniel Richter

Hi 👋, ich bin Daniel, Software Entwickler aus Deutschland spezialisiert auf moderne Frontend Technologien wie React, Next.js & tailwindcss.
Privat beschäftige ich mich aber auch mit Backend Entwicklung in Go und NodeJS oder Deno sowie DevOps Themen wie Kubernetes.

Bei allem was ich tue liegt mir die Qualität und Wartbarkeit des Codes am Herzen, außerdem versuche ich immer am Zahn der Zeit zu bleiben und mich mit den neusten Entwicklungen auseinanderzusetzten.

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
                        startDate: Temporal.PlainDate.from('2022-07-01'),
                        title: 'viind GmbH',
                        position: {
                            de: 'Fullstack Entwickler',
                            en: 'Fullstack Developer'
                        },
                        tags: ['Next.js','React', 'Nest.js'],
                        content: {
                            de: `Seit Mitte 2022 arbeite ich bei der [viind GmbH](https://www.viind.com/) und erstelle Kommunikationslösungen für Behörden und Unternehmen`,
                            en: `Since mid 2022 I work for [viind GmbH](https://www.viind.com/) and create communication solutions for administrations and  enterprises`
                        }
                    },
                    {
                        id: uuid(),
                        startDate: Temporal.PlainDate.from('2022-01-01'),
                        endDate: Temporal.PlainDate.from('2022-06-30'),
                        title: 'Headtrip GmbH',
                        position: {
                            de: 'Fullstack Entwickler',
                            en: 'Fullstack Developer'
                        },
                        tags: ['Next.js','React','Tailwind CSS'],
                        content: {
                            de: `Von Anfang bis Mitte 2022 war ich bei der [Headtrip GmbH](https://headtrip.eu/) als Fullstack Entwickler angestellt und kümmerte mich dort um die 
                            Betreuung der Website eines Kunden`,
                            en: `From the beginning to mid 2022 I worked at [Headtrip GmbH](https://headtrip.eu/) as a fullstack developer where I took care of one of our customers website`
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
        slug: ['imprint'],
        id: uuid(),
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
    {
        id: uuid(),
        slug: ['dev'],
        title: '/dev/',
        sections: [
            {
                type: 'MarkdownSection',
                id: uuid(),
                content: {
                    de: `# /dev/
#### wahllose Codeschnipsel und Artikel über Softwareentwicklung
- [React: Hooks in Unittests mocken](/dev/react-mock-hooks)
`,
                    en: `# /dev/
#### random code snippets and articles about software development
- [React: mock hooks in unit tests](/dev/react-mock-hooks)`,
                }
            },
        ]
    },
    {
        id: uuid(),
        slug: ['dev','react-mock-hooks'],
        title: {
            'en': 'React: mock hooks in unit tests',
            'de': 'React: hook in Unittests mocken',
        },
        sections: [
            {
                type: 'MarkdownSection',
                id: uuid(),
                content: {
                    de:`# React: Hooks in Unittests mocken
> Dieser Artikel wurde noch nicht auf Deutsch übersetzt

Recently I came across the situation where I built a custom hook to check for some keycloak rules that used 
the \` useKeycloak \` hook from the \`@react-keycloak/ssr\` library. As you can imagine, the library
does all sort of stuff with cookies, local storage, etc. to provide the data from the browser session, but I don't know 
or care about implementation details, and neither should you. Unit tests should always isolate as much side effects as
possible and so I set out to write a test which can mock the \`useKeycloak\` hook.

Fortunately jest provides us with the \`spyOn\` function to mock functions (after all to the javascript runtime, hook are only functions),
without the need to modify the hooks to be testable (with one minor exception, more on that later.

So let's create a simple example that demonstrates the principle. We have two hooks, \`useExternal\`, which we want to 
test and \`useInternal\` which is used by \`useExternal\` and can do anything from accessing the browser session to fetching
data from an api, which we want to mock in our tests. For this example though it only returns a number

\`useExternal.ts\`
\`\`\`
export const useInternal = ()=>{
  return -1
}
\`\`\`

\`useInternal.ts\`
\`\`\`
import {useInternal} from "./useInternal";

export const useExternal = ()=>{
  const number = useInternal()
  return number *2
}
\`\`\`

As stated earlier, there is one important detail: the two hooks need to be in two different files, this is due the way 
how \`spyOn\` works. You can use \`jest.spyOn(require('./module'), 'exportedMember')\` to tell jest to replace the 
export \`exportedMember\` from the file \`module.ts\`, but only if that function gets imported somewhere, so keep that in mind. 

The whole test can look something like this:
\`useExternal.spec.ts\`
\`\`\`
import {useExternal} from "./useExternal";

const useInternal = jest.spyOn(require('./useInternal'), 'useInternal')
useInternal.mockReturnValue(2)

test('useExternal', ()=>{
  const actual = useExternal()
  const expected = 4
  expect(actual).toBe(expected)
})
\`\`\`

And after running the test you will see that the mocked value \`2\` got used and the result is indeed \`2*2=4\`

You can also find the code on [github](https://gist.github.com/danielr1996/5478d3eeaa6883c814fee0378c3b6d7c)
`,
                    en: `# React: mock hooks in unit tests
Recently I came across the situation where I built a custom hook to check for some keycloak rules that used 
the \` useKeycloak \` hook from the \`@react-keycloak/ssr\` library. As you can imagine, the library
does all sort of stuff with cookies, local storage, etc. to provide the data from the browser session, but I don't know 
or care about implementation details, and neither should you. Unit tests should always isolate as much side effects as
possible and so I set out to write a test which can mock the \`useKeycloak\` hook.

Fortunately jest provides us with the \`spyOn\` function to mock functions (after all to the javascript runtime, hook are only functions),
without the need to modify the hooks to be testable (with one minor exception, more on that later.

So let's create a simple example that demonstrates the principle. We have two hooks, \`useExternal\`, which we want to 
test and \`useInternal\` which is used by \`useExternal\` and can do anything from accessing the browser session to fetching
data from an api, which we want to mock in our tests. For this example though it only returns a number

\`useExternal.ts\`
\`\`\`
export const useInternal = ()=>{
  return -1
}
\`\`\`

\`useInternal.ts\`
\`\`\`
import {useInternal} from "./useInternal";

export const useExternal = ()=>{
  const number = useInternal()
  return number *2
}
\`\`\`

As stated earlier, there is one important detail: the two hooks need to be in two different files, this is due the way 
how \`spyOn\` works. You can use \`jest.spyOn(require('./module'), 'exportedMember')\` to tell jest to replace the 
export \`exportedMember\` from the file \`module.ts\`, but only if that function gets imported somewhere, so keep that in mind. 

The whole test can look something like this:
\`useExternal.spec.ts\`
\`\`\`
import {useExternal} from "./useExternal";

const useInternal = jest.spyOn(require('./useInternal'), 'useInternal')
useInternal.mockReturnValue(2)

test('useExternal', ()=>{
  const actual = useExternal()
  const expected = 4
  expect(actual).toBe(expected)
})
\`\`\`

And after running the test you will see that the mocked value \`2\` got used and the result is indeed \`2*2=4\`

You can also find the code on [github](https://gist.github.com/danielr1996/5478d3eeaa6883c814fee0378c3b6d7c)
`,
                }
            },
        ]
    },
]
