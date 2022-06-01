import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { LayoutComponent, SeoComponent } from "../components"
import { isBrowser } from "../utils/isBrower"

export default function HomePage({ data }) {
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
          return (
            <article
              className="w-1/2 md:w-[33%] lg:w-[25%] xl:w-[20%] p-2 masonry-item mb-4"
              key={node.id}
            >
              <Link
                to={`/blog/${node.frontmatter.slug}`}
                className="flex justify-center items-center w-full overflow-hidden rounded-xl"
              >
                <img src={node.frontmatter.thumbnail} loading="lazy" />
              </Link>
              <div className="p-2">
                <div className="text-sm lg:text-md">
                  <i className="mr-1 fa-light fa-timer"></i>
                  <span className="font-noto-l">{node.frontmatter.date}</span>
                </div>
                <Link
                  to={`/blog/${node.frontmatter.slug}`}
                  className="text-lg lg:text-xl font-noto-b2"
                >
                  {node.frontmatter.title}
                </Link>
                <div className="text-xs lg:text-sm">
                  {node.frontmatter.excerpt}
                </div>
                <div className="flex flex-wrap justify-start">
                  <Link
                    to={`/?category=${node.frontmatter.category}`}
                    className="flex items-center justify-center text-xs font-jetbrain-l font-semibold text-blue-500"
                  >
                    <i className="fa-light fa-hashtag mr-0.5"></i>
                    <span>{node.frontmatter.category}</span>
                  </Link>
                </div>
              </div>
            </article>
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
