import styles from './Product.module.scss';
const Product = (props) => {
    const{product, deleteProduct} = props;
    const Delete = () => {
        deleteProduct(product.id);
    }
    return (
        <div className={styles.div_card}>
            <p className={styles.p_def__main}>{product.title}</p>
            <p className={styles.p_def}>Price: {product.price}</p>
            <button onClick={() => Delete(product.id)}>DELETE</button>
        </div>
    );
}
export default Product;