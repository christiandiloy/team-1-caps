import BoxModKitsCards from "./box-mod-kits-cards";

function BoxModKits() {
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
            <h5>Box mod kit</h5>
            <p>Geekvape box mod kit</p>
          </div>
        </div>
      </div>
      <BoxModKitsCards />
    </main>
  );
}

export default BoxModKits;
