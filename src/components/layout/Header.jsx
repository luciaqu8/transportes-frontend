import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
  return (
  <div className='imagenes-header'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./images/home/img01.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="./images/home/img02.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/home/img03.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Header