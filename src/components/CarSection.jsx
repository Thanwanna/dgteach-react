import { memo, useState } from "react";

const CarSection = ({ brand, model, year, color }) => {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
  });

  console.log(car);

  const changeCar = (e) => {
    setCar((car) => ({ ...car, [e.target.name]: e.target.value }));
  };

  console.log("car render");
  return (
    <div>
      <h2>Car Section </h2>
      <input type="text" name="brand" value={brand} onChange={changeCar} />
      <input type="text" name="color" value={color} onChange={changeCar} />
      <input type="text" name="model" value={model} onChange={changeCar} />
      <input type="text" name="year" value={year} onChange={changeCar} />
      <p>
        It is a {color} {model} from {year}
      </p>
    </div>
  );
};
export default memo(CarSection);
