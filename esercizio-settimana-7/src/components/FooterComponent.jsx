import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';

export default function FooterComponent() {
  return (
    <footer className="container-fluid mt-5 pt-5 ">        
        <div className="container mt-5 pt-5">                
            <div className="row mb-4">
                <div className="col-12 ">
                    <a href="#"><MDBIcon fab icon="facebook" className="text-secondary fs-2 me-lg-5" /></a>
                    <a href="#"><MDBIcon fab icon="instagram" className="text-secondary fs-2 me-lg-5" /></a>
                    <a href="#"><MDBIcon fab icon="twitter" className="text-secondary fs-2 me-lg-5" /></a>
                    <a href="#"><MDBIcon fab icon="youtube" className="text-secondary fs-2" /></a>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-3">
                    <h6 className="text-secondary mb-4">Audio and Subtitles</h6>
                    <h6 className="text-secondary mb-4">Media Center</h6>
                    <h6 className="text-secondary mb-4">Privacy</h6>
                    <h6 className="text-secondary mb-4">Contact Us</h6>
                </div>
                <div className="col-3">
                    <h6 className="text-secondary mb-4">Audio Description</h6>
                    <h6 className="text-secondary mb-4">Investor Relations</h6>
                    <h6 className="text-secondary mb-4">Legal Notices</h6>
                </div>
                <div className="col-3">
                    <h6 className="text-secondary mb-4">Help Center</h6>
                    <h6 className="text-secondary mb-4">Jobs</h6>
                    <h6 className="text-secondary mb-4">Cookie Preferences</h6>
                </div>
                <div className="col-3">
                    <h6 className="text-secondary mb-4">Gift Cards</h6>
                    <h6 className="text-secondary mb-4">Term of Use</h6>
                    <h6 className="text-secondary mb-4">Corporate Information</h6>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <button className="btn border-secondary text-secondary rounded-0">Service Code</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h6 className="text-secondary"><MDBIcon far icon="copyright" className="text-secondary" />1997-2019 Netflix, Inc. </h6>
                </div>
            </div>
        </div>
    </footer>
  )
}
