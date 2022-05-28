import React from "react"
import { graphql } from "gatsby"
import { LayoutComponent } from "../../components"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PostDetailPage({ data }) {
  return (
    <LayoutComponent>
      <div className="flex flex-col lg:flex-row justify-items-start p-2">
        <div className="w-full lg:w-2/3">
          <div>
            <img
              src={`/${data.mdx.frontmatter.cover}`}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-3xl lg:text-4xl font-noto-b mt-4">
            {data.mdx.frontmatter.title}
          </h1>
          <p className="text-xl mt-4">{data.mdx.frontmatter.date}</p>
          <div className="prose-lg text-white rounded-xl mt-10">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </div>
        <div></div>
      </div>
    </LayoutComponent>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        cover
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
