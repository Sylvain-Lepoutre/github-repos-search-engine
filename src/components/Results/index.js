import Card from "../Card";



function Results({ displayedRepos }) {
    return (
        <section>
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
        </section>
    )
}

export default Results;