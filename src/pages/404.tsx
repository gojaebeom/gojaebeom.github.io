import { Link } from "gatsby"
import React from "react"

export default function NotFoundPage() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full ">
      <div>
        <p className="text-2xl lg:text-5xl font-founder-b">Not Found 404</p>
        <Link to="/" className="text-base lg:text-lg font-jetbrain-l">
          back to the main page (❁´◡`❁)
        </Link>
      </div>
    </div>
  )
}
