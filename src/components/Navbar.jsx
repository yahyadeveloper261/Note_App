import React from "react";

export default function Navbar({ toggledark, dark,search,searchToggle ,archiveMode,setArchiveMode}) {
  return (
    <nav
      className={`flex justify-between sticky top-0 z-50 items-center p-4 py-2 shadow-md ${
        dark ? "bg-gray-700 text-white" : "bg-white text-gray-700"
      }`}
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/025/729/946/original/note-taking-app-icon-in-illustration-vector.jpg"
        alt="logo"
        width={35}
        className="rounded-2xl"
      />

     <h2 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
  Note App
</h2>

   <input
  type="text"
  placeholder="Search a Note...."
  value={search}
  onChange={searchToggle}
  className={`w-full sm:w-64 px-4 py-2 rounded-xl border outline-none transition-all duration-300 shadow-sm ${
    dark
      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500"
      : "bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-400"
  }`}
/>

<button
  onClick={() => setArchiveMode(!archiveMode)}
  className={`
    px-4 py-2 rounded-lg font-medium transition-all duration-300 text-white
    ${
      archiveMode
        ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
        : "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
    }
  `}
>
  {archiveMode===null?"ALl":archiveMode? "📒 Notes" : "📥 Archive"}
</button>
      <button
        onClick={toggledark}
        className={`px-3 py-1 rounded-full transition-all duration-300 ${
          dark
            ? "bg-white text-black"
            : "bg-gray-600 text-white"
        }`}
      >
        {dark ? "🌞light" : "🌙dark"}
      </button>
    </nav>
  );
}