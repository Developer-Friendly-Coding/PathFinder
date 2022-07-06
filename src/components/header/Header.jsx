import "./StyledHeader.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { dropdownbuton } from "bootstrap";
function Header() {
  return (
    <header className="headerer">
      <h1>PathFinder</h1>
      <div>
        <div class="dropdown">
          <button className="button">지점</button>
          <div class="dropdown-content">
            <p>초량점</p>
            <p>부산대점</p>
            <p>메이커스페이스점</p>
          </div>
        </div>
        <button className="button">회사소개</button>
        <button className="button">FAQ</button>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <button className="button_come">입주상담</button>
      </div>
    </header>
  );
}

export default Header;
