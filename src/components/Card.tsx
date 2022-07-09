import { Pencil, Heart, X, Pen } from 'phosphor-react';
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
    return (
        <div className={styles.card}>
            <header className={styles.card__header}>
                <span>
                    <Pencil size={32} />
                </span>
                <span>
                    <X size={32} />
                </span>
                <span>
                    <Heart size={32} />
                </span>
            </header>
            <div>
                <h2>{title}</h2>
                <p>{price.toString()}</p>
                <p>{description}</p>
                <p>{year.toString()}</p>
                <p>{color}</p>
            </div>
        </div>
    )
}