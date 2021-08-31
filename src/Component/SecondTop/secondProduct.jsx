import { Grid } from "@material-ui/core"
import ProductCom from '../Product/ProductCom';
import { Link } from 'react-router-dom';

const secondProduct = ({ section }) => {


     const productClothes = [
          { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth1.jpg" },
          { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth2.jpg" },
          { id: 1, name: 'Shoes', description: 'Running Shoes', price: "$10", image: "image/Clothes/cloth3.jpg" },
          { id: 2, name: 'MacBook', description: 'Apple MacBook', price: "$50", image: "image/Clothes/cloth4.jpg" },
     ];


     return (
          <main>

               <Grid container className="secondGrid" spacing={3}>
                    {productClothes.map((e) => (

                         <Link to={{
                              pathname: "/display",
                              state: {
                                   product: e
                              }
                         }}>
                              <Grid item key={e.id} xs={6} sm={6} md={6} lg={6} className="grid-item-second">
                                   <ProductCom product={e} />
                              </Grid>

                         </Link>

                    ))
                    };

                </Grid>
          </main>
     );
}

export default secondProduct;