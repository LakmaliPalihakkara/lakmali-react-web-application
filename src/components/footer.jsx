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

            {/* <hr className="clearfix w-100 d-md-none pb-0"/> */}

            {/* <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div> */}

            <div style={{textAlign: "center", marginTop: "20px", color:"#DFF6FF"}}  className="col-md-3 mb-md-0 mb-3">
                <h5 style={{color:"#06283D", fontSize:"18px", marginBottom:"15px"}} className="text-uppercase">Subscribe to our newsletter</h5>

                <input placeholder="Email Address" />

                <Button style={{background:"#06283D"}} variant="primary">Subscribe</Button>{' '}

                {/* <ul  className="list-unstyled">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Services</a></li>
                    <li><a href="#!">Tools</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul> */}
            </div>

            {/* <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div> */}

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 style={{marginTop:"20px", color:"#06283D", fontSize:"18px"}} class="text-uppercase">Connect with Us</h5>
  
      
        <img  style={{marginLeft:"30px", marginRight:"10px", width:"60px", height:"60px"}} class="icon" src={fb} alt="FB"/>
    
        <img style={{width:"60px", height:"60px"}} class="icon"  src={insta} alt="Insta"/>
        </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright: HIPCAMP
</div>

</footer>

export default Footer