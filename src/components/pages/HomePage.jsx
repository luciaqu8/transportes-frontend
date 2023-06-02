import React from 'react'
import '../styles/pages/HomePage.css'
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Col }from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
  return (
    <>
      <div className="homepage">

        <Col className='container-homepage'>

          
        <h1>Encuentra los mejores transportes para alquilar</h1>
        <h3>¡y al mejor precio!</h3>

          <div className='cartas'>

            <Row>

              <Col>
                <div className='carta1 mb-5'>
                  <Card style={{ width: '18rem', height:'15rem' }}>
                    <Card.Body>
                      <Card.Title>Camiones</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Transporte por tierra</Card.Subtitle>
                      <Card.Text>
                        Quisque non diam auctor, dictum lectus id, finibus velit. Morbi suscipit elit ac erat varius luctus.
                      </Card.Text>
                      <Card.Link href="/">Ver más</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div className='carta2 mb-5'>
                  <Card style={{ width: '18rem', height:'15rem' }}>
                    <Card.Body>
                      <Card.Title>Barcos</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Transporte marino</Card.Subtitle>
                      <Card.Text>
                        Pellentesque pretium lobortis lacus, id luctus sapien dignissim in. Etiam ut lacus id libero sodales rutrum quis ut purus. 
                      </Card.Text>
                      <Card.Link href="/">Ver más</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div className='carta3 mb-5'>
                  <Card style={{ width: '18rem', height:'15rem' }}>
                    <Card.Body>
                      <Card.Title>Aviones</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Transporte aéreo</Card.Subtitle>
                      <Card.Text>
                      Praesent tempor libero in arcu dignissim, bibendum condimentum quam tempor. Sed eget est semper, auctor erat eu, tristique leo.
                      </Card.Text>
                      <Card.Link href="/">Ver más</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

            </Row>

          </div>

          <div className='cartas-img'>

            <Row>

              <Col>
                <div className='carta-img1 mb-5'>
                  <Card style={{ width: '18rem'}}>
                    <Card.Img variant="card1" src="images/home/card1.jpg" />
                    <Card.Body>
                      <Card.Title>Foton Aumark 614 Flatbed</Card.Title>
                      <Card.Text>
                        Donec volutpat, magna vel faucibus viverra, orci velit condimentum lacus, gravida vulputate tortor ligula at nisl.
                      </Card.Text>
                      <Button variant="primary">Alquilar</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div className='carta-img2 mb-5'>
                  <Card style={{ width: '18rem'}}>
                    <Card.Img variant="card2" src="images/home/card2.jpg" />
                    <Card.Body>
                      <Card.Title>Avion Cessna 150 B</Card.Title>
                      <Card.Text>
                        Aenean suscipit, sapien at viverra luctus, est mauris viverra augue, vitae placerat justo massa eget dolor. 
                      </Card.Text>
                      <Button variant="primary">Alquilar</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div className='carta-img3 mb-5'>
                  <Card style={{ width: '18rem'}}>
                    <Card.Img variant="card3" src="images/home/card3.jpg" />
                    <Card.Body>
                      <Card.Title>Klase A 42 Zanovello Barcos</Card.Title>
                      <Card.Text>
                      Pellentesque magna erat, tincidunt vel mattis at, luctus ac justo. 
                      </Card.Text>
                      <Button variant="primary">Alquilar</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

            </Row>
          </div>
        </Col>
      </div>
      
    </>
  )
}

export default HomePage