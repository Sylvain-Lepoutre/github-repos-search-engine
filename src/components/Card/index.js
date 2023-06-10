function Card( { name, img, desc, link} ) {
    return (
        <article>
            <h3>{name}</h3>
            <img src={img} alt="{name}" />
            <p>{desc}</p>
            <a href={link}>Aller sur ce repos</a>
        </article>
    )
}

export default Card;