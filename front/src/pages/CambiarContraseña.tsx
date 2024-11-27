import React, { useState } from 'react';
import Header from "../components/Header";
import { useDarkMode } from "../interfaces/DarkMode";

const CambiarContraseña: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordChange = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (newPassword !== confirmPassword) {
      setErrorMessage('La nueva contraseña y su confirmación no coinciden.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'usuario@example.com', // Asegúrate de obtener el email del usuario actual
          currentPassword,
          newPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message || 'Cambio de contraseña exitoso.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setErrorMessage(result.message || 'Error al cambiar la contraseña.');
      }
    } catch (error) {
      setErrorMessage('Hubo un problema con el servidor. Intenta nuevamente más tarde.');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Header />

      <div className={`max-w-xl w-full p-8 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mt-10 mx-auto`}>
        <h2 className="text-2xl font-semibold mb-6">Cambio de Contraseña</h2>
        <div className="space-y-4">
          {/* Contraseña Actual */}
          <div className="relative">
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              placeholder="Contraseña Actual"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 ${
                isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-400"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              aria-label={showCurrentPassword ? "Ocultar contraseña actual" : "Mostrar contraseña actual"}
            >
              {showCurrentPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Nueva Contraseña */}
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              placeholder="Nueva Contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 ${
                isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-400"
              onClick={() => setShowNewPassword(!showNewPassword)}
              aria-label={showNewPassword ? "Ocultar nueva contraseña" : "Mostrar nueva contraseña"}
            >
              {showNewPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Confirmar Nueva Contraseña */}
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirmar nueva Contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 ${
                isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? "Ocultar confirmación de contraseña" : "Mostrar confirmación de contraseña"}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        {/* Mensajes de error y éxito */}
        {errorMessage && <p className="text-red-500 mt-4" role="alert">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mt-4" role="alert">{successMessage}</p>}

        {/* Requerimientos de Contraseña */}
        <div className="mt-6">
          <p className="text-sm mb-4">Requerimientos de Contraseña:</p>
          <ul className={`text-sm list-disc list-inside space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>Mínimo 8 caracteres, más largo mejor</li>
            <li>Al menos una mayúscula y una minúscula</li>
            <li>Al menos un símbolo, número o espacio en blanco</li>
          </ul>
        </div>

        {/* Botones de Guardar y Reiniciar */}
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handlePasswordChange}
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            Guardar Cambios
          </button>
          <button
            onClick={() => {
              setCurrentPassword('');
              setNewPassword('');
              setConfirmPassword('');
              setErrorMessage('');
              setSuccessMessage('');
            }}
            className={`border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-white border-gray-600 focus:ring-gray-500' 
                : 'hover:bg-gray-100 text-black border-gray-300 focus:ring-gray-400'
            }`}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CambiarContraseña;

