import React from 'react'
import "../../dist/css/NavBar.css"
import gsap from "gsap"

function NavBar() {

  const handleClick = () =>{
    const menu = document.querySelector(".resp-nav");
    menu.classList.toggle("active")
  }

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='nav-con'>
          <ul className='nav-links'>
            <a href='#skills'><li className='link'>Skills</li></a>
            <a href='#projects'><li className='link'>Projects</li></a>
            <svg className='nav-svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.90451 6.92144C8.41341 6.45495 8.44779 5.66424 7.9813 5.15534C7.51481 4.64645 6.7241 4.61207 6.2152 5.07856L7.90451 6.92144ZM1.46194 11.1314L2.3066 12.0529L2.3066 12.0529L1.46194 11.1314ZM1.46194 11.8686L2.3066 10.9471L2.3066 10.9471L1.46194 11.8686ZM6.2152 17.9214C6.7241 18.3879 7.51481 18.3536 7.9813 17.8447C8.44779 17.3358 8.41341 16.545 7.90451 16.0786L6.2152 17.9214ZM6.2152 5.07856L0.617287 10.21L2.3066 12.0529L7.90451 6.92144L6.2152 5.07856ZM0.617287 12.79L6.2152 17.9214L7.90451 16.0786L2.3066 10.9471L0.617287 12.79ZM0.617287 10.21C-0.139356 10.9036 -0.139356 12.0964 0.617287 12.79L2.3066 10.9471C2.63087 11.2444 2.63087 11.7556 2.3066 12.0529L0.617287 10.21Z" fill="#FFFF"></path> <path d="M16.0557 16.0786C15.5468 16.545 15.5125 17.3358 15.9789 17.8447C16.4454 18.3536 17.2361 18.3879 17.745 17.9214L16.0557 16.0786ZM22.4983 11.8686L21.6537 10.9471L21.6537 10.9471L22.4983 11.8686ZM22.4983 11.1314L21.6537 12.0529L21.6537 12.0529L22.4983 11.1314ZM17.745 5.07856C17.2361 4.61207 16.4454 4.64645 15.979 5.15534C15.5125 5.66424 15.5468 6.45495 16.0557 6.92144L17.745 5.07856ZM17.745 17.9214L23.343 12.79L21.6537 10.9471L16.0557 16.0786L17.745 17.9214ZM23.343 10.21L17.745 5.07856L16.0557 6.92144L21.6537 12.0529L23.343 10.21ZM23.343 12.79C24.0996 12.0964 24.0996 10.9036 23.343 10.21L21.6537 12.0529C21.3294 11.7556 21.3294 11.2444 21.6537 10.9471L23.343 12.79Z" fill="#FFFF"></path> <path d="M15.2127 3.80317C15.3801 3.13343 14.9729 2.45476 14.3032 2.28732C13.6334 2.11989 12.9548 2.52709 12.7873 3.19683L15.2127 3.80317ZM8.78732 19.1968C8.61989 19.8666 9.02709 20.5452 9.69683 20.7127C10.3666 20.8801 11.0452 20.4729 11.2127 19.8032L8.78732 19.1968ZM12.7873 3.19683L8.78732 19.1968L11.2127 19.8032L15.2127 3.80317L12.7873 3.19683Z" fill="#FFFF"></path> </g></svg>
            <a href='#experience'><li className='link'>Experience</li></a>
            <a href='#contact-me'><li className='link'>Contact</li></a>
          </ul>
          <svg className='hamburger' onClick={handleClick} width="46" height="46" fill="#FFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 18Z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div className='resp-nav' id='hamburger'>
          <div className='resp-links'>
            <ul className='resp-nav-links'>
              <a href='#skills'><li className='resp-link'>Skills</li></a>
              <a href='#projects'><li className='resp-link'>Projects</li></a>
              <a href='#experience'><li className='resp-link'>Experience</li></a>
              <a href='#contact-me'><li className='resp-link'>Contact</li></a>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar