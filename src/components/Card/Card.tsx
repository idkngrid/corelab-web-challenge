import { Pencil, Heart, X, Pen } from 'phosphor-react';
import { useState } from 'react';
import styles from './Card.module.scss';

interface CardProps {
    title: String;
    description: String;
    color: String;
    year: Number;
    price: Number;
    isFavorite: Boolean;
}

export function Card({ title, description, color, year, price, isFavorite }: CardProps) {
    const [isCardFavorite, setIsCardFavorite] = useState(false);

    function handleFavorite() {
        setIsCardFavorite(!isCardFavorite);
    }

    return (
        <div className={styles.card}>
            <header className={styles.card__header}>
                <button>
                    <Pencil size={32} />
                </button>
                <button>
                    <X size={32} />
                </button>
                <button
                    onClick={handleFavorite}
                >
                    {isCardFavorite ? <Heart size={36} weight="fill" /> : <Heart size={32} />}
                </button>
            </header>
            <div className={styles.card__content}>
                <h2>{title}</h2>
                <p>Preço: {price.toString()}</p>
                <p>Descrição: {description}</p>
                <p>Ano: {year.toString()}</p>
                <p>Cor: {color}</p>
            </div>
        </div>
    )
}