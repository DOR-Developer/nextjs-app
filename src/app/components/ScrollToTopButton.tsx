"use client";

export default function ScrollToTopButton({...props}) {
  return (
    <button onClick={props.onClick} className="block m-auto border-solid border-2 border-emerald-500 text-emerald-600 px-3 py-2 rounded hover:bg-emerald-500 hover:text-white">Go to Top</button>
  )
}
