import Post from "./Post"
import { useContext } from "react";
import { context } from "../context/Global";

const Posts = () => {
const {blog} = useContext(context);
const descBlog = blog.slice().sort((a,b) => b.time.localeCompare(a.time));


  return (
    <section className="flex-[70%] m-[20px] flex flex-wrap">
      {descBlog.map(imageItem =>
          <Post key={imageItem.id} imageItem = {imageItem} />
      )}
    </section>
  )
}

export default Posts