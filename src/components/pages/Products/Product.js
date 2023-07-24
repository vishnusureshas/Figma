import React from 'react'
import './Product.css';



function Product() {
  const data = [{
    image:'https://www.riyoherbsindia.com/media/catalog/product/cache/7df59e3c1fa66a00bb584f5dd6775c5a/3/_/3_278a18e6-08a8-458d-bd70-e6cbdc1bb0bf.jpg',
    title:'plant pots',
    price:'Min 60% off'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEKLoHy6PBUzhK-heH6wiol7_JmudT_QUFQ&usqp=CAU',
      title:'Haire care shamboo',
      price:'Up to 50% off'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIr9gN0PaCbIyrViXz0Z_nDq0xBRPnZa0FBw&usqp=CAU',
      title:'Hair Care Shamboo',
      price:'Up to 50% off'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNLYbC6FJywLtp3iQqHZ1ubrrf9xFlIDr7g&usqp=CAU',
      title:'Storage Box',
      price:'Up to 40% off'
    }
  ]
  return ( 
    <>
    <h2 className='sub-title'>Shop Our Best Sellers</h2>  
  <div className="product-grid">
  
    {
        data.map((item,index) => (
          <div className="product" key={index}>
            <img src={item.image} alt="alternative" />
            <h2 className='title'>{item.title}</h2>
            <p>
              <span className="price">${item.price}</span>
            </p>
          </div>
        ))
    }
</div>
</>

  )
}

export default Product