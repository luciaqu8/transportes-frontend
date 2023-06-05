import { useState } from 'react'
import '../styles/pages/Contacto.css'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure';
import axios from 'axios';

const Contacto = () => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)

    const response = await 
                    axios.post('http://localhost:3000/api/contacto',  
                   formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }


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

            <form className='formulario' action="/contact" onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Nombre</label>
                <input className="form-control" type="text" name='nombre' value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input className="form-control" type="text" name='email' value={formData.email} onChange={handleChange} placeholder="Tu email" />
                <p className="text-muted form-text">
                  Nunca compartiremos tu mail con nadie.
                </p>
              </div>



              <div className="mb-3">
                <label>Consulta</label>
                <textarea type="text" name='mensaje' className="form-control" value={formData.mensaje} onChange={handleChange} rows={3} placeholder="Escriba aquí su consulta"/>
              </div>

              {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

              <button className="btn btn-dark" type='submit' value='Enviar'>Enviar</button>
              

            </form>



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