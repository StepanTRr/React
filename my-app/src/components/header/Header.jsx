import styles from './Header.module.scss';
const Header = () => {
    return (
        <div>
            <header className={styles.header}><p className={styles.p}>My project React</p></header>
        </div>
    );
}
export default Header;