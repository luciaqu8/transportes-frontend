import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const Nosotros = () => {
  return (
    <>
        <Col className='container-nosotros'>
          <div className='texto-nosotros'>
            <h1>Conózcanos</h1>

            <p>Aenean mattis neque nec eros aliquet sollicitudin maximus sed felis. Proin sollicitudin rutrum sem sed bibendum. Morbi tempus at augue quis viverra. Nulla facilisi. Curabitur nec dolor nec elit iaculis scelerisque sit amet maximus turpis. Sed eu erat tempor, consectetur erat et, hendrerit leo. Proin mollis eros in eros venenatis consectetur. Praesent semper sapien eu mauris suscipit auctor. Quisque malesuada eros ut turpis consequat consequat. Cras et sagittis ex, et porta nulla.</p>
          </div>

          <div>
            <Row className='cartas-nosotros'>
              <Col>
                <div className='carta1-nosotros'>
                  <Card style={{ width: '12rem'}}>
                    <Card.Img variant="Juan Ortiz" src="images/nosotros/nosotros1.jpg"/>
                    <Card.Body>
                      <Card.Title>Juan Ortiz</Card.Title>
                      <Card.Text>
                        Morbi vitae lacinia dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div className='carta2-nosotros'>
                  <Card style={{ width: '12rem'}}>
                    <Card.Img variant="Ana García" src="images/nosotros/nosotros2.jpg" />
                    <Card.Body>
                      <Card.Title>Ana García</Card.Title>
                      <Card.Text>
                        Nam porta arcu sapien. Integer facilisis posuere ex quis dapibus. Suspendisse sed magna mollis.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div className='carta3-nosotros'>
                  <Card style={{ width: '12rem'}}>
                    <Card.Img variant="Roberto Fernández" src="images/nosotros/nosotros3.jpg" />
                    <Card.Body>
                      <Card.Title>Roberto Fernández</Card.Title>
                      <Card.Text>
                        Aenean mattis neque nec eros aliquet sollicitudin maximus sed felis.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col>
               <div className='carta4-nosotros'>
                 <Card style={{ width: '12rem'}}>
                    <Card.Img variant="Sofía Rodríguez" src="images/nosotros/nosotros4.jpg" />
                    <Card.Body>
                      <Card.Title>Sofía Rodríguez</Card.Title>
                      <Card.Text>
                        Proin sollicitudin rutrum sem sed bibendum. Morbi tempus at augue quis viverra. 
                      </Card.Text>
                    </Card.Body>
                  </Card>
               </div>
              </Col> 
              <Col>
                  <Card style={{ width: '12rem'}}>
                    <Card.Img variant="Miguel Torres" src="images/nosotros/nosotros5.jpg" />
                    <Card.Body>
                      <Card.Title>Miguel Torres</Card.Title>
                      <Card.Text>
                        Curabitur nec dolor nec elit iaculis scelerisque sit amet maximus turpis. Sed eu erat tempor.
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            </Row>
          </div>
        </Col>
    </>
  )
}

export default Nosotros