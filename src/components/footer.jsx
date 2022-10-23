import React from "react"
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import Button from 'react-bootstrap/Button';

const Footer = () =>

<footer className="page-footer font-small blue pt-4">
    <div style={{background: "#45a6de", paddingBottom:"20px"}}  className="container-fluid text-center text-md-left" >
        <div className="row">

        <div className="col-md-3 mb-md-1 mb-2">
           
        <p  className='pt-1'>
              
              </p>
            
             

              </div>

            <div style={{textAlign: "center", marginTop: "20px", color:"#DFF6FF"}}  className="col-md-3 mb-md-0 mb-3">
                <h5 style={{color:"#06283D", fontSize:"18px", marginBottom:"15px"}} className="text-uppercase">Subscribe to our newsletter</h5>

                <input placeholder="Email Address" />

                <Button style={{background:"#06283D", marginLeft:"5px"}} variant="primary">Subscribe</Button>{' '}
            </div>

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 style={{marginTop:"20px", color:"#06283D", fontSize:"18px"}} class="text-uppercase">Connect with Us</h5>
  
      
        <img class="fb-img"  src={fb} alt="FB"/>
    
        <img class="insta-img" src={insta} alt="Insta"/>
        </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright: HIPCAMP
</div>

</footer>

export default Footer