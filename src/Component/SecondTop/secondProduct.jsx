import { Grid } from "@material-ui/core"
import ProductCom from '../Product/ProductCom';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
     grid: {
         width: '100%',
         margin: '0px',
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
 
     },
     GeneralGridCover: {
         marginLeft: "1px",
 
     }
 
 }))

const productClothes = [
     { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth1.jpg" },
     { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth2.jpg" },
     { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth3.jpg" },
     { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/Clothes/cloth4.jpg" },
];


const SecondProduct = () => {

     const classes = useStyles();

     return (

          <div className="GeneralGrid_Wrapper">
            <h1 className="header-text">Buy From Us Now</h1>
            <h1 className="header-text">Get The Best Prices Of All Our Products</h1>
            <div className={classes.GeneralGridCover}>
                <Grid container spacing={1} className={classes.grid}>
                    {productClothes.map((e) => (
                            <Grid item key={e.id} xs={6} sm={3} md={3} lg={3}>
                               <ProductCom product={e} />
                            </Grid>

                    ))}
                </Grid>
            </div>
            <Link to="/" className="button-wrapper-link">
                <div className="button-wrapper">
                    <h3 className="button-wrapper_text">View More Products</h3>
                </div>
            </Link>
        </div>

          // <main>

          //      <Grid container className="secondGrid" spacing={3}>
          //           {productClothes.map((e) => (

          //                <Link to={{
          //                     pathname: "/display",
          //                     state: {
          //                          product: e
          //                     }
          //                }}>
          //                     <Grid item key={e.id} xs={6} sm={6} md={6} lg={6} className="grid-item-second">
          //                          <ProductCom product={e} />
          //                     </Grid>

          //                </Link>

          //           ))
          //           };

          //       </Grid>
          // </main>
     );
}

export default SecondProduct;