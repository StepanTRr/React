
import React from "react";
import ReactLoad from "react-loading";
import styles from './../components/header/ProductList/api.module.scss';

function Loading() {
    return (
      <div className={styles.divLoad}>
        <ReactLoad type = "bubbles" color="#0000FF"
                height={500} width={400} />
      </div>
    );
  }
  
  export default Loading;