import Product from "./Product";

function ProductProps() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>PRODUCTS</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Product
          name={"puma"}
          price={"$999"}
          description={"For those aiming to elevate their running experiences"}
        />

        <Product
          name={"adidas"}
          price={"$899"}
          description={
            "Adidas shoes are a popular choice for footwear for many people"
          }
        />

        <Product
          name={"cyxus"}
          price={"$699"}
          description={"Non-Slip Fitness Leisure Running Sneakers"}
        />
      </div>
    </>
  );
}

export default ProductProps;
