import { Link } from "react-router-dom";

const Community = () => {
  return (
    <>
      <header>
            <div className="navbar">
                    <img
                        src="/images/img/logo_YG.png"
                        alt="YG Entertainment Logo"
                        className="logo"
                    />

                    <nav>
                        <Link to="/HomeLogged">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/AboutUsLogged">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>

                <button className="user-button">
                    <img
                        src="/images/img/profile.png"
                        alt="User Icon"
                        className="icon-img"
                    />{" "}
                    Nurzaba
                </button>

                <div className="dropdown">
                    <ul>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="#">Poin</Link>
                        </li>
                        <li>
                            <Link to="#">Transaction</Link>
                        </li>
                        <li>
                            <Link to="#">Profile</Link>
                        </li>
                        <li>
                            <Link to="#">Log Out</Link>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="main-container">
                <aside className="sidebar">
                  <div className="sidebar-card">
                    <div className="sidebar-section">
                      <h3>Popular Topics</h3>
                        <ul>
                            <li><a href="#">Latest News About BabyMonster</a></li>
                            <li><a href="#">Concert Schedule</a></li>
                            <li><a href="#">BLACKPINK Comeback</a></li>
                            <li><a href="#">The Next Merchandise</a></li>
                            <li><a href="#">Newest Album</a></li>
                        </ul>
                        <div className="sidebar-section">
                          <h3>Suggest Topics</h3>
                            <ul>
                                <li><a href="#">Fashion and Style Lisa Manoban</a></li>
                                <li><a href="#">New Artist Debut...</a></li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="sidebar-card">
                      <h3>Upcoming Event</h3>
                      <ul>
                          <li><a href="#">Fan Meeting WINNER</a></li>
                          <li><a href="#">BIGBANG Anniversary Event</a></li>
                          <li><a href="#">Korean BLACKPINK World Tour</a></li>
                      </ul>
                  </div>
                </aside>

                <div className="feed">
                  <div className="create-post">
                    <textarea placeholder="What's on your mind?"></textarea>
                    <div className="post-actions">
                      <label htmlFor="photo-upload">
                        <img src="/images/img/img.png" alt="Photo Icon" />
                      </label>
                      <input type="file" id="photo-upload" accept="image/*" style={{ display: 'none' }} />
                      
                      <label htmlFor="video-upload">
                        <img src="/images/img/vid.png" alt="Video Icon" />
                      </label>
                      <input type="file" id="video-upload" accept="video/*" style={{ display: 'none' }} />
                      
                      <label htmlFor="file-upload">
                        <img src="/images/img/file.png" alt="File Icon" />
                      </label>
                      <input type="file" id="file-upload" style={{ display: 'none' }} />
                      
                      <label htmlFor="emoji">
                        <img src="/images/img/emot.png" alt="Emoji Icon" />
                      </label>
                      <input type="emoji" id="emoji" style={{ display: 'none' }} />
                    </div>
                  </div>
                  <main>
                      <div className="hashtag-menu">
                        <button className="filter-button active">All Post</button>
                        <button className="filter-button">Trending Post</button>
                        <button className="filter-button">Friends Follow</button>
                        <button className="filter-button">#Concert</button>
                        <button className="filter-button">#Jedag Jedug</button>
                      </div>
                    </main>

                    <main>
                      <div className="post">
                          <div className="post-header">
                              <img src="/images/img/pp1.png" alt="User Icon" className="profile-icon" />
                              <span className="post-username">Vivie Nurzaba</span>
                              <span className="post-time">2h ago</span>
                          </div>
                          <p>BLACKPINK will comeback at 2025</p>
                          <img src="/images/img/com_bp.png" alt="Post Image" className="post-image" />
                          <div className="post-footer">
                              <button className="footer-button">
                                  <img src="/images/img/like.png" alt="Like Icon" className="footer-icon" /> Like
                              </button>
                              <button className="footer-button">
                                  <img src="/images/img/comment.png" alt="Comment Icon" className="footer-icon" /> Comment
                              </button>
                              <button className="footer-button">
                                  <img src="/images/img/share.png" alt="Share Icon" className="footer-icon" /> Share
                              </button>
                          </div>                
                      </div>
                    </main>

                    {/* <main>
                      <div className="post">
                          <div className="post-header">
                              <img src="/images/img/pp2.png" alt="User Icon" className="profile-icon" />
                              <span className="post-username">Vivie Nurzaba</span>
                              <span className="post-time">5h ago</span>
                          </div>
                          <p>💖💖💖</p>
                          <img src="/images/img/com_trea.png" alt="Post Image" className="post-image" />
                          <div className="post-footer">
                              <button className="footer-button">
                                  <img src="/images/img/like.png" alt="Like Icon" className="footer-icon" /> Like
                              </button>
                              <button className="footer-button">
                                  <img src="/images/img/comment.png" alt="Comment Icon" className="footer-icon" /> Comment
                              </button>
                              <button className="footer-button">
                                  <img src="/images/img/share.png" alt="Share Icon" className="footer-icon" /> Share
                              </button>
                          </div>  
                          
                          <div className="comment-section" style="display:none;">
                              <textarea placeholder="Write a comment..."></textarea>
                              <button className="submit-comment">Post Comment</button>
                          </div>
                      </div>
                    </main> */}
                </div>
            </div>

            <footer>
                <div className="footer-links">
                    <a href="#">Terms of Use</a>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/CookiesPolicy">Cookie Policy</Link>
                    <a href="#">Announcements</a>
                </div>
                <div className="footer-info">
                    <p>Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER (+62)21-3452-1312 FAX (+62)21-4242-6565</p>
                    <p>ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130</p>
                    <p>© BRAND COMPANY Inc.</p>
                </div>
            </footer>
    </>
  );
};

export default Community;