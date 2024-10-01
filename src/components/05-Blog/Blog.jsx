import "./Blog.css";

import blogImg1 from "../../assets/eventOne/img1.jpeg";
import blogImg2 from "../../assets/eventTwo/image1.jpeg";
import logo from "../../assets/logo/logo.png";

export default function Blog() {
  return (
    <div className="blogContents">
      <div id="blog-posts" className="blog-posts section">
        <div className="container">
          <div className="row gy-4" style={{ justifyContent: "space-evenly" }}>
            <div className="col-lg-3">
              <article>
                <div className="post-img">
                  <img src={blogImg1} alt="" className="img-fluid" />
                </div>

                <p className="post-category">Jawadhu Hills</p>

                <h2 className="title">
                  <a href="blog-details.html">Jawadhu Hills - Yoga Title</a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src={logo}
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Ublis Yoga</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-3">
              <article>
                <div className="post-img">
                  <img src={blogImg2} alt="" className="img-fluid" />
                </div>

                <p className="post-category">Beach Yoga</p>

                <h2 className="title">
                  <a href="blog-details.html">Beach Yoga Title</a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src={logo}
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Ublis Yoga</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jun 5, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-3">
              <article>
                <div className="post-img">
                  <img src={blogImg2} alt="" className="img-fluid" />
                </div>

                <p className="post-category">Beach Yoga</p>

                <h2 className="title">
                  <a href="blog-details.html">Beach Yoga Title</a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src={logo}
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Ublis Yoga</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jun 5, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
