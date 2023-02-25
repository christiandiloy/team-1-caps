

import ReplacementPodsCards from "./replacement-pods-cards";

function ReplacementPods() {
  return (
    <main>
      <div
        className="article rep-pods"
        style={{
          backgroundImage: `url("../assets/images/Refillable_pod.jpg")`,
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
      <ReplacementPodsCards />
    </main>
  );
}

export default ReplacementPods;
