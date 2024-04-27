
import styles from '../ProductList/api.module.scss';

const Product_API = (props) => {
    const{product} = props;
    return (
        <div className={styles.div_card}>
            <div className={styles.div_up_product}>
            <img src={product.images[0]} alt="ICON" className={styles.image}/>
                <p className={styles.p_def__main}>{product.title}</p>
                
            </div>
            <p className={styles.p_def}><del>{product.price}$</del></p>
            <p className={styles.p_def__defmain}><b>{product.price - 7}$</b></p>
        </div>
    );
}
export default Product_API;