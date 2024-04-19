import data from '../../../data.json';
import Product from '../Product/Product';
import styles from './ProductList.module.scss';
import { useState, useEffect } from 'react';
const ProductList = () => {
    const[products, setProducts] = useState([]);
    const[visibleCount, setVisibleCount] = useState(2);
    const[c, setC] = useState(0);

    const showMore = () => {
        //alert('click');
        setVisibleCount(count => count + 2);
    }
    const onclickbtn =() => {
        setC(c => c + 1);
        alert(c);
    }
    // like: useState
    useEffect(() => {
        setProducts(data);
    }, [])

    const LikeProduct = (id) => {
        const updateProducts = products.filter((item) => {
            if (item.id == id) {
                item.Like = !item.Like;
                return null;
            }
        })
        setProducts(updateProducts);
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
                    <Product product = {item} deleteProduct = {deleteProduct}/>
                    
                </div>
            ))}
        </div>
        <div className={styles.div_btn}>
        {visibleCount < products.length && (
            <button onClick={showMore} className={styles.button_add}>Еще</button>
        )}
        <button onClick={onclickbtn}>ооо</button>
        </div>
        </>
    );
}
export default ProductList;