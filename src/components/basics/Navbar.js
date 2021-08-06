import React from 'react'


const Navbar = ({filterCategory,Menu}) => {

    
   const categoryList=[...new Set(Menu.map((el)=>{
       return el.category;
   }))]

 //console.log(categoryList);
    
    return (
        
        <nav>
            <ul>
            {
                categoryList.map((category)=>{
                    return (
                        <li><button onClick={()=>{filterCategory(category)}}>{category}</button></li>
                    )
                })
            }
                
                     <li><button onClick={()=>{filterCategory('All')}}>All</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;
