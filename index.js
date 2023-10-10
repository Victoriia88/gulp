const car = { brand: "", model: "", color: "" };
const updatedProperties = { type: "" };

const electro = Object.assign({}, car, updatedProperties, {
  type: "electro",
  maxDistance: 0,
});
const common = Object.assign({}, car, updatedProperties, {
  type: "common",
  gas: "",
  gearBox: "",
});
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
  console.log(`${modelName}:`);
  const modelData = models[modelName];
  if (modelData.type === "electro" || modelData.type === "common") {
    Object.entries(modelData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
    console.log("");
  }
}
