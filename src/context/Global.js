import { createContext,useState } from "react"
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { datas } from "../data/data";
import {lifeData,musicData,moviesData,sportsData,styleData,techData} from '../assets/ImageList';
export const context = createContext(null);

const GlobalContext = ({children}) => {


    /* Global States */
    const [currentUser,setCurrentUser] = useState(false);
    const [blog,setBlog] = useState(datas);
    const [userName,setUsername] = useState('');
    const navigate = useNavigate();
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const addBlog = (e,title,content)=>{
        e.preventDefault();
        const id = blog.length + 1;
        const img = "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
        const time = formatDistanceToNow(new Date(),{includeSeconds:true});
        const newBlog = [...datas,{id,img,title,content,time,author:userName}];
        setBlog(newBlog);
        navigate("/");
      }
    

    const handleLogin = (e,user,pass)=>{
        e.preventDefault();
        setUsername(user);
        const isValid = Boolean(user) && Boolean(pass);
        setCurrentUser(isValid);
        if(currentUser) navigate('/write');
      }
      
    
    const handleUser = ()=>{
        setCurrentUser(currentUser => !currentUser);
        } 

    const handleDeleteBlog = (currentBlogId) =>{
      setBlog(blog => blog.filter(dataItem => dataItem.id !== currentBlogId))
    }

    const handleEditBlog =(currentBlogId)=>{
      const {title,content} = blog.find(dataItem => dataItem.id === currentBlogId)
      navigate('/write');
      setTitle(title);
      setContent(content);
     
    }

  return (
    <context.Provider value = 
      {{currentUser,addBlog,blog,title,setTitle,content,setContent,
        handleUser,handleLogin,userName,handleDeleteBlog,handleEditBlog,
        lifeData,musicData,moviesData,sportsData,styleData,techData}}>
        {children}
    </context.Provider> 
  )
}

export default GlobalContext;

