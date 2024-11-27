import { useEffect, useState } from 'react';
import { obtenerNotas } from '../services/notas';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Notas = () => {
  const [notas, setNotas] = useState<{ id: number; titulo: string; texto: string; frase: string }[]>([]);

  useEffect(() => {
    const cargarNotas = async () => {
      try {
        const data = await obtenerNotas();
        setNotas(data);
      } catch (error) {
        console.error('Error al obtener notas:', error);
      }
    };

    cargarNotas();
  }, []);
  console.log(notas);

  return (
    <>
      <Header />
      <div className='max-w-screen-lg mx-auto px-2 h-svh'>
      <h1>Notas</h1>
      <ul>
      {notas.map((nota) => (
          <li key={nota.id}>
            <h2>{nota.titulo}</h2>
            <h2>{nota.frase}</h2>
            <p>{nota.texto}</p>
          </li>
        ))} 
      </ul>
      </div>
    </>
  );
};

export default Notas;