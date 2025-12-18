import { products } from "../data/product";
import CardPr from "../componentss/cardProduct";

function Home(){
    return(
        <div className="row">
            {
                products.map((product)=>{
                    
                   return <CardPr key={product.id} product={product}/>
                })
            }

        </div>
    )
}
export default Home