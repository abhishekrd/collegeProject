
import React, { Component } from 'react';

const Footer = () => {
    return (
        <div class="footer">
        <div class="inner-footer">
      
          <div class="footer-items">
            <h3>Quick Links</h3>
            <div class="border1"></div> 
              <ul>
                <a href="/"><li>Home</li></a>
                <a href="/upload"><li>Upload</li></a>
                
              </ul>
          </div>
      
          <div class="footer-items">
            <h3>Student developers</h3>
            <div class="border1"></div>  
              <ul>
                <a href="#"><li>Abhishek Dhanke</li></a>
                <a href="#"><li>Utkarsh Jaulkar</li></a>
              </ul>
          </div>
      
      
          <div class="footer-items">
            <h3>Mentor</h3>
            <div class="border1"></div>
              <ul>
                <li><i class="fa fa-map-marker" aria-hidden="true"></i>Prof. Shailaja Lohar</li>
                
              </ul> 
            
      
              <div class="social-media">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-google-plus-square"></i></a>
              </div> 
          </div>
        </div>
        
      
        <div class="footer-bottom">
          Copyright &copy; JSPM's RSCOE Pune 2022.
        </div>
      </div>
    );
}

export default Footer;