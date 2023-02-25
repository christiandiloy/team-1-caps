
import ReplacementCoilsCards from "./replacement-coils-cards";

function ReplacementCoils() {
  return (
    <main>
      <div
        className="article rep-pods"
        style={{
          backgroundImage: `url("../assets/images/Replacement_coil_1728x.jpg")`,
          height: '15vh'
        }}
      >
        
        <div>
          <div class="all-products_title">
            <h5>Replacement Pods</h5>
            <p>Replacement Pods for Geekvape pod kit</p>
          </div>
        </div>
      </div>
      <ReplacementCoilsCards />
    </main>
  );
}

export default ReplacementCoils;
