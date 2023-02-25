import AllProductsCards from "./all-products-cards";

function AllProducts() {
  return (
    <main>
      <div
        className="article"
        style={{
          backgroundColor: 'gray', height: '10vh'
        }}
      >
        <div>
          <div class="all-products_title">
            <h5>Collections</h5>
          </div>
        </div>
      </div>
      <AllProductsCards />
    </main>
  );
}

export default AllProducts;
