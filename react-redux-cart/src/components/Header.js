import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Delete } from '../redux/actions/action';





function Header() {

  const [price, setprice] = useState(0);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata)

  const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(Delete(id));
    }
    const total = () => {
      let price = 0 ;
      getdata.map((item , k) => {
           price += item.price*item.qnty;
      })
      setprice(price);
    }

    useEffect(() => {
      total();
    },[total])
   

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{height:'70px'}}>
        <Container>
          <NavLink to={'/'} className="text-decoration-none text-white mx-4 "><h2>Food Items</h2></NavLink>
          <Nav className="me-auto">
            <NavLink to={'/'} className="text-decoration-none text-white mx-4"><h4>Home</h4></NavLink>
            
            
          </Nav>
          <Badge badgeContent={getdata.length} color="primary"
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
          >
          <i class="fa-solid fa-cart-shopping text-light" style={{fontSize:26, cursor:'pointer'}}></i>
          </Badge>
          
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getdata.length ? 
          <div className='card_details' style={{width:380}}>
            <Table>
               <thead>
               <i className='fas fa-close smallclose '
          onClick={handleClose}
          style={{position:"absolute", top:3,right:8,fontSize:23,cursor:'pointer'}}></i>
                  <tr>
                    <th>Dishes</th>
                    <th>Restaurant Name</th>
                  </tr>
               </thead>
               <tbody>
                  {
                    getdata.map((e) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img src={e.imgdata} style={{width:'8rem' , height:'5rem'}} alt ={e.title}/>
                              </NavLink>
                               
                            </td>
                            <td>
                               <p>{e.rname}</p>
                               <p>price: {e.price} Rs</p>
                               <p>Quantity: {e.qnty}</p>
                               <p style={{color:'red' , cursor:'pointer',fontSize:20}} onClick={() => dlt(e.id)}>
                                <i className='fas fa-trash smalltrash' ></i>
                               </p>
                            </td>
                            <td className='mt-5' style={{color:'red' , fontSize:'20' , cursor:'pointer'}} onClick={() => dlt(e.id)}>
                            <i className='fas fa-trash largetrash'></i>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }
                  <p className='text-center'>Total: {price} Rs</p>
               </tbody>
            </Table>
          </div> 
          : <div className='card-details d-flex justify-content-center align-items-center  ' style={{width:"20rem" , padding:10 , position:"relative"}}>
          <i className='fas fa-close smallclose '
          onClick={handleClose}
          style={{position:"absolute", top:2,right:20,fontSize:23,cursor:'pointer'}}></i>
          <p style={{fontSize:22}}>😔 Your Cart is Empty</p>
          <img 
          src=""
          alt=''
          />
      </div>
        }
         
      </Menu>
      </Navbar>
  )
}

export default Header
