import React from "react";



const Second = function(){


    return(
     <div className=" 
     w-screen
   
     flex
       p-16
       h-[100%]
     
flex-row
     ">
    <div className="   
    w-[33%] relative">
  <div className="flex flex-col justify-end absolute w-[100%] h-full">
    <p className="font-Game text-3xl my-0 text-white">RELEASE DAY</p>
    <p className="font-Game text-5xl my-0 text-white">DEC 17, 2023</p>
    <div className="w-60 bg-white text-center rounded-3xl content-center">
      <p className="font-Game text-2xl py-1 text-black">MORE VIEW</p>
    </div>
  </div>
</div>


     <div className="  w-[33%]  "></div>
     <div className=" w-[33%] relative  ">
   <div className="  flex flex-row  justify-center  bottom-40 w-[100%]">


        <div className=" flex flex-col w-[100%] items-center"> <p className="font-Game text-3xl my-5 text-white">VOICE ACTOR</p>
        <div className= "  px-20 bg-red-600 text-center rounded-3xl m-0 content-cente">
             <p className="font-Game  py-1 text-2xl  text-white"> Christ potterion</p>
             </div>
             </div>
     </div>

     </div>
     </div>


    )
}

export default Second
