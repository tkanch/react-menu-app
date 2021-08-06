import React,{useState} from 'react';
import CardContainer from './components/basics/CardContainer';
import Navbar from './components/basics/Navbar';
import Menu from './data/menuApi';

const App = () => {
  
  //defining useState hooks
  const [menuData,setMenuData]=useState(Menu)

  //defining function filtercategory
  const filterCategory =(cat)=>{
    
    if(cat !=="All") {
      const updatedList=Menu.filter((curEl)=>{
        return curEl.category===cat;
        
      })
      setMenuData(updatedList);
      
    } else {
    setMenuData(Menu);
  }
  
}

 return (
    <>
    <Navbar filterCategory={filterCategory} Menu={Menu}/>
    <CardContainer menuData={menuData} />
    </>
  )
}




export default App;


