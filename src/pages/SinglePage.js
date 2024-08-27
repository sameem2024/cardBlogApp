import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost'

const SinglePage = () => {
  return (
    <div className='flex'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}

export default SinglePage