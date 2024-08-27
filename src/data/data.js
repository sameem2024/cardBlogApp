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
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        time:timeCalculate(2),
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        time:timeCalculate(3),
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        time:timeCalculate(4),
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        time:timeCalculate(5),
    },
]; 

export const musicData = ['../images/music/img1.jpg','../images/music/img2.jpg','../images/music/img3.jpg','../images/music/img4.jpg','../images/music/img5.jpg'];
export const lifeData = ['../images/life/img1.jpg','../images/life/img2.jpg','../images/life/img3.jpg','../images/life/img4.jpg','../images/life/img5.jpg'];
export const techData = ['../images/tech/img1.jpg','../images/tech/img2.jpg','../images/tech/img3.jpg','../images/tech/img4.jpg','../images/tech/img5.jpg'];
export const moviesData = ['../images/movies/img1.jpg','../images/movies/img2.jpg','../images/movies/img3.jpg','../images/movies/img4.jpg','../images/movies/img5.jpg'];
export const sportsData = ['../images/sports/img1.jpg','../images/sports/img2.jpg','../images/sports/img3.jpg','../images/sports/img4.jpg','../images/sports/img5.jpg','../images/sports/img6.jpg'];
export const styleData = ['../images/style/img1.jpg','../images/style/img2.jpg','../images/style/img3.jpg','../images/style/img4.jpg','../images/style/img5.jpg','../images/style/img6.jpg'];

