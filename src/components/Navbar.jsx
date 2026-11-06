import React from "react";

export default function Navbar({
  toggledark,
  NoteRef,
  dark,
  search,
  searchToggle,
  archiveMode,
  setArchiveMode,
}) {
  return (
    <nav
      className={`sticky top-0 z-50 p-2 sm:p-4 shadow-md ${
        dark ? "bg-gray-700 text-white" : "bg-white text-gray-700"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* Logo + Title */}
        <div className="flex items-center gap-1 sm:gap-2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/025/729/946/original/note-taking-app-icon-in-illustration-vector.jpg"
            alt="logo"
            className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl"
          />

          <h2 className="text-sm sm:text-2xl font-bold whitespace-nowrap">
            Note App
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            onClick={() => {
              const next = !archiveMode;
              setArchiveMode(next);

              setTimeout(() => {
                NoteRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 0);
            }}
            className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-base font-medium text-white ${
              archiveMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {archiveMode === null
              ? "All"
              : archiveMode
                ? "📒 Notes"
                : "📥 Archive"}
          </button>

          <button
            onClick={toggledark}
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${
              dark ? "bg-white text-black" : "bg-gray-600 text-white"
            }`}
          >
            {dark ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Search */}
        <div className="w-full order-3">
          <input
            type="text"
            placeholder="Search a Note..."
            value={search}
            onChange={searchToggle}
            className={`w-full h-10 sm:h-11 px-4 rounded-xl border outline-none shadow-sm transition-all ${
              dark
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500"
                : "bg-gray-50 border-gray-300 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-400"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
