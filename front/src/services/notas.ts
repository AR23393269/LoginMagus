import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', // URL del backend
});
// Obtiene todas las notas
export const obtenerNotas = async () => {
  const response = await api.get('/api/notas');

  console.log("Nota array", response);
  return response.data.body;
};

// Obtiene una nota por ID
export const obtenerNotaPorId = async (id: number) => {
  const response = await api.get(`/notas/${id}`);
  return response.data;
};

// Crea una nueva nota
export const crearNota = async (nota: { titulo: string; texto: string }) => {
  const response = await api.post('/api/notas', nota);
  return response.data;
};

// Actualiza una nota
export const actualizarNota = async (id: number, nota: { titulo: string; texto: string }) => {
  const response = await api.put('/notas', { id, ...nota });
  return response.data;
};

// Elimina una nota
export const eliminarNota = async (id: number) => {
  const response = await api.put('/notas', { id });
  return response.data;
};
