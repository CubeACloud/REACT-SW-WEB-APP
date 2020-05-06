import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './css/contact.css';
import Fater from './footer';
import AllNav from '../allNav';



class Contact extends Component {
  constructor() {
super()
function lol() {
  alert("dsadsa")
}
  }
  render() {
    return(
      
//  <body className="contact-body">
//       <div className="container contact-form ">
//       <div className="contact-image">
//           <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
//       </div>
//       <form method="post">
//           <h3>Drop Us a Message</h3>
//          <div className="row">
//               <div className="col-md-6">
//                   <div className="form-group">
//                       <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
//                   </div>
//                   <div className="form-group">
//                       <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
//                   </div>
//                   <div className="form-group">
//                       <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
//                   </div>
//                   <div className="form-group">
//                       <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
//                   </div>
//               </div>
//               <div className="col-md-6">
//                   <div className="form-group">
//                       <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{'width': '100%', 'height': '150px'}}></textarea>
//                   </div>
//               </div>
//           </div>
//       </form>
// </div>
// </body>

<div>
<AllNav/> 
<br/> <br/> 
<section id="features" class="features section-bg">
      <div class="container">

        <div class="section-title">
          <h2 data-aos="fade-in">Features</h2>
          <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row content">
          <div class="col-md-5" data-aos="fade-right">
            <img src="/images/main web/fiverr.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-7 pt-4" data-aos="fade-left">
            <h3>VISIT OUR VARIOUS GIG'S ON FIVERR!</h3>
            <p class="font-italic">
            We are available on fiver 
book us now!
            </p>
            {/* <ul>
              <li><i class="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            </ul> */}
            <p>
            On fiver you can find our "gigs" with various packages including basic, standard & premium depends on you and your needs we provide our services in budget friendly prices. 
            </p>
          </div>
        </div>

        <div class="row content">
          <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
            <img src="images/main web/github.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>JOIN OUR GITHUB</h3>
            <p class="font-italic">
            You can visit us on github for any collabs or dev support            </p>
            <p>
            Stop wandering around for programming lessons, visit our github to polish your programming skills by simply exploring our coding lessons for free, as a community thats what we do.
            </p>
          </div>
        </div>

       
      </div>
    </section>

{/* contact form	 */}
	<section>
  <div className="container contact">
	<div className="row">
		<div className="col-md-3">
			<div className="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-2" for="fname">First Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="lname">Last Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="comment">Comment:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment"></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>
</section>




<br/><br/><br/>
<br/><br/><br/>
<br/><br/><br/>
<br/><br/><br/>
<div>
<br/><br/><br/>
<br/>
<br/><br/><br/>
<Fater/>
</div>
</div>

    )
  }
}

export default Contact;
