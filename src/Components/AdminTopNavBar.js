import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminTopNavBar = () => {
  const [theme, setThemeState] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [profileImage, setProfileImage] = useState("assets/images/avatar/01.jpg"); // Default profile image

  useEffect(() => {
    // Fetch the profile image from localStorage if it exists
    const storedImage = localStorage.getItem("adminImage");
    if (storedImage) {
      setProfileImage(storedImage);  // Update the profile image from localStorage
    }
  }, []);

  const setTheme = (theme) => {
    if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  const showActiveTheme = (currentTheme) => {
    const activeThemeIcon = document.querySelector(".theme-icon-active use");
    const btnToActive = document.querySelector(`[data-bs-theme-value="${currentTheme}"]`);
    if (!btnToActive || !activeThemeIcon) return;
    const svgOfActiveBtn = btnToActive.querySelector(".mode-switch use").getAttribute("href");

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
    });

    btnToActive.classList.add("active");
    activeThemeIcon.setAttribute("href", svgOfActiveBtn);
  };

  useEffect(() => {
    setTheme(theme);
    showActiveTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!["light", "dark"].includes(localStorage.getItem("theme"))) {
        setTheme(theme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const handleThemeChange = (selectedTheme) => {
    setThemeState(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
    showActiveTheme(selectedTheme);
  };

  return (
    <>
      {/* Top bar START */}
      <nav className="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
        <div className="container-fluid p-0">
          <div className="d-flex align-items-center w-100">
            {/* Logo START */}
            <div className="d-flex align-items-center d-xl-none">
              <a className="navbar-brand" href="index-2.html">
                <img
                  className="light-mode-item navbar-brand-item h-30px"
                  src="assets/images/logo-mobile.svg"
                  alt="Logo"
                />
                <img
                  className="dark-mode-item navbar-brand-item h-30px"
                  src="assets/images/logo-mobile-light.svg"
                  alt="Logo Light"
                />
              </a>
            </div>
            {/* Logo END */}
            {/* Toggler for sidebar START */}
            <div className="navbar-expand-xl sidebar-offcanvas-menu">
              <button
                className="navbar-toggler me-auto"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSidebar"
                aria-controls="offcanvasSidebar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-bs-auto-close="outside"
              >
                <i
                  className="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip"
                  data-bs-target="#offcanvasMenu"
                ></i>
              </button>
            </div>
            {/* Toggler for sidebar END */}
            {/* Top bar left */}
            <div className="navbar-expand-lg ms-auto ms-xl-0">
              {/* Toggler for menubar START */}
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTopContent"
                aria-controls="navbarTopContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-animation">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
              {/* Toggler for menubar END */}
              {/* Topbar menu START */}
              <div className="collapse navbar-collapse w-100" id="navbarTopContent">
                {/* Top search START */}
                <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                  <div className="nav-item w-100">
                    <form className="position-relative">
                      <input
                        className="form-control pe-5 bg-secondary bg-opacity-10 border-0"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                        type="submit"
                      >
                        <i className="fas fa-search fs-6 text-primary" />
                      </button>
                    </form>
                  </div>
                </div>
                {/* Top search END */}
              </div>
              {/* Topbar menu END */}
            </div>
            {/* Top bar left END */}
            {/* Top bar right START */}
            <div className="ms-xl-auto">
              <ul className="navbar-nav flex-row align-items-center">
                {/* Notification dropdown START */}
                <li className="nav-item ms-2 ms-md-3 dropdown">
                  <a
                    className="btn btn-light btn-round mb-0"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    <i className="bi bi-bell fa-fw" />
                  </a>
                  <span className="notif-badge animation-blink" />
                  <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                    {/* Dropdown content here */}
                  </div>
                </li>
                {/* Notification dropdown END */}
                {/* Profile dropdown START */}
                <li className="nav-item ms-2 ms-md-3 dropdown">
                  <a
                    className="avatar avatar-sm p-0"
                    href="#"
                    id="profileDropdown"
                    role="button"
                    data-bs-auto-close="outside"
                    data-bs-display="static"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={profileImage} // Dynamically display the current profile image
                      alt="avatar"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                    aria-labelledby="profileDropdown"
                  >
 {/* Profile info */}
              <li className="px-3">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar me-3 mb-3">
                  <img
                      className="avatar-img rounded-circle"
                      src={profileImage} // Dynamically display the current profile image
                      alt="avatar"
                    />
                                      </div>
                  <div>
                    <a className="h6 mt-2 mt-sm-0" href="#">Lori Ferguson</a>
                    <p className="small m-0">example@gmail.com</p>
                  </div>
                </div>
              </li>
<li> <hr className="dropdown-divider" /></li>
              {/* Links */}
              <Link className="dropdown-item" to="/AdminEdit"><i className="bi bi-person fa-fw me-2" />Edit Profile</Link>
              <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2" />Account Settings</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2" />Help</a></li>
              <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i className="bi bi-power fa-fw me-2" />Sign Out</a></li>
              <li> <hr className="dropdown-divider" /></li>


                    <li>
                      <div className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                        <button
                          type="button"
                          className="btn btn-lg mb-0"
                          data-bs-theme-value="light"
                          onClick={() => handleThemeChange("light")}
                        >
                          Light
                        </button>
                        <button
                          type="button"
                          className="btn btn-lg mb-0"
                          data-bs-theme-value="dark"
                          onClick={() => handleThemeChange("dark")}
                        >
                          Dark
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm mb-0 active"
                          data-bs-theme-value="auto"
                          onClick={() => handleThemeChange("auto")}
                        >
                          Auto
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Profile dropdown END */}
              </ul>
            </div>
            {/* Top bar right END */}
          </div>
        </div>
      </nav>
      {/* Top bar END */}
    </>
  );
};

export default AdminTopNavBar;