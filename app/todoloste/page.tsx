'use client';
import { useRef, useState } from "react"

function Todoliste(){
    const [list, setList] = useState<{ msg: string; complite: boolean }[]>([])
    const text=useRef<HTMLInputElement>(null)
    const add=()=>{
        if (text.current) {
            if (text.current.value!=="") {
                const msg= text.current.value
                const item= { msg , complite:false}
                setList([...list , item ])
                text.current.value=""
                text.current.style.borderColor="black"
                
            }else
            text.current.style.borderColor="red"
        }

    }
    const done=(index: number)=>{
        const copiItem=list.slice()
        copiItem[index].complite=!copiItem[index].complite
        setList(copiItem)
        
    }
    const resetitem=(index:number)=>{
        const copiItem=list.slice()
        copiItem.splice(index,1)
        setList(copiItem)
    }
    return(
        <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <fieldset className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                <legend className="text-2xl font-bold text-gray-800 mb-4">To Do List</legend>
                <ul className="space-y-2 mb-4 text-black cursor-pointer">
                    {list.map((item,index)=>{
                        return(<div className="justify-between flex"><li className={item.complite ? "line-through" : ""} key={index} onClick={()=>done(index)}>{item.msg}</li>
                        <span className="px-2 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-xl" onClick={()=>resetitem(index)}>X</span>
                        </div>)
                    })}
                </ul>
                <div className="flex gap-2">
                    <input 
                        type="text"  
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Add new task..."
                        ref={text}
                    />
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={add}
                    >
                        Add
                    </button>
                </div>
            </fieldset>
        </main>
    )
}
export default Todoliste