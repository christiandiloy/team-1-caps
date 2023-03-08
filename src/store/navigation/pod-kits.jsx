import BoxModKitsCards from "./box-mod-kits-cards";

function PodKits() {
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
            <h5>Pod kit</h5>
            <p>Pod Vape Kit is an ultra-compact and easy to use vape device</p>
          </div>
        </div>
      </div>
      <BoxModKitsCards />
    </main>
  );
}

export default PodKits;
