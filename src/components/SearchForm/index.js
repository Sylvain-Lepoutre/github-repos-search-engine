import { useState } from "react";

import './style.scss';

function SearchForm({ setSearchedRepos }) {

    const [inputText, setInputText] = useState('');


    // Fonction pour lancer la fonction fetch avec comme parametres le searchedText
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
            <label className="searchForm__label">
                <input
                    className="searchForm__input"
                    type="search"
                    value={inputText}
                    onChange={handleInputChange}
                />
            </label>
            <button className="searchForm__btn" type="submit">
                Rechercher
            </button>
        </form>
    )
}

export default SearchForm;