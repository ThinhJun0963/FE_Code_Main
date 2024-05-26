interface Card {
    image: string,
    title: string,
    description: string
}

interface CardProps { 
    card: Card;
    styles: { [key: string]: string };
}

const CardGenerator = ({ card, styles }: CardProps) => {
    return (
        <div className={styles['card']}>
            <img className={styles['card-image']} src={card.image}></img>
            <hr className={styles['card-divider']} />
            <h2 className={styles['card-title']}>{card.title}</h2>
            <p className={styles['card-text']}>{card.description}</p>
        </div>
    )
}

export default CardGenerator;