'use client';

import { useRef, useState } from "react";

function Content() {
    const [e,seteleve]=useState<{ nom : string ; note1 : number ; note2 : number ; moy : number }[]>([])
    const eleve=useRef<HTMLInputElement>(null)
    const note1=useRef<HTMLInputElement>(null)
    const note2=useRef<HTMLInputElement>(null)
    function isAlpha(str: string): boolean {
        return /^[A-Za-z]+$/.test(str);
    }
    const exist=(nom:string,n1:number,n2:number):boolean=>{
        for (let i = 0; i < e.length; i++) {
            if (e[i].nom==nom && e[i].note1==n1 && e[i].note2==n2)
                return true
        }
        return false

    }
    const reset=(index:number)=>{
        const cope=e.slice()
        cope.splice(index,1)
        seteleve(cope)
    }
    const moyeleve=(n1:number,n2:number):number=>{
        return((n1+n2)/2)
    }
    const addEleve=()=>{
        const eleveInput = eleve.current
        const note1Input = note1.current
        const note2Input = note2.current

        if (!eleveInput || !note1Input || !note2Input) {
            return
        }

        if (
            eleveInput.value==="" ||
            eleveInput.value.length<3 ||
            !isAlpha(eleveInput.value)
        ) {
            eleveInput.focus()
            eleveInput.style.background="red"
            return
        }
        eleveInput.style.background="green"
        
        if (
            note1Input.value==="" ||
            Number(note1Input.value)>20 ||
            Number(note1Input.value)<0 
        ) {
            note1Input.focus()
            note1Input.style.background="red"
            return
        }
        
        if (
            note2Input.value==="" ||
            Number(note2Input.value)>20 ||
            Number(note2Input.value)<0 
        ) {
            note2Input.focus()
            note2Input.style.background="red"
            return
        }
        note2Input.style.background="green"
        
        if (exist(eleveInput.value,Number(note1Input.value),Number(note2Input.value))) {
            alert(eleveInput.value+" exist")
            return
        }
        
        const moy=moyeleve(Number(note1Input.value),Number(note2Input.value))
        const eleves = {
            nom: eleveInput.value,
            note1: Number(note1Input.value),
            note2: Number(note2Input.value),
            moy: moy
        }
        seteleve([...e, eleves])
    }
    return(
        <main className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <fieldset className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                    <legend className="text-2xl font-semibold text-gray-800 mb-6 px-2">Gestion Eleve</legend>
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg">
                            <table className="w-full">
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-3"><label className="block text-sm font-medium text-gray-700" htmlFor="name">name</label></td>
                                        <td className="py-3"><input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black" ref={eleve} /></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3"><label className="block text-sm font-medium text-gray-700" htmlFor="note1">note1</label></td>
                                        <td className="py-3"><input type="number" id="note1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black" ref={note1} /></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3"><label className="block text-sm font-medium text-gray-700" htmlFor="note2">note2</label></td>
                                        <td className="py-3"><input type="number" id="note2" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black" ref={note2} /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="py-4">
                                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors" onClick={addEleve}>
                                                Add
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-black">All eleves {e.length}</p>
                        </div>
                        <div className="mt-8 overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-800 bg-white shadow-lg rounded-lg overflow-hidden">
                                <thead className="text-xs uppercase bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3">name</th>
                                        <th className="px-6 py-3">note1</th>
                                        <th className="px-6 py-3">note2</th>
                                        <th className="px-6 py-3">moy</th>
                                        <th className="px-6 py-3">action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        e.map((item,index)=>{
                                            return(
                                                <tr key={index} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4">{item.nom}</td>
                                                    <td className="px-6 py-4">{item.note1}</td>
                                                    <td className="px-6 py-4">{item.note2}</td>
                                                    <td className="px-6 py-4">{item.moy}</td>
                                                    <td className="px-6 py-4">
                                                        <button className="text-red-600 hover:text-red-900 font-medium rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-100 transition-colors" onClick={()=>reset(index)}>
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </fieldset>
            </div>
        </main>
    )
}

export default Content