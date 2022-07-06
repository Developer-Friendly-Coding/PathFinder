import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        -
        <div className="footer-link-items">
          <h2>About Us</h2>
          <Link to="/sign-up">How it works</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Investors</Link>
        </div>
        <div className="footer-link-items">
          <h2>Contact Us</h2>
          <Link to="/">Contact</Link>

          <Link to="/">Destinations</Link>
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
      <br />
      <br />

      <small className="website-rights">
        <p> 주식회사 패스파인더 | 대표 김광휘</p>
        <p>
          본사: 부산시 금정구 금강로 271 미주빌딩 3층 | 사업자등록번호:
          572-88-00968 | Email: contact@pathfinder.camp
        </p>
        <p>Copyright © 2022 PATHFINDER Inc. All rights reserved.</p>
      </small>
    </div>
  );
}

export default Footer;
