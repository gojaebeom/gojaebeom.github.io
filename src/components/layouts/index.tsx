import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function LayoutComponent({ children }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div className="flex items-start justify-center w-full h-screen overflow-x-hidden text-white font-noto-l">
        <div className="w-full lg:w-10/12 max-w-[1500px]">
          <header className="flex justify-start items-end py-4 font-jetbrain-l px-2 lg:px-0">
            <figure className="text-2xl lg:mr-6 mr-2 lg:text-3xl font-jetbrain-b">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </figure>
            <nav>
              <ul className="flex justify-start items-center text-sm lg:text-base">
                <li className="mx-2">
                  <Link to="/">blog🎨</Link>
                </li>
                <li className="mx-2">
                  <Link to="/about">about🧁</Link>
                </li>
                <li className="mx-2">
                  <a href="https://github.com/gojaebeom" target="_blank">
                    github🎈
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <br />
          <main>{children}</main>
          <footer className="py-4 lg:py-10 flex justify-between items-end font-jetbrain-l mx-2 lg:mx-0">
            <figure className="text-2xl lg:text-3xl font-jetbrain-b">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </figure>
            <div className="text-xs">@created by gojaebeom</div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}
