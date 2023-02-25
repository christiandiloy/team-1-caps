import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";

function ContactUsNow() {
  return (
    <div className="container">
      <div  className="w-100">
      <form id="form" className="text-center" style={{ width: "70%", margin: '20px auto' }} action="https://api.web3forms.com/submit" method="POST">
        <h2>Contact us</h2>
        <MDBInput type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/>

        <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />

        <MDBInput
          type="email"
          label="Email address"
          v-model="email"
          wrapperClass="mb-4"
        />

        <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" />

        <MDBTextArea wrapperClass="mb-4" label="Message" />
        <MDBInput type="hidden" name="redirect" value="https://web3forms.com/success"/>

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center"
          label="Send me copy"
        />
        <MDBInput type="hidden" name="access_key" value="01c11f53-d5b4-42fb-9f76-b7eabcd6b19b"/>
        <MDBBtn color="primary" block className="my-4">
          Send
        </MDBBtn>
      </form>
      </div>
      <div className="col-md-6"  style={{ width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.3139815268446!2d120.15195425121912!3d14.975265871746581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d603e4389571%3A0x4e5c3ef1a2f05faf!2sBarangay%20Consuelo%20Sur!5e0!3m2!1sen!2sph!4v1676899340416!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{border: 0, margin: 'auto'}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUsNow;
