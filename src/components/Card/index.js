import './style.scss';

function Card( { name, img, desc, link} ) {

    // Fonction pour limiter l'affichage de la description
    function truncateString(string) {
        if (string === null) {
          return '';
        }
        else if(string.length > 50) {
          return string.slice(0, 50) + "...";
        }
        else {
          return string;
        }
      }


    return (
        <article className="card">
            <h3 className="card__title">{name}</h3>
            <img className="card__img" src={img} alt="" aria-hidden="true" />
            <p className="card__desc">{truncateString(desc)}</p>
            <a className="card__link" href={link}>Aller sur ce repos</a>
        </article>
    )
}

export default Card;