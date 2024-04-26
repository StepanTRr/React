import styles from './Header.module.scss';
const Header = () => {
    return (
        <div className= {styles.header}>
            <div className={styles.top_line}>
                <p className={styles.p__top}>Доставка и оплата</p>
                <p className={styles.p__top}>Скидки и бонусы</p>
                <p className={styles.p__top}>Отзывы</p>
                <p className={styles.p__top}>О магазине</p>
                <p className={styles.p__top}>Контакты</p>
                <p className={styles.p__top}>Акции</p>
            </div>
            <div className={styles.main_line}>
                <h2 className={styles.h2_name}>NAMESITE</h2>
                <div className={styles.right_main}>
                    <div>
                        <p className={styles.p__number}>8 800 999 99 99</p>
                        <p className={styles.p__time}>с 10:00 до 19:00</p>
                    </div>
                    <div>
                        <p className={styles.p__number}>8 999 999 09 09</p>
                        <p className={styles.p__time}>Единая служба сервиса</p>
                    </div>
                </div>
            </div>
            <div className={styles.down_line}>
                <a href="/">HOME</a>
                <a href="/ProductList">MAIN</a>
                <a href="/about">ABOUT</a>
                <a href="/api">API</a>
            </div>
        </div>
    );
}
export default Header;