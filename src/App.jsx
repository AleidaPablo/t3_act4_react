import "./index.css";
import TodoApp from "./components/TodoApp";
import fondoFlores from "./assets/flores.jpg";
// `<h1>${nombre}</h1>`
// <></> Fragmentos

// Pasar Props

function App() {
    return (
        <section className="containerTodoApp"
        style={{ backgroundImage: `url(${fondoFlores})` }}>
            <TodoApp />
        </section>
    );
}

export default App;