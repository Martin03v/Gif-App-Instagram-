
// Importa el hook `useState` de React para manejar el estado local
import { useState } from "react";

// Componente funcional que permite agregar nuevas categorías
export const AddCategory = ({ onNewCategory }) => {
// Estado para manejar el valor actual del input
const [inputValue, setInputValue] = useState('');

// Función que se ejecuta al cambiar el valor del input
const onInputChange = ({ target }) => {
    setInputValue(target.value); // Actualiza el estado con el nuevo valor del input
};

// Función que se ejecuta al enviar el formulario
const onSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se recargue al enviar
    // Verifica si el texto ingresado tiene más de un carácter significativo
    if (inputValue.trim().length <= 1) return;

    // Llama a la función `onNewCategory` pasándole el valor ingresado (sin espacios innecesarios)
    onNewCategory(inputValue.trim());

    // Limpia el campo de input después de enviar
    setInputValue('');
};

return (
    // Formulario que llama a `onSubmit` al ser enviado
    <form onSubmit={onSubmit}>
    <input
        type="text" // Tipo de entrada: texto
        placeholder="Buscar gifs" // Texto de sugerencia para el usuario
        value={inputValue} // Vincula el input al estado `inputValue`
        onChange={onInputChange} // Llama a `onInputChange` cada vez que el usuario escribe
    />
    </form>
);
};

// Exporta el componente como predeterminado
export default AddCategory;