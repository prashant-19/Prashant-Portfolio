import React from "react";
import { FcContacts } from "react-icons/fc";
const intro = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row bg-gray-200 px-44 ">
                <div className=" basis-1/2 my-48 px-10">
                    <p className="text-5xl font-bold text-left">Hey! I'm <span className=" text-5xl text-blue-500">Prashant </span><span className="animate-waving-hand">👋🏻</span> </p>
                    <p className="text-2xl  text-justify py-4">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui reiciendis eos
                        saepe labore dicta reprehenderit odit
                        commodi natus illo.
                    </p>

                    <button className="flex flex-row mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-semibold rounded-2xl 
                    px-8 py-5 dark:bg-gray-800 dark:hover:bg-gray-700
                     dark:focus:ring-gray-700 dark:border-gray-700">

                        <div >
                            <FcContacts className="pr-1 w-6 h-6" />
                        </div>
                        <div className="">
                            Contact Me
                        </div>
                    </button>
                </div>

                <div className=" basis-1/2">

                </div>
            </div>
        </>
    )
}
export default intro;