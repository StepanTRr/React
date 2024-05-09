import { useEffect, useState } from "react";
import styles from './ProductList.module.scss';
import styles_api from './api.module.scss';
import Product_API from './Product_api.jsx'
import Loading from './../../../Pages/Loading.jsx';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const API = () => {
    const[products, setProducts] = useState([]);
    const[visibleApi, setVisibleApi] = useState(6);
    const[textModal, setTextModal] = useState('');
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
      const [open, setOpen] = useState(false);
      const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };      
    const ShowMore = () => {setVisibleApi(visibleApi => visibleApi + 9)}

    const [isLoading, setIsLoading] = useState(true);
    const[textFilter, settextFilter] = useState('');
    const[filterProduct, setfilterProduct] = useState([]);


  useEffect(() => {
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

  useEffect(() => {
    const tmp = products.filter(item => item.title.includes(textFilter));
    console.log(tmp);
    setfilterProduct(tmp);
  }, [textFilter, products]); 
  
    return <div className={styles_api.main}>
        {isLoading ? (<div className={styles_api.divLoad}><Loading /></div>) : (
        <div className={styles_api.main}>
           
           <h1>API</h1>  
        <div className={styles.div_wt_filter}>
          <div><h2>Filter: </h2></div>
          <div><TextField id="filled-basic" label="Filled" variant="filled" onChange={(e) => settextFilter(e.target.value)}/></div>
        </div>
        <div className={styles_api.div_list}>
                {filterProduct.slice(0, visibleApi).map((item, index) => (
                    <Card key={index} sx={{height: 650}}>
                        <CardContent>
                            <Product_API product={item}></Product_API>
                        </CardContent>
                        <CardActions >
                            <Button variant="contained" onClick={() => {setTextModal(item.description); handleOpen();}}>View</Button>
                            
                        </CardActions>
                    </Card>
                ))}
            </div><div className={styles_api.div_btn}>
                    {visibleApi < filterProduct.length && (
                        <Button onClick={ShowMore} variant="contained" className={styles_api.button_add}>Еще</Button>
                    )}
                </div>
        </div>
        )
        
    }
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Описание товара
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {textModal}
    </Typography>
  </Box>
</Modal>
    </div>
}
export default API;