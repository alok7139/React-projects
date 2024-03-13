import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { Delete ,ADD , Remove} from '../redux/actions/action';

function CardDetails() {

  const [data, setdata] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getdata = useSelector((state) => state.cartreducer.carts);
  //  console.log(getdata)
   const {id} = useParams();
  //  console.log(id);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setdata(comparedata);
  }

  // add data
  const send = (element) => {
    // console.log(element)
   dispatch(ADD(element))
}

  const dlt = (id) => {
    dispatch(Delete(id))
    navigate('/');
  }

  const removeqnty = (item) => {
    dispatch(Remove(item))
  }

  useEffect(() => {
    compare();
  } , [id])

  return (
   <>
   <div className='container mt-2'>
    <h2 className='text-center '>Items Details page</h2>


    <section className='container mt-3'>
      <div className='iteamsdetails'>
        {
          data.map((item) => {
            return (
              <>
               <div className='items_img'>
           <img
             src={item.imgdata}
             alt='addimage'
           />
         </div>
         <div className='details'>
          <Table>
            <tr>
              <td>
                 <p><strong>Restaurant:</strong>{item.rname}</p>
                 <p><strong>Price:</strong> {item.price} Rs</p>
                 <p><strong>Dishes:</strong> {item.address}</p>
                 <p><strong>Total:</strong>{item.price * item.qnty} Rs</p>
                 <div className='mt-5 d-flex justify-content-between align-items-center  ' style={{width:100 , cursor:'pointer', background:'#ddd' , color:'#111'}}>
                   <span style={{fontSize:24}} onClick={item.qnty <= 1 ? () => dlt(item.id) : () => removeqnty(item)}>-</span>
                   <span style={{fontSize:22}}>{item.qnty}</span>
                   <span style={{fontSize:24}} onClick={() => send(item)}>+</span>
                 </div>
              </td>
              <td>
                <p><strong>Rating:</strong> <span style={{background:'green' , color:'#fff' , padding:"2px 5px", borderRadius:'5px'}}> {item.rating}★</span></p>
                <p><strong>Order Review:</strong> <span >{item.somedata}</span></p>
                <p><strong>Remove:</strong> <span ><i className='fas fa-trash' style={{color:'red' , fontSize:20 , cursor:'pointer'}} onClick={() => dlt(item.id)}></i></span></p>
              </td>
            </tr>
          </Table>
           
          </div>
              </>
            )
          })
        }
         
      </div>

    </section>

   </div>
   </>
  )
}

export default CardDetails
