function Content({ pricingData, isToggle }) {
  const getPackagePrice = (card) =>
    isToggle ? card.price.annually : card.price.monthly;

  return (
    <main>
      {pricingData.map((card) => (
        <div
          className={
            card.plan === "Professional"
              ? "professional-card"
              : card.plan === "Basic"
                ? "basic-card"
                : "card"
          }
          key={card.id}
        >
          <div className="card-content">
            <h2 className="card-title">{card.plan}</h2>
            <h3 className="package-price">
              <span className="price">$</span>
              {getPackagePrice(card)}
            </h3>

            <div className="plan-details">
              <ul>
                <li>{card.storage}</li>
                <li>{card.users}</li>
                <li>{card.sendLimit}</li>
              </ul>
            </div>

            <button className="cta">LEARN MORE</button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Content;
