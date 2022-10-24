import React from "react"
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import Button from 'react-bootstrap/Button';

const Footer = () =>

<footer className="page-footer font-small blue pt-4">
    <div id="footer-background" className="container-fluid text-center text-md-left" >
        <div className="row">

        <div className="col-md-3 mb-md-1 mb-2">
           
        <p  className='pt-1'>
              
              </p>
            
             

              </div>

            <div id="subscribe" className="col-md-3 mb-md-0 mb-3">
                <h5 className="subscribe-title">Subscribe to Our Newsletter</h5>

                <input placeholder="Email Address" />

                <Button className="subscribe-btn" variant="primary">Subscribe</Button>{' '}
            </div>

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="social-connect">Connect with Us</h5>
  
      
        <img class="fb-img"  src={fb} alt="FB"/>
    
        <img class="insta-img" src={insta} alt="Insta"/>
        </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright: HIPCAMP
</div>

</footer>

export default Footer