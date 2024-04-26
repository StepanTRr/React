import styles from './Product.module.scss';

const Product = (props) => {
    
    const{product, deleteProduct, likeProduct} = props;
    const Delete = () => {
        deleteProduct(product.id);
    }
    const Like = () => {
        likeProduct(product.id);
    }
    return (
        <div className={styles.div_card}>
            <div className={styles.div_up_product}>
                <p className={styles.p_def__main}>{product.title}</p>
                {product.Like ? (
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNgB9hvHyf731LWeZ-in_ecjQl2u-xmLEOTtwAF3r7XGzcGVWcHvORwCX9bJL0Pn2-lo&usqp=CAU" alt="like" className={styles.image_like} onClick={Like} />
        ) : (
          <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="unlike" className={styles.image_like} onClick={Like} />
        )}
            </div>
            <p className={styles.p_def}>Price: {product.price}</p>
            <img src={product.image} alt="ICON" className={styles.image}/>
        </div>
    );
}
export default Product;