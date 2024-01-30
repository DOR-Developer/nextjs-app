"use client";

export default function ScrollToTopButton({...props}) {
  return (
    <button onClick={props.onClick} className="block m-auto border-solid border-2 border-emerald-500 p-3 rounded hover:bg-emerald-500 hover:text-white">Go to Top</button>
  )
}
