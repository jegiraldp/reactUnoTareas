import ListaTareas from "./componentes/ListaTareas";
import FormularioTareas from "./componentes/FormularioTareas";

function App() {
  return (
    <>
      <main className="bg-blue-100 h-screen">
        <div className="container mx-auto p-10">
        <FormularioTareas />
        <br />
        <hr />
        <ListaTareas />
        </div>
      </main>
    </>
  );
}

export default App;
