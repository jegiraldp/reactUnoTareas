import { createContext, useState, useEffect } from "react";
import { tareas as datos } from "../datos/tareas";

export const TareaContexto = createContext();

export function TareaContextoProvider(props) {
  const [tareas, setTareas] = useState([]);

  function crearTarea(tarea) {
    setTareas([
      ...tareas,
      {
        titulo: tarea.titulo,
        id: tareas.length,
        descripcion: tarea.descripcion,
      },
    ]);
  }

  function borrarTarea(tareaId) {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
  }

  useEffect(() => {
    setTareas(datos);
  }, []);

  return (
    <TareaContexto.Provider
      value={{
        tareas,
        borrarTarea,
        crearTarea,
      }}
    >
      {props.children}
    </TareaContexto.Provider>
  );
}
