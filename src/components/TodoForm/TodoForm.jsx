import styles from "./todoForm.module.css"
import { useState } from "react"
import { Plus } from "lucide-react"

const TodoForm = ({ onAgregarNota }) => {
    const [textNote, setTextNote] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        if (textNote.trim() === "") {
            console.log("No se puede agregar notas vacias")
            return
        }
        const newNote = {
            id: Date.now(),
            text: textNote,
            completed: false
        }
        onAgregarNota(newNote)
        setTextNote("")
    }

    return (
        <div className={styles.formContainer}>
            <h2>Tareas Pendientes</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="nota" 
                    name="nota" 
                    value={textNote} 
                    onChange={(event) => setTextNote(event.target.value)}
                />
                <button type="submit">
                    <Plus size={16} />
                    Crear nota
                </button>
            </form>
        </div>
    )
}

export default TodoForm