import {useParams} from 'react-router-dom'
import { useContext } from 'react';
import { context } from '../context/Global';

const SinglePost = () => {
    const {userName,blog} = useContext(context);
    const {id} = useParams();
    const {img,title,time} = blog.find(dataItem => dataItem.id === Number(id));
    
  return (
    <section className='flex-9 font-Josefin'>
        <article className='p-[20px] pr-0'>
            <img 
                className='w-[100%] h-[300px] rounded-sm object-cover'
                src={img}
                alt="single blog"
            />
            <h1 className='text-center m-[10px] text-3xl'>{title ? title : 'Lorem ipsum dolor'}
            <div className='float-right text-sm'>
                <i className="singleIcon fa-solid fa-pen-to-square"></i>
                <i className="singleIcon fa-solid fa-trash"></i> 
            </div>
            </h1>

            <div className='flex justify-between text-base text-[#be9656] font-Josefin mb-[20px]'>
                <span className='ml-[5px] font-bold'>Author :
                    <span>{userName ? userName : 'unknown'}</span>
                </span>
                <span>{time ? time : 'nil'}</span>

            </div>
            <p className='text-[#666] text-lg first:first-letter:ml-[20px] first:first-letter:text-xl first:first-letter:font-semibold'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sint pariatur numquam nesciunt eveniet quasi quos distinctio placeat quam? Facere, voluptatibus, illo nostrum officia odio commodi placeat delectus ab quaerat repellat libero aperiam, reprehenderit vel nam labore asperiores dolore. Exercitationem perspiciatis quam provident, aut nisi expedita accusantium numquam sapiente nam, placeat non odio optio libero nobis culpa officia natus consequuntur necessitatibus voluptatum laboriosam rerum dolorum. Dolorem, molestias quos quia totam hic nobis eum impedit quas voluptas. Voluptas consequatur accusantium quibusdam praesentium sapiente, vel dignissimos ipsa ab vero inventore! Quibusdam amet eligendi sapiente fuga eaque architecto deserunt maiores quia asperiores porro!
            
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad enim fugiat deleniti praesentium ut voluptates excepturi placeat ea accusantium, temporibus quod, cupiditate quibusdam quas eaque. Expedita praesentium sint reiciendis, cumque delectus voluptates facere molestiae. Excepturi consequatur nobis reprehenderit labore ipsa, id architecto dolorum asperiores sint possimus, quod repudiandae. Laborum.
            </p>
        </article>
    </section> 
  )
}

export default SinglePost;