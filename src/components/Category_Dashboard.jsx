import React from 'react'

export default function Category_Dashboard({notes,dark}) {
  return (
    <div>
     <div
  className={`rounded-2xl p-4 shadow-lg border transition-all mt-2 ${
    dark
      ? "bg-gray-800 border-gray-700"
      : "bg-white border-gray-200"
  }`}
>
  <h3
    className={`text-lg font-bold mb-4 ${
      dark ? "text-white" : "text-gray-800"
    }`}
  >
    📂 Categories
  </h3>

  <div className="space-y-3">

    <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-blue-100 dark:bg-blue-900">
      <span className="font-medium text-blue-700 dark:text-blue-200">
        📚 Study
      </span>
      <span className="text-xl font-bold text-blue-700 dark:text-blue-100">
      {notes.filter(item=>item.category==="study").length}
      </span>
    </div>

    <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-green-100 dark:bg-green-900">
      <span className="font-medium text-green-700 dark:text-green-200">
        💼 Work
      </span>
      <span className="text-xl font-bold text-green-700 dark:text-green-100">
    {notes.filter(item=>item.category==="work").length}
      </span>
    </div>

    <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-pink-100 dark:bg-pink-900">
      <span className="font-medium text-pink-700 dark:text-pink-200">
        🏠 Personal
      </span>
      <span className="text-xl font-bold text-pink-700 dark:text-pink-100">
       {notes.filter(item=>item.category==="personal").length}
      </span>
    </div>

  </div>
</div> 
    </div>
  )
}
