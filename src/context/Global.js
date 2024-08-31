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


    const addBlog = (e,title,content)=>{
        e.preventDefault();
        const id = blog.length + 1;
        const img = "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
        const time = formatDistanceToNow(new Date(),{includeSeconds:true});
        const newBlog = [...datas,{id,img,title,content,time}];
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


  return (
    <context.Provider value = 
      {{currentUser,addBlog,handleUser,handleLogin,userName,blog,lifeData,musicData,moviesData,sportsData,styleData,techData}}>
        {children}
    </context.Provider> 
  )
}

export default GlobalContext;

