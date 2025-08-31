function TrustedBy() {
    const brands = [
    'MICROSOFT', 'CLIPCHAMP', 'MYDNA', 'LIFE-SPACE PROBIOTICS', 'JAYCAR', 'MANGROVE DIGITAL', 'MONASH UNIVERSITY'
  ];

  return (
    <>
      <h3 className="ticker-heading">Trusted by:</h3>
      <div className="brand-ticker">
        <div className="ticker-content">
          <div className="ticker-scroll">
            {brands.map((brand, index) => (
              <span key={index} className="brand-name">
                {brand}
              </span>
            ))}
          </div>
          <div className="ticker-scroll" style={{marginLeft: '2rem'}}>
            {brands.map((brand, index) => (
              <span key={`duplicate-${index}`} className="brand-name">
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