import { useState } from "react";

import './style.scss';

function SearchForm({ setSearchedRepos }) {

    // Hook d'état concernant le texte du formulaire
    const [inputText, setInputText] = useState('');


    // Fonction pour lancer la fonction fetch avec comme parametres l'inputText
    function handleSubmit(event) {
        event.preventDefault();
        if (inputText) {
            setSearchedRepos(inputText);
            setInputText('');
        }
    }

    // Fonction pour obtenir le searchedText
    function handleInputChange(event) {
        setInputText(event.target.value)
    }


    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <label
                className="searchForm__label"
                htmlFor="searchInput"
            >
                <input
                    className="searchForm__input"
                    type="search"
                    value={inputText}
                    onChange={handleInputChange}
                    role="search"
                    id="searchInput"
                    placeholder="Veuillez saisir votre recherche"
                />
            </label>
            <button className="searchForm__btn" type="submit">
                Rechercher
            </button>
        </form>
    )
}

export default SearchForm;