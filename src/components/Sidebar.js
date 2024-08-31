import profile from '../assets/about.avif'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <section className="flex-[20%] h-fit m-[20px] pb-[30px] bg-[#fdfbfb] font-Josefin rounded-md flex flex-col items-center gap-4 lg:flex-[30%]">

            <div className="flex flex-col gap-3 items-center mt-4">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    className="mt-[15px] w-[90%] h-[250px] object-cover rounded-sm"
                    src={profile}
                    alt=""
                />
                <p className="p-6 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore obcaecati quaerat ad necessitatibus beatae corrupti.
                </p>
            </div>

            <div className="flex flex-col items-center w-full">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="list-none gap-3 grid grid-cols-2 mt-5 ml-4 font-semibold">
                    <li className="text-sm font-semibold cursor-pointer">
                    <Link to = {'/life'}>Life</Link>
                    </li>
                    <li className="text-sm font-semibold cursor-pointer">
                        <Link to = {'/music'}>Music</Link>
                    </li>
                    <li className="text-sm font-semibold cursor-pointer">
                        <Link to = {'/sports'}>Sport</Link>
                    </li>
                    <li className="text-sm font-semibold cursor-pointer">
                        <Link to = {'/style'}>Style</Link>
                    </li>
                    <li className="text-sm font-semibold cursor-pointer">
                    <Link to = {'/tech'}>Tech</Link>
                    </li>
                    <li className="text-sm font-semibold cursor-pointer">
                        <Link to = {'/movies'}>Movies</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col items-center w-full">
                <span className="sidebarTitle">FOLLOW US</span>
                <nav className="flex items-center justify-center mt-5">
                    <i className="topIcon fa-brands fa-square-facebook"></i>
                    <i className="topIcon fa-brands fa-square-instagram"></i>
                    <i className="topIcon fa-brands fa-square-pinterest"></i>
                    <i className="topIcon fa-brands fa-square-x-twitter"></i>
                </nav>
            </div>


        </section>
    )
}

export default Sidebar