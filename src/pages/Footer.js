import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Components/styles/Footer.css'

function footer(){
return(
  <div className='footer' >
      <div className='socialMedia'>
          < FacebookIcon /> < InstagramIcon /> <TelegramIcon /> <YouTubeIcon />
      </div>
      <p> &Copy 2023 tourism company.com</p>

  </div> 
)

}
export default footer;