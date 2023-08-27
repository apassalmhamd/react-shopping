import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/products-slices';
import { addToCart } from '../slices/cart-slice';
    function Products() {
        const products=useSelector((state)=>state.products);
        // console.log(products);
        const dispatch=useDispatch();

        useEffect(()=>{
            dispatch(fetchProducts());
        },[]);
        return (
            <Container className='py-2'>
                <div className='row py-2' >
                    {products.map((product)=>(<div className='col' key={product.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
                            <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                {product.price} $
                            </Card.Text>
                            <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
            </div>))}
                    
                    
                </div>
            </Container>
        )
    }

export default Products
