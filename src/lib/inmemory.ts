import {v4 as uuid} from 'uuid'
import {PageData} from "pages/[...slug]"
import {Temporal} from "@js-temporal/polyfill"


export const pages: PageData[] = [
    {
        id: uuid(),
        slug: ['about'],
        title: {
            de: 'Über mich',
            en: 'About me'
        },
        sections: [
            {
                type: 'TimelineSection',
                id: uuid(),
                // headline: {
                //     de: 'Mein Werdegang',
                //     en: 'My Career'
                // },
                stations: [
                    {
                        id: uuid(),
                        title: 'OpenFahrplan',
                        date: {date: Temporal.PlainDate.from("2025-10-15"), format: {month: 'short', year: 'numeric'}},
                        tags: ["ÖPNV", "Python", "Pandas","GTFS"],
                        content: {
                            de: `Um mich mit den Technologien hinter Fahrgastinformationssystemen vertraut zu machen, 
                            habe ich [OpenFahrplan](https://github.com/danielr1996/openfahrplan) entwickelt - eine 
                            Webanwendung, um aus einem GTFS-Datensatz Haltestellen und Linienverläufe darzustellen und 
                            Verbindungen zu suchen.`,
                            en: `To get familiar with the technologies behind passenger information systems, I developed 
                            [OpenFahrplan](https://github.com/danielr1996/openfahrplan) - a web application that visualizes
                             stops and routes from a GTFS dataset and allows users to search for connections.`
                        }
                    },
                    {
                        id: uuid(),
                        title: 'Freifunk Südstadtfest',
                        date: {date: Temporal.PlainDate.from("2025-06-05"), format: {month: 'short', year: 'numeric'}},
                        tags: ["WiFi", "Networking"],
                        content: {
                            de: `Im Rahmen meiner Initiative bei [Freifunk Franken](https://wiki.freifunk-franken.de) habe ich dabei geholfen das
                            [Südstadtfest Nürnberg mit WLAN zu versorgen.](https://wiki.freifunk-franken.de/w/Standorte/Nuernberg/S%C3%BCdstadtfestival)`,
                            en: `As part of my involvement with [Freifunk Franken](https://wiki.freifunk-franken.de),
                             I helped provide Wi-Fi coverage for the [Südstadtfest Nürnberg](https://wiki.freifunk-franken.de/w/Standorte/Nuernberg/S%C3%BCdstadtfestival)`
                        }
                    },
                    {
                        id: uuid(),
                        title: 'Nat64',
                        date: {date: Temporal.PlainDate.from("2025-05-26"), format: {month: 'short', year: 'numeric'}},
                        tags: ["NAT64", "Networking","DNS","IPv4","IPv6"],
                        content: {
                            de: `Um mein Heimnetz auf IPv6-only umzustellen, habe ich ein eigenes [öffentliches NAT64 Gateway](https://nat64.danielrichter.codes/) eingerichtet`,
                            en: `To transition my home network to IPv6 only I setup my own [public NAT64 Gateway](https://nat64.danielrichter.codes/)`,
                        }
                    },
                    {
                        id: uuid(),
                        title: 'Minecraft',
                        date: {start:{date: Temporal.PlainDate.from("2020-01-01"), format: {year: 'numeric'}}},
                        tags: ["Java", "Kubernetes"],
                        content: {
                            de: `Zusammen mit meinen Freunden spiele ich unser eigenes Minecraft Modpack 
                            [Ingenium: Create & Beyond](https://github.com/block-buddies/ingenium-create-and-beyond) und 
                            hoste dafür unseren Server mit [Kubernetes](https://github.com/itzg/docker-minecraft-server).
                            `,
                            en: `Together with my friends, I play our custom Minecraft modpack [Ingenium: Create & Beyond](https://github.com/block-buddies/ingenium-create-and-beyond) 
                            and host our servers using [Kubernetes](https://github.com/itzg/docker-minecraft-server).`
                        }
                    },
                    {
                        id: uuid(),
                        title: 'arbeitszeit',
                        date: {date: Temporal.PlainDate.from("2022-05-22"), format: {month: 'short', year: 'numeric'}},
                        tags: ["NextJS"],
                        content: {
                            de: `Während meiner Beschäftigung bei einem Startup habe ich [arbeitszeit](https://github.com/danielr1996/arbeitszeit) entwicklet, ein kleines Tool
                            um die tägliche Arbeitszeit in Form einer ablaufenden Uhr darzustellen.`,
                            en: `During my time at a startup, I developed [arbeitszeit](https://github.com/danielr1996/arbeitszeit) - a small tool that visualizes daily working time as a countdown clock.`,
                        }
                    },
                    {
                        id: uuid(),
                        title: 'Finsight',
                        date: {
                            start: {date: Temporal.PlainDate.from("2018-01-01"), format: {year: 'numeric'}},
                            end: {date: Temporal.PlainDate.from("2024-01-01"), format: {year: 'numeric'}},
                        },
                        tags: ["HBCI", "Java"],
                        content: {
                            de: `Um mich besser mit meinen Finanzen auseinandersetzen zu können und mehr über Finanz-IT zu erfahren habe ich [Finsight](https://github.com/danielr1996/finsight) entwickelt, eine Java Anwendung um Kontoauszüge über HBCI abzurufen und daraus Statistiken zu erstellen.`,
                            en: `To better understand my finances and learn more about financial IT, I built [Finsight](https://github.com/danielr1996/finsight) - a Java application that retrieves bank statements via HBCI and generates statistics from them.`,
                        }
                    },
                    {
                        id: uuid(),
                        title: 'Ehrenamt',
                        date: {
                            start: {date: Temporal.PlainDate.from("2012-01-01"), format: {year: 'numeric'}},
                            end: {date: Temporal.PlainDate.from("2014-01-01"), format: {year: 'numeric'}},
                        },
                        content: {
                            de: `Während meiner Schulzeit betreute ich im Rahmen der Nachbarschaftshilfe ehrenamtlich einmal 
                             im Monat Senioren im Umgang mit PCs.`,
                            en: `During my school years, I volunteered once a month as part of a neighborhood assistance program, helping seniors use their PCs.`
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

E-Mail: me@danielrichter.codes  
Website:  www.danielrichter.codes`,
                    en: `# Imprint

## Provider:  

Daniel Richter  
Rothenburger Straße 253  
90439 Nürnberg  

## Contact:

E-Mail: me@danielrichter.codes  
Website:  www.danielrichter.codes`,
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
        slug: ['dev', 'react-mock-hooks'],
        title: {
            'en': 'React: mock hooks in unit tests',
            'de': 'React: hook in Unittests mocken',
        },
        sections: [
            {
                type: 'MarkdownSection',
                id: uuid(),
                content: {
                    de: `# React: Hooks in Unittests mocken
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
