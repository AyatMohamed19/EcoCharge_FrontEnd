import Carousel from 'react-bootstrap/Carousel';
const Silder = () => {
    return (
        <Carousel >
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/Images/5.jpeg"
              alt="First slide"
              style={{width:"80%",height:"500px",opacity: "0.8"}}
            />
            <Carousel.Caption>
              <h3 className='text-white w-75 m-auto'>Electic stations in Egypt</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/Images/4.jpeg"
              alt="Second slide"
              style={{width:"80%",height:"500px",opacity: "0.8"}}
            />
            <Carousel.Caption>
            <h3 className='text-white w-75 m-auto'>there are more than 70 Electric Station in Egypt</h3>       
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="/Images/7.jpg"
              alt="Third slide"
              style={{width:"80%",height:"500px",opacity: "0.8"}}
            />
            <Carousel.Caption>
            <h3 className='text-white w-75 m-auto'>Egypt is establishing an electric vehicle charging stations company worth almost 150 million EGP</h3>       
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
};

export default Silder;