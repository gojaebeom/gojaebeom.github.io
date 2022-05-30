import React from "react"
import { isBrowser } from "../../utils/isBrower"

export default function TopScrollerComponent() {
  const onClickTopScroller = () => {
    if (isBrowser) window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div
      className="fixed right-4 lg:right-10 bottom-4 lg:bottom-10 bg-white text-blue-500 w-[50px] h-[50px] rounded-full flex justify-center items-center shadow-xl cursor-pointer"
      onClick={onClickTopScroller}
    >
      <i className="fa-duotone fa-rocket-launch text-2xl"></i>
    </div>
  )
}
