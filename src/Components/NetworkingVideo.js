import React from 'react'
import { Link } from 'react-router-dom'

const NetworkingVideo = () => {
  return (
   <div> 
  
  <section className="bg-blue align-items-center d-flex" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          {/* Title */}
          <h1 className="text-white">Course Grid Classic</h1>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                <li className="breadcrumb-item"><a href="#">H/W&N/W</a></li>
                <li className="breadcrumb-item active" aria-current="page">H/W&N/W Video</li>
              </ol>
            </nav>
          </div>
        </div> 
      </div>
    </div>
  </section>
  {/* =======================
    Page Banner END */}
  {/* =======================
    Page content START */}
   <div className="d-flex">
  <div className="sidebar">
    <i className="fas fa-home" />
    <i className="fas fa-book" />
    <i className="fas fa-cog" />
  </div>
  <div className="content">
    <div className="courses">
      <div className="d-flex justify-content-between align-items-center">
        <h4>My Videos</h4>
        <p><a href="#">view all videos</a></p>
      </div>
      <div className="video-player">
        <video controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-item">
        <img src="https://placehold.co/50x50" alt="Human-Centered Design" />
        <div className="info">
          <h5>Human-Centered Design</h5>
          <p>60 lessons | 12 reviews</p>
        </div>
      </div>
      <div className="video-item">
      <video controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="info">
      <h5>Input and Interaction</h5>
      <p>45 lessons | 8 reviews</p>
      <p className="description">This video covers essential techniques for effective input and interaction design in digital products.</p>
    </div>
      </div>

      <div className="video-item">
      <video controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="info">
      <h5>Input and Interaction</h5>
      <p>45 lessons | 8 reviews</p>
      <p className="description">This video covers essential techniques for effective input and interaction design in digital products.</p>
    </div>
      </div>


      <div className="video-item blur">
      <video controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="info">
      <h5>Input and Interaction</h5>
      <p>45 lessons | 8 reviews</p>
      <p className="description">This video covers essential techniques for effective input and interaction design in digital products.</p>
    </div>
      </div>


      <div className="video-item blur">
      <video controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="info">
      <h5>Input and Interaction</h5>
      <p>45 lessons | 8 reviews</p>
      <p className="description">This video covers essential techniques for effective input and interaction design in digital products.</p>
    </div>
      </div>

      <div className="video-item blur">
      <video controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="info">
      <h5>Input and Interaction</h5>
      <p>45 lessons | 8 reviews</p>
      <p className="description">This video covers essential techniques for effective input and interaction design in digital products.</p>
    </div>
      </div>

    </div>
    <div className="videos">
      <h4>My Courses</h4>
      <p><a href="#">view all courses</a></p>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">All Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Current</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Archived</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Upcoming</a>
        </li>
      </ul>
      <div className="course-item">
        <img src="https://placehold.co/50x50" alt="UX Design" />
        <div className="info">
          <h5>UX Design</h5>
          <p>Tuesday, June 06, 2019</p>
        </div>
      </div>
      <div className="course-item">
        <img src="https://placehold.co/50x50" alt="Website Design" />
        <div className="info">
          <h5>Website Design</h5>
          <p>Monday, February 07, 2019</p>
        </div>
      </div>
      <div className="course-item">
        <img src="https://placehold.co/50x50" alt="Service Design" />
        <div className="info">
          <h5>Service Design</h5>
          <p>Thursday, November 11, 2019</p>
        </div>
      </div>
      <div className="course-item">
        <img src="https://placehold.co/50x50" alt="Principles of Communication" />
        <div className="info">
          <h5>Principles of Communication</h5>
          <p>Monday, February 02, 2019</p>
        </div>
      </div>
      <div className="course-item">
        <img src="https://placehold.co/50x50" alt="Machine Learning" />
        <div className="info">
          <h5>Machine Learning</h5>
          <p>Wednesday, January 02, 2019</p>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

  )
}

export default NetworkingVideo
