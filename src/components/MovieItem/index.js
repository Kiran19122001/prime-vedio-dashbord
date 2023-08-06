import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {items} = props
  console.log(props)
  const {thumbnailUrl, videoUrl} = items
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="cross" className="thumbNail" />}
        className="pop-up-cont"
      >
        {close => (
          <div className="modal-container">
            <button type="button" className="close-btn" onClick={() => close()}>
              <IoMdClose size={20} />
            </button>
            <div className="react-player">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
