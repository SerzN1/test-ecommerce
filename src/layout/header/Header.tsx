import { Link } from 'react-router-dom';
import { useCart } from '../../context/cart';
import logo from './ikea_logo.svg';

function Header() {
  // TODO: Export cart icon + link into a separate component
  const { countItems } = useCart();
  const cartCount = countItems();

  return (
    <nav
      className="navbar navbar-expand navbar-dark"
      style={{ backgroundColor: '#0b5aa9' }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Ikea"
            width="80"
            height="32"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart{' '}
                {cartCount > 0 && (
                  <span className="badge text-bg-secondary">{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
