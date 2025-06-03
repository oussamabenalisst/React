'use client';
import { useRef, useState } from 'react'

function Calcule(){
    const [note,setnote]=useState(0)
    const note1=useRef<HTMLInputElement>(null);
    const note2=useRef<HTMLInputElement>(null);
    const reset=()=>{
        if (note1.current && note2.current ) {
            if(note1.current.value!=="" )
                note1.current.value=""
            if (note2.current.value!=="")
                note2.current.value=""
            setnote(0)
        }
    }
    const AffichNote=()=>{
        if (note1.current && note2.current ) {
            if (note1.current.value==="") {
                note1.current.focus()
                return
            }
            if (note2.current.value==="") {
                note2.current.focus()
                return
            }
            if (0>parseInt(note2.current.value) ||parseInt(note2.current.value)>20  )  {
              note2.current.focus()
              note2.current.style.borderColor="red"
              return  
            }
            note2.current.style.borderColor="green"
            if (0>parseInt(note1.current.value)|| parseInt(note1.current.value)>20 ) {
              note1.current.focus()
              note1.current.style.borderColor="red" 
              return 
            }
            note1.current.style.borderColor="green" 
            setnote((parseInt(note2.current.value)+parseInt(note1.current.value))/2)
        }
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
                <fieldset className="p-6 rounded-lg bg-white shadow-md w-80">
                    <legend className="text-xl font-semibold text-gray-800 px-2">Moyenne</legend>
                    <div className="space-y-4">
                        <input 
                            type="number" 
                            ref={note1} 
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            placeholder="Note 1"
                        />
                        <input 
                            type="number" 
                            ref={note2}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            placeholder="Note 2"
                        />
                        <button 
                            onClick={AffichNote}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Calculer
                        </button>
                        <input type="reset" value="reset" onClick={reset} className='w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors' />
                        <p className="text-center text-xl font-bold text-gray-700">
                            {note}
                        </p>
                    </div>
                </fieldset>
            
        </div>
    )
}

export default Calcule