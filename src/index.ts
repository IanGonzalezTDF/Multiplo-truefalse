let boton = document.getElementById("calcular");

boton?.addEventListener("click", () => {
  let a: number = Number(dato1.value);
  let b: number = Number(dato2.value);

  function esMultiplo() {
    if (a % b === 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(a + " es multiplo de " + b + ": ", esMultiplo());
});
