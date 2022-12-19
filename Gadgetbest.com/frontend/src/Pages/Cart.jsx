import React ,{useState,useEffect}from 'react'
import "./Cart.css"
import {useDispatch,useSelector} from "react-redux"
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"


const TotalPrice=(cart,setTotalPrice,setTotalMrp)=>{
  let totalp=0;
  let totalm=0;
  cart.forEach((item)=>{
    totalm=totalm+(item.price*item.quantity);

  })
  setTotalMrp(totalm);
  setTotalPrice(totalm+Number(100));

}

const getData=()=>{
    return axios.get(`https://odd-dog-pea-coat.cyclic.app/products`)

}
const update=(id,payload)=>{
    return axios.patch(`https://odd-dog-pea-coat.cyclic.app/products/${id}`,payload)
}


const Cart = () => {
//   const dispatch=useDispatch();
//   const cart=useSelector(store=>store.cart);
  const[totalMrp,setTotalMrp]=useState("");
  const [count,setCount]=useState(0)
  const[data,setData]=useState([]);
  const[totalprice,setTotalPrice]=useState("");
  const location=useLocation();
  const navigate=useNavigate();
  const cartItem=data.filter((item)=>item.quantity>0)

//   const handleAddProduct=(id,quantity,price,MRP)=>{
//     const newquantity=quantity+1;
//     dispatch(EditCart(id,{quantity:newquantity}))
//     .then(()=>{
//         dispatch(getCart)
    
//     }).then(()=>{
//       TotalPrice(cart,setTotalPrice,setTotalMrp);
//     }) 
 
//    setCount(prev=>prev+1)
// }


// const handleRemoveProduct=(id,quantity,price,MRP)=>{
//     const newquantity=quantity-1;
//     if(newquantity>0){
//         dispatch(EditCart(id,{quantity:newquantity}))
//         .then(()=>{
//             dispatch(getCart);
//         }).then(()=>{
//           TotalPrice(cart,setTotalPrice,setTotalMrp);
//         })
//     }
   
  
//     setCount(prev=>prev+1)
  
// }


//   useEffect(()=>{
// dispatch(getCart()).then(()=>{
//   TotalPrice(cart,setTotalPrice,setTotalMrp);
// });
// console.log(count)

//   },[dispatch,cart.length,location.search,count])


const handleRemoveProduct=(id,quantity)=>{
    const newquantity=quantity+1;
    const payload={
        quantity:newquantity
    }
       
     update(id,payload)
     getData().then((r)=>{
        setData(r.data)
        TotalPrice(data,setTotalPrice,setTotalMrp);
    }).catch((e)=>{
        console.log(e);
    })
  
   
  
    setCount(prev=>prev+1)
              
}


const handleAddProduct=(id,quantity)=>{
    const newquantity=quantity-1;
    const payload={
        quantity:newquantity
    }
       if(newquantity>0){
     update(id,payload)
     getData().then((r)=>{
        setData(r.data)
        TotalPrice(data,setTotalPrice,setTotalMrp);
    }).catch((e)=>{
        console.log(e);
    })
    }
   
  
    setCount(prev=>prev+1)
              
}



useEffect(()=>{
    getData().then((r)=>{
        setData(r.data)
        TotalPrice(data,setTotalPrice,setTotalMrp);
    }).catch((e)=>{
        console.log(e);
    })
},[count,setData])


const handleNavigate=()=>{
  navigate("/checkout")
}


  return (
    <div className='cart'>
     <br/>
     
      <div className='cartbox'>
        <h1>Order Summery</h1>
        <div>
         <div className='cartproductsbox'>
          <h4>PRODUCTS</h4>
         {
          cartItem.map((item)=>(
            <div className='productcard'>
                <div>
                  <h1>{item.title}</h1>
                  <p>Mfr: TNW International Ltd</p>
                  <h2><span>Rs.{item.price}</span><span>{item.MRP}</span></h2>
                  <h4>Delivery between NOVEMBER 17-NOVEMBER 18</h4>
        
                </div>
                <div>
                  <img src={item.image_url} alt="err" />
                  <div className='countingbox'>
                  <button onClick={()=>handleAddProduct(item._id,item.quantity)}>+</button>
                   <div>{item.quantity}</div>
                 <button onClick={()=>handleRemoveProduct(item._id,item.quantity)}>-</button>
                  </div>
                </div>

              </div>
          ))
         }
         </div>
         <div className='pricesbox'>
              <h4>PRICE DETAILS</h4>
              <div className='promocodebox'>
                <h1>Apply Propmo code</h1>
                <div>
                  <button></button>
                  <div>Apply code</div>
                </div>
                <p><span>Get flat discount! Vouchers applicable in payment options.</span></p>


              </div>
              <div className='totalpricebox'>
                <h1>PAYMENT DETAILS</h1>
                <div className='calculatebox'>
                  <div><span>Mrp total:-</span><span>{totalMrp}</span></div>
                  <div><span>Netmed Discount:-</span><span>-{totalMrp-totalprice}</span></div>
                  <div><span>Total Amount:-</span><span>{totalprice}</span></div>
                </div>
                <div className='totalsave'>
                TOTAL SAVINGS RS.{totalMrp-totalprice}
                </div>
                <div className='finalprice'>
                  <div>
                    <p>TOTAL AMOUNT</p>
                    <h1>Rs.{totalprice}</h1>

                  </div>
                  <button onClick={handleNavigate}>PROCEED</button>
          

                </div>

              </div>
              


         </div>

        </div>

      </div>
   
    
      
    </div>
  )
}

export default Cart