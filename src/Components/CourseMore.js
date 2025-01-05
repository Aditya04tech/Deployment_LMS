import React, { useState } from 'react';
import { Search } from 'lucide-react';

const initialCourses = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    level: "All level",
    levelColor: "purple",
    title: "Sketch from A to Z: for app designer",
    description: "Proposal indulged no do sociable he throwing settling.",
    rating: 4.0,
    duration: "12h 56m",
    lectures: 15,
    isFavorite: false,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    levelColor: "success",
    title: "Graphic Design Masterclass",
    description: "Learn the principles of graphic design and create stunning visuals",
    rating: 4.5,
    duration: "9h 56m",
    lectures: 65,
    isFavorite: true,
  }
];

const sortOptions = [
  { label: "Most Viewed", value: "views" },
  { label: "Recently Added", value: "recent" },
  { label: "Most Popular", value: "popular" },
  { label: "Top Rated", value: "rating" }
];

const App = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [filters, setFilters] = useState({
    categories: [],
    price: 'All',
    levels: [],
    search: '',
    sort: 'views'
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleToggleFavorite = (courseId) => {
    setCourses(prev =>
      prev.map(course =>
        course.id === courseId
          ? { ...course, isFavorite: !course.isFavorite }
          : course
      )
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const CourseCard = ({ image, level, levelColor, title, description, rating, duration, lectures, isFavorite, onToggleFavorite }) => (
    <div className="col-sm-6 col-xl-4">
      <div className="card shadow h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body pb-0">
          <div className="d-flex justify-content-between mb-2">
            <span className={`badge bg-${levelColor} bg-opacity-10 text-${levelColor}`}>{level}</span>
            <button 
              onClick={onToggleFavorite}
              className="h6 fw-light mb-0 border-0 bg-transparent"
            >
              <i className={`${isFavorite ? 'fas' : 'far'} fa-heart ${isFavorite ? 'text-danger' : ''}`}></i>
            </button>
          </div>
          <h5 className="card-title"><a href="#">{title}</a></h5>
          <p className="mb-2 text-truncate-2">{description}</p>
          <ul className="list-inline mb-0">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="list-inline-item me-0 small">
                <i className={`${index < Math.floor(rating) ? 'fas' : 'far'} fa-star text-warning`}></i>
              </li>
            ))}
            <li className="list-inline-item ms-2 h6 fw-light mb-0">{rating}/5.0</li>
          </ul>
        </div>
        <div className="card-footer pt-0 pb-3">
          <hr />
          <div className="d-flex justify-content-between">
            <span className="h6 fw-light mb-0">
              <i className="far fa-clock text-danger me-2"></i>{duration}
            </span>
            <span className="h6 fw-light mb-0">
              <i className="fas fa-table text-orange me-2"></i>{lectures} lectures
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const FilterSidebar = () => (
    <div className="offcanvas-lg offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
      <div className="offcanvas-header bg-light">
        <h5 className="offcanvas-title">Advance Filter</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body p-3 p-lg-0">
        <form>
          <div className="card card-body shadow p-4 mb-4">
            <h4 className="mb-3">Category</h4>
            {['All', 'Development', 'Design', 'Accounting', 'Translation', 'Finance', 'Legal', 'Photography'].map((category) => (
              <div key={category} className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={(e) => {
                      const newCategories = e.target.checked
                        ? [...filters.categories, category]
                        : filters.categories.filter(c => c !== category);
                      handleFilterChange('categories', newCategories);
                    }}
                  />
                  <label className="form-check-label">{category}</label>
                </div>
              </div>
            ))}
          </div>

          <div className="card card-body shadow p-4 mb-4">
            <h4 className="mb-3">Price Level</h4>
            <div className="d-flex gap-2">
              {['All', 'Free', 'Paid'].map((price) => (
                <div key={price}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="price"
                    id={`price-${price}`}
                    checked={filters.price === price}
                    onChange={() => handleFilterChange('price', price)}
                  />
                  <label className="btn btn-light btn-primary-soft-check" htmlFor={`price-${price}`}>
                    {price}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="card card-body shadow p-4 mb-4">
            <h4 className="mb-3">Skill Level</h4>
            <div className="d-flex flex-wrap gap-2">
              {['All levels', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <div key={level}>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={`level-${level}`}
                    checked={filters.levels.includes(level)}
                    onChange={(e) => {
                      const newLevels = e.target.checked
                        ? [...filters.levels, level]
                        : filters.levels.filter(l => l !== level);
                      handleFilterChange('levels', newLevels);
                    }}
                  />
                  <label className="btn btn-light btn-primary-soft-check" htmlFor={`level-${level}`}>
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <main>
      <section className="bg-blue align-items-center d-flex">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-white">Course Grid Classic</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark breadcrumb-dots justify-content-center mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Course Grid</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-4">
        <div className="row">
          <FilterSidebar />
          <div className="col-md-9">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <form className="search-form d-flex" onSubmit={handleSearch}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Courses..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                  />
                  <button type="submit" className="btn btn-light"><Search /></button>
                </div>
              </form>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By: {sortOptions.find(option => option.value === filters.sort)?.label || 'None'}
                </button>
                <ul className="dropdown-menu">
                  {sortOptions.map(option => (
                    <li key={option.value}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleFilterChange('sort', option.value)}
                      >
                        {option.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {courses.filter(course => course.title.toLowerCase().includes(filters.search.toLowerCase())).map(course => (
                <CourseCard
                  key={course.id}
                  {...course}
                  onToggleFavorite={() => handleToggleFavorite(course.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
