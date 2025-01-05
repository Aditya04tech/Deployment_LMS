import React from 'react'

const VideoPlayer1 = () => {
  return ( 
    <section className="py-0 bg-dark position-relative">
    <div className="row g-0">
      <div className="d-flex">
        <div className="overflow-hidden fullscreen-video w-100">
          {/* Full screen video START */}
          <div className="video-player rounded-3">
            <video controls crossOrigin="anonymous" playsInline poster="assets/images/videos/poster.jpg">
              <source src="assets/images/videos/360p.mp4" type="video/mp4" size={360} />
              <source src="assets/images/videos/720p.mp4" type="video/mp4" size={720} />
              <source src="assets/images/videos/1080p.mp4" type="video/mp4" size={1080} />
              {/* Caption files */}
              <track kind="captions" label="English" srcLang="en" src="assets/images/videos/en.vtt" default />
              <track kind="captions" label="French" srcLang="fr" src="assets/images/videos/fr.vtt" />
            </video>
          </div>
          {/* Full screen video END */}
          {/* Plyr resources and browser polyfills are specified in the pen settings */}
        </div> 
        {/* Page content START */}
        <div className="justify-content-end position-relative">
          {/* Collapse button START */}
          <button className="navbar-toggler btn btn-white mt-4 plyr-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>	
          </button>
          {/* Collapse button END */}
          {/* Collapse body START */}
          <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="card vh-100 overflow-auto rounded-0 w-280px w-sm-400px">
              {/* Title */}
              <div className="card-header bg-light rounded-0">
                <h1 className="mt-2 fs-5">The Complete Digital Marketing Course - 12 Courses in 1</h1>
                <h6 className="mb-0 fw-normal"><a href="#">By Jacqueline Miller</a></h6>
              </div>
              {/* Course content START */}
              <div className="card-body">
                <div className="d-sm-flex justify-content-sm-between">
                  <h5>Course content</h5>
                  {/* Button */}
                  <button type="button" className="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#Notemodal">
                    <i className="bi fa-fw bi-pencil-square me-2" />Add note
                  </button>
                </div>
                <hr /> {/* Divider */}
                {/* Course START */}
                <div className="row">
                  <div className="col-12">
                    {/* Accordion START */}
                    <div className="accordion accordion-flush-light accordion-flush" id="accordionExample">
                      {/* Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span className="mb-0 fw-bold">Introduction of Digital Marketing</span> 
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body px-3">
                            <div className="vstack gap-3">
                              {/* Course lecture */}
                              <div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    </a></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></section>
  
  )
}

export default VideoPlayer1
