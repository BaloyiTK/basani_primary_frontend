import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Logo = () => {
  return (
    <div class="flex items-center  justify-center ">
    <div class="flex flex-col items-center ">
      <Link to="/">
        <img
          src="./LOGO3.png"
          alt="Logo"
          class=" text-white bg-transparent h-16 w-auto md:h-[10%] md:w-auto"
        />
      </Link>
      <span class="text-green-600  font-semibold">
        BASANI PRIMARY SCHOOL
      </span>
    </div>
  </div>
  )
}

export default Logo