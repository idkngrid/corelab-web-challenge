import { Container } from "../components/Container";
import { Arrow } from "../components/GoBackButton";

import styles from './NewVehicle.module.scss';


export function NewVehicle() {
    return (
        <div>
            <Arrow />
            <form action="" className={styles.form}>
                <div className={styles.form__wrapper}>
                    <div className={styles.form__item}>
                        <label className={styles.form__label}>
                            Nome:{''}
                        </label>
                        <input 
                            className={styles.form__input}
                            type="text" 
                        />
                    </div>

                    <div className={styles.form__item}>
                        <label className={styles.form__label}>
                            Marca:{''}
                        </label>
                        <input 
                            className={styles.form__input}
                            type="text" 
                        />
                    </div>

                    <div className={styles.form__item}>
                        <label className={styles.form__label}>
                            Cor:{''}
                        </label>
                        <input 
                            className={styles.form__input}
                            type="text" 
                        />
                    </div>

                    <div className={styles.form__item}>
                        <label className={styles.form__label}>
                            Ano:{''}
                        </label>
                        <input 
                            className={styles.form__input}
                            type="text" 
                        />
                    </div>

                    <div className={styles.form__item}>
                        <label className={styles.form__label}>
                            Placa:{''}
                        </label>
                        <input 
                            className={styles.form__input}
                            type="text" 
                        />
                    </div>
                </div>
                <footer className={styles.form__footer}>
                    <button className={styles.form__button}>
                        salvar
                    </button>
                </footer>
            </form>
        </div>
    )
}