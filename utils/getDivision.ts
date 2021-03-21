const getDivision = (val: any) => {
  return val && typeof val === "string" ? val : "senior";
};

export default getDivision;
