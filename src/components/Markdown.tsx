
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

export const Markdown = ({children}:any) =>{
    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
}