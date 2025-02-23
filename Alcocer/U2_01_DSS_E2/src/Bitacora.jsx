import React, {useState, useEffect} from 'react'

const Bitacora = () => {
    const [bitacora, setBitacora] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/api/bitacora/todos")
        .then((response) => response.json())
        .then((data) => setBitacora(data))
        .catch((error) => console.error("Error al obtener la bitácora:", error));
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Bitácora de Operaciones</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Nombre</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Fecha y Hora</th>
              <th className="border border-gray-300 px-4 py-2">Tipo de Operación</th>
            </tr>
          </thead>
          <tbody>
            {bitacora.map((item) => (
              <tr key={item.id} className="text-center border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{item.usuario.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.usuario.email}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(item.fechaHora).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">{item.tipoOperacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Bitacora
