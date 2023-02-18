import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const PhotoItem = (props) => {
  const { id, img, desc, name } = props

  return (
    <div className="photoItem">
      <div className="photoItem__inner">
        <Link to={`/fullPhoto/${id}`}>
          <img className="photoItem__inner-img" src={img.download} alt={desc} />
        </Link>
      </div>
      <p className="photoItem__nameUser">
        <span>Name:</span> {name.first_name}
      </p>
      <p className="photoItem__desc">
        <span>Description:</span> {desc}
      </p>
    </div>
  )
}

export default PhotoItem
