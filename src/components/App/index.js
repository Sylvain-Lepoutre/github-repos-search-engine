import { useEffect, useState } from "react";

import './style.scss'

import Header from "../Header";
import SearchForm from "../SearchForm";
import Results from "../Results";
import Footer from "../Footer";
import LoadingMessage from "../LoadingMessage";



function App() {

    // Hook d'état pour les repos à affficher, l'état initial est un tableau vide
    const [displayedRepos, setDisplayedsRepos] = useState([]);

    // Hook d'état concernant l'état "isLoading" initialement a false, qui passe à true lors de la recherche
    const [isLoading, setIsLoading] = useState(false);

    // Hook d'état concernant le formulaire de recherche, valeur initial 'react'
    const [searchedRepos, setSearchedRepos] = useState('react')

    // Fonction d'appel à l'API
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

    // Hook d'effet pour initialiser la page avec une recherche qui s'initie lors du changement d'état searchedRepos
    useEffect(() => {
        fetchRepos()
    }, [searchedRepos]);

    return (
        <>
            <Header />
            <main role="main">
                <SearchForm
                    setSearchedRepos={setSearchedRepos}
                />
                {isLoading && <LoadingMessage /> }
                <Results
                    displayedRepos={displayedRepos}
                    searchedRepos={searchedRepos}
                />
            </main>
            <Footer />
        </>
    )
}

export default App;