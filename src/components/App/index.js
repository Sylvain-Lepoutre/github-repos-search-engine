import { useEffect, useState } from "react";
import Results from "../Results";
import SearchForm from "../SearchForm";

function App() {

    // Hook d'état pour les repos à affficher, l'état initial est un tableau vide
    const [displayedRepos, setDisplayedsRepos] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const fetchRepos = async (search) => {
        setIsLoading(true)
        try {
            const response = await fetch('https://api.github.com/search/repositories?q=' + search);
            const data = await response.json();
            setDisplayedsRepos(data.items);
        } catch (error) {
            alert('Erreur de récupération des dépots');
        }
        setIsLoading(false)
    }

    // Hook d'effet pour initialiser la page avec une recherche 'react"
    useEffect(() => {
        fetchRepos('react')
    }, []);

    return (
        <main>
            <h1>Moteur de recherche Github</h1>
            <SearchForm
                fetchRepos={fetchRepos}
            />
            {isLoading && <p>Chargement en cours ... veuillez patienter</p>}
            <Results displayedRepos={displayedRepos} />
        </main>

    )
}

export default App;