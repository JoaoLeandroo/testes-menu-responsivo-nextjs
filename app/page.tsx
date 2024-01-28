"use client"
import { IoList, IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(true)

  function activeMenu() {
    if(active === true) {
      setActive(false)
      return
    }

    setActive(true)
  }

  return (
    <main className="bg-red-300 h-screen">
      <div className="max-w-[1920px] mx-auto bg-red-500 h-screen">
        <div className="w-full h-16 bg-slate-700 flex items-center px-3">
          {
            active === true ?
            <IoList onClick={activeMenu} size={30} color="white" className="cursor-pointer hover:opacity-75 transition duration-300"/>
            :
            <div className="w-[300px] h-screen bg-slate-500 absolute top-0 left-0">
              <IoClose onClick={activeMenu} size={30} color="white" className="cursor-pointer hover:opacity-75 transition duration-300 absolute top-[10px] left-[10px]"/>
            </div>
          }
        </div>
      </div>
    </main>
  );
}
