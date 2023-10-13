const car = { brand: "", model: "", color: "" };
const updatedProperties = { type: "" };

Object.assign(car, updatedProperties);

const electro = {
  ...car,
  type: "electro",
  maxDistance: 0,
};

const common = {
  ...car,
  type: "common",
  gas: "",
  gearBox: "",
};

const models = {
  tesla: { ...electro, brand: "Tesla", model: "S Plaid", maxDistance: 850 },
  leaf: { ...electro, brand: "Nissan", model: "Leaf", maxDistance: 270 },
  x5: { ...common, brand: "BMW", model: "X5", gas: "Diesel", gearBox: "auto" },
  kenga: {
    ...common,
    brand: "Renault",
    model: "Kangoo",
    gas: "Petrol",
    gearBox: "mechanic",
  },
};

for (const modelName in models) {
  const modelData = models[modelName];
  console.log(`${modelName}:`);

  const infoLines = [];
  Object.entries(modelData).forEach(([key, value]) => {
    infoLines.push(`${key}: "${value}"`);
  });

  console.log(infoLines.join(", "));
  console.log("");
}
