import { useEffect, useState } from "react";

import './style.scss'

import Header from "../Header";
import SearchForm from "../SearchForm";
import Results from "../Results";



function App() {

    // Hook d'état pour les repos à affficher, l'état initial est un tableau vide
    const [displayedRepos, setDisplayedsRepos] = useState([]);

    // Hook d'état concernant l'état "isLoading" initialement a false, qui passe à true lors de la recherche
    const [isLoading, setIsLoading] = useState(false);

    // Hook d'état concernant le formulaire de recherche, valeur initial 'react'
    const [searchedRepos, setSearchedRepos] = useState('react')

    const fetchRepos = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://api.github.com/search/repositories?q=' + searchedRepos);
            const data = await response.json();
            setDisplayedsRepos(data.items);
        } catch (error) {
            alert('Erreur de récupération des dépots');
        }
        setIsLoading(false)
    }

    // Hook d'effet pour initialiser la page avec une recherche 'react"
    useEffect(() => {
        fetchRepos()
    }, [searchedRepos]);

    return (
        <>
            <Header />
            <main role="content">
                <SearchForm
                    setSearchedRepos={setSearchedRepos}
                />
                {isLoading && <p>Chargement en cours ... veuillez patienter</p>}
                <Results
                    displayedRepos={displayedRepos}
                    searchedRepos={searchedRepos}
                />
            </main>
            <footer className="footer" role="contentinfo">Application crée par Sylvain Lepoutre à l'aide de l'API github</footer>
        </>

    )
}

export default App;