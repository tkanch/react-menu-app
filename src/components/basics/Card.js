import React from 'react';


const Card = ({menuData}) => {
    
return (

    menuData.map((curEl)=>{
        const {name,description,image,price,id} =curEl
        return (
            <article className="card" key={id}>
                <img src={image} alt={name} />
                <div>
                    <h2>{name}</h2>
                    <p> <span className="border"></span><span className="price">{price}$</span></p>
                    <p>{description}</p>
                    <button>Order Now</button>
                </div>
            </article>
          
        )
        
    })
)
                

}

export default Card;
