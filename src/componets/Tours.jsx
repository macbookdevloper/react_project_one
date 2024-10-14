import Card from "./Card";

function Tours(props) {
  const tourse = props.tourseData;
  const removeTour = props.removeTour;
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with love</h2>
      </div>
      <div className="cards">
        {tourse.map((data, index) => (
          <div key={index}>
            <Card tourData={data} removeTour={removeTour}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
