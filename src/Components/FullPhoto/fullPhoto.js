import { Link } from 'react-router-dom'
import './fullPhoto.scss'

const FullPhoto = ({ data }) => {
  const { links } = data[0]
  return (
    <div className="fullPhoto">
      <div className="fullPhoto__back">
        <Link to="/">
          <button className="fullPhoto__back-btn">Back</button>
        </Link>
      </div>
      <div className="fullPhoto__inner">
        <img
          className="fullPhoto__inner-img"
          src={links.download}
          alt="FullPhoto"
        />
      </div>
    </div>
  )
}

export default FullPhoto
