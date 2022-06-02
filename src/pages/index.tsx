import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { LayoutComponent, SeoComponent } from "../components"
import { CardComponent } from "../components/card"
import { useFilter } from "../hooks"
import { isBrowser } from "../utils/isBrower"

export default function HomePage({ data }) {
  const { drawFilterJsx } = useFilter()
  const [contentIsLoaded, setContentIsLoaded] = useState(false)

  let filter = ""
  if (isBrowser) {
    const queryString = window.location.href.split("?category=")[1]
    if (queryString !== undefined) {
      console.debug(queryString)
      filter = queryString
    }
  }
  useEffect(() => {
    if (isBrowser) {
      import("../utils/images").then(({ imgProcess }) => {
        imgProcess()
        setContentIsLoaded(true)
      })
    }
  }, [])

  return (
    <LayoutComponent>
      <SeoComponent title="blog" />
      {!contentIsLoaded && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 font-jetbrain-b">
          ..loading
        </div>
      )}
      <div className="w-full masonry-layout">
        {data.allMdx.nodes.map(node => {
          return drawFilterJsx(
            [""],
            "",
            <CardComponent
              type="main"
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
    </LayoutComponent>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
