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
      <div className="flex items-start justify-center w-full h-screen overflow-x-hidden text-white">
        <div className="w-full lg:w-10/12 max-w-[1500px]">
          <header className="flex justify-start items-end py-4">
            <figure className="mr-6">
              <Link to="/" className="text-3xl font-noto-b">
                {data.site.siteMetadata.title}
              </Link>
            </figure>
            <nav>
              <ul className="flex justify-start items-center">
                <li className="mx-2">
                  <Link to="/">blog</Link>
                </li>
                <li className="mx-2">
                  <Link to="/about">about</Link>
                </li>
              </ul>
            </nav>
          </header>
          <br />
          <main>{children}</main>
          <footer className="py-10">
            <figure>
              <Link to="/" className="text-3xl font-noto-b">
                {data.site.siteMetadata.title}
              </Link>
            </figure>
            <address>const.gjb@gmail.com</address>
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}
