import { useState } from "react";

function SearchForm({ fetchRepos }) {

    // Hook d'état concernant le formulaire de recherche
    const [searchedRepos, setSearchedRepos] = useState('')

    // Fonction pour lancer la fonction fetch avec comme parametres le searchedText
    function handleSubmit(event) {
        if (searchedRepos) {
            event.preventDefault();
            fetchRepos(searchedRepos);
            setSearchedRepos('')
        }
    }

    // Fonction pour obtenir le searchedText
    function handleInputChange(event) {
        setSearchedRepos(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="search"
                    value={searchedRepos}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">
                Rechercher
            </button>
        </form>
    )
}

export default SearchForm;