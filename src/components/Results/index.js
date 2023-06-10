import './style.scss'

import Card from "../Card";



function Results({ displayedRepos, searchedRepos }) {
    return (
        <section className="results">
            <h2 className="results__title" >Résultat de la recherche <span className="results__search">"{searchedRepos}"</span> </h2>
            <div className="results__container">
                {displayedRepos.map(repo => {
                    return (
                        <Card
                            key={repo.id}
                            name={repo.name}
                            img={repo.owner.avatar_url}
                            desc={repo.description}
                            link={repo.html_url}
                        />
                    )
                })
                }
            </div>

        </section>
    )
}

export default Results;