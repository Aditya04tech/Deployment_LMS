import React,{useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { ChevronDown, ChevronUp, Check } from "lucide-react";


const courses = [
  {
    id: "1",
    title: "Ultimate AWS Certified Solutions Architect Associate 2025",
    rating: 4.7,
    students: 1053550,
    price: 3499,  
    hours: 27.5,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "2",
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
    rating: 4.7,
    students: 1066157,
    price: 3499,
    hours: 15,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "3",
    title: "Ultimate AWS Certified Solutions Architect Professional 2025",
    rating: 4.6,
    students: 186086,
    price: 3999,
    hours: 17,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "4",
    title: "[NEW] Ultimate AWS Certified AI Practitioner AIF-C01",
    rating: 4.8,
    students: 46179,
    price: 1499,
    hours: 10,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "5",
    title: "Ultimate AWS Certified Security Specialty [NEW 2025] SCS-C02",
    rating: 4.6,
    students: 43518,
    price: 3499,
    hours: 16,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "6",
    title: "Amazon Web Services (AWS) Certified - 4 Certifications!",
    rating: 4.5,
    students: 159006,
    price: 4999,
    hours: 46,
    updatedDate: "5/2024",
    isBestseller: false,
    thumbnail: "https://via.placeholder.com/80"
  }
];

const ProductDetails = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [expandedSections, setExpandedSections] = useState([]);
 

  const sections = [
    { id: "section-1", title: "Course Introduction - AWS Certified Developer Associate", lectures: 6, duration: "10min" },
    { id: "section-2", title: "Code & Slides Download", lectures: 1, duration: "1min" },
    { id: "section-3", title: "Getting started with AWS", lectures: 3, duration: "14min" },
    { id: "section-4", title: "IAM & AWS CLI", lectures: 19, duration: "56min" },
    { id: "section-5", title: "EC2 Fundamentals", lectures: 15, duration: "1hr 28min" },
    { id: "section-6", title: "EC2 Instance Storage", lectures: 13, duration: "56min" },
    { id: "section-7", title: "AWS Fundamentals: ELB + ASG", lectures: 19, duration: "1hr 36min" },
    { id: "section-8", title: "AWS Fundamentals: RDS + Aurora + ElastiCache", lectures: 11, duration: "1hr 6min" },
    { id: "section-9", title: "Route 53", lectures: 20, duration: "1hr 30min" },
    { id: "section-10", title: "VPC Fundamentals", lectures: 6, duration: "25min" },
  ];

  const totalSections = 34;
  const totalLectures = 466;
  const totalDuration = "32h 58m";

  const handleExpandAll = () => {
    if (expandedSections.length === sections.length) {
      setExpandedSections([]);
    } else {
      setExpandedSections(sections.map((section) => section.id));
    }
  };

  const toggleSection = (id) => {
    if (expandedSections.includes(id)) {
      setExpandedSections(expandedSections.filter((sectionId) => sectionId !== id));
    } else {
      setExpandedSections([...expandedSections, id]);
    }
  };


  const learningPoints = [
    {
      text: "Pass the AWS Certified Developer Associate Certification (DVA-C02)",
    },
    { text: "All 700+ slides available as downloadable PDF" },
    {
      text: "Deploy an application using Elastic Beanstalk and AWS CICD tools with full automation",
    },
    { text: "Write infrastructure as code using AWS CloudFormation" },
    { text: "Master the CLI, SDK and IAM security best practices in EC2" },
    {
      text: "Secure your entire AWS Cloud using KMS, Encryption SDK, IAM Policies & SSM",
    },
    { text: "Full Practice Exam with Explanations included!" },
    {
      text: "Apply the right AWS services for your future real-world AWS projects",
    },
    {
      text: "Understand Serverless API using AWS Lambda, API Gateway, DynamoDB & Cognito",
    },
    {
      text: "Implement messaging and integration patterns using AWS SQS, SNS & Kinesis",
    },
    {
      text: "Monitor, Trace and Audit your microservices using CloudWatch, X-Ray and CloudTrail",
    },
  ];

  const visiblePoints = isExpanded
    ? learningPoints
    : learningPoints.slice(0, 6);

  const styles = {
    container: {},
    header: {
      backgroundColor: "#212529",
      color: "#fff",
      padding: "16px",

      marginTop: "150px",
    },
    H2: {},
    title: {
      fontSize: "1.75rem",
      marginBottom: "12px",
    },
    subtitle: {
      color: "#ffc107",
      marginBottom: "8px",
    },
    badge: {
      backgroundColor: "#ffc107",
      color: "#000",
      padding: "4px 8px",
      borderRadius: "4px",
      marginRight: "8px",
      fontWeight: "bold",
    },
    card2: {
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      position: "sticky", // Makes the bar sticky
      top: "140px", // Distance from the top of the viewport
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    card3: {
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",

      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    buttonPrimary: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 16px",
      borderRadius: "4px",
      border: "none",
      width: "100%",
      marginBottom: "12px",
    },
    buttonLight: {
      backgroundColor: "#f8f9fa",
      color: "#000",
      padding: "8px 12px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      marginRight: "8px",
    },
    inputGroup: {
      display: "flex",
      alignItems: "center",
      marginTop: "12px",
    },
    input: {
      flex: 1,
      padding: "8px",
      border: "1px solid #ced4da",
      borderRadius: "4px",
    },
    inputButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      marginLeft: "8px",
    },

    card: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "24px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "24px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr", // Two columns
      gap: "16px",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },
    icon: {
      marginTop: "4px",
      color: "#007bff", // Primary color
    },
    text: {
      fontSize: "0.875rem", // Small text
      lineHeight: "1.5",
    },
    button: {
      background: "none",
      border: "none",
      color: "#007bff",
      fontWeight: "600",
      fontSize: "0.875rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      marginTop: "24px",
    },
    buttonIcon: {
      width: "16px",
      height: "16px",
    },
    b1:{
      backgroundColor: "#ddd", // Corrected to camelCase
      border: "none",
      color: "black",
      padding: "10px 20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      margin: "4px 2px",
      cursor: "pointer",
      borderRadius: "16px", // Corrected to camelCase
    },
   
    container: {
      backgroundColor: "#fff",
      border: "1px solid #d1d5db", // Equivalent to Tailwind's border-gray-300
      padding: "1.5rem",
      borderRadius: "0.5rem",
      boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
      maxWidth: "64rem",
      width: "100%",
    },
    heading: {
      fontSize: "1.125rem", // Equivalent to Tailwind's text-lg
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    paragraph: {
      color: "#4b5563", // Equivalent to Tailwind's text-gray-600
      marginBottom: "1rem",
    },
    link: {
      color: "#2563eb", // Equivalent to Tailwind's text-blue-600
      textDecoration: "underline",
    },
    logoRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem", // Add spacing between images if needed
    },

    

    logo: {
      height: "2.5rem", // Equivalent to Tailwind's h-10
      objectFit: "contain",
    },

  };

  return (
    <>
      <Nav />

{/* =======================
Page intro START */}
<section className="bg-blue py-7">
  <div className="container">
    <div className="row justify-content-lg-between">
      <div className="col-lg-8">
        {/* Title */}
        <h1 className="text-white">The Complete Digital Marketing Course - 12 Courses in 1</h1>
        <p className="text-white">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
        {/* Content */}
        <ul className="list-inline mb-5">
          <li className="list-inline-item h6 me-4 mb-1 mb-sm-0 text-white"><span className="fw-light">By</span> Lori Stevens</li>
          <li className="list-inline-item me-4 mb-1 mb-sm-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
              <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
              <li className="list-inline-item ms-2 h6 text-white">4.5/5.0</li>
              <li className="list-inline-item text-white">(1,586 reviews)</li>
            </ul>
          </li>
          <li className="list-inline-item h6 mb-0 text-white"><i className="fas fa-globe text-info me-2" />English</li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h6 className="text-white lead fw-light mb-3"><i className="fas fa-user-graduate text-orange me-2" />12,155 already enrolled</h6>
        {/* Button */}
        <a href="#" className="btn btn-warning mb-3 w-100">Enroll Course</a>
        {/* Progress item */}
        <div className="overflow-hidden mb-4">
          <h6 className="text-white">Your Progress</h6>
          <div className="progress progress-sm bg-white bg-opacity-10 mb-1">
            <div className="progress-bar bg-white aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <small className="text-white">08 of 135 Completed</small>
        </div>
      </div>
    </div>
  </div>
</section>
{/* =======================
Page intro END */}







      {/* <div style={styles.header}>
      
        <h1 style={styles.title}>
          Ultimate AWS Certified Developer Associate 2025 DVA-C02
        </h1>
        <p style={styles.subtitle}>
          Full Practice Exam with Explanations included! PASS the Amazon Web
          Services Certified Developer Certification DVA-C02
        </p>
        <div className="d-flex align-items-center">
          <span style={styles.badge}>Bestseller</span>
          <span className="text-warning fw-bold me-2">4.7</span>
          <span className="text-secondary">(106,309 ratings)</span>
          <span className="text-secondary ms-2">578,889 students</span>
        </div>
      </div> */}
      <div className="container  w-100">
        <div className=" row  mt-4" style={styles.H2}>
          <div className="col-md-8">
            <div >

            <div className="col-12 position-relative">
  <div className="video-player rounded-3 h-50">
    <video controls crossOrigin="anonymous" playsInline poster="assets/images/videos/poster.jpg" className="">
      <source src="assets/images/videos/360p.mp4" type="video/mp4" size={360} />
      <source src="assets/images/videos/720p.mp4" type="video/mp4" size={720} />
      <source src="assets/images/videos/1080p.mp4" type="video/mp4" size={1080} />
      {/* Caption files */}
      <track kind="captions" label="English" srcLang="en" src="assets/images/videos/en.vtt" default />
      <track kind="captions" label="French" srcLang="fr" src="assets/images/videos/fr.vtt" />
    </video>
  </div>
</div>




              {/* <h5 className="fw-bold">
                Prepare for your certification with this course.{" "}
                <a href="#" className="text-info">
                  Learn more
                </a>
              </h5>
              <div className="d-flex align-items-center mt-3">
                <img
                  src="https://placehold.co/100x100"
                  alt="AWS badge"
                  className="me-3 rounded"
                />
                <span>AWS Certified Developer – Associate</span>
              </div> */}
            </div>



            <div className="col-12">
  <div className="card border">
    {/* Card header START */}
    <div className="card-header border-bottom">
      <h3 className="mb-0">Course description</h3>
    </div>
    {/* Card header END */}
    {/* Card body START */}
    <div className="card-body">
      <p className="mb-3">Welcome to the <strong> Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)</strong></p>
      <p className="mb-3">In this practical hands-on training, you’re going to learn to become a digital marketing expert with this <strong> ultimate course bundle that includes 12 digital marketing courses in 1!</strong></p>
      <p className="mb-0">If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced <strong><a href="#" className="text-reset text-decoration-underline">digital marketing course</a></strong> syllabus, let’s look at the scope of digital marketing and what the future holds.</p>
      {/* Collapse body */}
      <div className="collapse" id="collapseContent">
        <p className="my-3">We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
        <p className="mb-0">Behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
      </div>
      {/* Collapse button */}
      <a className="p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
        See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i className="fas fa-angle-down ms-2" />
      </a>
      {/* List content */}
      <h5 className="mt-4">What you’ll learn</h5>

      <div className="row mb-3">
      {visiblePoints.map((point, index) => (
        <div className="col-md-6">
          <ul className="list-group list-group-borderless">
            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />{point.text}</li>
            
          </ul>
        </div>
          ))}
      </div>
      <p className="mb-0">As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. </p>
    </div>
    {/* Card body START */}
  </div>
</div>


            {/* <div className="bg-gray-100 p-4 rounded-lg mb-4">


            

            <div style={styles.card}>
      <h2 style={styles.title}>What you'll learn</h2>
      <div style={styles.grid}>
        {visiblePoints.map((point, index) => (
          <div key={index} style={styles.listItem}>
            <Check style={styles.icon} />
            <span style={styles.text}>{point.text}</span>
          </div>
        ))}
      </div>
      {learningPoints.length > 6 && (
        <button style={styles.button} onClick={() => setIsExpanded(!isExpanded)}>
          Show {isExpanded ? "less" : "more"}
          {isExpanded ? (
            <ChevronUp style={styles.buttonIcon} />
          ) : (
            <ChevronDown style={styles.buttonIcon} />
          )}
        </button>
      )}
    </div>
            </div> */}

            
         
      
            {/*  */}
            <div style={styles.mainView} className="mt-3">
      <div style={styles.container}>

      <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Explore related topics</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full" style={styles.b1}>
                  AWS Certified Developer - Associate
                </span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"  style={styles.b1}>
                  IT Certifications
                </span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"  style={styles.b1}>
                  IT & Software
                </span>
              </div>
            </div>
            <div>
            <div class="row">
    <div class="col-sm-6 p-3 text-dark">
    <div className="col-span-8 md:col-span-4 space-y-4">
        <div className="flex items-center space-x-3 p-2">
            <i className="fas fa-play-circle text-xl"></i>
            <span>33 hours on-demand video</span>
        </div>
        <div className="flex items-center space-x-3 p-2">
            <i className="fas fa-closed-captioning text-xl"></i>
            <span>Closed captions</span>
        </div>
        <div className="flex items-center space-xl-3 p-2">
            <i className="fas fa-question-circle text-xl "></i>
            <span>1 practice test</span>
        </div>
        <div className="flex items-center space-x-3">
            <i className="fas fa-audio-description text-xl p-2"></i>
            <span>Audio description in existing audio</span>
        </div>
    </div>
    </div>
    <div class="col-sm-6 p-3 text-dark">
    <div className="col-span-8 md:col-span-4 space-y-4">
        
        <div className="flex items-center space-xl-3 p-2">
            <i className="fas fa-file-alt text-xl"></i>
            <span>9 articles</span>
        </div>
        <div className="flex items-center space-xl-3 p-2">
            <i className="fas fa-trophy text-xl"></i>
            <span>Certificate of completion</span>
        </div>
        <div className="flex items-center space-xl-3 p-2" >
            <i className="fas fa-mobile-alt text-xl"></i>
            <span>Access on mobile and TV</span>
        </div>
    </div>
    </div>
  </div>
            </div>




        <h2 style={styles.heading}>
          Top companies offer this course to their employees
        </h2>
        <p style={styles.paragraph}>
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide.{" "}
          <a href="#" style={styles.link}>
            Learn more
          </a>
        </p>
        {/* <div style={styles.logoRow}>
          <img
            src="https://placehold.co/100x50?text=Nasdaq+Logo"
            alt="Nasdaq logo"
            style={styles.logo}
          />
          <img
            src="https://placehold.co/100x50?text=VW+Logo"
            alt="Volkswagen logo"
            style={styles.logo}
          />
          <img
            src="https://placehold.co/100x50?text=Box+Logo"
            alt="Box logo"
            style={styles.logo}
          />
          <img
            src="https://placehold.co/100x50?text=NetApp+Logo"
            alt="NetApp logo"
            style={styles.logo}
          />
          <img
            src="https://placehold.co/100x50?text=Eventbrite+Logo"
            alt="Eventbrite logo"
            style={styles.logo}
          />
        </div> */}
      </div>
    </div>
            
            {/*  */}

           {/*  */}


           {/* =======================
Page content START */}
<section className="pb-0 py-lg-5">
    <div className="row">
      {/* Main content START */}
      <div className="col-lg-12">
        <div className="card shadow rounded-2 p-0">
          {/* Tabs START */}
          <div className="card-header border-bottom px-4 py-3">
            <ul className="nav nav-pills nav-tabs-line py-0" id="course-pills-tab" role="tablist">
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1" aria-selected="true">Overview</button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2" aria-selected="false">Curriculum</button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3" aria-selected="false">Instructor</button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-4" type="button" role="tab" aria-controls="course-pills-4" aria-selected="false">Reviews</button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-5" data-bs-toggle="pill" data-bs-target="#course-pills-5" type="button" role="tab" aria-controls="course-pills-5" aria-selected="false">FAQs </button>
              </li>
              {/* Tab item */}
              <li className="nav-item me-2 me-sm-4" role="presentation">
                <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-6" data-bs-toggle="pill" data-bs-target="#course-pills-6" type="button" role="tab" aria-controls="course-pills-6" aria-selected="false">Comment</button>
              </li>
            </ul>
          </div>
          {/* Tabs END */}
          {/* Tab contents START */}
          <div className="card-body p-4">
            <div className="tab-content pt-2" id="course-pills-tabContent">
              {/* Content START */}
              <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
                {/* Course detail START */}
                <h5 className="mb-3">Course Description</h5>
                <p className="mb-3">Welcome to the <strong> Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)</strong></p>
                <p className="mb-3">In this practical hands-on training, you’re going to learn to become a digital marketing expert with this <strong> ultimate course bundle that includes 12 digital marketing courses in 1!</strong></p>
                <p className="mb-3">If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced <strong><a href="#" className="text-reset text-decoration-underline">digital marketing course</a></strong> syllabus, let’s look at the scope of digital marketing and what the future holds.</p>
                <p className="mb-0">We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
                {/* List content */}
                <h5 className="mt-4">What you’ll learn</h5>
                <ul className="list-group list-group-borderless mb-3">
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Digital marketing course introduction</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Customer Life cycle</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />What is Search engine optimization(SEO)</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Facebook ADS</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Facebook Messenger Chatbot</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Search engine optimization tools</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Why SEO</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />URL Structure</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Featured Snippet</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />SEO tips and tricks</li>
                  <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Google tag manager</li>
                </ul>
                <p className="mb-0">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. </p>
                {/* Course detail END */}
              </div>
              {/* Content END */}
              {/* Content START */}
              <div className="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
                {/* Course accordion START */}
                <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
                  {/* Item */}
                  <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-1">
                      <button className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                        Introduction of Digital Marketing 
                        <span className="small ms-0 ms-sm-2">(3 Lectures)</span> 
                      </button>
                    </h6>
                    <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                      <div className="accordion-body mt-3">
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                          </div>
                          <p className="mb-0">2m 10s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px"> What is Digital Marketing What is Digital Marketing</span>
                          </div>
                          <p className="mb-0 text-truncate">15m 10s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Type of Digital Marketing</span>
                          </div>
                          <p className="mb-0">18m 10s</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-2">
                      <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                        Customer Life cycle
                        <span className="small ms-0 ms-sm-2">(4 Lectures)</span> 
                      </button>
                    </h6>
                    <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
                      {/* Accordion body START */}
                      <div className="accordion-body mt-3">
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">What is Digital Marketing</span>
                          </div>
                          <p className="mb-0">11m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">15 Tips for Writing Magnetic Headlines</span>
                          </div>
                          <p className="mb-0 text-truncate">25m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to Write Like Your Customers Talk</span>
                          </div>
                          <p className="mb-0">11m 30s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <div>
                              <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fas fa-play me-0" />
                              </a>
                            </div>
                            <div className="row g-sm-0 align-items-center">
                              <div className="col-sm-6">
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">How to Flip Features Into Benefits</span>
                              </div>
                              <div className="col-sm-6">
                                <span className="badge text-bg-orange ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">35m 30s</p>
                        </div>
                      </div>
                      {/* Accordion body END */}
                    </div>
                  </div>
                  {/* Item */}
                  <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-5">
                      <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                        What is Search Engine Optimization(SEO) 
                        <span className="small ms-0 ms-sm-2">(10 Lectures)</span> 
                      </button>
                    </h6>
                    <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample2">
                      {/* Accordion body START */}
                      <div className="accordion-body mt-3">
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                          </div>
                          <p className="mb-0">1m 10s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Overview of SEO</span>
                          </div>
                          <p className="mb-0 text-truncate">11m 03s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to SEO Optimise Your Homepage</span>
                          </div>
                          <p className="mb-0">15m 00s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to SEO Optimise Your Homepage</span>
                          </div>
                          <p className="mb-0">15m 00s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to Write Title Tags Search Engines Love</span>
                          </div>
                          <p className="mb-0">25m 30s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">SEO Keyword Planning</span>
                          </div>
                          <p className="mb-0">18m 10s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">eCommerce SEO</span>
                          </div>
                          <p className="mb-0">28m 10s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Internal and External Links</span>
                          </div>
                          <p className="mb-0">45m 10s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Mobile SEO</span>
                          </div>
                          <p className="mb-0">8m 10s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Off-page SEO</span>
                          </div>
                          <p className="mb-0">18m 10s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Measuring SEO Effectiveness</span>
                          </div>
                          <p className="mb-0">35m 10s</p>
                        </div>
                      </div>
                      {/* Accordion body END */}
                    </div>
                  </div>
                  {/* Item */}
                  <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-6">
                      <button className="accordion-button fw-bold collapsed rounded d-block d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                        Facebook ADS 
                        <span className="small ms-0 ms-sm-2">(3 Lectures)</span> 
                      </button>
                    </h6>
                    <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample2">
                      {/* Accordion body START */}
                      <div className="accordion-body mt-3">
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                          </div>
                          <p className="mb-0">1m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Creating Facebook Pages</span>
                          </div>
                          <p className="mb-0 text-truncate">25m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Facebook Page Custom URL</span>
                          </div>
                          <p className="mb-0">11m 30s</p>
                        </div>
                      </div>
                      {/* Accordion body END */}
                    </div>	
                  </div>
                  {/* Item */}
                  <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-7">
                      <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                        YouTube Marketing 
                        <span className="small ms-0 ms-sm-2">(5 Lectures)</span> 
                      </button>
                    </h6>
                    <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionExample2">
                      {/* Accordion body START */}
                      <div className="accordion-body mt-3">
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Video Flow</span>
                          </div>
                          <p className="mb-0">25m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Webmaster Tool</span>
                          </div>
                          <p className="mb-0 text-truncate">15m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Featured Contents on Channel</span>
                          </div>
                          <p className="mb-0">32m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <div>
                              <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fas fa-play me-0" />
                              </a>
                            </div>
                            <div className="row g-sm-0 align-items-center">
                              <div className="col-sm-6">
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Managing Comments</span>
                              </div>
                              <div className="col-sm-6">
                                <span className="badge text-bg-orange ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">20m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <div>
                              <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fas fa-play me-0" />
                              </a>
                            </div>
                            <div className="row g-sm-0 align-items-center">
                              <div className="col-sm-6">
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Channel Analytics</span>
                              </div>
                              <div className="col-sm-6">
                                <span className="badge text-bg-orange ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">18m 20s</p>
                        </div>
                      </div>
                      {/* Accordion body END */}
                    </div>
                  </div>
                  {/* Item */}
                  <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-8">
                      <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                        Why SEO 
                        <span className="small ms-0 ms-sm-2">(8 Lectures)</span> 
                      </button>
                    </h6>
                    <div id="collapse-8" className="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#accordionExample2">
                      {/* Accordion body START */}
                      <div className="accordion-body mt-3">
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Understanding SEO</span>
                          </div>
                          <p className="mb-0">20m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">On-Page SEO</span>
                          </div>
                          <p className="mb-0 text-truncate">15m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Local SEO</span>
                          </div>
                          <p className="mb-0">16m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Measuring SEO Effectiveness</span>
                          </div>
                          <p className="mb-0">12m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <div>
                              <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fas fa-play me-0" />
                              </a>
                            </div>
                            <div className="row g-sm-0 align-items-center">
                              <div className="col-sm-6">
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Keywords in Blog and Articles</span>
                              </div>
                              <div className="col-sm-6">
                                <span className="badge text-bg-orange ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">15m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <div>
                              <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fas fa-play me-0" />
                              </a>
                            </div>
                            <div className="row g-sm-0 align-items-center">
                              <div className="col-sm-6">
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">SEO Keyword Planning</span>
                              </div>
                              <div className="col-sm-6">
                                <span className="badge text-bg-orange ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">36m 12s</p>
                        </div>
                      </div>
                      {/* Accordion body END */}
                    </div>
                  </div>	
                  {/* Item */}
                  <div className="accordion-item mb-3">
                    <h6 className="accordion-header font-base" id="heading-9">
                      <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
                        Google tag manager  
                        <span className="small ms-0 ms-sm-2">(4 Lectures)</span> 
                      </button>
                    </h6>
                    <div id="collapse-9" className="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#accordionExample2">
                      {/* Accordion body START */}
                      <div className="accordion-body mt-3">
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">G+ Pages Ranks Higher</span>
                          </div>
                          <p className="mb-0">13m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Adding Contact Links</span>
                          </div>
                          <p className="mb-0 text-truncate">7m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Google Hangouts</span>
                          </div>
                          <p className="mb-0">12m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px"> Google Local Business</span>
                          </div>
                          <p className="mb-0 text-truncate">7m 20s</p>
                        </div>
                      </div>
                      {/* Accordion body END */}
                    </div>
                  </div>	
                  {/* Item */}
                  <div className="accordion-item mb-0">
                    <h6 className="accordion-header font-base" id="heading-10">
                      <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">
                        Integration with Website 
                        <span className="small ms-0 ms-sm-2">(3 Lectures)</span> 
                      </button>
                    </h6>
                    <div id="collapse-10" className="accordion-collapse collapse" aria-labelledby="heading-10" data-bs-parent="#accordionExample2">
                      {/* Accordion body START */}
                      <div className="accordion-body mt-3">
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Creating LinkedIn Account</span>
                          </div>
                          <p className="mb-0 text-truncate">13m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Advance Searching</span>
                          </div>
                          <p className="mb-0">31m 20s</p>
                        </div>
                        <hr /> {/* Divider */}
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">LinkedIn Mobile App</span>
                          </div>
                          <p className="mb-0 text-truncate">25m 20s</p>
                        </div>
                      </div>
                      {/* Accordion body END */}
                    </div>
                  </div>	
                </div>
                {/* Course accordion END */}
              </div>
              {/* Content END */}
              {/* Content START */}
              <div className="tab-pane fade" id="course-pills-3" role="tabpanel" aria-labelledby="course-pills-tab-3">
                {/* Card START */}
                <div className="card mb-0 mb-md-4">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-5">
                      {/* Image */}
                      <img src="assets/images/instructor/01.jpg" className="img-fluid rounded-3" alt="instructor-image" />
                    </div>
                    <div className="col-md-7">
                      {/* Card body */}
                      <div className="card-body">
                        {/* Title */}
                        <h3 className="card-title mb-0">Louis Ferguson</h3>
                        <p className="mb-2">Instructor of Marketing</p>
                        {/* Social button */}
                        <ul className="list-inline mb-3">
                          <li className="list-inline-item me-3">
                            <a href="#" className="fs-5 text-twitter"><i className="fab fa-twitter-square" /></a>
                          </li>
                          <li className="list-inline-item me-3">
                            <a href="#" className="fs-5 text-instagram"><i className="fab fa-instagram-square" /></a>
                          </li>
                          <li className="list-inline-item me-3">
                            <a href="#" className="fs-5 text-facebook"><i className="fab fa-facebook-square" /></a>
                          </li>
                          <li className="list-inline-item me-3">
                            <a href="#" className="fs-5 text-linkedin"><i className="fab fa-linkedin" /></a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="fs-5 text-youtube"><i className="fab fa-youtube-square" /></a>
                          </li>
                        </ul>
                        {/* Info */}
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <div className="d-flex align-items-center me-3 mb-2">
                              <span className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle"><i className="fas fa-user-graduate" /></span>
                              <span className="h6 fw-light mb-0 ms-2">9.1k</span>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="d-flex align-items-center me-3 mb-2">
                              <span className="icon-md bg-warning bg-opacity-15 text-warning rounded-circle"><i className="fas fa-star" /></span>
                              <span className="h6 fw-light mb-0 ms-2">4.5</span>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="d-flex align-items-center me-3 mb-2">
                              <span className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"><i className="fas fa-play" /></span>
                              <span className="h6 fw-light mb-0 ms-2">29 Courses</span>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="d-flex align-items-center me-3 mb-2">
                              <span className="icon-md bg-info bg-opacity-10 text-info rounded-circle"><i className="fas fa-comment-dots" /></span>
                              <span className="h6 fw-light mb-0 ms-2">205</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card END */}
                {/* Instructor info */}
                <h5 className="mb-3">About Instructor</h5>
                <p className="mb-3">Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashboard see frankness objection abilities. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of add screened rendered six say his striking confined. </p>
                <p className="mb-3">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.</p>
                {/* Email address */}
                <div className="col-12">
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item pb-0">Mail ID:<a href="#" className="ms-2">hello@email.com</a></li>
                    <li className="list-group-item pb-0">Web:<a href="#" className="ms-2">https://eduport.com</a></li>
                  </ul>
                </div>
              </div>
              {/* Content END */}
              {/* Content START */}
              <div className="tab-pane fade" id="course-pills-4" role="tabpanel" aria-labelledby="course-pills-tab-4">
                {/* Review START */}
                <div className="row mb-4">
                  <h5 className="mb-4">Our Student Reviews</h5>
                  {/* Rating info */}
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="text-center">
                      {/* Info */}
                      <h2 className="mb-0">4.5</h2>
                      {/* Star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0"><i className="fas fa-star-half-alt text-warning" /></li>
                      </ul>
                      <p className="mb-0">(Based on todays review)</p>
                    </div>
                  </div>
                  {/* Progress-bar and star */}
                  <div className="col-md-8">
                    <div className="row align-items-center">
                      {/* Progress bar and Rating */}
                      <div className="col-6 col-sm-8">
                        {/* Progress item */}
                        <div className="progress progress-sm bg-warning bg-opacity-15">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4">
                        {/* Star item */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        </ul>
                      </div>
                      {/* Progress bar and Rating */}
                      <div className="col-6 col-sm-8">
                        {/* Progress item */}
                        <div className="progress progress-sm bg-warning bg-opacity-15">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4">
                        {/* Star item */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        </ul>
                      </div>
                      {/* Progress bar and Rating */}
                      <div className="col-6 col-sm-8">
                        {/* Progress item */}
                        <div className="progress progress-sm bg-warning bg-opacity-15">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4">
                        {/* Star item */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        </ul>
                      </div>
                      {/* Progress bar and Rating */}
                      <div className="col-6 col-sm-8">
                        {/* Progress item */}
                        <div className="progress progress-sm bg-warning bg-opacity-15">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4">
                        {/* Star item */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        </ul>
                      </div>
                      {/* Progress bar and Rating */}
                      <div className="col-6 col-sm-8">
                        {/* Progress item */}
                        <div className="progress progress-sm bg-warning bg-opacity-15">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="col-6 col-sm-4">
                        {/* Star item */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Review END */}
                {/* Student review START */}
                <div className="row">
                  {/* Review item START */}
                  <div className="d-md-flex my-4">
                    {/* Avatar */}
                    <div className="avatar avatar-xl me-4 flex-shrink-0">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                    </div>
                    {/* Text */}
                    <div>
                      <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                        <h5 className="me-3 mb-0">Jacqueline Miller</h5>
                        {/* Review star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0"><i className="far fa-star text-warning" /></li>
                        </ul>
                      </div>
                      {/* Info */}
                      <p className="small mb-2">2 days ago</p>
                      <p className="mb-2">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                      {/* Like and dislike button */}
                      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        {/* Like button */}
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                        <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio1"><i className="far fa-thumbs-up me-1" />25</label>
                        {/* Dislike button */}
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                        <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio2"> <i className="far fa-thumbs-down me-1" />2</label>
                      </div>
                    </div>
                  </div>
                  {/* Comment children level 1 */}
                  <div className="d-md-flex mb-4 ps-4 ps-md-5">
                    {/* Avatar */}
                    <div className="avatar avatar-lg me-4 flex-shrink-0">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                    </div>
                    {/* Text */}
                    <div>
                      <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                        <h5 className="me-3 mb-0">Louis Ferguson</h5>
                      </div>
                      {/* Info */}
                      <p className="small mb-2">1 days ago</p>
                      <p className="mb-2">Water timed folly right aware if oh truth. Imprudence attachment him for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything.</p>
                    </div>
                  </div>
                  {/* Divider */}
                  <hr />
                  {/* Review item END */}
                  {/* Review item START */}
                  <div className="d-md-flex my-4">
                    {/* Avatar */}
                    <div className="avatar avatar-xl me-4 flex-shrink-0">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                    </div>
                    {/* Text */}
                    <div>
                      <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                        <h5 className="me-3 mb-0">Dennis Barrett</h5>
                        {/* Review star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0"><i className="far fa-star text-warning" /></li>
                        </ul>
                      </div>
                      {/* Info */}
                      <p className="small mb-2">2 days ago</p>
                      <p className="mb-2">Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                      {/* Like and dislike button */}
                      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        {/* Like button */}
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                        <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio3"><i className="far fa-thumbs-up me-1" />25</label>
                        {/* Dislike button */}
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" />
                        <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio4"> <i className="far fa-thumbs-down me-1" />2</label>
                      </div>
                    </div>	
                  </div>
                  {/* Review item END */}
                  {/* Divider */}
                  <hr />
                </div>
                {/* Student review END */}
                {/* Leave Review START */}
                <div className="mt-2">
                  <h5 className="mb-4">Leave a Review</h5>
                  <form className="row g-3">
                    {/* Name */}
                    <div className="col-md-6 bg-light-input">
                      <input type="text" className="form-control" id="inputtext" placeholder="Name" aria-label="First name" />
                    </div>
                    {/* Email */}
                    <div className="col-md-6 bg-light-input">
                      <input type="email" className="form-control" placeholder="Email" id="inputEmail4" />
                    </div>
                    {/* Rating */}
                    <div className="col-12 bg-light-input">
                      <select id="inputState2" className="form-select js-choice">
                        <option selected>★★★★★ (5/5)</option>
                        <option>★★★★☆ (4/5)</option>
                        <option>★★★☆☆ (3/5)</option>
                        <option>★★☆☆☆ (2/5)</option>
                        <option>★☆☆☆☆ (1/5)</option>
                      </select>
                    </div>
                    {/* Message */}
                    <div className="col-12 bg-light-input">
                      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your review" rows={3} defaultValue={""} />
                    </div>
                    {/* Button */}
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary mb-0">Post Review</button>
                    </div>
                  </form>
                </div>
                {/* Leave Review END */}
              </div>
              {/* Content END */}
              {/* Content START */}
              <div className="tab-pane fade" id="course-pills-5" role="tabpanel" aria-labelledby="course-pills-tab-5">
                {/* Title */}
                <h5 className="mb-3">Frequently Asked Questions</h5>
                {/* Accordion START */}
                <div className="accordion accordion-flush" id="accordionExample">
                  {/* Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span className="text-secondary fw-bold me-3">01</span>  
                        <span className="h6 mb-0">How Digital Marketing Work?</span> 
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body pt-0">
                        Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed. 
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="text-secondary fw-bold me-3">02</span>  
                        <span className="h6 mb-0">What is SEO?</span> 
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body pt-0">
                        Pleasure and so read the was hope entire first decided the so must have as on was want up of I will rival in came this touched got a physics to travelling so all especially refinement monstrous desk they was arrange the overall helplessly out of particularly ill are purer.
                        <p className="mt-2">Person she control of to beginnings view looked eyes Than continues its and because and given and shown creating curiously to more in are man were smaller by we instead the these sighed Avoid in the sufficient me real man longer of his how her for countries to brains warned notch important Finds be to the of on the increased explain noise of power deep asking contribution this live of suppliers goals bit separated poured sort several the was organization the if relations go work after mechanic But we've area wasn't everything needs of and doctor where would.</p>	
                        Go he prisoners And mountains in just switching city steps Might rung line what Mr Bulk; Was or between towards the have phase were its world my samples are the was royal he luxury the about trying And on he to my enough is was the remember a although lead in were through serving their assistant fame day have for its after would cheek dull have what in go feedback assignment Her of a any help if the a of semantics is rational overhauls following in from our hazardous and used more he themselves the parents up just regulatory.
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className="text-secondary fw-bold me-3">03</span>  
                        <span className="h6 mb-0">Who should join this course?</span> 
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body pt-0">
                        Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. <strong>Subjects he prospect elegance followed no overcame</strong> possible it on. 
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <span className="text-secondary fw-bold me-3">04</span>  
                        <span className="h6 mb-0">What are the T&amp;C for this program?</span> 
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body pt-0">
                        Night signs creeping yielding green Seasons together man green fruitful make fish behold earth unto you'll lights living moving sea open for fish day multiply tree good female god had fruitful of creature fill shall don't day fourth lesser he the isn't let multiply may Creeping earth under was You're without which image stars in Own creeping night of wherein Heaven years their he over doesn't whose won't kind seasons light Won't that fish him whose won't also it dominion heaven fruitful Whales created And likeness doesn't that Years without divided saying morning creeping hath you'll seas cattle in multiply under together in us said above dry tree herb saw living darkness without have won't for i behold meat brought winged Moving living second beast Over fish place beast image very him evening Thing they're fruit together forth day Seed lights Land creature together Multiply waters form brought.
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <span className="text-secondary fw-bold me-3">05</span>  
                        <span className="h6 mb-0">What certificates will I be received for this program?</span> 
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body pt-0">
                        Smile spoke total few great had never their too Amongst moments do in arrived at my replied Fat weddings servants but man believed prospect Companions understood is as especially pianoforte connection introduced Nay newspaper can sportsman are admitting gentleman belonging his Is oppose no he summer lovers twenty in Not his difficulty boisterous surrounded bed Seems folly if in given scale Sex contented dependent conveying advantage. 
                      </div>
                    </div>
                  </div>
                </div>
                {/* Accordion END */}
              </div>
              {/* Content END */}
              {/* Content START */}
              <div className="tab-pane fade" id="course-pills-6" role="tabpanel" aria-labelledby="course-pills-tab-6">
                {/* Review START */}
                <div className="row">
                  <div className="col-12">
                    <h5 className="mb-4">Ask Your Question</h5>
                    {/* Comment box */}
                    <div className="d-flex mb-4">
                      {/* Avatar */}
                      <div className="avatar avatar-sm flex-shrink-0 me-2">
                        <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt /> </a>
                      </div>
                      <form className="w-100 d-flex">
                        <textarea className="one form-control pe-4 bg-light" id="autoheighttextarea" rows={1} placeholder="Add a comment..." defaultValue={""} />
                        <button className="btn btn-primary ms-2 mb-0" type="button">Post</button>
                      </form>
                    </div>
                    {/* Comment item START */}
                    <div className="border p-2 p-sm-4 rounded-3 mb-4">
                      <ul className="list-unstyled mb-0">
                        <li className="comment-item">
                          <div className="d-flex mb-3">
                            {/* Avatar */}
                            <div className="avatar avatar-sm flex-shrink-0">
                              <a href="#"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt /></a>
                            </div>
                            <div className="ms-2">
                              {/* Comment by */}
                              <div className="bg-light p-3 rounded">
                                <div className="d-flex justify-content-center">
                                  <div className="me-2">
                                    <h6 className="mb-1 lead fw-bold"> <a href="#!"> Frances Guerrero </a></h6>
                                    <p className="h6 mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection?</p>
                                  </div>
                                  <small>5hr</small>
                                </div>
                              </div>
                              {/* Comment react */}
                              <ul className="nav nav-divider py-2 small">
                                <li className="nav-item"> <a className="text-primary-hover" href="#"> Like (3)</a> </li>
                                <li className="nav-item"> <a className="text-primary-hover" href="#"> Reply</a> </li>
                                <li className="nav-item"> <a className="text-primary-hover" href="#"> View 5 replies</a> </li>
                              </ul>
                            </div>
                          </div>
                          {/* Comment item nested START */}
                          <ul className="list-unstyled ms-4">
                            {/* Comment item START */}
                            <li className="comment-item">
                              <div className="d-flex">
                                {/* Avatar */}
                                <div className="avatar avatar-xs flex-shrink-0">
                                  <a href="#"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt /></a>
                                </div>
                                {/* Comment by */}
                                <div className="ms-2">
                                  <div className="bg-light p-3 rounded">
                                    <div className="d-flex justify-content-center">
                                      <div className="me-2">
                                        <h6 className="mb-1  lead fw-bold"> <a href="#"> Lori Stevens </a> </h6>
                                        <p className=" mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive. Domestic had but Drawings offended yet answered Jennings perceive.</p>
                                      </div>
                                      <small>2hr</small>
                                    </div>
                                  </div>
                                  {/* Comment react */}
                                  <ul className="nav nav-divider py-2 small">
                                    <li className="nav-item"><a className="text-primary-hover" href="#!"> Like (5)</a></li>
                                    <li className="nav-item"><a className="text-primary-hover" href="#!"> Reply</a>	</li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            {/* Comment item END */}
                          </ul>
                          {/* Comment item nested END */}
                        </li>
                      </ul>
                    </div>
                    {/* Comment item END */}
                    {/* Comment item START */}
                    <div className="border p-2 p-sm-4 rounded-3">
                      <ul className="list-unstyled mb-0">
                        <li className="comment-item">
                          <div className="d-flex">
                            {/* Avatar */}
                            <div className="avatar avatar-sm flex-shrink-0">
                              <a href="#"><img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt /></a>
                            </div>
                            <div className="ms-2">
                              {/* Comment by */}
                              <div className="bg-light p-3 rounded">
                                <div className="d-flex justify-content-center">
                                  <div className="me-2">
                                    <h6 className="mb-1 lead fw-bold"> <a href="#!"> Louis Ferguson </a></h6>
                                    <p className="h6 mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection?</p>
                                  </div>
                                  <small>5hr</small>
                                </div>
                              </div>
                              {/* Comment react */}
                              <ul className="nav nav-divider py-2 small">
                                <li className="nav-item"> <a className="text-primary-hover" href="#"> Like</a> </li>
                                <li className="nav-item"> <a className="text-primary-hover" href="#"> Reply</a> </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Comment item END */}
                  </div>
                </div>
              </div>
              {/* Content END */}
            </div>
          </div>
          {/* Tab contents END */}
        </div>
      </div>
      {/* Main content END */}
      {/* Right sidebar START */}
    
    </div>{/* Row END */}
</section>
{/* =======================
Page content END */}











          
           {/*  */}
           

           {/*  */}
         
           {/*  */}


           {/*  */}
           

           {/*  */}



          </div>
          <div className="col-md-4" style={styles.rightbar}>
            <div style={styles.card2}>
              <img
                src="https://placehold.co/300x200"
                alt="Course preview"
                className="w-100 rounded mb-3"
              />
              <div className="mb-2">
                <span className="h4 fw-bold me-2">₹449</span>
                <span className="text-muted text-decoration-line-through">
                  ₹3,999
                </span>
                <span className="text-danger ms-2">89% off</span>
              </div>
              <p className="text-danger mb-3">13 hours left at this price!</p>
              <button style={styles.buttonPrimary}>Add to cart</button>
              <p className="text-center text-muted small mb-3">
                30-Day Money-Back Guarantee
              </p>
              <div className="d-flex justify-content-between">
                <button style={styles.buttonLight}>Share</button>
                <button style={styles.buttonLight}>Gift this course</button>
                <button style={styles.buttonLight}>Apply Coupon</button>
              </div>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  style={styles.input}
                  placeholder="Enter Coupon"
                />
                <button style={styles.inputButton}>Apply</button>
              </div>
              <p className="text-center text-muted small mt-3">
                Subscribe to Udemy's top courses
              </p>
              <p className="text-center text-muted small">
                Get this course, plus 12,000+ of our top-rated courses with a
                subscription
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
