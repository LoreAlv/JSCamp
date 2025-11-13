import { useState } from "react";

export const useSearchForm = ({ searchId, techSelectId, locationSelectId, contractSelectId, experienceSelectId, onSearch, onTextFilter }) => {
    const [searchText, setSearchText] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchParams = {
            search: formData.get(searchId),
            technology: formData.get(techSelectId),
            location: formData.get(locationSelectId),
            contract: formData.get(contractSelectId),
            experience: formData.get(experienceSelectId),
        };
        onSearch(searchParams);
    };

    const handleChange = (event) => {
        event.preventDefault();
        console.log("en el submit", event);
        //coger el formulario al que pertenece el elemento que ha cambiado
        const formData = new FormData(event.target.form);
        const searchParams = {
            search: formData.get(searchId),
            technology: formData.get(techSelectId),
            location: formData.get(locationSelectId),
            contract: formData.get(contractSelectId),
            experience: formData.get(experienceSelectId),
        };
        console.log("Parámetros de búsqueda:", searchParams);
        onSearch(searchParams);
    };
    const handleTextChange = (event) => {
        const text = event.target.value;
        setSearchText(text);
        onTextFilter(text);
    };
    return { searchText, handleSubmit, handleChange, handleTextChange };
};
