import React from "react";
import { useState, useContext } from "react";
import { tareas } from "../datos/tareas";
import { TareaContexto } from "../contexto/TareaContexto";

function FormularioTareas() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { crearTarea } = useContext(TareaContexto);

  const handleSubmit = (e) => {
    e.preventDefault();
    crearTarea({
      titulo,
      descripcion,
    });
    setTitulo("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-blue-300 p-10 mb-4">
        <h1 className="text-2xl font-bold text-black mb-3">Crea tu tarea :)</h1>
        <input
          className="bg-blue-200 p-3 w-full mb-2"
          placeholder="Escribe una tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          autoFocus
        />
        <br />
        <br />
        <textarea
          className="bg-blue-200 p-3 w-full mb-2"
          placeholder="Descripción de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        ></textarea>

        <button className="bg-blue-800 px-3 py-1 hover:bg-blue-500 hover:text-black text-white">
          Salvar Tarea
        </button>
      </form>
    </div>
  );
}

export default FormularioTareas;
