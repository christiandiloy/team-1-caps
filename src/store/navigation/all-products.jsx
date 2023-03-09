import AegisProducts from "./aegis-products";
import GeekvapeUProducts from "./geekvape-u-products";
import GeekvapeZProducts from "./geekvape-z-products";
import ObeliskProducts from "./obelisk-products";
import WenaxProducts from "./wenax-products";

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
      {/* <AllProductsCards /> */}
      <AegisProducts/>
      <GeekvapeUProducts/>
      <GeekvapeZProducts/>
      <ObeliskProducts/>
      <WenaxProducts/>
    </main>
  );
}

export default AllProducts;
