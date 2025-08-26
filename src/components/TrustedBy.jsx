function TrustedBy() {
    const brands = [
    'MICROSOFT', 'CLIPCHAMP', 'MYDNA', 'LIFE-SPACE PROBIOTICS', 'JAYCAR', 'MANGROVE DIGITAL', 'MONASH UNIVERSITY'
  ];

  return (
    <>
    <div className="description-text">
      Trusted by:
    </div>
      <div className="brand-ticker">
        <div className="ticker-content">
          <div className="ticker-scroll">
            {[...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <span key={index} className="brand-name">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
      </>
      );
}

export default TrustedBy;