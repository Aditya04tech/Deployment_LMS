import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminSideNavbar from './AdminSideNavbar'
import AdminTopNavBar from './AdminTopNavBar'

const AdminElearning = () => {
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
          <h1 className="h3 mb-0">Earnings</h1>
        </div>
      </div>
      <div className="row g-4 mb-4">
        {/* Earning item */}
        <div className="col-sm-6 col-lg-4">
          <div className="p-4 bg-primary bg-opacity-10 rounded-3">
            <h6>Sales this month</h6>
            <h2 className="mb-0 fs-1 text-primary">$899.95</h2>
          </div>
        </div>
        {/* Earning item */}
        <div className="col-sm-6 col-lg-4">
          <div className="p-4 bg-purple bg-opacity-10 rounded-3">
            <h6>To be paid
              <a tabIndex={0} className="h6 mb-0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="After US royalty withholding tax" data-bs-original-title title>
                <i className="bi bi-info-circle-fill small" />
              </a>
            </h6>
            <h2 className="mb-0 fs-1 text-purple">$750.35</h2>
          </div>
        </div>
        {/* Earning item */}
        <div className="col-sm-6 col-lg-4">
          <div className="p-4 bg-orange bg-opacity-10 rounded-3">
            <h6>Lifetime Earnings</h6>
            <h2 className="mb-0 fs-1 text-orange">$4882.65</h2>
          </div>
        </div>
      </div> {/* Row END */}
      {/* All review table START */}
      <div className="card bg-transparent border">
        {/* Card header START */}
        <div className="card-header bg-lights border-bottom">
          <h5 className="mb-0">Invoice History</h5>
        </div>
        {/* Card header END */}
        {/* Card body START */}
        <div className="card-body pb-0">
          {/* Table START */}
          <div className="table-responsive border-0">
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              {/* Table head */}
              <thead>
                <tr>
                  <th scope="col" className="border-0 rounded-start">Invoice ID</th>
                  <th scope="col" className="border-0">Course Name</th>
                  <th scope="col" className="border-0">Date</th>
                  <th scope="col" className="border-0">Payment Method</th>
                  <th scope="col" className="border-0">Amount</th>
                  <th scope="col" className="border-0">Status</th>
                  <th scope="col" className="border-0 rounded-end">Action</th>
                </tr>
              </thead>
              {/* Table body START */}
              <tbody>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>#254684</td>
                  {/* Table data */}
                  <td>
                    <h6 className="table-responsive-title mb-0"><a href="#">Create a Design System in Figma</a></h6>
                  </td>
                  {/* Table data */}
                  <td>29 Aug 2021</td>
                  {/* Table data */}
                  <td>
                    <img src="assets/images/client/mastercard.svg" className="h-50px" alt />
                  </td>
                  {/* Table data */}
                  <td>$3,999
                    {/* Dropdown icon */}
                    <a href="#" className="h6 mb-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-info-circle-fill" />
                    </a>
                    {/* Dropdown items */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Us royalty withholding</span>
                          <span className="text-danger small">-$0.00</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="badge bg-success bg-opacity-10 text-success">Paid</div>
                  </td>
                  {/* Table data */}
                  <td>
                    <a href="#" className="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Download" aria-label="Download">
                      <i className="bi bi-download" />
                    </a>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>#125464</td>
                  {/* Table data */}
                  <td>
                    <h6 className="table-responsive-title mb-0">Sketch from A to Z: for app designer</h6>
                  </td>
                  {/* Table data */}
                  <td>26 Aug 2021</td>
                  {/* Table data */}
                  <td>
                    <img src="assets/images/client/paypal.svg" className="w-80px" alt />
                  </td>
                  {/* Table data */}
                  <td>$4,201
                    {/* Dropdown icon */}
                    <a href="#" className="h6 mb-0" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-info-circle-fill" />
                    </a>
                    {/* Dropdown items */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Us royalty withholding</span>
                          <span className="text-danger small">-$0.00</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="badge bg-success bg-opacity-10 text-success">Paid</div>
                  </td>
                  {/* Table data */}
                  <td>
                    <a href="#" className="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Download" aria-label="Download">
                      <i className="bi bi-download" />
                    </a>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>#123546</td>
                  {/* Table data */}
                  <td>
                    <h6 className="table-responsive-title mb-0">The Complete Web Development in python</h6>
                  </td>
                  {/* Table data */}
                  <td>18 July 2021</td>
                  {/* Table data */}
                  <td>
                    <img src="assets/images/client/paypal.svg" className="w-80px" alt />
                  </td>
                  {/* Table data */}
                  <td>$1,032
                    {/* Dropdown icon */}
                    <a href="#" className="h6 mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-info-circle-fill" />
                    </a>
                    {/* Dropdown items */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Us royalty withholding</span>
                          <span className="text-danger small">-$0.00</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="badge bg-orange bg-opacity-10 text-orange">Pending</div>
                  </td>
                  {/* Table data */}
                  <td>
                    <a href="#" className="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Download" aria-label="Download">
                      <i className="bi bi-download" />
                    </a>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>#1235698</td>
                  {/* Table data */}
                  <td>
                    <h6 className="table-responsive-title mb-0">Deep Learning with React-Native</h6>
                  </td>
                  {/* Table data */}
                  <td>09 July 2021</td>
                  {/* Table data */}
                  <td>
                    <img src="assets/images/client/mastercard.svg" className="h-50px" alt />
                  </td>
                  {/* Table data */}
                  <td>$6,548
                    {/* Dropdown icon */}
                    <a href="#" className="h6 mb-0" role="button" id="dropdownShare4" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-info-circle-fill" />
                    </a>
                    {/* Dropdown items */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare4">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Us royalty withholding</span>
                          <span className="text-danger small">-$0.00</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="badge bg-success bg-opacity-10 text-success">Paid</div>
                  </td>
                  {/* Table data */}
                  <td>
                    <a href="#" className="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Download" aria-label="Download">
                      <i className="bi bi-download" />
                    </a>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>#132456</td>
                  {/* Table data */}
                  <td>
                    <h6 className="table-responsive-title mb-0">Microsoft Excel - Excel from Beginner to Advanced</h6>
                  </td>
                  {/* Table data */}
                  <td>21 June 2021</td>
                  {/* Table data */}
                  <td>
                    <img src="assets/images/client/paypal.svg" className="w-80px" alt />
                  </td>
                  {/* Table data */}
                  <td>$2,546
                    {/* Dropdown icon */}
                    <a href="#" className="h6 mb-0" role="button" id="dropdownShare5" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-info-circle-fill" />
                    </a>
                    {/* Dropdown items */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare5">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Us royalty withholding</span>
                          <span className="text-danger small">-$0.00</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="badge bg-orange bg-opacity-10 text-orange">Pending</div>
                  </td>
                  {/* Table data */}
                  <td>
                    <a href="#" className="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Download" aria-label="Download">
                      <i className="bi bi-download" />
                    </a>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>#145623</td>
                  {/* Table data */}
                  <td>
                    <h6 className="table-responsive-title mb-0">Twitter Marketing &amp; Twitter Ads For Beginners</h6>
                  </td>
                  {/* Table data */}
                  <td>05 June 2021</td>
                  {/* Table data */}
                  <td>
                    <img src="assets/images/client/mastercard.svg" className="h-50px" alt />
                  </td>
                  {/* Table data */}
                  <td>$4,258
                    {/* Dropdown icon */}
                    <a href="#" className="h6 mb-0" role="button" id="dropdownShare6" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-info-circle-fill" />
                    </a>
                    {/* Dropdown items */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare6">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Us royalty withholding</span>
                          <span className="text-danger small">-$0.00</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="badge bg-danger bg-opacity-10 text-danger">Cancel</div>
                  </td>
                  {/* Table data */}
                  <td>
                    <a href="#" className="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Download" aria-label="Download">
                      <i className="bi bi-download" />
                    </a>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>#154632</td>
                  {/* Table data */}
                  <td>
                    <h6 className="table-responsive-title mb-0">The Complete Digital Marketing Course - 12 Courses in 1</h6>
                  </td>
                  {/* Table data */}
                  <td>15 April 2021</td>
                  {/* Table data */}
                  <td>
                    <img src="assets/images/client/paypal.svg" className="w-80px" alt />
                  </td>
                  {/* Table data */}
                  <td>$854
                    {/* Dropdown icon */}
                    <a href="#" className="h6 mb-0" role="button" id="dropdownShare7" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-info-circle-fill" />
                    </a>
                    {/* Dropdown items */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare7">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Us royalty withholding</span>
                          <span className="text-danger small">-$0.00</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="badge bg-orange bg-opacity-10 text-orange">Pending</div>
                  </td>
                  {/* Table data */}
                  <td>
                    <a href="#" className="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Download" aria-label="Download">
                      <i className="bi bi-download" />
                    </a>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>#165423</td>
                  {/* Table data */}
                  <td>
                    <h6 className="table-responsive-title mb-0">Create a Design System in Figma</h6>
                  </td>
                  {/* Table data */}
                  <td>02 Jan 2021</td>
                  {/* Table data */}
                  <td>
                    <img src="assets/images/client/mastercard.svg" className="h-50px" alt />
                  </td>
                  {/* Table data */}
                  <td>$965
                    {/* Dropdown icon */}
                    <a href="#" className="h6 mb-0" role="button" id="dropdownShare8" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-info-circle-fill" />
                    </a>
                    {/* Dropdown items */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare8">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Us royalty withholding</span>
                          <span className="text-danger small">-$0.00</span>
                        </div>
                        <hr className="my-1" /> {/* Divider */}
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small">$86</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="badge bg-success bg-opacity-10 text-success">Paid</div>
                  </td>
                  {/* Table data */}
                  <td>
                    <a href="#" className="btn btn-primary-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Download" aria-label="Download">
                      <i className="bi bi-download" />
                    </a>
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
      {/* All review table END */}
    </div>
    {/* Page main content END */}
  </div>
  {/* Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}

   </>
  )
}

export default AdminElearning