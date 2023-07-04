import TareasCard from "./TareasCard";
import { useContext } from "react";
import { TareaContexto } from "../contexto/TareaContexto";

function ListaTareas() {
  const { tareas, borrarTarea } = useContext(TareaContexto);
  if (tareas.length == 0) {
    return (
      <h1 className="text-red-500 font-bold text-2xl text-center">
        No hay tareas registradas
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
        <TareasCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;
