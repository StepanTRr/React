import styles from './Footer.module.scss';
const Footer = () => {
    return (
        <footer className={styles.footer}>
           <p className={styles.p}>Trofimov Stepan 2252</p> 
           <div>
                <img src="logo512.png" alt="" className={styles.img}/> <p>Uni Dubna</p>
           </div>
        </footer>
    )
}
export default Footer;