import "./App.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import Nav from "./Components/Nav";
import Home from "./Components/Home";
import CourseCategory1 from "./Components/CourseCategory1";
import Sign_UP from "./Components/Sign_UP";
import Sign_in from "./Components/Sign_in";
import Cart from "./Components/Cart";
import { UserProvider } from "./context/UserContext";

import CourseCategory from "./Components/CourseCategory";
// import Footer from './Components/Footer';

import Instructor_Dashboard from "./Components/Instructor_Dashboard";
import Instructor_Courses from "./Components/Instructor_Courses";
import Instructor_Quiz from "./Components/Instructor_Quiz";
import Instructor_earning from "./Components/Instructor_earning";
import Instructor_studentlist from "./Components/Instructor_studentlist";
import Instructor_order from "./Components/Instructor_order";
import Instructor_Reviews from "./Components/Instructor_Reviews";
import Instructor_Editprofile from "./Components/Instructor_Editprofile";
import Instructor_PayOuts from "./Components/Instructor_PayOuts";
import Instructor_setting from "./Components/Instructor_setting";
import Instructor_Deleteprofile from "./Components/Instructor_Deleteprofile";

import Instructor_createCourse from "./Components/Instructor_createCourse";
// import Instructor_Single from './Components/Instructor_Single';
// import Instructor_List from './Components/Instructor_List';

import StudentDashboard from "./Components/StudentDashboard";

import FrontEndCourseList from './Components/FrontEndCourseList';
import BackEndCourseList from './Components/BackEndCourseList';
import GraphicsCourseList from './Components/GraphicsCourseList';
import DigitalMarketingCourse from './Components/DigitalMarketingCourse';
import NetworkingVideo from './Components/NetworkingVideo';
import BackEndVideo from './Components/BackEndVideo';
import FrontEndVideo from './Components/FrontEndVideo';
import GraphicsVideo from './Components/GraphicsVideo';
import MarketingVideo from './Components/MarketingVideo';
import VideoPlayer1 from './Components/VideoPlayer1';

import CourseList1 from "./Components/CourseList1";
import StudentSubscription from "./Components/StudentSubscription";
import StudentCourseList from "./Components/StudentCourseList";
import StudentCourseResume from "./Components/StudentCourseResume";
import StudentQuiz from "./Components/StudentQuiz";
import StudentPaymentInfo from "./Components/StudentPaymentInfo";
import StudentBookmark from "./Components/StudentBookmark";
import StudentEditProfile from "./Components/StudentEditProfile";

import StudentSetting from "./Components/StudentSetting";
import StudentDeleteAccount from "./Components/StudentDeleteAccount";

import AdminDashboard from "./Components/AdminDashboard";
import AdminCourceList from "./Components/AdminCourceList";
// import AdminSideNavbar from './Components/AdminSideNavbar';
// import AdminTopNavBar from './Components/AdminTopNavBar';
import AdminCourseCategory from "./Components/AdminCourseCategory";
import AdminCourseDetail from "./Components/AdminCourseDetail";
import AdminEditCourseDetals from "./Components/AdminEditCourseDetals";
import AdminStudentList from "./Components/AdminStudentList";
import AdminInstructorCard from "./Components/AdminInstructorCard";
import AdminElearning from "./Components/AdminElearning";
import AdminInstructirList from "./Components/AdminInstructirList";
import AdminInstructorRequest from "./Components/AdminInstructorRequest";
import AdminReview from "./Components/AdminReview";
import AdminSeating from "./Components/AdminSeating";

import AdminError404 from "./Components/AdminError404";

import BackToTop from "./Components/BacktoTop";
// import PaymentPage from './Components/PaymentPage';
import CoursePayment from "./Components/CoursePayment";

import AdminLogin from "./Components/AdminLogin";
import Instructor_Login from "./Components/Instructor_Login";
import Checkout from "./Components/Checkout";
import ForgetPassword from "./Components/Pages/ForgetPassword";
import ChangePassword from "./Components/Pages/ChangePassword";
import ProductDetails from "./Components/ProductDetals";
import CourseMore from "./Components/CourseMore";

import CreateCourse from "./Components/CreateCourcescompt/CreateCourse";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Blog from "./Components/Blog";
import BlogDetals from "./Components/BlogDetals";
import AdminEdit from "./Components/AdminEdit";
import PaymentPage from "./Components/PaymentPage";
import Success from "./Components/Success";
import VerificationSuccess from "./Components/VerificationSuccess";
import VerificationFailed from "./Components/VerificationFailed";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      localStorage.removeItem("cart");
    }
  }, []);

  useEffect(() => {
    // Update cart count whenever the cart state changes
    setCartCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existsInCart = cart.find((item) => item.id === product.id);
    if (existsInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleAdd = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemove = (product, isDelete = false) => {
    if (isDelete) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      const updatedCart = cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updatedCart);
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  
  

  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home  cartCount={cartCount}/>} />
          <Route
            path="/course"
            element={<CourseCategory1 onAddToCart={handleAddToCart}  cartCount={cartCount} />}
          />
          <Route path="/signUp" element={<Sign_UP />} />
          <Route path="/signin" element={<Sign_in />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                onAdd={handleAdd}
                onRemove={handleRemove}
                onClearCart={handleClearCart}
              />
            }
          />
<Route path='/payment' element={<PaymentPage  
 cart={cart}
 setCart={setCart}
 onAdd={handleAdd}

/>}/>
<Route path="/success" element={<Success/>} />
<Route path='/about' element={ <About/> }/>   
<Route path='/contactus' element={ <ContactUs/> }/>   
<Route path='/blog' element={ <Blog/> }/>
<Route path='/blogdetals' element={ <BlogDetals/> }/>

<Route path='/coursecategory' element={<CourseCategory cartCount={cartCount} />}/>

<Route path='/instructordashboard' element={<Instructor_Dashboard/>}/>
<Route path='/instructorcourses' element={<Instructor_Courses />} />
<Route path='/instructorquiz' element={<Instructor_Quiz />} />
<Route path='/instructorearning' element={<Instructor_earning />} />
<Route path='/instructorstudentlist' element={<Instructor_studentlist />} />
<Route path='/instrctororder' element={<Instructor_order />} />
<Route path='/instructorreviews' element={<Instructor_Reviews />} />
<Route path='/instructoreditprofile' element={<Instructor_Editprofile />} />
<Route path='/instructorpayout' element={<Instructor_PayOuts />} />
<Route path='/instructorsetting' element={<Instructor_setting />} />
<Route path='/instructordelete' element={<Instructor_Deleteprofile />} />
<Route path='/instructorcreatecourses' element={<Instructor_createCourse/>}/>
<Route path='/signout' element={<Sign_in />} />
<Route path='/signUp' element={<Sign_UP/>} />
<Route path='/reset-password' element={<ForgetPassword />} />
<Route path='/user/reset/:id/:token' element={<ChangePassword />} />
<Route path='/instructorlogin' element={<Instructor_Login/>} />
<Route path='/course' element={<CourseCategory1/>}/> 
<Route path='/courselist' element={<CourseList1/>}/>
<Route path='/frontendcourse' element={<FrontEndCourseList/>}/>
<Route path='/backendcourse' element={<BackEndCourseList/>}/>
<Route path='/graphicscourse' element={<GraphicsCourseList/>}/>
<Route path='/digitalmarketing' element={<DigitalMarketingCourse/>}/>
<Route path='/networkingvideo' element={<NetworkingVideo/>}/>
<Route path='/frontendvideo' element={<FrontEndVideo/>}/>
<Route path='/backendvideo' element={<BackEndVideo/>}/>
<Route path='/graphicsvideo' element={<GraphicsVideo/>}/>
<Route path='/DMvideo' element={<MarketingVideo/>}/>
<Route path='/videoplayer1' element={<VideoPlayer1/>}/>
<Route path='/checkout' element={<Checkout/>}/>
<Route path='/paymentpage' element={<CoursePayment/>}/>
{/* 
Student Dashboard Route Start */}

          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route
            path="/studentsubscription"
            element={<StudentSubscription />}
          />
          <Route path="/studentlist" element={<StudentCourseList />} />
          <Route path="/studentresume" element={<StudentCourseResume />} />
          <Route path="/studentquiz" element={<StudentQuiz />} />
          <Route path="/studentpaymentinfo" element={<StudentPaymentInfo />} />
          <Route path="/studentbookmark" element={<StudentBookmark />} />
          <Route path="/studenteditprofile" element={<StudentEditProfile />} />
          {/* <Route path='/studentpayout' element={ <StudentPayout/>}/> */}
          <Route path="/studentsetting" element={<StudentSetting />} />
          <Route
            path="/studentdeleteaccount"
            element={<StudentDeleteAccount />}
          />
          {/* Student Dashboard Route End */}

{/* Admin Dashboard Route Start */}
<Route path="/adminlogin" element={<AdminLogin/>} />
<Route path="/admin-dashboard" element={<AdminDashboard/>} />
{/* <Route path="/abroad-single" element={<AbroadSingle />} /> */}
<Route path="/admin-student-list" element={<AdminStudentList/>}/>
<Route Path="/admin-instructor-card" element={<AdminInstructorCard/>}/>
<Route path="/admin-course-category" element={<AdminCourseCategory/>} />
<Route path="/admin-course-detail" element={<AdminCourseDetail/>} />
<Route path="/admin-course-list" element={<AdminCourceList/>} />
<Route path="/admin-elearning" element={<AdminElearning/>} />
<Route path="/admin-edit-course-details" element={<AdminEditCourseDetals/>} />
<Route path="/admin-instructor-card" element={<AdminInstructorCard/>} />
<Route path="/admin-instructor-list" element={<AdminInstructirList/>} />
<Route path="/admin-instructor-request" element={<AdminInstructorRequest/>} />
<Route path="/admin-review" element={<AdminReview/>} />
<Route path="/admin-seating" element={<AdminSeating/>} />
<Route path="/AdminError" element={<AdminError404/>} />
<Route path="/AdminEdit" element = { <AdminEdit/> } />
<Route path="/productdetals" element={<ProductDetails/>} />
<Route path="/coursemore" element={<CourseMore/>} />
<Route path="/createcource" element={<CreateCourse/>} />
<Route path="/VerificationSuccess" element={<VerificationSuccess/>} />
<Route path="/VerificationFailed" element={<VerificationFailed/>} />


          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <BackToTop />
      </UserProvider>
    </>
  );
}

export default App;
