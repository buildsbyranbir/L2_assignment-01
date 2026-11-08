//Problem-01
function multiplyValue(value, multiplier = 2) {
  return value * multiplier;
}


//Problem-02
function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}