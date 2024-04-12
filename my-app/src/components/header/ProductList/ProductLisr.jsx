import data from '../../../data.json';
import Product from '../Product/Product';
import styles from './ProductList.module.scss';
const ProductList = () => {
    return(
        <>
            <h2 className={styles.h2_name}>List</h2>
        <div className={styles.div_list}>
            {data.map((item, index) => (
                <div key = {index}>
                    <Product product = {item} />
                    
                </div>
            ))}
        </div>
        </>
    );
}
export default ProductList;