function Header({ isToggle, toggled }) {
  return (
    <header>
      <h1 className="title">Our Pricing</h1>
      <div className="toggle-pricing">
        <p>Annually</p>
        <label htmlFor="price-toggler" className="switch">
          <input
            id="price-toggler"
            type="checkbox"
            checked={isToggle}
            onChange={toggled}
          />
          <span className="slider"></span>
        </label>
        <p>Monthly</p>
      </div>
    </header>
  );
}

export default Header;
