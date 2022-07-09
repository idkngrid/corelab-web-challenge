import { useState, useEffect, FormEvent } from 'react';

import styles from './Filter.module.scss';
import { Arrow } from "../../components/GoBackButton/GoBackButton";

import api from '../../lib/api';
import { useNavigate } from 'react-router-dom';

export function Filter() {
    const navigate = useNavigate();
    const [brands, setBrands] = useState(['Todos'])
    const [colors, setColors] = useState(['Todos'])
    const [years, setYears] = useState(['Todos'])

    function filterData() {
        api.get('/vehicles/filtered')
            .then(({data}) => {
                setBrands([...brands, ...data.brand])
                setColors([...colors, ...data.color])
                setYears([...years, ...data.year])
            })
    }
    
    // const [filter, setFilter] = useState([]);

    // useEffect(() => {
    //     api.get("/filter")
    //         .then(response => {
    //             setFilter(response.data);
    //         })
    //         .catch(err => console.log(err));
    // })

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div>
            <Arrow />
            <form action="" className={styles.form}>
                <div className={styles.form__wrapper}>
                    <div className={styles.form__item}>
                        <label className={styles.form__label} htmlFor="">Marca:</label>
                        <select className={styles.form__input} name="" id="">
                            <option value=""></option>
                        </select>
                    </div>

                    <div className={styles.form__item}>
                        <label className={styles.form__label} htmlFor="">Cor:</label>
                        <select className={styles.form__input} name="" id="">
                            <option value=""></option>
                        </select>
                    </div>

                    <div className={styles.form__item}>
                        <label className={styles.form__label} htmlFor="">Ano:</label>
                        <select className={styles.form__input} name="" id="">
                            <option value=""></option>
                        </select>
                    </div>

                    <div>

                    </div>
                </div>
                <footer className={styles.form__footer}>
                    <button 
                        className={styles.form__button}
                        onClick={handleSubmit}
                    >
                        salvar
                    </button>
                </footer>
            </form>
        </div>
    )
}