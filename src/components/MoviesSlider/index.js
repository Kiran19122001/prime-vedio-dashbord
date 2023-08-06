import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {data} = props

  return (
    <>
      <Slider {...settings}>
        {data.map(each => (
          <MovieItem items={each} key={each.categotyId} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
