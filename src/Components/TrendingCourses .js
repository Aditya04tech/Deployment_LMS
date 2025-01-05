import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utility to format the price
const formatPrice = (price) => {
    return price === 0 ? "Free" : `₹${price.toLocaleString()}`;
};

// Individual Course Card
const CourseCard = ({ course }) => {
    const cardStyle = {
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
        position: "relative",
    };

    const ribbonStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "75px",
        height: "75px",
        overflow: "hidden",
        zIndex: 1,
    };

    const ribbonSpanStyle = {
        position: "absolute",
        display: "block",
        width: "105px",
        backgroundColor: "#5cb85c",
        color: "#fff",
        textAlign: "center",
        transform: "rotate(-45deg)",
        top: "19px",
        left: "-21px",
        padding: "5px 0",
        fontSize: "12px",
    };

    const footerStyle = {
        padding: "15px",
        borderTop: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    return (
        <div style={cardStyle} className="mx-2">
            <img src={course.image} alt="course" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            {course.isFree && (
                <div style={ribbonStyle}>
                    <span style={ribbonSpanStyle}>Free</span>
                </div>
            )}
            <div style={{ padding: "15px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <div>
                        <span style={{ marginRight: "5px", padding: "3px 10px", background: "#e7f3ff", color: "#007bff", borderRadius: "4px", fontSize: "12px" }}>
                            {course.category}
                        </span>
                        <span style={{ padding: "3px 10px", background: "#333", color: "#fff", borderRadius: "4px", fontSize: "12px" }}>
                            {course.level}
                        </span>
                    </div>
                    <i className="far fa-bookmark" style={{ fontSize: "16px", color: "#888" }}></i>
                </div>
                <h5 style={{ fontSize: "16px", marginBottom: "10px" }}>
                    <Link to="#" style={{ color: "#333", textDecoration: "none" }}>{course.title}</Link>
                </h5>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ color: "#f39c12", fontWeight: "bold" }}>
                        {course.rating} <i className="fas fa-star" style={{ color: "#f39c12", marginLeft: "5px" }}></i>
                        <span style={{ color: "#888", fontSize: "12px", marginLeft: "5px" }}>({course.reviews})</span>
                    </span>
                    <span style={{ color: "#888", fontSize: "14px" }}>
                        {course.students} Students
                    </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#666" }}>
                    <span>
                        <i className="far fa-clock" style={{ marginRight: "5px", color: "#e74c3c" }}></i>
                        {course.duration}
                    </span>
                    <span>
                        <i className="fas fa-table" style={{ marginRight: "5px", color: "#f39c12" }}></i>
                        {course.lectures} Lectures
                    </span>
                </div>
            </div>
            <div style={footerStyle}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={course.instructor.image}
                        alt="instructor"
                        style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                    />
                    <Link to="#" style={{ color: "#333", fontSize: "14px", textDecoration: "none" }}>{course.instructor.name}</Link>
                </div>
                <h4 style={{ color: "#28a745", marginBottom: 0 }}>{formatPrice(course.price)}</h4>
            </div>
        </div>
    );
};

// Trending Courses Component
const TrendingCourses = () => {
    const courses = [
        {
            image: "assets/images/courses/4by3/14.jpg",
            title: "The Complete Digital Marketing Course - 8 Courses in 1",
            category: "Design",
            level: "Beginner",
            rating: 4.5,
            reviews: 6500,
            students: 6500,
            duration: "6h 56m",
            lectures: 82,
            instructor: { name: "Larry Lawson", image: "assets/images/avatar/10.jpg" },
            isFree: true,
            price: 0,
        },
        {
            image: "assets/images/courses/4by3/15.jpg",
            title: "Angular – The Complete Guide (2021 Edition)",
            category: "Development",
            level: "All level",
            rating: 4.0,
            reviews: 3500,
            students: 4500,
            duration: "12h 45m",
            lectures: 65,
            instructor: { name: "Billy Vasquez", image: "assets/images/avatar/04.jpg" },
            isFree: false,
            price: 255,
        },
        {
            image: "assets/images/courses/4by3/16.jpg",
            title: "React – Master React Framework with Projects",
            category: "Development",
            level: "Intermediate",
            rating: 4.7,
            reviews: 2000,
            students: 3000,
            duration: "8h 30m",
            lectures: 90,
            instructor: { name: "John Smith", image: "assets/images/avatar/05.jpg" },
            isFree: false,
            price: 199,
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section style={{ padding: "40px 0", backgroundColor: "#f8f9fa" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Our Trending Courses</h2>
                    <p style={{ color: "#666" }}>Explore the top courses trending in the market.</p>
                </div>
                <Slider {...sliderSettings}>
                    {courses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TrendingCourses;
