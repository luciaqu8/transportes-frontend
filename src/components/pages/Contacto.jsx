import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Contacto = () => {
  return (
    <>
      <Row className='contacto-page'>
        <Col>
        <div className='contacto-info'>
          <div className='texto-contacto'>
            <h1>Contactanos!</h1>
            <p>Para que nos contactemos con vos rellena este formulario</p>
          </div>

          <div className='form-contacto'>
            <Form>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Tu nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Tu email" />
                <Form.Text className="text-muted">
                  Nunca compartiremos tu mail con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Consulta</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escriba aquí su consulta"/>
              </Form.Group>
            </Form>

            <Button variant="dark">Enviar</Button>
          </div>
        </div>
        </Col>

        <Col className='mapa'>
          <Figure>
            <Figure.Image
              alt="map"
              src="./images/contacto/mapa.jpg"
              width='100%'
            />
            <Figure.Caption>Calle 13 de Septiembre #456, Colonia La Paz, Ciudad de México, México.</Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </>
  )
}

export default Contacto