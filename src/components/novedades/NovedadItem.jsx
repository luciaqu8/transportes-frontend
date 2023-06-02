import '../styles/pages/Novedades.css'
import Card from 'react-bootstrap/Card';
import { Col }from 'react-bootstrap';
import { Row }from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades"> 
                <div className='carta-img mb-1'>
                  <Card style={{ width: '18rem'}}>
                    <Card.Img variant="card1" src={imagen} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Subtitle>{subtitle}</Card.Subtitle>
                      <Card.Text>
                        {body}
                      </Card.Text>
                      <Button variant="primary">Alquilar</Button>
                    </Card.Body>
                  </Card>
                </div>
    </div>
    )
}

export default NovedadItem;