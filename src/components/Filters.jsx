import React from "react";

export default function Filters({
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
  dark,
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 mt-6 p-4 rounded-xl shadow-md ${
        dark ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Priority Filter */}
      <select
        value={priorityFilter}
        onChange={setPriorityFilter}
        className={`w-full sm:w-52 px-4 py-3 rounded-lg border outline-none font-medium transition-all ${
          dark
            ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-purple-500"
            : "bg-gray-50 border-gray-300 text-gray-700 focus:ring-2 focus:ring-purple-500"
        }`}
      >
        <option value="all">⭐ All Priority</option>
        <option value="high">🔴 High</option>
        <option value="medium">🟡 Medium</option>
        <option value="low">🟢 Low</option>
      </select>

      {/* Sort Filter */}
      <select
        value={sortBy}
        onChange={setSortBy}
        className={`w-full sm:w-52 px-4 py-3 rounded-lg border outline-none font-medium transition-all ${
          dark
            ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
            : "bg-gray-50 border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500"
        }`}
      >
        <option value="all">📋 Default</option>
        <option value="priority">⚡ Sort By Priority</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
        <option value="date">📅 Sort By Date</option>
      </select>
    </div>
  );
}
