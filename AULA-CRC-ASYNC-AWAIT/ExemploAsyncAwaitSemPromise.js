function calcula(a, b) {
  return (a + b);
}

async function display() {
  console.log("INICIO");
  const result = await calcula(2, 3);
  console.log(result);
  console.log("FIM")
}

display()
