import { useContext } from "react";
import { TareaContexto } from "../contexto/TareaContexto";

function TareasCard({ tarea }) {
  const { borrarTarea } = useContext(TareaContexto);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tarea.titulo}</h1>
      <p className="text-gray-500 text-sm">{tarea.descripcion}</p>
      
      <button className="bg-red-500 p-2 rounded-md text-sm mt-4 hover:bg-red-400" onClick={() => borrarTarea(tarea.id)}>Eliminar</button>
    </div>
  );
}

export default TareasCard;
