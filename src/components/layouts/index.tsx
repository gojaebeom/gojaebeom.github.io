import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Helmet from "react-helmet"

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
      <Helmet defer={false}>
        <script
          src="https://kit.fontawesome.com/e5541f9036.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className="flex items-start justify-center w-full h-screen overflow-x-hidden text-white font-noto-l">
        <div className="w-full lg:w-10/12 max-w-[1500px]">
          <header className="flex items-end justify-start px-2 py-4 font-jetbrain-l lg:px-0">
            <figure className="mr-2 text-2xl lg:mr-6 lg:text-3xl font-jetbrain-b">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </figure>
            <nav>
              <ul className="flex items-center justify-start text-sm lg:text-base">
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
          <footer className="flex items-end justify-between py-4 mx-2 lg:py-10 font-jetbrain-l lg:mx-0">
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
