import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminSideNavbar from './AdminSideNavbar'
import AdminTopNavBar from './AdminTopNavBar'
const AdminReview = () => {
  return (
    <>
    {/* **************** MAIN CONTENT START **************** */}
<main>
  {/* Sidebar START */}
  <AdminSideNavbar/>

 
  {/* Page content START */}
  <div className="page-content">
 <AdminTopNavBar/>
      

    {/* Top bar END */}
    {/* Page main content START */}
    <div className="page-content-wrapper border">
      {/* Title */}
      <div className="row mb-3">
        <div className="col-12">
          <h1 className="h3 mb-0">Reviews</h1>
        </div>
      </div>
      {/* All review table START */}
      <div className="card card-body bg-transparent pb-0 border mb-4">
        {/* Table START */}
        <div className="table-responsive border-0">
          <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
            {/* Table head */}
            <thead>
              <tr>
                <th scope="col" className="border-0 rounded-start">#</th>
                <th scope="col" className="border-0">Student Name</th>
                <th scope="col" className="border-0">Course Name</th>
                <th scope="col" className="border-0">Rating</th>
                <th scope="col" className="border-0">Hide/Show</th>
                <th scope="col" className="border-0 rounded-end">Action</th>
              </tr>
            </thead>
            {/* Table body START */}
            <tbody>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>01</td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="avatar avatar-xs mb-2 mb-md-0">
                      <img src="assets/images/avatar/09.jpg" className="rounded-circle" alt />
                    </div>
                    <div className="mb-0 ms-2">
                      {/* Title */}
                      <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <h6 className="table-responsive-title mb-0"><a href="#">Building Scalable APIs with GraphQL</a></h6>
                </td>
                {/* Table data */}
                <td>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                  </ul>
                </td>
                {/* Table data */}
                <td>
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy1" />
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                    <i className="bi bi-pencil-square" />
                  </a>
                  <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                  <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>02</td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="avatar avatar-xs mb-2 mb-md-0">
                      <img src="assets/images/avatar/01.jpg" className="rounded-circle" alt />
                    </div>
                    <div className="mb-0 ms-2">
                      {/* Title */}
                      <h6 className="mb-0"><a href="#" className="stretched-link">Carolyn Ortiz</a></h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <h6 className="table-responsive-title mb-0"><a href="#">Graphic Design Masterclass</a></h6>
                </td>
                {/* Table data */}
                <td>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                  </ul>
                </td>
                {/* Table data */}
                <td>
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy2" />
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                    <i className="bi bi-pencil-square" />
                  </a>
                  <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                  <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>03</td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="avatar avatar-xs mb-2 mb-md-0">
                      <img src="assets/images/avatar/03.jpg" className="rounded-circle" alt />
                    </div>
                    <div className="mb-0 ms-2">
                      {/* Title */}
                      <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <h6 className="table-responsive-title mb-0"><a href="#">JavaScript: Full Understanding</a></h6>
                </td>
                {/* Table data */}
                <td>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                  </ul>
                </td>
                {/* Table data */}
                <td>
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy3" />
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                    <i className="bi bi-pencil-square" />
                  </a>
                  <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                  <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>04</td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="avatar avatar-xs mb-2 mb-md-0">
                      <img src="assets/images/avatar/04.jpg" className="rounded-circle" alt />
                    </div>
                    <div className="mb-0 ms-2">
                      {/* Title */}
                      <h6 className="mb-0"><a href="#" className="stretched-link">Billy Vasquez</a></h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <h6 className="table-responsive-title mb-0"><a href="#">Time Management Mastery: Do More, Stress Less</a></h6>
                </td>
                {/* Table data */}
                <td>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                  </ul>
                </td>
                {/* Table data */}
                <td>
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy4" />
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                    <i className="bi bi-pencil-square" />
                  </a>
                  <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                  <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>05</td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="avatar avatar-xs mb-2 mb-md-0">
                      <img src="assets/images/avatar/05.jpg" className="rounded-circle" alt />
                    </div>
                    <div className="mb-0 ms-2">
                      {/* Title */}
                      <h6 className="mt-2"><a href="#" className="stretched-link">Jacqueline Miller</a></h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <h6 className="table-responsive-title mb-0"><a href="#">The complete Digital Marketing Course - 8 Course in 1</a></h6>
                </td>
                {/* Table data */}
                <td>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                  </ul>
                </td>
                {/* Table data */}
                <td>
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy5" />
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                    <i className="bi bi-pencil-square" />
                  </a>
                  <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                  <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>06</td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="avatar avatar-xs mb-2 mb-md-0">
                      <img src="assets/images/avatar/06.jpg" className="rounded-circle" alt />
                    </div>
                    <div className="mb-0 ms-2">
                      {/* Title */}
                      <h6 className="mt-2"><a href="#" className="stretched-link">Amanda Reed</a></h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <h6 className="table-responsive-title mb-0"><a href="#">Microsoft Excel - Excel from Beginner to Advanced</a></h6>
                </td>
                {/* Table data */}
                <td>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                  </ul>
                </td>
                {/* Table data */}
                <td>
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy6" />
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                    <i className="bi bi-pencil-square" />
                  </a>
                  <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                  <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>07</td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="avatar avatar-xs mb-2 mb-md-0">
                      <img src="assets/images/avatar/07.jpg" className="rounded-circle" alt />
                    </div>
                    <div className="mb-0 ms-2">
                      {/* Title */}
                      <h6 className="mt-2"><a href="#" className="stretched-link">Samuel Bishop</a></h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <h6 className="table-responsive-title mb-0"><a href="#">Behavior, Psychology and Care Training</a></h6>
                </td>
                {/* Table data */}
                <td>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                  </ul>
                </td>
                {/* Table data */}
                <td>
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy7" />
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                    <i className="bi bi-pencil-square" />
                  </a>
                  <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                  <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>08</td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="avatar avatar-xs mb-2 mb-md-0">
                      <img src="assets/images/avatar/10.jpg" className="rounded-circle" alt />
                    </div>
                    <div className="mb-0 ms-2">
                      {/* Title */}
                      <h6 className="mb-0"><a href="#" className="stretched-link">Louis Ferguson</a></h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <h6 className="table-responsive-title mb-0"><a href="#">Create a Design System in Figma</a></h6>
                </td>
                {/* Table data */}
                <td>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                  </ul>
                </td>
                {/* Table data */}
                <td>
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy8" />
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                    <i className="bi bi-pencil-square" />
                  </a>
                  <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                    <i className="bi bi-trash" />
                  </button>
                  <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                </td>
              </tr>
            </tbody>
            {/* Table body END */}
          </table>
        </div>
        {/* Table END */}
        {/* Card footer START */}
        <div className="card-footer bg-transparent px-0">
          {/* Pagination START */}
          <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
            {/* Content */}
            <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            {/* Pagination */}
            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
              </ul>
            </nav>
          </div>
          {/* Pagination END */}
        </div>
        {/* Card footer END */}
      </div>
      {/* All review table END */}
      <div className="row g-4">
        {/* Top rated course table START */}
        <div className="col-xxl-7">
          <div className="card bg-transparent border h-100">
            {/* Card header */}
            <div className="card-header bg-lights border-bottom">
              <h5 className="mb-0">Top Rated Courses</h5>
            </div>
            {/* Card body START */}
            <div className="card-body pb-0">
              {/* Table START */}
              <div className="table-responsive border-0">
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 rounded-start">Course Name</th>
                      <th scope="col" className="border-0">Enrolled</th>
                      <th scope="col" className="border-0">Rating</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  {/* Table body START */}
                  <tbody>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="text-center text-sm-start d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/08.jpg" className="rounded" alt /></div>
                        <h6 className="mb-0 ms-2"><a href="#" className="stretched-link">Building Scalable APIs with GraphQL</a></h6>
                      </td>
                      {/* Table data */}
                      <td>2,568</td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                          <i className="bi bi-pencil-square" />
                        </a>
                        <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                          <i className="bi bi-trash" />
                        </button>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="text-center text-sm-start d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/02.jpg" className="rounded" alt /></div>
                        <h6 className="mb-0 ms-2"><a href="#" className="stretched-link">Graphic Design Masterclass</a></h6>
                      </td>
                      {/* Table data */}
                      <td>1,858</td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                          <i className="bi bi-pencil-square" />
                        </a>
                        <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                          <i className="bi bi-trash" />
                        </button>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="text-center text-sm-start d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/04.jpg" className="rounded" alt /></div>
                        <h6 className="mb-0 ms-2"><a href="#" className="stretched-link">Learn Invision</a></h6>
                      </td>
                      {/* Table data */}
                      <td>6,845</td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                          <i className="bi bi-pencil-square" />
                        </a>
                        <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                          <i className="bi bi-trash" />
                        </button>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="text-center text-sm-start d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/07.jpg" className="rounded" alt /></div>
                        <h6 className="mb-0 ms-2"><a href="#" className="stretched-link">Deep Learning with React-Native</a></h6>
                      </td>
                      {/* Table data */}
                      <td>3,845</td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                          <i className="bi bi-pencil-square" />
                        </a>
                        <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                          <i className="bi bi-trash" />
                        </button>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="text-center text-sm-start d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/10.jpg" className="rounded" alt /></div>
                        <h6 className="mb-0 ms-2"><a href="#" className="stretched-link">Bootstrap 5 From Scratch</a></h6>
                      </td>
                      {/* Table data */}
                      <td>1,458</td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Edit">
                          <i className="bi bi-pencil-square" />
                        </a>
                        <button className="btn btn-danger-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Delete">
                          <i className="bi bi-trash" />
                        </button>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                      </td>
                    </tr>
                  </tbody>
                  {/* Table body END */}
                </table>
              </div>
              {/* Table END */}
            </div>
            {/* Card body END */}
            {/* Card footer START */}
            <div className="card-footer bg-transparent">
              {/* Pagination START */}
              <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                {/* Content */}
                <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                {/* Pagination */}
                <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                  <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                    <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                  </ul>
                </nav>
              </div>
              {/* Pagination END */}
            </div>
            {/* Card footer END */}
          </div>
        </div>
        {/* Top rated course table END */}
        {/* Chart START */}
        <div className="col-xxl-5">
          <div className="card bg-transparent border h-100">
            {/* Card header */}
            <div className="card-header bg-lights border-bottom">
              <h5 className="mb-0">Reviews Analytics</h5>
            </div>
            {/* Card body START */}
            <div className="card-body pb-0">
              {/* Chart detail */}
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <div className="bg-success bg-opacity-10 p-4 rounded">
                    <p className="mb-0">Total Positive Review</p>
                    <h5 className="mb-0">85%</h5>
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="bg-danger bg-opacity-10 p-4 rounded">
                    <p className="mb-0">Total Negative Review</p>
                    <h5 className="mb-0">15%</h5>
                  </div>
                </div>
              </div>
              {/* Chart */}
              <div className="mb-3 mb-xl-0 d-flex justify-content-center" id="apexChartPageViews" />
            </div>
            {/* Card body START */}
          </div>
        </div>	
      </div> {/* Row END */}
    </div>
    {/* Page main content END */}
  </div>
  {/* Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}

    </>
  )
}

export default AdminReview