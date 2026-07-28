
import React,{forwardRef, useRef} from "react";

const NoteCard=forwardRef(function NoteCard({ notes, dark ,delBtn,editBtn,setPinned,setArchive,archiveMode},ref) {

    const archived=notes.filter(prev=>prev.archive===false)

  return (
   <div className="w-full mt-8">
<div className="w-full mt-8">
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">

    {notes.length===0&& (archiveMode?<p className="col-span-full text-center mt-1 mb-6">
  <span className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-red from-yellow-100 to-orange-100 text-orange-700 font-semibold shadow-md dark:from-gray-800 dark:to-gray-700 dark:text-yellow-300 dark:shadow-gray-900">
    📂 Your archive is empty.
    <br />
    <span className="text-sm font-normal text-gray-600 dark:text-gray-300">
      📥 Archive a note to keep it here.
    </span>
  </span>
</p>:(
        
  <div
    className={`min-h-[300px] flex flex-col items-center justify-center rounded-3xl mt-8 p-8 text-center shadow-xl border transition-all duration-300 ${
      dark
        ? "bg-gray-800 border-gray-700 text-white"
        : "bg-gradient-to-br from-blue-50 to-white border-gray-200 text-gray-700"
    }`}
  >
    
    {/* Icon */}
    <div
      className={`w-20 h-20 flex items-center justify-center rounded-full text-4xl mb-5 shadow-lg ${
        dark
          ? "bg-gray-700"
          : "bg-blue-100"
      }`}
    >
      📝
    </div>
   

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
      No Notes Found
    </h2>

    {/* Description */}
    <p
      className={`mt-3 text-sm sm:text-base ${
        dark ? "text-gray-400" : "text-gray-500"
      }`}
    >
      Your notes will appear here.
      <br />
      Create your first note and stay organized 🚀
    </p>

    {/* Button */}
    <button
      className="mt-6 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105"
      onClick={()=>ref.current.focus()}
    >
      + Create Note
    </button>
  </div>
))}

    {notes.map(item => (


      <li
        key={item.id}
        className={`flex flex-col justify-between p-5 rounded-xl shadow-lg border transition-all duration-300 hover:shadow-xl ${
          dark
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-700"
        }`}
      >


        <div>
            
<button
  onClick={()=>setPinned(item.id)}
  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
    item.pinned
      ? dark
        ? "bg-yellow-700 text-yellow-100 hover:bg-yellow-600"
        : "bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
      : dark
        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
  }`}
>
  {item.pinned ? "📌 Pinned" : "📍 Pin"}
</button>

         <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
  📝 {item.title}
</h3>

         <p className="text-sm leading-6 flex items-start gap-2">
  💬 <span>{item.discription}</span>
</p>


<p
  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border
  ${
    item.category === "study"
      ? dark
        ? "bg-red-900/40 text-red-300 border-red-700"
        : "bg-red-100 text-red-700 border-red-300"
      : item.category === "work"
      ? dark
        ? "bg-amber-900/40 text-amber-300 border-amber-700"
        : "bg-amber-100 text-amber-700 border-amber-300"
      : dark
      ? "bg-blue-900/40 text-blue-300 border-blue-700"
      : "bg-blue-100 text-blue-700 border-blue-300"
  }`}
>
  {item.category === "study"
    ? "📚 Study"
    : item.category === "work"
    ? "💼 Work"
    : "🏠 Personal"}
</p>

<p
  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ml-2  ${
    item.priority === "high"
      ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
      : item.priority === "medium"
      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
      : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
  }`}
>
  {item.priority === "high"
    ? "🔴 High"
    : item.priority === "medium"
    ? "🟡 Medium"
    : "🟢 Low"}
</p>
<div
  className={`mt-4 text-sm flex items-center gap-2 ${
    dark
      ? "text-blue-300"
      : "text-blue-600"
  }`}
>
  📅 {item.date}
</div>
        </div>
        <div className="flex justify-end gap-3 mt-6">



<button
  onClick={() => setArchive(item.id)}
  className={`
    px-2 py-2 rounded-lg font-medium transition-all duration-300
    ${item.archive 
      ? "bg-green-500 hover:bg-green-600 text-white" 
      : "bg-blue-500 hover:bg-blue-600 text-white"
    }
    dark:text-white
  `}
>
  {item.archive ? "📤 Unarchive" : "📥 Archive"}
</button>
          <button
            onClick={() => editBtn(item.id)}
            className="px-4 py-2 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition-all duration-300"
          >
            ✏️ Edit
          </button>

 

          <button
            onClick={() => delBtn(item.id)}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300"
          >
            🗑 Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
    </div>
  );
})
export default NoteCard;
 