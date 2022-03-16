import fs from "fs";
import path from "path";

export const loadMarkdown = (name: string,locale: string) => {
    return fs.readFileSync(path.join(process.cwd(),'src','content',`${name}.${locale}.md`),'utf-8')
}