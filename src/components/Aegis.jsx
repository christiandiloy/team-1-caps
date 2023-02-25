import AegisCards from "./Aegis-cards";

function Aegis() {
  return (
    <main>
      <div
        className="article"
        style={{
          backgroundImage: `url("./assets/images/background/banner-aegis.jpg")`,
        }}
      >
        <div>
          <h1 class="img-header">
            AEGIS SERIES - THE MOST
            <br />
            DURABLE VAPE BOOSTER
          </h1>
        </div>
      </div>
      <AegisCards />
    </main>
  );
}

export default Aegis;
