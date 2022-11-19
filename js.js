let botaoClicado = document.querySelector("button");
let resultado = "";
let textoPrincipal = document.querySelector("h1");




botaoClicado.addEventListener("click", () => {
  let medida = prompt("Informe uma medida em metros");
  let unidade = prompt(
    "para qual medida deseja converter?" +
      "\n1.milímetro (mm)" +
      "\n2.centímetro (cm)" +
      "\n3.decímetro (dm)" +
      "\n4.decâmetro (dam)" +
      "\n5.hectômetro (hm)" +
      "\n6.quilômetro (km)"
  );

  switch (unidade) {
    case "1":
      resultado = `Resultado: ${medida} m = ${medida * 1000} mm`;
      alert(resultado);
      break;

    case "2":
      resultado = `Resultado: ${medida} m = ${medida * 100} cm`;
      alert(resultado);
      break;

    case "3":
      resultado = `Resultado: ${medida} m = ${medida * 10} dm`;
      alert(resultado);
      break;
    case "4":
      resultado = `Resultado: ${medida} m = ${medida / 10} dam`;
      alert(resultado);
      break;

    case "5":
      resultado = `Resultado: ${medida} m = ${medida / 100} hm`;
      alert(resultado);
      break;

    case "5":
      resultado = `Resultado: ${medida} m = ${medida / 1000} km`;
      alert(resultado);
      break;

    default:
      alert("OPÇÃO INVÁLIDA!");
        
    
    
}
});



