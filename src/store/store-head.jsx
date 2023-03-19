import "./store.css";

function StoreHead() {
  return (
    <>
      <div className="store-warning">
        <div className="store-warning-container">
          <p>
            <div className="store-warning-content">
            <span>WARNING: </span>
            This product contains nicotine. Nicotine is an addictive chemical.
            <br />
            Only for adults. Anyone below the age of 21 is prohibited from
            buying e-cigarette.
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default StoreHead;
