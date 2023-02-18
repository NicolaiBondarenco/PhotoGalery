import './App.scss'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import PhotosList from './Components/PhotoList/photoList'
import FullPhoto from './Components/FullPhoto/fullPhoto.js'

function App() {
  const { allPhotos } = useSelector((state) => state.photos)
  const location = useLocation()
  const idPhoto = location.pathname.split('/')
  const filterArr = allPhotos.filter((el) => el.id === idPhoto[2])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PhotosList />} />
        <Route path="/fullPhoto/:id" element={<FullPhoto data={filterArr} />} />
      </Routes>
    </div>
  )
}

export default App
