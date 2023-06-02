import { useState, useEffect } from 'react';
import '../styles/pages/Novedades.css'
import axios from 'axios';
import NovedadItem from '../novedades/NovedadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);


    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

  return (
    <>

    <h3 className='d-flex justify-content-center align-items-center mt-5'>Alquile el mejor transporte al mejor precio</h3>

    <section className='container mt-5 d-flex flex-column flex-lg-row'>
        {loading ? (
            <p>Cargando</p>
        ) : (
            novedades.map(item => <NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                imagen={item.imagen} body={item.cuerpo} />)
        )}
    </section>
    </>
  );
};

export default NovedadesPage;