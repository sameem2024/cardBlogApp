import { useContext } from "react";
import { context } from "../context/Global";

const Write = () => {
    const {addBlog,setTitle,setContent,title,content} = useContext(context);

   
  return (
    <div className='w-full h-[100vh] mt-[15%] font-Josefin'>
        <div className="w-[80%] mx-auto h-[250px]">
        <img 
            className='w-full h-[250px] rounded-lg object-cover'
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="write post"
        />
        </div>
        
       
       <form> 
            <div className='flex items-center gap-3 justify-center'>
                <label htmlFor='fileInput'> 
                    <i className="writeIcon fa-solid fa-plus"></i>  
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} />
                <input
                    className='text-lg border-0 p-[20px] my-[20px] w-[60vw] placeholder:text-[rgb(189,185,185)] placeholder:text-start placeholder:font-medium focus:outline-1'
                    placeholder='Title'
                    type='text'
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                    autoFocus = {true}
                />
                <button 
                    className='border-0 text-lg  bg-teal-500 p-[10px] cursor-pointer rounded-md text-white'
                    type='submit' onClick={(e)=>addBlog(e,title,content)}>
                        Publish
                </button>
            </div>

            <div className='flex items-center ml-[100px]'>
                <textarea
                    className='w-[60vw] text-lg border-0 p-[20px] placeholder:text-[rgb(189,185,185)] placeholder:font-medium focus:outline-1'
                    placeholder='Tell your story...'
                    type='text'
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
            </div>

            
        </form>
    </div>
  )
}

export default Write