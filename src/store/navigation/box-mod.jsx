
import BoxModCards from "./box-mod-cards";

function BoxMod() {
  return (
    <main>
      <div
        className="article box-mods"
        style={{
          backgroundImage: `url("../assets/images/aegis_max_3000x.jpg")`,
          height: '15vh'
        }}
      >
        
        <div>
          <div class="all-products_title">
            <h5>Box mod</h5>
            <p>Box mod: in the most simple terms, a box mod is a form of vaping device that has a box shape as opposed to the traditional or pen-style cylinder shape.</p>
          </div>
        </div>
      </div>
      <BoxModCards />
    </main>
  );
}

export default BoxMod;
