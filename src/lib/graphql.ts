export const test = {}
// import {gql, request} from "graphql-request";
//
// export type Page = {
//     Title: string,
//     content: string,
// }
//
// export const getPage = async (locale: string, slug: string = 'home'): Promise<Page> => {
//     const query = gql`
//     {
// 	    page(filter:{slug: {_eq: "${slug}"}}){
// 		    id
//    	        translations(filter:{languages_code: {code:{_eq: "${locale}"}}}){
//    	            Title
//     	        content
//             }
//         }
//     }`
//     const result: any = await request(`http://127.0.0.1:8055/graphql`, query)
//     return result.page[0].translations[0];
// }
// export const getAvailablePages = async () => {
//     const query = gql`
//     {
//         page{
//             slug
//                 translations{
//                     languages_code{
//                         code
//                     }
//                 }
//             }
//     }`
//     const result: any = await request(`http://127.0.0.1:8055/graphql`, query)
//     return result.page.flatMap(({translations, slug}:any) => translations.map((translation: any) => ({
//         params: {slug},
//         locale: translation.languages_code.code
//     })))
// }