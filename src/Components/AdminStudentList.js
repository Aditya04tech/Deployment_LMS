import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminSideNavbar from './AdminSideNavbar'
import AdminTopNavBar from './AdminTopNavBar'
const AdminStudentList = () => {
  return (
   <>
   {/* **************** MAIN CONTENT START **************** */}
<main>
  {/* Sidebar START */}
  <AdminSideNavbar/>
    {/* Sidebar END */}
  {/* Page content START */}
  <div className="page-content">
    {/* Top bar START */}
   <AdminTopNavBar/>
    {/* Top bar END */}
    {/* Page main content START */}
    <div className="page-content-wrapper border">
      {/* Title */}
      <div className="row">
        <div className="col-12">
          <h1 className="h3 mb-2 mb-sm-0">Students</h1>
        </div>
      </div>
      <div className="card bg-transparent">
        {/* Card header START */}
        <div className="card-header bg-transparent border-bottom px-0">
          {/* Search and select START */}
          <div className="row g-3 align-items-center justify-content-between">
            {/* Search bar */}
            <div className="col-md-8">
              <form className="rounded position-relative">
                <input className="form-control bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                  <i className="fas fa-search fs-6 " />
                </button>
              </form>
            </div>
            {/* Tab button */}
            <div className="col-md-3">
              {/* Tabs START */}
              <ul className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end" id="pills-tab" role="tablist">
                {/* Grid tab */}
                <li className="nav-item">
                  <a href="#nav-preview-tab-1" className="nav-link mb-0 me-2 active" data-bs-toggle="tab">
                    <i className="fas fa-fw fa-th-large" />
                  </a>
                </li>
                {/* List tab */}
                <li className="nav-item">
                  <a href="#nav-html-tab-1" className="nav-link mb-0" data-bs-toggle="tab">
                    <i className="fas fa-fw fa-list-ul" />
                  </a>
                </li>
              </ul>
              {/* Tabs end */}
            </div>
          </div>
          {/* Search and select END */}
        </div>
        {/* Card header END */}
        {/* Card body START */}
        <div className="card-body px-0">
          {/* Tabs content START */}
          <div className="tab-content">
            {/* Tabs content item START */}
            <div className="tab-pane fade show active" id="nav-preview-tab-1">
              <div className="row g-4">
                {/* Card item START */}
                <div className="col-md-6 col-xxl-4">
                  <div className="card bg-transparent border h-100"> 
                    {/* Card header */}
                    <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                      <div className="d-sm-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h5 className="mb-0"><a href="#">Carolyn Ortiz</a></h5>
                          <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Mumbai</span>
                        </div>
                      </div>
                      {/* Edit dropdown */}
                      <div className="dropdown text-end">
                        <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-three-dots fa-fw" />
                        </a>
                        {/* dropdown button */}
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">
                          <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Payments */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                        </div>
                        <span className="mb-0 fw-bold">$6,205</span>
                      </div>
                      {/* Total courses */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                        </div>
                        <span className="mb-0 fw-bold">21</span>
                      </div>
                      {/* Progress */}
                      <div className="overflow-hidden">
                        <h6 className="mb-0">85%</h6>
                        <div className="progress progress-sm bg-primary bg-opacity-10">
                          <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer bg-transparent border-top">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        {/* Rating star */}
                        <h6 className="mb-2 mb-sm-0">
                          <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 29 Aug 2021
                        </h6>
                        {/* Buttons */}
                        <div className="text-end text-primary-hover">
                          <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                            <i className="bi bi-envelope-fill" />
                          </a>
                          <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                            <i className="fas fa-ban" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xxl-4">
                  <div className="card bg-transparent border h-100"> 
                    {/* Card header */}
                    <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                      <div className="d-sm-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h5 className="mb-0"><a href="#">Billy Vasquez</a></h5>
                          <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Delhi</span>
                        </div>
                      </div>
                      {/* Edit dropdown */}
                      <div className="dropdown text-end">
                        <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-three-dots fa-fw" />
                        </a>
                        {/* dropdown button */}
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                          <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Payments */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                        </div>
                        <span className="mb-0 fw-bold">$1,256</span>
                      </div>
                      {/* Total courses */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                        </div>
                        <span className="mb-0 fw-bold">16</span>
                      </div>
                      {/* Progress */}
                      <div className="overflow-hidden">
                        <h6 className="mb-0">60%</h6>
                        <div className="progress progress-sm bg-primary bg-opacity-10">
                          <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer bg-transparent border-top">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        {/* Rating star */}
                        <h6 className="mb-2 mb-sm-0">
                          <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 15 July 2021
                        </h6>
                        {/* Buttons */}
                        <div className="text-end text-primary-hover">
                          <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                            <i className="bi bi-envelope-fill" />
                          </a>
                          <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                            <i className="fas fa-ban" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xxl-4">
                  <div className="card bg-transparent border h-100"> 
                    {/* Card header */}
                    <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                      <div className="d-sm-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h5 className="mb-0"><a href="#">Dennis Barrett</a></h5>
                          <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />New york</span>
                        </div>
                      </div>
                      {/* Edit dropdown */}
                      <div className="dropdown text-end">
                        <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-three-dots fa-fw" />
                        </a>
                        {/* dropdown button */}
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">
                          <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Payments */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                        </div>
                        <span className="mb-0 fw-bold">$9,256</span>
                      </div>
                      {/* Total courses */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                        </div>
                        <span className="mb-0 fw-bold">38</span>
                      </div>
                      {/* Progress */}
                      <div className="overflow-hidden">
                        <h6 className="mb-0">74%</h6>
                        <div className="progress progress-sm bg-primary bg-opacity-10">
                          <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '74%'}} aria-valuenow={74} aria-valuemin={0} aria-valuemax={100}>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer bg-transparent border-top">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        {/* Rating star */}
                        <h6 className="mb-2 mb-sm-0">
                          <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 22 June 2021
                        </h6>
                        {/* Buttons */}
                        <div className="text-end text-primary-hover">
                          <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                            <i className="bi bi-envelope-fill" />
                          </a>
                          <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                            <i className="fas fa-ban" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xxl-4">
                  <div className="card bg-transparent border h-100"> 
                    {/* Card header */}
                    <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                      <div className="d-sm-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h5 className="mb-0"><a href="#">Lori Stevens</a></h5>
                          <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />California</span>
                        </div>
                      </div>
                      {/* Edit dropdown */}
                      <div className="dropdown text-end">
                        <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare4" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-three-dots fa-fw" />
                        </a>
                        {/* dropdown button */}
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare4">
                          <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Payments */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                        </div>
                        <span className="mb-0 fw-bold">$10,688</span>
                      </div>
                      {/* Total courses */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                        </div>
                        <span className="mb-0 fw-bold">38</span>
                      </div>
                      {/* Progress */}
                      <div className="overflow-hidden">
                        <h6 className="mb-0">45%</h6>
                        <div className="progress progress-sm bg-primary bg-opacity-10">
                          <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer bg-transparent border-top">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        {/* Rating star */}
                        <h6 className="mb-2 mb-sm-0">
                          <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 18 April 2021
                        </h6>
                        {/* Buttons */}
                        <div className="text-end text-primary-hover">
                          <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                            <i className="bi bi-envelope-fill" />
                          </a>
                          <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                            <i className="fas fa-ban" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xxl-4">
                  <div className="card bg-transparent border h-100"> 
                    {/* Card header */}
                    <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                      <div className="d-sm-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h5 className="mb-0"><a href="#">Jacqueline Miller</a></h5>
                          <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Chennai</span>
                        </div>
                      </div>
                      {/* Edit dropdown */}
                      <div className="dropdown text-end">
                        <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare5" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-three-dots fa-fw" />
                        </a>
                        {/* dropdown button */}
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare5">
                          <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Payments */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                        </div>
                        <span className="mb-0 fw-bold">$856</span>
                      </div>
                      {/* Total courses */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                        </div>
                        <span className="mb-0 fw-bold">05</span>
                      </div>
                      {/* Progress */}
                      <div className="overflow-hidden">
                        <h6 className="mb-0">90%</h6>
                        <div className="progress progress-sm bg-primary bg-opacity-10">
                          <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer bg-transparent border-top">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        {/* Rating star */}
                        <h6 className="mb-2 mb-sm-0">
                          <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 05 Aug 2021
                        </h6>
                        {/* Buttons */}
                        <div className="text-end text-primary-hover">
                          <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                            <i className="bi bi-envelope-fill" />
                          </a>
                          <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                            <i className="fas fa-ban" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xxl-4">
                  <div className="card bg-transparent border h-100"> 
                    {/* Card header */}
                    <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                      <div className="d-sm-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h5 className="mb-0"><a href="#">Samuel Bishop</a></h5>
                          <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Canada</span>
                        </div>
                      </div>
                      {/* Edit dropdown */}
                      <div className="dropdown text-end">
                        <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare6" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-three-dots fa-fw" />
                        </a>
                        {/* dropdown button */}
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare6">
                          <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Payments */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                        </div>
                        <span className="mb-0 fw-bold">$3,578</span>
                      </div>
                      {/* Total courses */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                          <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                        </div>
                        <span className="mb-0 fw-bold">14</span>
                      </div>
                      {/* Progress */}
                      <div className="overflow-hidden">
                        <h6 className="mb-0">30%</h6>
                        <div className="progress progress-sm bg-primary bg-opacity-10">
                          <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer bg-transparent border-top">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        {/* Rating star */}
                        <h6 className="mb-2 mb-sm-0">
                          <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 18 Jan 2021
                        </h6>
                        {/* Buttons */}
                        <div className="text-end text-primary-hover">
                          <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                            <i className="bi bi-envelope-fill" />
                          </a>
                          <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                            <i className="fas fa-ban" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
              </div>
            </div>
            {/* Tabs content item END */}
            {/* Tabs content item START */}
            <div className="tab-pane fade" id="nav-html-tab-1">
              <div className="table-responsive border-0">
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 rounded-start">Instructor name</th>
                      <th scope="col" className="border-0">Join date</th>
                      <th scope="col" className="border-0">Progress</th>
                      <th scope="col" className="border-0">Courses</th>
                      <th scope="col" className="border-0">Payments</th>
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
                          <div className="avatar avatar-md">
                            <img src="assets/images/avatar/09.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-3">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Mumbai</span>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>29 Aug 2021</td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <div className="overflow-hidden">
                          <h6 className="mb-0">85%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>21</td>
                      {/* Table data */}
                      <td>$6,205</td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <i className="bi bi-eye" />
                        </a>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                          <i className="bi bi-envelope" />
                        </a>
                        <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                          <i className="fas fa-ban" />
                        </button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img src="assets/images/avatar/04.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-3">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Billy Vasquez</a></h6>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Delhi</span>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>15 July 2021</td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <div className="overflow-hidden">
                          <h6 className="mb-0">60%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>16</td>
                      {/* Table data */}
                      <td>$1,256</td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <i className="bi bi-eye" />
                        </a>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                          <i className="bi bi-envelope" />
                        </a>
                        <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                          <i className="fas fa-ban" />
                        </button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img src="assets/images/avatar/03.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-3">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />New york</span>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>22 June 2021</td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <div className="overflow-hidden">
                          <h6 className="mb-0">74%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '74%'}} aria-valuenow={74} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>38</td>
                      {/* Table data */}
                      <td>$9,256</td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <i className="bi bi-eye" />
                        </a>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                          <i className="bi bi-envelope" />
                        </a>
                        <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                          <i className="fas fa-ban" />
                        </button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img src="assets/images/avatar/09.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-3">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />California</span>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>18 April 2021</td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <div className="overflow-hidden">
                          <h6 className="mb-0">45%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>07</td>
                      {/* Table data */}
                      <td>$10,688</td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <i className="bi bi-eye" />
                        </a>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                          <i className="bi bi-envelope" />
                        </a>
                        <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                          <i className="fas fa-ban" />
                        </button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img src="assets/images/avatar/05.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-3">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Jacqueline Miller</a></h6>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Chennai</span>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>05 Aug 2021</td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <div className="overflow-hidden">
                          <h6 className="mb-0">90%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>05</td>
                      {/* Table data */}
                      <td>$856</td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <i className="bi bi-eye" />
                        </a>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                          <i className="bi bi-envelope" />
                        </a>
                        <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                          <i className="fas fa-ban" />
                        </button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img src="assets/images/avatar/02.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-3">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Samuel Bishop</a></h6>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Canada</span></div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>18 Jan 2021</td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <div className="overflow-hidden">
                          <h6 className="mb-0">30%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>14</td>
                      {/* Table data */}
                      <td>$3,578</td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <i className="bi bi-eye" />
                        </a>
                        <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                          <i className="bi bi-envelope" />
                        </a>
                        <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                          <i className="fas fa-ban" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  {/* Table body END */}
                </table>
              </div>
            </div>
            {/* Tabs content item END */}
          </div>
          {/* Tabs content END */}
        </div>
        {/* Card body END */}
        {/* Card footer START */}
        <div className="card-footer bg-transparent pt-0 px-0">
          {/* Pagination START */}
          <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
            {/* Content */}
            <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            {/* Pagination */}
            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul className="pagination pagination-sm pagination-primary-soft mb-0 pb-0 px-0">
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
    {/* Page main content END */}
  </div>
  {/* Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}

   </>
  )
}

export default AdminStudentList