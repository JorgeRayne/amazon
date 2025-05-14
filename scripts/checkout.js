import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProduct } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/backend-practice.js';

new Promise((resolve)=>{
    loadProduct(()=>{
        resolve();
    })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

// loadProduct(()=>{
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     })  
// });
