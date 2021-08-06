import React from 'react';
import Card from './Card';

const CardContainer = ({menuData}) => {

    
    return (
       <>

       <section>
       <Card menuData={menuData}/>
       </section>
           
       </>
    )
}

export default CardContainer;
