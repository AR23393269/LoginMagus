import { useState } from 'react';
import { crearNota } from '../../services/notas';

const CrearNota = () => {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  const manejarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await crearNota({ titulo, texto });
      alert('Nota creada con éxito');
      setTitulo('');
      setTexto('');
    } catch (error) {
      console.error('Error al crear nota:', error);
    }
  };

  return (
    <div>
      <h1>Crear Nota</h1>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Contenido"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CrearNota;
