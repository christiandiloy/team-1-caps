import CoilsCards from "./coils-cards";

function Coils() {
  return (
    <main>
      <div
        className="article"
        style={{
          backgroundImage: `url("./assets/images/background/banner-geekvape-u.jpg")`,
        }}
      >
        <div>
          <h1 class="img-header">
            U SERIES - U CARTRIDGE
            <br />
            COMPATIBLE POD SYSTEM
          </h1>
        </div>
      </div>
      <CoilsCards />
    </main>
  );
}

export default Coils;
