import React,{forwardRef} from 'react'

 export default function Dashboard({notes,dark, setPriorityFilter,archiveMode,setArchiveMode,setPinnedFilter,ref}){
  return (
   <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">

  {/* Total Notes */}
  <div 
onClick={()=>{
 setPinnedFilter(false);
 setPriorityFilter("all");
 setArchiveMode(null);
ref.current?.scrollIntoView({
   behavior:"smooth",
   block:"start"
})
}}
    className={`cursor-pointer  rounded-2xl p-5 shadow-lg border transition-all ${
      dark
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200"
    }`}
  >
    <div className="text-4xl"   >📝</div>
    <h3  className={`mt-3 text-lg font-semibold ${dark ? "text-white" : "text-gray-800"}`}>
      Total Notes
    </h3>
    
    <p className="mt-2 text-3xl font-bold text-blue-600">

      {notes.length}

    </p>
  </div>

  {/* Archived */}
  <div
  onClick={()=>{
 setPinnedFilter(false);
 setPriorityFilter("all");
 setArchiveMode(true);
 ref.current?.scrollIntoView({
  behavior:"smooth",block:"start"  
 })
}}
    className={`cursor-pointer rounded-2xl p-5 shadow-lg border transition-all ${
      dark
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200"
    }`}
  >
    <div className="text-4xl">📂</div>
    <h3 className={`mt-3 text-lg font-semibold ${dark ? "text-white" : "text-gray-800"}`}>
      Archived
    </h3>
    <p className="mt-2 text-3xl font-bold text-yellow-500">
     {notes.filter(prev=>prev.archive).length} 
    </p>
  </div>

  {/* Pinned */}
  <div onClick={()=>{
 setPinnedFilter(true);
 setPriorityFilter("all");
 setArchiveMode(null);

 ref.current?.scrollIntoView({
  behavior:"smooth",block:"start"  
 })
}}
    className={` cursor-pointer rounded-2xl p-5 shadow-lg border transition-all ${
      dark
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200"
    }`}
  >
    <div className="text-4xl">📌</div>
    <h3 className={`mt-3 text-lg font-semibold ${dark ? "text-white" : "text-gray-800"}`}>
      Pinned
    </h3>
    <p className="mt-2 text-3xl font-bold text-green-600">
    {notes.filter(item=>item.pinned).length}
    </p>
  </div>

  {/* High Priority */}
  <div onClick={()=>{
 setPinnedFilter(false);
 setPriorityFilter("high");
 setArchiveMode(null);
 ref.current?.scrollIntoView({
  behavior:"smooth",block:"start"  
 })
}}

    
    className={` cursor-pointer  rounded-2xl p-5 shadow-lg border transition-all ${
      dark
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200"
    }`}
  >
    <div className="text-4xl">🔴</div>
    <h3 className={`mt-3 text-lg font-semibold ${dark ? "text-white" : "text-gray-800"}`}>
      High Priority
    </h3>
    <p className="mt-2 text-3xl font-bold text-red-600">
   {notes.filter(item=>item.priority==="high").length}
    </p>
  </div>

</div>
  )
}