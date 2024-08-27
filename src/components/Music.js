import { useState } from "react";

const Music = ({category,data}) => {
  
const [currentIndex,setCurrentIndex] = useState(0);

const handlePrevious =(index)=>{
  const isFirst = index === 0;
  setCurrentIndex(isFirst ? data.length-1 : index-1)
}

const handleNext =(index)=>{
  const isLast = index === data.length-1;
  setCurrentIndex(isLast ? 0 : index+1);
}

  return (
    <div className= "h-[calc(100vh-50px)] font-Josefin bg-login bg-cover" >
       

       <article className="size-full pt-[50px]">
       <h1 className="text-center p-4 text-4xl italic text-[#be9656]">{category}</h1>
        <div className="w-[600px] h-[400px] mx-auto relative">
            
            <img src={data[currentIndex]}  className="w-[100%] h-[100%] rounded-md object-cover z-10 shadow-xl" alt=" " />
          
            <span className="text-4xl text-[#d29f4d] border-white absolute top-[50%] left-[-30px] cursor-pointer" onClick={()=>handlePrevious(currentIndex)}> 
              ❮ 
            </span>
            <span className="text-4xl text-[#d29f4d] absolute top-[50%] right-[-30px] cursor-pointer" onClick={()=>handleNext(currentIndex)}> 
              ❯  
            </span>
        </div>
        <div className="flex mt-4 gap-3 justify-center">
            {data.map((_,index)=> 
                <button key ={index} className={index === currentIndex ? 'text-[#d29f4d]' : 'text-white'} onClick={()=>setCurrentIndex(index)}> ● </button>
            )}
        </div>
       </article>
    </div>
  )
}

export default Music

