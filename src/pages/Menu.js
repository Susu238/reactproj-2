import React from 'react';
import Nature from '../images/img-9.jpg'
import Mountain from '../images/img11.jpg'
import Discover from '../images/img12.jpg'
import "../Components/styles/Menu.css";



function Menu(){
  return(
    <div className='menu'>
      <div className='menuTop' style={{ backgroundImage: `url(${Nature})` }}>

      </div>
      <div className='menuBottom'>
        <h2>Jurney to the nature</h2>
      </div>
      <div className='menuList' style={{ backgroundImage: `url(${Mountain})` }}>

</div>
<div className='menuListTop'>
  <h2>Jurney to the zoo</h2>
</div>
<div className='menuSecond' style={{ backgroundImage: `url(${Discover})` }}>

</div>
<div className='menuSecondBottom'>
  <h2> Discover the nature with our jurneys</h2>
</div>
 
   <button className='btn1'>Choose now</button> </div>
    
  )
}

export default Menu;
