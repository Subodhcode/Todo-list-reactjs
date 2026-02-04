import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
export default function TodoList() {

    let [list, setList] = useState([])
    let addToDo = (e) => {
        e.preventDefault()
        let userTxt = (e.target.userText.value)
        if (userTxt == '') {
            return toast.error("Please fill the value")
        }

        if (list.includes(userTxt)) {
            return toast.error("ALready Exist")
        }

        setList([...list, userTxt])
        e.target.reset()
        toast("New Item added")


    }

    let deleteTodo = (currentIndex) => {
        //Filter
        if (confirm("are u sure")) {
            // let filterData = list.filter((v, i) => i != currentIndex)//Array
            // setList(filterData)

            let oldData=[...list]
            oldData.splice(currentIndex,1)
            setList(oldData)
        }

    }
    return (
        <div>
            <ToastContainer />
            <div className="min-h-screen bg-gray-500 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                        📝 My Todo List
                    </h1>

                    {/* Input Section */}
                    <form onSubmit={addToDo} className="flex gap-2 mb-5">
                        <input
                            type="text"
                            placeholder="Add a new task..."
                            name='userText'
                            className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                            Add
                        </button>
                    </form>

                    {/* Todo Items */}
                    <ul className="space-y-3">
                        {
                            list.length >= 1 ?
                                list.map((value, index) => {
                                    return (

                                        <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-2">
                                                <input type="checkbox" className="w-4 h-4" />
                                                <span className="text-gray-700">{value}</span>
                                            </div>
                                            <button onClick={() => deleteTodo(index)} className="text-red-500 hover:text-red-600 cursor-pointer">✕</button>
                                        </li>

                                    )
                                })

                                :

                                <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" className="w-4 h-4" />
                                        <span className="text-gray-700">No Not found</span>
                                    </div>
                                </li>


                        }
                        {/* 
                        <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <span className="text-gray-700">Learn React Hooks</span>
                            </div>
                            <button className="text-red-500 hover:text-red-600">✕</button>
                        </li> */}

                    </ul>

                </div>
            </div>
        </div>
    )
}
