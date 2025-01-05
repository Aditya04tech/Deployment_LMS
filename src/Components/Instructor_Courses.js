import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from "../Components/Css/style.module.css";
import IFooter from './IFooter';

const Instructor_Courses = ({ videoPreview: propVideoPreview }) => {
  const [videoList, setVideoList] = useState([]); 
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [uploading, setUploading] = useState(false);
  const [videoPreview, setVideoPreview] = useState(propVideoPreview || null);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [selectedVideos, setSelectedVideos] = useState([]); // Store selected video IDs
  const [playlists, setPlaylists] = useState([]); // Store playlists
  const [newPlaylistName, setNewPlaylistName] = useState(''); // Store new playlist name

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://65.0.124.32:3000/api/videos');
      if (response.ok) {
        const data = await response.json();
        setVideoList(data);
      } else {
        alert('Failed to fetch video list');
      } 
    } catch (error) {
      alert('Error fetching videos');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setVideoPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleUpload = async () => {
    if (!selectedFile || !videoTitle) {
      alert('Please select a file and enter a title.');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('video', selectedFile);
    formData.append('title', videoTitle);

    try {
      const response = await fetch('http://65.0.124.32:3000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const uploadedVideo = await response.json();
        setVideoList((prevVideos) => [...prevVideos, uploadedVideo.video]);
        alert('Video uploaded successfully');
      } else {
        alert('Failed to upload video');
      }
    } catch (error) {
      alert('Error uploading video');
    } finally {
      setUploading(false);
      setSelectedFile(null);
      setVideoTitle('');
      setVideoPreview(null);
    }
  };

  const togglePlayVideo = (videoId) => {
    setPlayingVideoId((prevId) => (prevId === videoId ? null : videoId));
  };

  const handleDelete = async (videoId) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;

    try {
      const response = await fetch(`http://65.0.124.32:3000/api/videos/${videoId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setVideoList((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
      } else {
        alert('Failed to delete video');
      }
    } catch (error) {
      alert('Error deleting video');
    }
  };

  // Function to handle video selection for the playlist
  const toggleVideoSelection = (videoId) => {
    setSelectedVideos((prevSelected) =>
      prevSelected.includes(videoId)
        ? prevSelected.filter((id) => id !== videoId)
        : [...prevSelected, videoId]
    );
  };

  // Create a new playlist
  const createPlaylist = () => {
    if (!newPlaylistName || selectedVideos.length === 0) {
      alert('Enter a playlist name and select at least one video.');
      return;
    }

    const newPlaylist = {
      id: playlists.length + 1,
      name: newPlaylistName,
      videos: videoList.filter((video) => selectedVideos.includes(video.id)),
    };

    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
    setSelectedVideos([]);  // Reset selected videos
    setNewPlaylistName('');  // Reset playlist name
    alert('Playlist created successfully');
  };

  return (
    <div>
   <main>
    <br/>
    <br/>
    <br/>
    <br/>
  {/* =======================
    Main Banner START */}
  <section className="pt-0">
    {/* Main banner background image */}
    <div className="container-fluid px-0">
      {/* <div className="bg-blue h-100px h-md-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
      </div> */}
    </div>
    <div className="container mt-n4">
      <div className="row">
        {/* Profile banner START */}
        <div className="col-12">
          <div className="card bg-transparent card-body p-0">
            <div className="row d-flex justify-content-between">
              {/* Avatar */}
              <div className="col-auto mt-4 mt-md-0">
                <div className="avatar avatar-xxl mt-n3">
                  <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/01.jpg" alt="" />
                </div>
              </div>
              {/* Profile info */}
              <div className="col d-md-flex justify-content-between align-items-center mt-4">
                <div>
                  <h1 className="my-1 fs-4">Lori Stevens <i className="bi bi-patch-check-fill text-info small" /></h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />12k Enrolled Students</li>
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-2" />25 Courses</li>
                  </ul>
                </div>
                {/* Button */}
                <div className="d-flex align-items-center mt-2 mt-md-0">
                <Link to="/instructorcreatecourses" className="btn btn-success mb-0">Create a course</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Profile banner END */}
          {/* Advanced filter responsive toggler START */}
          {/* Divider */}
          <hr className="d-xl-none" />
          <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
            <Link className="h6 mb-0 fw-bold d-xl-none" href="#">Menu</Link>
            <button className="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
              <i className="fas fa-sliders-h" />
            </button>
          </div>
          {/* Advanced filter responsive toggler END */}
        </div>
      </div>
    </div>
  </section>
  {/* =======================
    Main Banner END */}
  {/* =======================
    Inner part START */}
  <section className="pt-0"> 
    <div className="container">
      <div className="row">
        {/* Left sidebar START */}
        <div className="col-xl-3">
          {/* Responsive offcanvas body START */}
          <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
            {/* Offcanvas header */}
            <div className="offcanvas-header bg-light">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
            </div>
            {/* Offcanvas body */}
            <div className="offcanvas-body p-3 p-xl-0">
              <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
                {/* Dashboard menu */}
                <div className="list-group list-group-dark list-group-borderless">
                  <Link className="list-group-item " to="/instructordashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item active" to="/instructorcourses"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/instructorquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/instructorearning"><i className="bi bi-graph-up fa-fw me-2" />Earnings</Link>
                  <Link className="list-group-item" to="/instructorstudentlist"><i className="bi bi-people fa-fw me-2" />Students</Link>
                  <Link className="list-group-item" to="/instrctororder"><i className="bi bi-folder-check fa-fw me-2" />Orders</Link>
                  <Link className="list-group-item" to="/instructorreviews"><i className="bi bi-star fa-fw me-2" />Reviews</Link>
                  <Link className="list-group-item" to="/instructoreditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                  <Link className="list-group-item" to="/instructorpayout"><i className="bi bi-wallet2 fa-fw me-2" />Payouts</Link>
                  <Link className="list-group-item" to="/instructorsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item" to="/instructordelete"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
                  <Link className="list-group-item text-danger bg-danger-soft-hover" to="/signout"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Responsive offcanvas body END */}
        </div>
        {/* Left sidebar END */}
        {/* Main content START */}
        <div className="col-xl-9">
          {/* Card START */}
          <div className="card border bg-transparent rounded-3">
            {/* Card header START */}
            <div className="card-header bg-transparent border-bottom">
              <h4 className="mb-0">Instructor Courses List</h4>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div className="card-body">
              {/* Search and select START */}
              <div className="row g-3 align-items-center justify-content-between mb-4">
                {/* Search */}
                <div className="col-md-8">
                  <form className="rounded position-relative">
                    <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                    <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                      <i className="fas fa-search fs-6 " />
                    </button>
                  </form>
                </div>
                {/* Select option */}
                <div className="col-md-3">
                  {/* Short by filter */}
                  <form>
                    <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">
                      <option value>Sort by</option>
                      <option>Free</option>
                      <option>Newest</option>
                      <option>Most popular</option>
                      <option>Most Viewed</option>
                    </select>
                  </form>
                </div>
              </div>
              {/* Search and select END */}
              {/* Course list table START */}
              <div>
      <main>
        <div className={style.instructorDashboard}>

          {/* Upload Section */}
          <div className={style.uploadSection}>
            <h5>Upload Video</h5>
            <input
              type="text"
              placeholder="Video Title"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
            />
            <label htmlFor="video-upload" className={style.uploadIcon}>
              📹
            </label>
            <input
              type="file"
              id="video-upload"
              style={{ display: 'none' }}
              accept="video/*"
              onChange={handleFileChange}
            />

            {videoPreview && (
              <div className={style.previewSection}>
                <h5>Video Preview:</h5>
                <video src={videoPreview} controls width="200" />
                <p>{videoTitle}</p>
              </div>
            )}

            <button onClick={handleUpload} disabled={uploading}>
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>

          {/* Uploaded Videos List */}
          <div className={style.videoList}>
            <h5>Uploaded Videos</h5>
            <ul>
              {videoList.length > 0 ? (
                videoList.map((video) => (
                  <li key={video.id} className={style.videoItem}>
                    <p onClick={() => togglePlayVideo(video.id)}>{video.title}</p>
                    {playingVideoId === video.id ? (
                      <video src={video.videoUrl} controls width="300" autoPlay />
                    ) : (
                      <button onClick={() => togglePlayVideo(video.id)}>▶ Play</button>
                    )}
                    <button onClick={() => handleDelete(video.id)}>Delete</button>
                    <button onClick={() => toggleVideoSelection(video.id)}>
                      {selectedVideos.includes(video.id) ? '✔ Selected' : 'Select'}
                    </button>
                  </li>
                ))
              ) : (
                <p>No videos uploaded yet.</p>
              )}
            </ul>
          </div>

          {/* Playlist Creation Section */}
          <div className={style.playlistSection}>
            <h5>Create Playlist</h5>
            <input
              type="text"
              placeholder="Playlist Name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            />
            <button onClick={createPlaylist}>Create Playlist</button>
          </div>

          {/* Display Playlists */}
          <div className={style.playlistDisplay}>
            <h5>Playlists</h5>
            {playlists.map((playlist) => (
              <div key={playlist.id} className={style.playlistItem}>
                <h6>{playlist.name}</h6>
                <ul>
                  {playlist.videos.map((video) => (
                    <li key={video.id}>
                      <span>{video.title}</span>
                      <button onClick={() => togglePlayVideo(video.id)}>
                        {playingVideoId === video.id ? '⏹ Stop' : '▶ Play'}
                      </button>
                      {/* Display video player only when the video is playing */}
                      {playingVideoId === video.id && (
                        <video
                          src={video.videoUrl}
                          controls
                          width="400"
                          autoPlay
                          className={style.playlistVideo}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
     
    </div>
              {/* Course list table END */}
              {/* Pagination START */}
              <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                {/* Content */}
                <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                {/* Pagination */}
                <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                  <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0"><Link className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                    <li className="page-item mb-0"><Link className="page-link" href="#">1</Link></li>
                    <li className="page-item mb-0 active"><Link className="page-link" href="#">2</Link></li>
                    <li className="page-item mb-0"><Link className="page-link" href="#">3</Link></li>
                    <li className="page-item mb-0"><Link className="page-link" href="#"><i className="fas fa-angle-right" /></Link></li>
                  </ul>
                </nav>
              </div>
              {/* Pagination END */}
            </div>
            {/* Card body START */}
          </div>
          {/* Card END */}
        </div>
        {/* Main content END */}
      </div>{/* Row END */}
    </div>
  </section>
  {/* =======================
    Inner part END */}
</main>

<IFooter/>
    </div>
  );
};

export default Instructor_Courses;
