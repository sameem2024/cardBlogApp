import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'



const HomePage = () => {
  

  return (
    <div>
        <Header />
        <main className='flex'>
        <Posts />
        <Sidebar />
      </main>
    </div>
  )
}

export default HomePage