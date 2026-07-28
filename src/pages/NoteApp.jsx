import React, { useEffect, useState,useRef } from 'react'
import Navbar from '../components/Navbar'
import NoteForm from '../components/NoteForm'
import NoteCard from '../components/NoteCard';
import Filters from '../components/Filters';
import Dashboard from '../components/Dashboard';
import Category_Dashboard from '../components/Category_Dashboard';

export default function NoteApp() {
    const InputRef=useRef(null);
    const NoteRef=useRef(null);
   
    const [title,setTitle]=useState("");
    const [discription,setDiscription]=useState("");
    const [search,setSearch]=useState("")
    const [date,setDate]=useState("");
    const [editNotes,setEditNotes]=useState(null);
    const [pinned,setPinned]=useState(false);
    const [archiveMode,setArchiveMode]=useState(false)
    const [category,setCategory]=useState("study");
    const [priority,setPriority]=useState("medium");
    const [priorityFilter,setPriorityFilter]=useState("all");
    const [sortBy,setSortBy]=useState("all")


    const [dark,setDark]=useState(()=>{
        try {
            return JSON.parse(localStorage.getItem("dark"))||false
        } catch  {
            return false;
        }
    })
    useEffect(()=>{
        try {
            localStorage.setItem("dark",JSON.stringify(dark));
        } catch  {
            console.log("Error to save Mode")
        }
    },[dark])

    const [notes,setNotes]=useState(()=>{
        try {
           return JSON.parse(localStorage.getItem("notes")) ||[]
        } catch  {
            return [];
        }
        
    });
    useEffect(()=>{
        try {
           localStorage.setItem("notes",JSON.stringify(notes)) 
        } catch {
          console.log("error to load")  
        }
    },[notes])

    
 

    const EnterKey=(e)=>{
        if(e.key==="Enter"){
            AddUpdate();
        }
    }

    const delbtn=(id)=>{
        try {
           const ok=window.confirm("delete this note?") 
           if(ok){

               setNotes(prev=>prev.filter(item=>item.id!==id));
           }
        } catch  {
            return
        }
    }

const edit=(id)=>{
    const task=notes.find(prev=>prev.id===id)
    if(task){
    setTitle(task.title);
    setDiscription(task.discription);
    setDate(task.date)
    setPinned(task.pinned);
    setCategory(task.category);
    setPriority(task.priority);
    setEditNotes(task.id);
    setTimeout(() => {
        InputRef.current.focus();
    }, 0);
    }
}

    const AddUpdate=()=>{
        if(!title.trim()) {
            alert("Please Enter Title");return
        }
         if(!discription.trim()) {
            alert("Please Enter Discription");return
        }


        if(editNotes!==null){
setNotes(prev=>prev.map(item=>item.id===editNotes?{...item,title:title,
    discription:discription,date: date || item.date,pinned:pinned,category:category,priority:priority
}:item))
setEditNotes(null);
        }
        else{

            setNotes(prev=>[...prev,{id:Date.now(),title:title,discription:discription,date:date||new Date().toISOString().split("T")[0],
                pinned:pinned,category:category ,archive:false,priority:priority
            }])
        }
        setTitle("")
        setDiscription("")
        setDate("")
        setPinned(false)
        setCategory("study")
        setPriority("medium")
       
        
    }
    
    const SortedOrder={
        high:1,medium:2,low:3
    }


    const SortedNotes=[...notes].sort((a,b)=>sortBy==="all"?0:sortBy==="a-z"?a.title.localeCompare(b.title):sortBy==="z-a"?b.title.localeCompare(a.title):sortBy==="priority"?SortedOrder[a.priority]-SortedOrder[b.priority]:new Date(b.date)-new Date(a.date)).filter(prev=>priorityFilter==="all"?true:prev.priority===priorityFilter)
    .filter(prev=>archiveMode===null?true:archiveMode?prev.archive:!prev.archive).filter(prev=>prev.title.toLowerCase().includes(search.toLowerCase())||
prev.discription.toLowerCase().includes(search.toLowerCase()));

const togglepin=(id)=>{

    setNotes(prev=>prev.map(item=>item.id===id?{...item,pinned:!item.pinned}:item)
)}

const toggleArchive=(id)=>{
   const note=notes.find(prev=>prev.id===id);
    const ok=window.confirm(note.archive?"Unarchive this note?" : "Archive this note?")
    if(ok){

        setNotes(prev=>prev.map(item=>item.id===id?{...item,archive:!item.archive}:item))
        alert(notes.archive ? "Note unarchived!" : "Note archived!");
    }
    else{
        return;
    } 

        
}



  return (
  <div className="w-[90%] mx-auto">
        <Navbar 
        dark={dark}
   toggledark={()=>setDark(!dark)
   }
   search={search} searchToggle={(e)=>setSearch(e.target.value)}
    archiveMode={archiveMode} setArchiveMode={setArchiveMode} />
<Dashboard notes={notes}  dark={dark}  setNotes={setNotes} 
archiveMode={archiveMode} setArchiveMode={setArchiveMode} 
setPriorityFilter={setPriorityFilter} setPinned={setPinned} ref={NoteRef}/>
<Category_Dashboard notes={notes} dark={dark} />
       <NoteForm 
       title={title} 
       discription={discription}
setTitle={(e)=>setTitle(e.target.value)}
setDiscription={(e)=>setDiscription(e.target.value)}
setPriority={(e)=>setPriority(e.target.value)}
priority={priority}
setDate={(e)=>setDate(e.target.value)}
handleKey={EnterKey}
AddBtn={AddUpdate}
dark={dark}
ref={InputRef}
editNotes={editNotes}
date={date}
 category={category} 
 setCategory={setCategory}
/>

<Filters priorityFilter={priorityFilter}
 setPriorityFilter={(e)=>setPriorityFilter(e.target.value)}
 sortBy={sortBy} setSortBy={(e)=>setSortBy(e.target.value)}/>

<div ref={NoteRef}>


<NoteCard notes={SortedNotes} dark={dark} editBtn={edit} delBtn={delbtn} 
pinned={pinned} setPinned={togglepin}  setArchive={toggleArchive}  archiveMode={archiveMode} />
</div>
    </div>
  )
}
