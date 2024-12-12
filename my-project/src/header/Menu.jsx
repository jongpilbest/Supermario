import React from "react"
import menuimage from '../assets/mario2.svg'


const MenuBar = function(){

    return(
        <div className="absolute flex    w-[100%]  ">
          <div className=" w-full p-16 flex items-center justify-between " >
       <img src={menuimage} ></img>

  <svg class="w-5 h-5 fill-[#ffffff]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
  



</svg>
    </div>

        </div>
    )
}
export default MenuBar