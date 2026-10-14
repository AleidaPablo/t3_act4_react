import styles from "../todoApp.module.css";
import { useState } from "react";

const EditNoteForm = ({ nota, onEditarNota, onCancelar }) => {
    const [textoEditado, setTextoEditado] = useState(nota.text);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (textoEditado.trim() === "") return;
        onEditarNota({
            ...nota,
            text: textoEditado
        });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <input
                type="text"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
                className={styles.editInput}
                autoFocus
            />

            <div className={styles.editButtons}>
                <button type="submit" className={styles.saveButton}>
                    Guardar
                </button>
                <button
                    type="button"
                    onClick={onCancelar}
                    className={styles.cancelButton}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default EditNoteForm;