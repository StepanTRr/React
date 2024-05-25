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
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



const API = () => {
    const[products, setProducts] = useState([]);
    const[visibleApi, setVisibleApi] = useState(6);
    const[textModal, setTextModal] = useState('');
    const[textTitle, setTextTitle] = useState('');
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
    const ShowMore = () => {setVisibleApi(visibleApi => visibleApi + 6)}

    const [isLoading, setIsLoading] = useState(true);
    const[textFilter, settextFilter] = useState('');
    const[filterProduct, setfilterProduct] = useState([]);
    const[backCol, setbackCol] = useState('');
    const [listCol, setListCol]=useState([]);
    const[categories, setCategories] = useState([]);


    const MyButton = styled(Button)({
      margin: '30px',
      width: '20%',
      height: '50px',
    });
    const ButtonView = styled(Button) ({
        justifyContent: 'center',
        width: '20%'
    });
    const MyCard = styled(Card)({
      width: '400px',
      margin: '20px',
      border: '1px solid rgb(71, 71, 71);',
      '&:hover': {
        border: '2px solid',
        backgroundColor: '#DCDCDC',
        borderColor: '#ADD8E6',
        boxShadow: 'none',
      },
      backgroundColor: backCol,
    });
    const MyCardAction = styled(CardActions) ({
        justifyContent: 'center',
        margin: '0 0 0 25px',
        padding: '0 0 0 15px',
        height: '10px'
    });
    const changeBackground = (index) => {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      setbackCol(randomColor);
      const found = listCol.find((item) => {
        if (item === index){
          console.log('item: ' + item);
          return true;
        }
        return false;
      });
      
        
      if (!found)
        {
          console.log('ddd')
        const t=[...listCol, index];
        console.log(t);
        setListCol(t);
        }
      
      
    };

  useEffect(() => {
    setTimeout(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                setProducts(json);
                //const extractedCategories = json
                //.map(product => product.category);
                //setCategories(extractedCategories);
                //const uniqueCategories = [...new Set(extractedCategories)];
                //const filterCat = extractedCategories.filter((value, index, array) => array.indexOf(value) === index);
                //const uniqueCategoriesArray = Array.from(uniqueCategories);
                const extractedCategories = json.map(product => product.category.name);
                const uniqueCategories = [...new Set(extractedCategories)];
                console.log("uniqueCategories");
                console.log(uniqueCategories);
                setCategories(uniqueCategories);
                //setCategories(filterCat);
                setIsLoading(false);
            });
    }, 2000);
  }, []);

  
  

  useEffect(() => {
    const tmp = products.filter(item => item.title.includes(textFilter));
   // console.log(tmp);
    setfilterProduct(tmp);
  }, [textFilter, products]); 

    return <div className={styles_api.main}>
        {isLoading ? (<div className={styles_api.divLoad}><Loading /></div>) : (
        <div className={styles_api.main}>
           
           <h1>API</h1>  
        <div className={styles.div_wt_filter}>
          <div className={styles.textfil}><TextField id="filled-basic" label="Filter" variant="filled" onChange={(e) => settextFilter(e.target.value)}/></div>
        </div>
    <div>
    {categories.map((category) => (
        
    <Accordion key={category.id}>
        <AccordionSummary>
      <Typography>{category}</Typography> 
         </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
    </Accordion>
))}


        
      
    </div>
        <div className={styles_api.div_list}>
                {filterProduct.slice(0, visibleApi).map((item, index) => (
                    <MyCard key={index} sx={{height: 550}}>
                        <CardContent>
                            <Product_API product={item}></Product_API>
                        </CardContent>
                        <MyCardAction >
                            <ButtonView variant="contained" onClick={() => {setTextModal(item.description); setTextTitle(item.title); handleOpen();}}>View</ButtonView>
                            
                        </MyCardAction>
                    </MyCard>
                ))}
            </div><div className={styles_api.div_btn}>
                    {visibleApi < filterProduct.length && (
                        <MyButton onClick={ShowMore} variant="contained">Еще</MyButton>
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
      {textTitle}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {textModal}
    </Typography>
  </Box>
</Modal>
    </div>
}
export default API;