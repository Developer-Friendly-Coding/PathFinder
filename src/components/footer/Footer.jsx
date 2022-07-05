import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">가치를 더하다, 패스파인더</p>
        <p className="footer-subscription-text">원하시는 검색어를 입력하세요</p>
        <div>
          <input
            type="text"
            name="text"
            placeholder="길을 찾으세요."
            className="footer-input"
          />
        </div>
      </section>
      <div className="footer-links">
        -
        <div className="footer-link-items">
          <h2>About Us</h2>
          <Link to="/sign-up">How it works</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Terms of Service</Link>
        </div>
        <div className="footer-link-items">
          <h2>Contact Us</h2>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          <Link to="/">Destinations</Link>
          <Link to="/">Sponsorships</Link>
        </div>
        <div className="footer-link-items">
          <h2>Social Media</h2>
          <Link to="https://ko.reactjs.org/docs/hooks-state.html">
            Instagram(공유오피스)
          </Link>
          <Link to="/">Instagram(패스메이커)</Link>
          <Link to="/">Instagram(공유오피스)</Link>
          <Link to="/">카카오톡</Link>
        </div>
      </div>

      <div className="social-media-wrap">
        <small className="website-rights">
          <p> 주식회사 패스파인더 | 대표 김광휘</p>
          <p>
            본사: 부산시 금정구 금강로 271 미주빌딩 3층 | 사업자등록번호:
            572-88-00968 | Email: contact@pathfinder.camp
          </p>
          <p>Copyright © 2022 PATHFINDER Inc. All rights reserved.</p>
        </small>
      </div>
    </div>
  );
}

export default Footer;
