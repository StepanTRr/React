import { useEffect, useState } from "react";
import styles from './ProductList.module.scss';
const API = () => {
    const[products, setProducts] = useState([]);
    useEffect (() => {
            fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setProducts(json);
            });
    }, [])
    return <>
        <h1>API</h1>
        <div className={styles.div_list}>
            {products.map((item, index) => (
                <div key = {index}>
                    <h3>{item.title}</h3>
                    <p>{item.discription}</p>
                </div>
            ))}
        </div>
    </>
}
export default API;