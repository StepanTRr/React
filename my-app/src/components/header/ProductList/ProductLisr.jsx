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
          <div className={styles.div_names}>  <h2 className={styles.h2_name}>Новинки</h2><img src='https://kartinki.pics/uploads/posts/2022-12/thumbs/1671761581_kartinkin-net-p-ogonek-kartinki-instagram-1.png' className={styles.img}></img> </div>
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
        <div className={styles.div_names}><h2 className={styles.h2_name}>Понравившееся</h2><img src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png" alt="" className={styles.img}/></div>
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