import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'

const SettingsPage = () => {
  return (

    <main className='flex'>

        <section className='flex-[80%] p-[20px] font-Josefin'>

        <header className='flex items-center justify-between mb-[20px]'>
            <span className='text-lg text-red-400'>Update Your Account</span>
            <span className='text-red-700 text-base'>Delete Account</span>
        </header>

        <form className='flex flex-col settingForm'>
            <label>Profile Picture</label>
            <div className='flex items-center my-[10px]'>
                <img 
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="profile"
                    className='size-[70px] rounded-xl object-cover'
                />
                <label htmlFor='fileInput'>
                    <i class=" settingIcon fa-solid fa-user"></i>{" "}
                </label>
                <input
                    id='fileInput'
                    type='file'
                    style={{display:'none'}}
                />

            </div>

            <label htmlFor='name'>Username</label>
            <input type='text' placeholder='Enter Name' name='name' />

            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter mail' name='email' />

            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Name' name='password' />

            <button 
                type='submit'
                className='self-center w-[150px] border-0 rounded-lg p-[10px] mt-[10px] flex justify-center items-center cursor-pointer bg-teal-500 text-white transition-all delay-300 hover:bg-[rgb(1,114,114)]'>
                
                <Link to={'/'}>Update</Link>
            </button>
        </form>
    </section>
    
    <Sidebar />
    
</main>
  
  )
}

export default SettingsPage