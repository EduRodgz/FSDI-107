import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(){
    return(
        <div className="product">
            <img src="./images/boot bands.jpg" alt=""></img>
            <h5>Boot Band</h5>
            <label>Price: 5.88</label>
            <label>Total</label>
            <QuantityPicker/>
            <img src="./images/boots.jpg" alt=""></img>
            <h5>Boots</h5>
            <label>Price: 750.99</label>
            <label>Total</label>
            <QuantityPicker/>
            <img src="./images/blouse.jpg" alt=""></img>
            <h5>Blouse</h5>
            <label>Price: 67.89</label>
            <label>Total</label>
            <QuantityPicker/>
            <img src="./images/cover.jpg" alt=""></img>
            <h5>Cover</h5>
            <label>Price: 35.42</label>
            <label>Total</label>
            <QuantityPicker/>
            <img src="./images/socks.webp" alt=""></img>
            <h5>Socks</h5>
            <label>Price: 23.12</label>
            <label>Total</label>
            <QuantityPicker/>
            <img src="./images/trousers.jpeg" alt=""></img>
            <h5>Trousers</h5>
            <label>Price: 65.79</label>
            <label>Total</label>
            <QuantityPicker/>
            <img src="./images/underwear.jpg" alt=""></img>
            <h5>Underwear</h5>
            <label>Price: 12.66</label>
            <label>Total</label>
            <QuantityPicker/>
        </div>
    )
}


export default Product;