import { useEffect, useState } from "react";
import styles from './ProductList.module.scss';
import styles_api from './api.module.scss';
import Product_API from './Product_api.jsx'
import Loading from './../../../Pages/Loading.jsx';
const API = () => {
    const[products, setProducts] = useState([]);
    const[visibleApi, setVisibleApi] = useState(6);

    const ShowMore = () => {setVisibleApi(visibleApi => visibleApi + 9)}

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setProducts(json);
                setIsLoading(false);
            });
    }, 2000);
  }, []);
    return <div className={styles_api.main}>
        {isLoading ? (<div className={styles_api.divLoad}><Loading /></div>) : (
        <div className={styles_api.main}>
        <h1>API</h1><div className={styles_api.div_list}>
                {products.slice(0, visibleApi).map((item, index) => (
                    <div key={index}>
                        <Product_API product={item}></Product_API>
                    </div>
                ))}
            </div><div className={styles_api.div_btn}>
                    {visibleApi < products.length && (
                        <button onClick={ShowMore} className={styles_api.button_add}>Еще</button>
                    )}
                </div>
        </div>
        )
        
    }
        
    </div>
}
export default API;