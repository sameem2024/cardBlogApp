import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { context } from "../context/Global";

const Navbar = () => {

  const { handleUser, currentUser } = useContext(context);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const arr = ["music", "tech", "sports", "style", "movies", "life"];


  useEffect(() => {

    setFiltered(arr.filter(item => item.startsWith(search)));

  }, [search])

  const handleSearch = (selected) => {
    setFiltered([]);
    setSearch(selected);
    navigate(`/${selected}`);
    setSearch('');

  }




  return (
    <nav className='w-full h-[50px] sticky top-0 flex gap-3 ml-4 items-center justify-between z-100 font-Josefin'>
      <div className='flex-4 flex items-center justify-center '>

        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
      </div>
      <ul className='flex-6 flex justify-center'>
        <li className='hover:text-gray-300'>
          <Link to={'/'}>HOME</Link>
        </li>
        <li className='hover:text-gray-300'>
          ABOUT
        </li>
        <li className='hover:text-gray-300'>CONTACT</li>
        <li className='hover:text-gray-300'>
          <Link to={'/write'}>WRITE</Link>
        </li>
        {currentUser && <li className='hover:text-gray-300' onClick={handleUser}>
          <Link to={'/login'}>LOGOUT</Link>
        </li>}
      </ul>
      <div className='flex-4 flex items-center justify-center mr-4'>
        {currentUser ? (
          <Link to={'/settings'}>
            <img
              src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt='profile'
              className='w-[40px] h-[40px] rounded-full object-cover mr-[15px] cursor-pointer'
            />
          </Link>
        ) : (
          <ul className='flex justify-center list-none'>
            <li className='hover:text-gray-300'>
              <Link to={'/login'}>Login</Link>
            </li>
            <li className='hover:text-gray-300'>
              <Link to={'/register'}>Register</Link>
            </li>
          </ul>
        )
        }
        <div className="flex items-center cursor-pointer py-0 mr-2 searchContent relative">

          <i className={search ? 'hidden' : "fas fa-search text-lg p-2"}></i>
          <input type="search"
            className='border-none outline-none w-[80px] p-2 bg-transparent text-[#c29958] placeholder:text-[#c29958]'
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filtered.length > 0 && search.length > 0 &&

            <div className='absolute bottom-[-80px] right-0 w-[100px] h-[70px] overflow-y-scroll mr-1 border border-gray-50 text-[#be9656] p-2'>
              {filtered.map((item, i) =>
                <p key={i} onClick={() => handleSearch(item)}>
                  {item}
                </p>
              )}
            </div>}
          {filtered.length === 0 && search.length > 0 &&
            <div className='absolute bottom-[-50px] right-0 size-auto whitespace-nowrap p-2 mr-3 font-light text-gray-600'>
              <p>no results</p>
            </div>
          }


        </div>






      </div>
    </nav>
  )
}

export default Navbar