import GeekvapeUCards from "./geekvape-u-cards";

function GeekvapeU() {
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
      <GeekvapeUCards />
    </main>
  );
}

export default GeekvapeU;
