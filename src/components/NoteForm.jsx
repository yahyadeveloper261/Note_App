import React, { forwardRef } from "react";
const NoteForm = forwardRef(
  (
    {
      title,
      setTitle,
      discription,
      setDiscription,
      handleKey,
      AddBtn,
      dark,
      editNotes,
      date,
      setDate,
      category,
      setCategory,
      priority,
      setPriority,
    },
    ref,
  ) => {
    const SaveTitleWords = 30;
    const SaveDisWords = 300;

    const CurrentTitleWords = title ? title.length : "0";
    const CurrentDisWords = discription ? discription.length : "0";

    return (
      <div
        className={`w-full mt-6 p-8 rounded-xl shadow-lg ${
          dark ? "bg-gray-800 text-white" : "bg-white text-gray-700"
        }`}
      >
        {" "}
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          {editNotes !== null ? "Update Your Note" : "Create a New Note"}
        </h2>
        <p
          className={`text-sm mb-6 ${dark ? "text-gray-400" : "text-gray-500"}`}
        >
          Organize your thoughts and keep track of important things.
        </p>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            maxLength={30}
            value={title}
            onChange={setTitle}
            className={`w-full px-5 py-3 rounded-lg border outline-none transition ${
              dark
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500"
                : "bg-gray-50 border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500"
            }`}
          />

          <div
            className={
              dark
                ? "text-right text-sm mt-1 text-white"
                : "text-right text-sm mt-1 text-gray-600"
            }
          >
            {CurrentTitleWords}/{SaveTitleWords}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Write Note..."
            maxLength={300}
            value={discription}
            onChange={setDiscription}
            onKeyDown={handleKey}
            rows={3}
            ref={ref}
            className={`w-full px-5 py-4 rounded-lg border outline-none resize-none transition ${
              dark
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500"
                : "bg-gray-50 border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500"
            }`}
          />
          <div
            className={
              dark
                ? "text-right text-sm mt-1 text-white"
                : "text-right text-sm mb-2 text-gray-600"
            }
          >
            {CurrentDisWords}/{SaveDisWords}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <input
              type="date"
              value={date}
              onChange={setDate}
              className={`w-full px-5 py-3 rounded-lg border outline-none transition ${
                dark
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-700"
              }`}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full px-5 py-3 rounded-lg border outline-none transition ${
                dark
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-700"
              }`}
            >
              <option value="study">📚 Study</option>
              <option value="work">💼 Work</option>
              <option value="personal">🏠 Personal</option>
            </select>
          </div>

          <select
            value={priority}
            onChange={setPriority}
            className={`w-full px-5 py-3 rounded-lg border outline-none transition mt-5 ${
              dark
                ? "bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-purple-500"
                : "bg-gray-50 border-gray-300 text-gray-700 focus:ring-2 focus:ring-purple-500"
            }`}
          >
            <option value="medium">🟡 Medium</option>
            <option value="high">🔴 High</option>
            <option value="low">🟢 Low</option>
          </select>
        </div>
        <button
          onClick={AddBtn}
          className={
            editNotes !== null
              ? "w-full py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all duration-300"
              : "w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
          }
        >
          {editNotes === null ? "Add" : "Update"}
        </button>
      </div>
    );
  },
);
export default NoteForm;
