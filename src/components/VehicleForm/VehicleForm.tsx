import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from './VehicleForm.module.scss';

import { useNavigate } from 'react-router-dom';

interface VehicleFormProps {
    handleSubmit: Function;
}

export function VehicleForm({handleSubmit}: VehicleFormProps) {
    const navigate = useNavigate();

    const [vehicle, setVehicle] = useState({});

    const submit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(vehicle);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    }

    return (
        <form action="" className={styles.form} onSubmit={submit}>
            <div className={styles.form__wrapper}>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Nome:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        name="title"
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Marca:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        name="brand"
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Descrição:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        name="description"
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Valor:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        name="price"
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Cor:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        name="color"
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Ano:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        name="year"
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Placa:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        name="plate"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <footer className={styles.form__footer}>
                <button 
                    type='submit'
                    className={styles.form__button}
                >
                    salvar
                </button>
            </footer>
        </form>
    )
}