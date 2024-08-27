import { Link } from "react-router-dom";

const Post = ({imageItem}) => {

  const {id,img} = imageItem;
  
  return (
    <div className='w-[385px] mx-[25px] flex flex-col font-Josefin mt-[5%] pb-4 border-b border-[#dfcfcf]'>
        <img className='w-full h-[280px] object-cover rounded-md' src={img} alt=" "/>
        <div className='flex flex-col items-center gap-2 '>
            <div className='font-normal mt-[15px] text-sm text-[#be9656] leading-5 mr-[10px] cursor-pointer'>
                <span className="mr-4">
                    <Link to={'/music'}>Music</Link>
                </span>
                <span>
                  <Link to={'/life'}>Life</Link>
                </span>
            </div>
            <span className='text-md font-bold  cursor-pointer'>
                  <Link to={`/post/${id}`}>{imageItem.title ? imageItem.title : 'Lorem ipsum dolor sit amet'}</Link>
            </span>
            <hr />
            <span className='font-Raleway italic text-sm font-bold text-[#6f6c6c]'>{imageItem.time ? imageItem.time : 'nil'}</span>
        </div>

        <p className='font-medium mt-[10px] text-md leading-6 text-[#444444] overflow-hidden overflow-ellipsis'>
          {imageItem.content ? imageItem.content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus at ea facere perferendis itaque, delectus repellat laudantium velit dolores?'}
        </p>
    </div>
  )           
}

export default Post