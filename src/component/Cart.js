import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../slices/cart-slice';
    function Cart() {
        const cart=useSelector(state=>state.cart);
        const dispatch=useDispatch();
        const totalPrice=cart.reduce((acc,product)=>{
            acc +=product.price * product.quantity;
            return acc;
        },0)
    return (
        <Container>
            <h1> Welcome To Cart</h1>
            <Button variant='primary' className='mb-3' onClick={()=>dispatch(clear())}>Clear Cart</Button>
            <h5>Total Price: {totalPrice.toFixed(2)} $</h5>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product)=>(
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td><Image src={product.image} alt={product.title} style={{width:"100px", height:"100px"}}/></td>
                    <td>{product.price}$</td>
                    <td>{product.quantity}</td>
                    <td><Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))}>Delete</Button></td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
    }

export default Cart
