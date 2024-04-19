import data from '../../../data.json';
import Product from '../Product/Product';
import styles from './ProductList.module.scss';
import { useState, useEffect } from 'react';
const ProductList = () => {
    const[products, setProducts] = useState([]);
    const[likedProducts, setLikedProducts] = useState([]);
    const[visibleCount, setVisibleCount] = useState(2);
    const[c, setC] = useState(0);

    const showMore = () => {
        setVisibleCount(count => count + 2);
    }
    useEffect(() => {
        setProducts(data);
    }, [])

    const LikeProduct = (id) => {
        const updateProducts = products.map((item) => {
            if (item.id == id) {
                return {...item, Like: !item.Like};
            }
            return item;
        });
        setProducts(updateProducts);
        const liked = updateProducts.filter((item => item.Like));
        setLikedProducts(liked);
    }

    const deleteProduct = (id) => {
        const updateProducts = products.filter((item) => item.id !== id);
        setProducts(updateProducts);
    }

    return(
        <>
            <h2 className={styles.h2_name}>Новинки</h2>
        <div className={styles.div_list}>
            {products.slice(0, visibleCount).map((item, index) => (
                <div key = {index}>
                    <Product product = {item} deleteProduct = {deleteProduct} likeProduct = {LikeProduct}/>
                    
                </div>
            ))}
        </div>
        <div className={styles.div_btn}>
        {visibleCount < products.length && (
            <button onClick={showMore} className={styles.button_add}>Еще</button>
        )}
        </div>
        <h2 className={styles.h2_name}>Понравившееся</h2>
        <div className={styles.div_list_like}>
            {likedProducts.map((item, index) => (
                <div key = {index}>
                    <Product product = {item} deleteProduct = {deleteProduct} likeProduct = {LikeProduct}/>
                    
                </div>
            ))}
        </div>
        </>
    );
}
export default ProductList;