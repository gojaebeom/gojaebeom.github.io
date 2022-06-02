import React, { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { LayoutComponent, SeoComponent } from "../../components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { isBrowser } from "../../utils/isBrower"
import { CardComponent } from "../../components/card"

export default function PostDetailPage({ data }) {
  const [contentIsLoaded, setContentIsLoaded] = useState(false)
  useEffect(() => {
    if (isBrowser) {
      import("../../utils/images").then(({ imgProcess }) => {
        imgProcess()
        setContentIsLoaded(true)
      })
    }
  }, [])

  return (
    <LayoutComponent>
      <SeoComponent title={data.mdx.frontmatter.title} />
      {!contentIsLoaded && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 font-jetbrain-b">
          ..loading
        </div>
      )}
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
          <p className="text-sm mt-4">
            <i className="mr-1 fa-light fa-timer"></i>
            {data.mdx.frontmatter.date}
          </p>
          <div className="prose-lg text-white rounded-xl mt-10">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </div>
        <div className="lg:ml-4 w-full lg:w-1/3">
          <h3 className="font-founder-b px-2 text-xl">Other Posts</h3>
          <div className="w-full masonry-layout">
            {data.allMdx.nodes.map(node => {
              return (
                <CardComponent
                  type="other"
                  key={node.id}
                  url={`/blog/${node.frontmatter.slug}`}
                  thumbnail={node.frontmatter.thumbnail}
                  date={node.frontmatter.date}
                  slug={node.frontmatter.slug}
                  title={node.frontmatter.title}
                  excerpt={node.frontmatter.excerpt}
                  category={node.frontmatter.category}
                />
              )
            })}
          </div>
        </div>
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
    allMdx(limit: 10, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          slug
          title
          date(formatString: "MMMM D, YYYY")
          excerpt
          thumbnail
          category
        }
      }
    }
  }
`
