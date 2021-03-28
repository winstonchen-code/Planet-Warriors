import React from 'react'
import './Footer.css';
import PlanetWarriorLogo from '../../images/planet-warrior-logo.png'

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
       
          
          <div className="footer-left">
          <img src={PlanetWarriorLogo} width="150px" />
          <br />
          <h3 class="footer-company-name">Planet Warrior © 2021</h3>
          </div>

        <div className="footer-center">
          <center><h3>Project Built By: </h3></center>
            <p class="footer-links">
              <a href="https://www.linkedin.com/in/winston-c/" class="link-1" target="_blank">Winston Chen</a>
              
              <a href="https://www.linkedin.com/in/chi-nguyen-swe/" target="_blank">Chi Nguyen</a>
            
              <a href="https://www.linkedin.com/in/kirstybrewster/" target="_blank">Kirsty Brewster</a>
            
              <a href="https://www.linkedin.com/in/maryannnavarrete/" target="_blank">Mary Ann Navarrete</a>
      
            </p>
           
          </div>

          <div className="footer-right">
            
          </div>

      
      </footer>
      
    </>
  )
}

export default Footer
