import "./StyledHeader.css";
function Header() {
  return (
    <header className="headerer">
      <h1>PathFinder</h1>

      <div className="menu">
        <ul>
          <li>
            <a href="#">지점</a>
            <ul>
              <li>
                <a href="#">부산대점</a>
              </li>
              <li>
                <a href="#">메이커스페이스점</a>
              </li>
              <li>
                <a href="#">초량점</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">회사소개</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">입주상담</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
