import { useEffect, useState } from 'react';
import { obtenerNotas } from '../../services/notas';

const Notas = () => {
  const [notas, setNotas] = useState<{ id: number; titulo: string; texto: string }[]>([]);

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

  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {notas.map((nota) => (
          <li key={nota.id}>
            <h2>{nota.titulo}</h2>
            <p>{nota.texto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notas;
