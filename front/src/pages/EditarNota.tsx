import { useEffect, useState } from 'react';
import { obtenerNotaPorId, actualizarNota } from '../services/notas';

const EditarNota = ({ id }: { id: number }) => {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const cargarNota = async () => {
      try {
        const data = await obtenerNotaPorId(id);
        setTitulo(data.titulo);
        setTexto(data.texto);
      } catch (error) {
        console.error('Error al cargar nota:', error);
      }
    };

    cargarNota();
  }, [id]);

  const manejarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await actualizarNota(id, { titulo, texto });
      alert('Nota actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar nota:', error);
    }
  };

  return (
    <div>
      <h1>Editar Nota</h1>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default EditarNota;
