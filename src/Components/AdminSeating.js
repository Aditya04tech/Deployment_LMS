import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminSideNavbar from './AdminSideNavbar'
import AdminTopNavBar from './AdminTopNavBar'
const AdminSeating = () => {
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
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="h3 mb-2 mb-sm-0">Admin Settings</h1>
        </div>
      </div>
      <div className="row g-4">
        {/* Left side START */}
        <div className="col-xl-3">
          {/* Tab START */}
          <ul className="nav nav-pills nav-tabs-bg-dark flex-column">
            <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#tab-1"><i className="fas fa-globe fa-fw me-2" />Website Settings</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-2"><i className="fas fa-cog fa-fw me-2" />General Settings</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-3"><i className="fas fa-bell fa-fw me-2" />Notification Settings</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-4"><i className="fas fa-user-circle fa-fw me-2" />Account Settings</a> </li>
            <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#tab-5"><i className="fas fa-sliders-h fa-fw me-2" />Social Settings</a> </li>
            <li className="nav-item"> <a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-6"><i className="fas fa-envelope-open-text fa-fw me-2" />Email Settings</a> </li>
          </ul>
          {/* Tab END */}
        </div>
        {/* Left side END */}
        {/* Right side START */}
        <div className="col-xl-9">
          {/* Tab Content START */}
          <div className="tab-content">
            {/* Personal Information content START */}
            <div className="tab-pane show active" id="tab-1">
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">Website Settings</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  <form className="row g-4 align-items-center">
                    {/* Input item */}
                    <div className="col-lg-4">
                      <label className="form-label">Site Name</label>
                      <input type="text" className="form-control" placeholder="Site Name" />
                      <div className="form-text">Enter Website Name. It Display in Website and Email.</div>
                    </div>
                    {/* Input item */}
                    <div className="col-lg-4">
                      <label className="form-label">Site Copyrights</label>
                      <input type="text" className="form-control" placeholder="Site Copyrights" />
                      <div className="form-text">Using for Contact and Send Email</div>
                    </div>
                    {/* Input item */}
                    <div className="col-lg-4">
                      <label className="form-label">Site Email</label>
                      <input type="email" className="form-control" placeholder="Site Email" />
                      <div className="form-text">For Copyrights Text</div>
                    </div>
                    {/* Textarea item */}
                    <div className="col-12">
                      <label className="form-label">Site Description</label>
                      <textarea className="form-control" rows={3} defaultValue={""} />
                      <div className="form-text">For write brief description of your organization, or a Website.</div> 
                    </div>
                    {/* Input item */}
                    <div className="col-lg-6">
                      <label className="form-label">Contact Phone</label>
                      <input type="text" className="form-control" placeholder="Contact Phone" />
                      <div className="form-text">Using for Contact and Support</div>
                    </div>
                    {/* Input item */}
                    <div className="col-lg-6">
                      <label className="form-label">Support Email</label>
                      <input type="email" className="form-control" placeholder="Support Email" />
                      <div className="form-text">For Support Email</div>
                    </div>
                    {/* Radio items */}
                    <div className="col-lg-6">
                      <label className="form-label">Allow Registration</label>
                      <div className="d-sm-flex">
                        {/* Radio */}
                        <div className="form-check radio-bg-light me-4">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                          <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Enable
                          </label>
                        </div>
                        {/* Radio */}
                        <div className="form-check radio-bg-light me-4">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Disable
                          </label>
                        </div>
                        {/* Radio */}
                        <div className="form-check radio-bg-light">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                          <label className="form-check-label" htmlFor="flexRadioDefault3">
                            On Request
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Textarea item */}
                    <div className="col-12">
                      <label className="form-label">Contact Address</label>
                      <textarea className="form-control" rows={3} defaultValue={""} />
                      <div className="form-text">Enter support Address</div> 
                    </div>
                    {/* Save button */}
                    <div className="d-sm-flex justify-content-end">
                      <button type="button" className="btn btn-primary mb-0">Update</button>
                    </div>
                  </form>
                </div>
                {/* Card body END */}
              </div>			
            </div>
            {/* Personal Information content END */}
            {/* General Settings content START */}
            <div className="tab-pane" id="tab-2">
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">General Settings</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  <form className="row g-4">
                    {/* Input item */}
                    <div className="col-12">
                      <label className="form-label">Main Site URL</label>
                      <input type="text" className="form-control" placeholder="Site URL" />
                      <div className="form-text">Set your main website url.</div>
                    </div>
                    {/* Choice item */}
                    <div className="col-lg-6">
                      <label className="form-label">Select Currency</label>
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Select Currency</option>
                        <option>USD</option>
                        <option>Indian Rupee</option>
                        <option>Euro</option>
                        <option>British Pound</option>
                      </select>
                      <div className="form-text">Select currency as per Country</div>
                    </div>
                    {/* Choice item */}
                    <div className="col-lg-6">
                      <label className="form-label">Select Language</label>
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Select Language</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>German</option>
                        <option>Spanish</option>
                      </select>
                      <div className="form-text">Select language as per Country</div>
                    </div>
                    {/* Switch item */}
                    <div className="col-lg-3">
                      <label className="form-label">Maintainance mode</label>
                      <div className="form-check form-switch form-check-lg mb-0">
                        <input className="form-check-input mt-0 price-toggle me-2" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mt-1" htmlFor="flexSwitchCheckDefault">Make Site Offline</label>
                      </div>
                    </div>
                    {/* Textarea item */}
                    <div className="col-lg-9">
                      <label className="form-label">Maintainance Text</label>
                      <textarea className="form-control" rows={3} defaultValue={""} />
                      <div className="form-text">Admin login on maintenance mode:<a href="#" className="ms-2">http://example.xyz/admin/login</a></div> 
                    </div>
                    {/* Save button */}
                    <div className="d-sm-flex justify-content-end">
                      <button type="button" className="btn btn-primary mb-0">Update</button>
                    </div>
                  </form>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* General Settings content END */}
            {/* Notification setting content START */}
            <div className="tab-pane" id="tab-3">
              {/* Notification START */}
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">Notifications Settings</h5>
                </div>
                {/* Card body */}
                <div className="card-body">
                  {/* General nofification */}
                  <h6 className="mb-2">Choose type of notifications you want to receive</h6>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy12" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy12">Withdrawal activity</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy2" />
                    <label className="form-check-label" htmlFor="checkPrivacy2">Weekly report</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy3" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy3">Password change</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy4" />
                    <label className="form-check-label" htmlFor="checkPrivacy4">Play sound on a message</label>
                  </div>
                  {/* Instructor notification */}
                  <h6 className="mb-2 mt-4">Instructor Related Notification</h6>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy11" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy5">Joining new instructors</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy5" />
                    <label className="form-check-label" htmlFor="checkPrivacy5">Notify when the instructorss added new courses</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy6" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy6">Notify when instructors update courses</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy7" />
                    <label className="form-check-label" htmlFor="checkPrivacy7">Course weekly report</label>
                  </div>
                  {/* Student notification */}
                  <h6 className="mb-2 mt-4">Student Related Notification</h6>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy8" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy8">Joining new student</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy9" />
                    <label className="form-check-label" htmlFor="checkPrivacy9">Notify when students purchase new courses</label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy10" />
                    <label className="form-check-label" htmlFor="checkPrivacy10">Course weekly report</label>
                  </div>
                </div>
              </div>
              {/* Notification START */}
            </div>
            {/* Notification setting content END */}
            {/* Account setting content START */}
            <div className="tab-pane" id="tab-4">
              {/* Activity logs */}
              <div className="bg-light rounded-3 p-4 mb-3">
                <div className="d-md-flex justify-content-between align-items-center">
                  {/* Content */}
                  <div>
                    <h6 className="h5">Activity Logs</h6>
                    <p className="mb-1 mb-md-0">You can save your all activity logs including unusual activity detected.</p>
                  </div>
                  {/* Switch */}
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy1" defaultChecked />
                  </div>
                </div>
              </div>
              {/* Change password */}
              <div className="bg-light rounded-3 p-4 mb-3">
                <div className="d-md-flex justify-content-between align-items-center">
                  {/* Content */}
                  <div>
                    <h6 className="h5">Change Password</h6>
                    <p className="mb-1 mb-md-0">Set a unique password to protect your account.</p>
                  </div>
                  {/* Button */}
                  <div>
                    <a href="#" className="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#changePassword">Change Password</a>
                    <p className="mb-0 small h6">Last change 10 Aug 2020</p>
                  </div>
                </div>
              </div>
              {/* 2 Step Verification */}
              <div className="bg-light rounded-3 p-4">
                <div className="d-md-flex justify-content-between align-items-center">
                  {/* Content */}
                  <div>
                    <h6 className="h5">2 Step Verification</h6>
                    <p className="mb-1 mb-md-0">Secure your account with 2 Step security. When it is activated you will need to enter not only your password, but also a special code using app. You can receive this code by in mobile app.</p>
                  </div>
                  {/* Switch */}
                  <div className="form-check form-switch form-check-md mb-0">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy13" defaultChecked />
                  </div>
                </div>
              </div>
              {/* Active Logs START */}
              <div className="card border mt-4">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">Active Logs</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  {/* Table START */}
                  <div className="table-responsive border-0">
                    <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                      {/* Table head */}
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 rounded-start">Browser</th>
                          <th scope="col" className="border-0">IP</th>
                          <th scope="col" className="border-0">Time</th>
                          <th scope="col" className="border-0 rounded-end">Action</th>
                        </tr>
                      </thead>
                      {/* Table body START */}
                      <tbody>
                        {/* Table row */}
                        <tr>
                          {/* Table data */}
                          <td>Chrome On Window</td>
                          {/* Table data */}
                          <td>173.238.198.108</td>
                          {/* Table data */}
                          <td>12 Nov 2021</td>
                          {/* Table data */}
                          <td>
                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                          </td>
                        </tr>
                        {/* Table row */}
                        <tr>
                          {/* Table data */}
                          <td>Mozilla On Window</td>
                          {/* Table data */}
                          <td>107.222.146.90</td>
                          {/* Table data */}
                          <td>08 Nov 2021</td>
                          {/* Table data */}
                          <td>
                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                          </td>
                        </tr>
                        {/* Table row */}
                        <tr>
                          {/* Table data */}
                          <td>Chrome On iMac</td>
                          {/* Table data */}
                          <td>231.213.125.55</td>
                          {/* Table data */}
                          <td>06 Nov 2021</td>
                          {/* Table data */}
                          <td>
                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                          </td>
                        </tr>
                        {/* Table row */}
                        <tr>
                          {/* Table data */}
                          <td>Mozilla On Window</td>
                          {/* Table data */}
                          <td>37.242.105.138</td>
                          {/* Table data */}
                          <td>02 Nov 2021</td>
                          {/* Table data */}
                          <td>
                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                          </td>
                        </tr>
                      </tbody>
                      {/* Table body END */}
                    </table>
                  </div>
                  {/* Table END */}
                </div>
                {/* Card body END */}
              </div>
              {/* Active Logs END */}
            </div>
            {/* Account setting content END */}
            {/* Social Settings content START */}
            <div className="tab-pane" id="tab-5">
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom d-sm-flex justify-content-between align-items-center">
                  <h5 className="card-header-title mb-0">Social Media Settings</h5>
                  <a href="#" className="btn btn-sm btn-primary mb-0">Add new</a>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  <form className="row g-4">
                    {/* Input item */}
                    <div className="col-sm-6">
                      <label className="form-label"><i className="fab fa-google text-google-icon me-2" />Enter google client ID</label>
                      <input className="form-control" type="text" />
                    </div>
                    {/* Input item */}
                    <div className="col-sm-6">
                      <label className="form-label"><i className="fab fa-google text-google-icon me-2" />Enter google API</label>
                      <input className="form-control" type="text" />
                    </div>
                    {/* Input item */}
                    <div className="col-sm-6">
                      <label className="form-label"><i className="fab fa-facebook text-facebook me-2" />Enter facebook client ID</label>
                      <input className="form-control" type="text" />
                    </div>
                    {/* Input item */}
                    <div className="col-sm-6">
                      <label className="form-label"><i className="fab fa-facebook text-facebook me-2" />Enter facebook API</label>
                      <input className="form-control" type="text" />
                    </div>
                    {/* Note */}
                    <p className="mb-0"><b>In your app set all redirect URL like:</b> <u className="text-primary">https://app.eduport.abc/google/callback</u></p>
                    {/* Button */}
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-primary mb-0">Update</button>
                    </div>
                  </form>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Social Settings content END */}
            {/* Email Settings content START */}
            <div className="tab-pane" id="tab-6">
              <div className="card shadow">
                {/* Card header */}
                <div className="card-header border-bottom">
                  <h5 className="card-header-title mb-0">Email Settings</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  <div className="row g-4">
                    {/* Radio group items */}
                    <div className="col-xl-8">
                      <label className="form-label">Choose Email Drive</label>
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        {/* Radio */}
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail1" />
                          <label className="form-check-label" htmlFor="flexRadioEmail1">Send Mail</label>
                        </div>
                        {/* Radio */}
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail2" defaultChecked />
                          <label className="form-check-label" htmlFor="flexRadioEmail2">SMTP</label>
                        </div>
                        {/* Radio */}
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="flexRadioEmail" id="flexRadioEmail3" />
                          <label className="form-check-label" htmlFor="flexRadioEmail3">Mail</label>
                        </div>
                      </div>
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">SMTP HOST</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6 col-xl-3">
                      <label className="form-label">SMTP Port</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6 col-xl-3">
                      <label className="form-label">SMTP Secure</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">SMTP Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">SMTP Passwod</label>
                      <input type="password" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">Email From Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">Email From Name</label>
                      <input type="email" className="form-control" />
                    </div>
                    {/* Choice item */}
                    <div className="col-lg-6">
                      <label className="form-label">Email Send To</label>
                      <select className="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                        <option value>Email Send to</option>
                        <option>All Admin</option>
                        <option>Instructors</option>
                        <option>Students</option>
                        <option>Visitors</option>
                      </select>
                    </div>
                    {/* Input item */}
                    <div className="col-md-6">
                      <label className="form-label">Email External Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>	
                  {/* Email Template */}
                  <div className="row g-4 mt-4">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Edit Email Template</h5>
                      <a href="#" className="btn btn-sm btn-primary mb-0">Add Template</a>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Welcome Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Send Email to User</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Password Change</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Unusual Login Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Password Reset Email by Admin</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">KYC Approve Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">KYC Reject Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">KYC Missing Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">KYC Submitted Email</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Token Purchase - Cancel by User</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Token Purchase - Order Placed</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Template Item */}
                    <div className="col-md-6 col-xxl-4">
                      <div className="bg-light rounded-3 d-flex justify-content-between align-items-center p-2">
                        <h6 className="mb-0"><a href="#">Token Purchase - Order Successfully</a></h6>
                        <a href="#" className="btn btn-sm btn-round btn-dark flex-shrink-0 mb-0"><i className="far fa-edit fa-fw" /></a>
                      </div>
                    </div>
                    {/* Button */}
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-primary mb-0">Update</button>
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Email Settings content END */}
          </div>
          {/* Tab Content END */}
        </div>
        {/* Right side END */}
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

export default AdminSeating