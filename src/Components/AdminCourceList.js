import React,{useState,useEffect} from 'react'
import AdminSideNavbar from './AdminSideNavbar';
import AdminTopNavBar from './AdminTopNavBar';
import { Link } from 'react-router-dom';


function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => { 
    let start = 0;
    // Check if the end value is greater than 0
    if (end > 0) {
      let incrementTime = Math.abs(Math.floor(duration / end)); // Calculate increment time per number

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [end, duration]);

  return <h2 className="mb-0 fs-1">{count}</h2>;
}

const AdminCourceList = () => {
  return (
    <>
{/* **************** MAIN CONTENT START **************** */}
<main>
  <AdminSideNavbar/>
  {/* Page content START */}
  <div className="page-content">
   <AdminTopNavBar/>
    {/* Page main content START */}
    <div className="page-content-wrapper border">
      {/* Title */}
      <div className="row mb-3">
        <div className="col-12 d-sm-flex justify-content-between align-items-center">
          <h1 className="h3 mb-2 mb-sm-0">Courses</h1>
          <Link to="/instructorcreatecourses" className="btn btn-sm btn-primary mb-0">Create a Course</Link>
        </div>
      </div>
      {/* Course boxes START */}
      <div className="row g-4 mb-4">
      {/* Total Courses */}
      <div className="col-sm-6 col-lg-4">
        <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
          <h6>Total Courses</h6>
          <Counter end={1200} duration={2000} />
        </div>
      </div>

      {/* Activated Courses */}
      <div className="col-sm-6 col-lg-4">
        <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
          <h6>Activated Courses</h6>
          <Counter end={996} duration={2000} />
        </div>
      </div>

      {/* Pending Courses */}
      <div className="col-sm-6 col-lg-4">
        <div className="text-center p-4  bg-warning bg-opacity-15 border border-warning rounded-3">
          <h6>Pending Courses</h6>
          <Counter end={200} duration={2000} />
        </div>
      </div>
    </div>
      {/* Course boxes END */}
      {/* Card START */}
      <div className="card bg-transparent border">
        {/* Card header START */}
        <div className="card-header bg-lights border-bottom">
          {/* Search and select START */}
          <div className="row g-3 align-items-center justify-content-between">
            {/* Search bar */}
            <div className="col-md-8">
              <form className="rounded position-relative">
                <input className="form-control bg-body" type="search" placeholder="Search" aria-label="Search" />
                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                  <i className="fas fa-search fs-6 " />
                </button>
              </form>
            </div>
            {/* Select option */}
            <div className="col-md-3">
              {/* Short by filter */}
              <form>
                <select className="form-select js-choice border-0 z-index-9" aria-label=".form-select-sm">
                  <option value>Sort by</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </form>
            </div>
          </div>
          {/* Search and select END */}
        </div>
        {/* Card header END */}
        {/* Card body START */}
        <div className="card-body">
          {/* Course table START */}
          <div className="table-responsive border-0 rounded-3">
            {/* Table START */}
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              {/* Table head */}
              <thead>
                <tr>
                  <th scope="col" className="border-0 rounded-start">Course Name</th>
                  <th scope="col" className="border-0">Instructor</th>
                  <th scope="col" className="border-0">Added Date</th>
                  <th scope="col" className="border-0">Type</th>
                  <th scope="col" className="border-0">Price</th>
                  <th scope="col" className="border-0">Status</th>
                  <th scope="col" className="border-0 rounded-end">Action</th>
                </tr>
              </thead>
              {/* Table body START */}
              <tbody>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/08.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Building Scalable APIs with GraphQL</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Lori Stevens</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>28 Oct 2021</td>
                  {/* Table data */}
                  <td> <span className="badge text-bg-primary">Beginner</span> </td>
                  {/* Table data */}
                  <td>$350</td>
                  {/* Table data */}
                  <td> <span className="badge bg-warning bg-opacity-15 text-warning">Pending</span> </td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0">Approve</Link>
                    <button className="btn btn-sm btn-secondary-soft mb-0">Reject</button>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/10.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Bootstrap 5 From Scratch</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Billy Vasquez</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>16 Oct 2021</td>
                  {/* Table data */}
                  <td> <span className="badge text-bg-purple">Intermediate</span> </td>
                  {/* Table data */}
                  <td>$256</td>
                  {/* Table data */}
                  <td>
                    <span className="badge bg-warning bg-opacity-15 text-warning">Pending</span>
                  </td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0">Approve</Link>
                    <button className="btn btn-sm btn-secondary-soft mb-0">Reject</button>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/02.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Graphic Design Masterclass</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Carolyn Ortiz</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>28 Aug 2021</td>
                  {/* Table data */}
                  <td> <span className="badge text-bg-orange">All level</span> </td>
                  {/* Table data */}
                  <td>$347</td>
                  {/* Table data */}
                  <td>
                    <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                  </td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</Link>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/04.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Learn Invision</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Frances Guerrero</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>15 June 2021</td>
                  {/* Table data */}
                  <td> <span className="badge text-bg-orange">All level</span> </td>
                  {/* Table data */}
                  <td>$445</td>
                  {/* Table data */}
                  <td>
                    <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                  </td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</Link>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/06.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Angular – The Complete Guider</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Louis Ferguson</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>10 Dec 2020</td>
                  {/* Table data */}
                  <td> <span className="badge text-bg-purple">Intermediate</span> </td>
                  {/* Table data */}
                  <td>$165</td>
                  {/* Table data */}
                  <td>
                    <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                  </td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</Link>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/09.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">JavaScript: Full Understanding</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Samuel Bishop</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>09 Nov 2020</td>
                  {/* Table data */}
                  <td> <span className="badge text-bg-primary">Beginner</span> </td>
                  {/* Table data */}
                  <td>$575</td>
                  {/* Table data */}
                  <td>
                    <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                  </td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</Link>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/11.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Build Responsive Websites with HTML</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Dennis Barrett</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>21 Aug 2020</td>
                  {/* Table data */}
                  <td> <span className="badge text-bg-primary">Beginner</span> </td>
                  {/* Table data */}
                  <td>$268</td>
                  {/* Table data */}
                  <td>
                    <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                  </td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</Link>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/12.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Build Websites with CSS</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center mb-3">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Joan Wallace</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>02 April 2020</td>
                  {/* Table data */}
                  <td> <span className="badge text-bg-orange">All level</span> </td>
                  {/* Table data */}
                  <td>$370</td>
                  {/* Table data */}
                  <td>
                    <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                  </td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</Link>
                  </td>
                </tr>
              </tbody>
              {/* Table body END */}
            </table>
            {/* Table END */}
          </div>
          {/* Course table END */}
        </div>
        {/* Card body END */}
        {/* Card footer START */}
        <div className="card-footer bg-transparent pt-0">
          {/* Pagination START */}
          <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
            {/* Content */}
            <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            {/* Pagination */}
            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li className="page-item mb-0"><Link className="page-link" to="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                <li className="page-item mb-0"><Link className="page-link" to="#">1</Link></li>
                <li className="page-item mb-0 active"><Link className="page-link" to="#">2</Link></li>
                <li className="page-item mb-0"><Link className="page-link" to="#">3</Link></li>
                <li className="page-item mb-0"><Link className="page-link" to="#"><i className="fas fa-angle-right" /></Link></li>
              </ul>
            </nav>
          </div>
          {/* Pagination END */}
        </div>
        {/* Card footer END */}
      </div>
      {/* Card END */}
    </div>
    {/* Page main content END */}
  </div>
  {/* Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}


    </>
  )
}

export default AdminCourceList