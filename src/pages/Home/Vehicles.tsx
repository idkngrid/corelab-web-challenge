import { useState, useEffect } from 'react';
import styles from './Vehicles.module.scss';
import { Plus, MagnifyingGlass, Sliders } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card';

import api from '../../lib/api';

interface Vehicle {
    id: Number;
    title: String;
    description: String;
    color: String;
    year: Number;
    plate: String;
    price: Number;
    isFavorite: Boolean;
}

export function Vehicles() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    // const [favorites, setFavorites] = useState([])
    // const [ads, setAds] = useState([]);

    const getVehicles = () => {
        api.get("/vehicles")
            .then(response => {
                setVehicles(response.data);
            })
            .catch(err => console.log(err));
        }

    useEffect(getVehicles, []);

    // const adsData = [];
    // const favoriteAds = [];

    // vehicles.map(vehicle => {
    //     if(vehicle.isFavorite === true) {
    //         favoriteAds.push(vehicle);
    //     } else {
    //         adsData.push(vehicle);
    //     }
    // })
    // setAds(adsData);
    // setFavorites(favoriteAds);

    return (
        <div className={styles.home__container}>
            <div className={styles.search}>
                <header className={styles.search__header}>
                    <div className={styles.search__wrapper}>
                        <span>
                            <MagnifyingGlass size={20} weight="light" className={styles.search__glass} />
                        </span>
                        <input type="text" placeholder="Buscar" className={styles.search__input} />
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
                {vehicles.length > 0 &&
                    vehicles.map((vehicle, key) => (
                        <Card
                            key={key}
                            id={vehicle.id}
                            title={vehicle.title} 
                            description={vehicle.description} 
                            color={vehicle.color}
                            year={vehicle.year}
                            plate={vehicle.plate}
                            price={vehicle.price}
                            isFavorite={vehicle.isFavorite}
                        />
                    ))
                }
            </div>
        </div>
    )
}