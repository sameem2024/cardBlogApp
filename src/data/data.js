import { formatDistance,sub } from "date-fns";


const timeCalculate = (min)=>{
    const date1 = sub(new Date(),{minutes:min})
    return formatDistance(new Date(),date1,{includeSeconds:true});
  }
export const datas = [

    {
        id: 1,
        img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        time:timeCalculate(1),
        author:''
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        time:timeCalculate(2),
        author:''
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        time:timeCalculate(3),
        author:''
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        time:timeCalculate(4),
        author:''
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        time:timeCalculate(5),
        author:''
    },
]; 


