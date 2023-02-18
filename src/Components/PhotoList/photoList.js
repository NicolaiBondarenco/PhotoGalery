import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPhotos } from '../../Store/photosSlice'
import Error from '../Error/error'
import PhotoItem from '../PhotoItem/photoItem'
import './index.scss'

const PhotosList = () => {
  const { allPhotos, error } = useSelector((state) => state.photos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  return (
    <div className="photosList">
      {error === 'error' ? (
        <Error />
      ) : (
        allPhotos.map(({ id, links, alt_description, user }) => (
          <PhotoItem
            key={id}
            id={id}
            img={links}
            desc={alt_description}
            name={user}
          />
        ))
      )}
    </div>
  )
}

export default PhotosList
