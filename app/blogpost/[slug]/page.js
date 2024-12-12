import matter from "gray-matter";
import fs from "fs";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import {unified} from 'unified'

export default async function Page({ params }) {
  /*   const blog = {
  title: "Getting Started with Next.js",
  author: "John Doe",
  date: "December 1, 2023",
  description: "Learn the basics of Next.js and how to build modern web applications with this powerful React framework.",
  content: `
    <h2>Introduction to Next.js</h2>
    <p>Next.js is a powerful React framework that enables you to build fast, SEO-friendly web applications with features like server-side rendering and static site generation.</p>
    <h3>Key Features</h3>
    <ul>
      <li>Server-side rendering</li>
      <li>Static site generation</li>
      <li>API routes</li>
      <li>File-based routing</li>
    </ul>
    <p>This framework makes it easy to create full-stack React applications that are optimized for production.</p>
  `
}; */

const {slug} = await params
  const filepath = `content/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return 
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor =  unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument)
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypePrettyCode , {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),]
  })
  
  const htmlContent = (await processor.process(content)).toString()

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <p className="text-sm">By {data.author}</p>
        <p className="text-sm">{data.date}</p>
      </div>
      <p className=" text-base border-l-4 border-gray-500 pl-2 mb-8">
        &quot;{data.description}&quot;
      </p>
      <div
        className="prose dark:prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      ></div>
    </div>
  );
}
