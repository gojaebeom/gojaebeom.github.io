import React from "react"
import { Link } from "gatsby"
import { Card } from "../../types"

export function CardComponent({
  type,
  url,
  thumbnail,
  date,
  slug,
  title,
  excerpt,
  category,
}: Card) {
  const mainUi = "w-1/2 md:w-[33%] lg:w-[25%] xl:w-[20%]"
  const otherUi = "w-1/2 md:w-1/3 lg:w-full xl:w-1/2 p-2"
  return (
    <article
      className={`${type === "main" ? mainUi : otherUi} p-2 masonry-item mb-4 `}
    >
      <Link
        to={url}
        className="relative flex justify-center items-center w-full overflow-hidden rounded-xl group"
      >
        <img
          src={`/${thumbnail}`}
          loading="lazy"
          className="group-hover:scale-125 duration-700"
        />
        <div className="absolute left-0 top-0 w-full h-full group-hover:bg-black/50 duration-200"></div>
        <div className="absolute left-0 top-0 w-full h-full hidden group-hover:flex justify-center items-center font-jetbrain-b duration-500">
          view blog
        </div>
      </Link>

      <div className="p-2">
        <div className="text-sm lg:text-md">
          <i className="mr-1 fa-light fa-timer"></i>
          <span className="font-noto-l">{date}</span>
        </div>
        <Link to={`/blog/${slug}`} className="text-lg lg:text-xl font-noto-b2">
          {title}
        </Link>
        <div className="text-xs lg:text-sm">{excerpt}</div>
        <div className="flex flex-wrap justify-start">
          <Link
            to={`/?category=${category}`}
            className="flex items-center justify-center text-xs font-jetbrain-l font-semibold text-blue-500"
          >
            <i className="fa-light fa-hashtag mr-0.5"></i>
            <span>{category}</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
