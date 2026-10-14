import styles from "./todoApp.module.css";
import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import EditNoteForm from "./EditNoteForm/EditNoteForm";
import { SquarePen, Trash } from "lucide-react";

function TodoApp() {
    const [notas, setNotas] = useState([
        { id: 1, text: "Aprender React desde cero", completed: false },
        { id: 2, text: "Comprender componentes", completed: true }
    ]);
    
    const [notaEditandoId, setNotaEditandoId] = useState(null);

    // Contador de tareas pendientes
    const pendientesCount = notas.filter((nota) => !nota.completed).length;

    //Agregar nota
    const agregarNota = (nuevaNota) => {
        setNotas([...notas, nuevaNota]);
    };

    //Eliminar nota 
    const eliminarNota = (id) => {
        setNotas(notas.filter((nota) => nota.id !== id));
    };

    //Actualizar el texto de una nota 
    const actualizarNota = (notaActualizada) => {
        setNotas(
            notas.map((nota) =>
                nota.id === notaActualizada.id ? notaActualizada : nota
            )
        );
        setNotaEditandoId(null); 
    };

    // Cambiar estado de completado 
    const marcarComoCompleta = (notaId) => {
        setNotas(
            notas.map((nota) =>
                nota.id === notaId
                    ? { ...nota, completed: !nota.completed }
                    : nota
            )
        );
    };

    return (
        <>
            <h1 className={styles.titulo}>Notas</h1>
            
            <div className={styles.counterBanner}>
                {pendientesCount === 0 
                    ? "No tienes tareas pendientes" 
                    : `Tienes ${pendientesCount} ${pendientesCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}`}
            </div>

            <TodoForm onAgregarNota={agregarNota} />

            <ul className={styles.noteList}>
                {notas.map((nota) => (
                    <li className={styles.noteItem} key={nota.id}>
                        <span className={styles.noteText}>
                            {nota.text} 
                            <span className={styles.statusBadge}>
                                {nota.completed ? "😊" : "😢"}
                            </span>
                        </span>
                        
                        <div className={styles.iconsContainer}>
                            <button onClick={() => marcarComoCompleta(nota.id)}>
                                {nota.completed ? " Incompleto" : "Completado"}
                            </button>
                            
                            <SquarePen
                                onClick={() => setNotaEditandoId(nota.id)}
                                size={26}
                                style={{ cursor: "pointer" }}
                            />
                            
                            <Trash
                                onClick={() => eliminarNota(nota.id)}
                                size={26}
                                style={{ cursor: "pointer" }}
                            />
                        </div>

                        {notaEditandoId === nota.id && (
                            <EditNoteForm
                                nota={nota}
                                onEditarNota={actualizarNota}
                                onCancelar={() => setNotaEditandoId(null)}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoApp;