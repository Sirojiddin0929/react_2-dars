import "./header.css";

const Header = () => (
  <header className="site-header">
    <div className="container site-header__container">
      <a className="logo site-header__logo" href="/">
        <img
          className="logo__img"
          src="/img/logo.svg"
          alt="Bookmark logo"
          width="149"
          height="25"
        />
      </a>

      <nav className="site-header__sitenav sitenav" aria-label="Primary navigation">
        <ul className="sitenav__list">
          <li className="sitenav__item">
            <a className="sitenav__link" href="#">
              Features
            </a>
          </li>
          <li className="sitenav__item">
            <a className="sitenav__link" href="#">
              Pricing
            </a>
          </li>
          <li className="sitenav__item">
            <a className="sitenav__link" href="#">
              Contact
            </a>
          </li>
        </ul>

        <a className="button button--red" href="#">
          Login
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
