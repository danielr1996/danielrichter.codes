import fs from "fs";
import path from "path";
import yaml from 'js-yaml'

export const loadMarkdown = (name: string,locale: string) => {
    const yml:any = yaml.load(fs.readFileSync(path.join(process.cwd(),'src','content',`${name}.yaml`),'utf-8'))
    return {
        title: yml[locale].title,
        content: fs.readFileSync(path.join(process.cwd(),'src','content',yml[locale].markdown),'utf-8')
    };
}