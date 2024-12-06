import React from "react";



const Second = function(){


    return(
     <div className=" 
     w-screen
     h-screen
     flex
       p-16
   
flex-row
     ">
     <div className=" w-[33%]  relative h-screen">
   
    <div className="  flex flex-col     top-10 absolute w-[100%]">
   <p className="font-Game text-3xl my-0 text-white">RELEASE DAY</p>
   <p className="font-Game text-5xl my-0  text-white"> DEC 17, 2023</p>
   <div className=" w-[40%] bg-white text-center rounded-3xl m-0 content-center"> <p className="font-Game  text-2xl  text-black ">MORE VIEW</p></div>
   </div>

     </div>

     <div className="  w-[33%]   h-screen"></div>
     <div className=" w-[33%] relative    h-screen">
   <div className=" absolute flex flex-row  justify-center  bottom-40 w-[100%]">


        <div className=" flex flex-col w-[100%] items-center"> <p className="font-Game text-3xl my-5 text-white">VOICE ACTOR</p>
        <div className= "  px-10 w-[60%] bg-white text-center rounded-3xl m-0 content-cente">
             <p className="font-Game   text-2xl  text-black"> Christ potterion</p>
             </div>
             </div>
     </div>

     </div>
     </div>


    )
}

export default Second
