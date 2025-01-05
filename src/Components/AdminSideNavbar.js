import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (includes Popper.js)
const AdminSideNavbar = () => {
  return (
    <> 
      {/* Sidebar START */}
      <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
        {/* Navbar brand for xl START */}
        <div className="d-flex align-items-center">
          <NavLink className="navbar-brand" to="/admin-dashboard">
            <img className="navbar-brand-item" src="./assets/images/LMS.jpg"
  alt="Logo" />
          </NavLink>
        </div>
        {/* Navbar brand for xl END */}
        <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabIndex={-1} id="offcanvasSidebar">
          <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
            {/* Sidebar menu START */}
            <ul className="navbar-nav flex-column" id="navbar-sidebar">
              {/* Menu item 1 */}
              <li className="nav-item">
                <NavLink to="/admin-dashboard" className="nav-link" activeClassName="active">
                  <i className="bi bi-house fa-fw me-2" /> Dashboard
                </NavLink>
              </li>
              {/* Title */}
              <li className="nav-item ms-2 my-2">Pages</li>
              {/* Menu item 2 */}
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#collapsepage" role="button" aria-expanded="false" aria-controls="collapsepage">
                  <i className="bi bi-basket fa-fw me-2" /> Courses
                </a>
                {/* Submenu */}
                <ul className="nav collapse flex-column" id="collapsepage" data-bs-parent="#navbar-sidebar">
                  <li className="nav-item">
                    <NavLink to="/admin-course-list" className="nav-link">
                      All Courses
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-course-category" className="nav-link">
                      Course Category
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-course-detail" className="nav-link">
                      Course Detail
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* Menu item 3 */}
              <li className="nav-item">
                <NavLink to="/admin-student-list" className="nav-link">
                  <i className="fas fa-user-graduate fa-fw me-2" /> Students
                </NavLink>
              </li>
              {/* Menu item 4 */}
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#collapseinstructors" role="button" aria-expanded="false" aria-controls="collapseinstructors">
                  <i className="fas fa-user-tie fa-fw me-2" /> Instructors
                </a>
                {/* Submenu */}
                <ul className="nav collapse flex-column" id="collapseinstructors" data-bs-parent="#navbar-sidebar">
                  <li className="nav-item">
                    <NavLink to="/admin-instructor-list" className="nav-link">
                      Instructors
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-instructor-card" className="nav-link">
                      Instructor Detail
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-instructor-request" className="nav-link">
                      Instructor requests
                      <span className="badge text-bg-success rounded-circle ms-2">2</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* Menu item 5 */}
              <li className="nav-item">
                <NavLink to="/admin-review" className="nav-link">
                  <i className="far fa-comment-dots fa-fw me-2" /> Reviews
                </NavLink>
              </li>
              {/* Menu item 6 */}
              <li className="nav-item">
                <NavLink to="/admin-elearning" className="nav-link">
                  <i className="far fa-chart-bar fa-fw me-2" /> Earnings
                </NavLink>
              </li>
              {/* Menu item 7 */}
              <li className="nav-item">
                <NavLink to="/admin-seating" className="nav-link">
                  <i className="fas fa-user-cog fa-fw me-2" /> Admin Settings
                </NavLink>
              </li>
               {/* Menu item 8 */}
               <li className="nav-item">
                <NavLink to="/AdminEdit" className="nav-link">
                  <i className="fas fa-user-cog fa-fw me-2" /> Admin Edit
                </NavLink>
              </li>
              {/* Menu item 9 */}
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                  <i className="bi bi-lock fa-fw me-2" /> Authentication
                </a>
                {/* Submenu */}
                <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                  <li className="nav-item">
                    <NavLink to="/sign-up"  className="nav-link">Page 1</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/sign-in" className="nav-link">Page 2</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/forgot-password" className="nav-link">Page 3</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin-error-404" className="nav-link">Page 4</NavLink>
                  </li>
                </ul>
              </li>
              {/* Title */}
              <li className="nav-item ms-2 my-2">Documentation</li>
              {/* Menu item 9 */}
              <li className="nav-item">
                <NavLink to="/docs/index" className="nav-link">
                  <i className="far fa-clipboard fa-fw me-2" /> Documentation
                </NavLink>
              </li>
              {/* Menu item 10 */}
              <li className="nav-item">
                <NavLink to="/docs/changelog" className="nav-link">
                  <i className="fas fa-sitemap fa-fw me-2" /> Changelog
                </NavLink>
              </li>
            </ul>
            {/* Sidebar menu end */}
            {/* Sidebar footer START */}
            <div className="px-3 mt-auto pt-3">
              <div className="d-flex align-items-center justify-content-between text-primary-hover">
                <NavLink className="h5 mb-0 text-body" to="/admin-setting" data-bs-toggle="tooltip" data-bs-placement="top" title="Settings">
                  <i className="bi bi-gear-fill" />
                </NavLink>
                <NavLink className="h5 mb-0 text-body" to="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Home">
                  <i className="bi bi-globe" />
                </NavLink>
                <NavLink className="h5 mb-0 text-body" to="/sign-in" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign out">
                  <i className="bi bi-power" />
                </NavLink>
              </div>
            </div>
            {/* Sidebar footer END */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminSideNavbar;
