import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import {FunctionComponent} from "react";

export const Markdown: FunctionComponent<{className?: string}> = ({children, className}) =>{
    // @ts-ignore
    return <ReactMarkdown className={`prose max-w-none prose-invert ${className}`} remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
}