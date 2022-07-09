import styles from './VehicleForm.module.scss';

interface VehicleFormProps {
    handleSubmit: Function;
}

export function VehicleForm({handleSubmit}: VehicleFormProps) {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form__wrapper}>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Nome:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        // onChange={event => setTitle(event.target.value)}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Marca:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        // onChange={event => setBrand(event.target.value)}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Cor:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        // onChange={event => setColor(event.target.value)}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Ano:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        // onChange={event => setYear(event.target.value)}
                    />
                </div>

                <div className={styles.form__item}>
                    <label className={styles.form__label}>
                        Placa:{''}
                    </label>
                    <input 
                        className={styles.form__input}
                        type="text" 
                        // onChange={event => setPlate(event.target.value)}
                    />
                </div>
            </div>
            <footer className={styles.form__footer}>
                <button 
                    className={styles.form__button}
                >
                    salvar
                </button>
            </footer>
        </form>
    )
}