import React from 'react'
import './css/navbar.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Follow Me On Social Media :</p>
      <div className='sosmed'>
        <a target='_blank' href='https://www.instagram.com/zulfansyahidan/'> <InstagramIcon fontSize='large' /> </a>
        <a target='_blank' href='https://www.facebook.com/zulfan.alfarra'> <FacebookIcon fontSize='large' /> </a>
        <a target='_blank' href='https://twitter.com/maranzano26'> <TwitterIcon fontSize='large' /> </a>
      </div>
      <p>&copy; 2022 ZullfanSyahidanAlfarra</p>
    </div>
  )
}

export default Footer