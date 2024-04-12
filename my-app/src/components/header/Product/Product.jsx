import styles from './Product.module.scss';
const Product = (props) => {
    const{product} = props;
    return (
        <div className={styles.div_card}>
            <p className={styles.p_def__main}>{product.title}</p>
            <p className={styles.p_def}>Price: {product.price}</p>
        </div>
    );
}
export default Product;