import './style.scss';

function Card( { name, img, desc, link} ) {
    return (
        <article className="card">
            <h3 className="card__title">{name}</h3>
            <img className="card__img" src={img} alt="{name}" />
            <p className="card__desc">{desc}</p>
            <a className="card__link" href={link}>Aller sur ce repos</a>
        </article>
    )
}

export default Card;