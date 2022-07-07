import styles from './Vehicles.module.scss';
import { Plus, MagnifyingGlass, Sliders } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Card } from '../components/Card';

export function Vehicles() {
    return (
        <Container>
            <div className={styles.search}>
                <header className={styles.search__header}>
                    <div className={styles.search__wrapper}>
                        <span>
                            <MagnifyingGlass size={20} weight="light" className={styles.search__glass} />
                        </span>
                        <input type="text" className={styles.search__input} />
                        <Link to={'/filter'}>
                            <Sliders size={40} weight="light" className={styles.search__sliders} />
                        </Link>
                    </div>
                </header>
                <Button 
                    text={'ADICIONAR'}
                />
            </div>

            <div className={styles.card__container}>
                <Card
                    title={'titulo'} 
                    description={'descricao'} 
                    color={'cor'}
                    year={1}
                    price={1}
                    isFavorite={false}
                />
                <Card
                    title={'titulo'} 
                    description={'descricao'} 
                    color={'cor'}
                    year={1}
                    price={1}
                    isFavorite={false}
                />
                <Card
                    title={'titulo'} 
                    description={'descricao'} 
                    color={'cor'}
                    year={1}
                    price={1}
                    isFavorite={false}
                />
            </div>
        </Container>
    )
}