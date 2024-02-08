// ---- EXEMPLO 1 <h1> ----

// PASSO 1: CRIE O ELEMENTO

const novoH1 = document.createElement("h1");
const novoH2 = document.createElement("h2");



// PASSO 2: ADICIONE ATRIBUTOS AO ELEMENTO CRIADO

novoH1.textContent = "Eu gosto de Gwent!";
novoH1.id = "meuH1";
novoH1.style.color = "gold";
novoH1.style.textAlign = "center";

novoH2.textContent = "É um CCG muito bom!";
novoH2.style.color = "darkGreen";
novoH2.style.textAlign = "center";


// PASSO 3: APPEND O ELEMENTO CRIADO AO DOM

// PRA BOTAR O ELEMENTO NO FINAL DO BODY
//document.body.append(novoH2);

// PRA BOTAR O ELEMENTO DO COMEÇO DO BODY
//document.body.prepend(novoH1);

document.getElementById("caixa1").append(novoH1);

document.getElementById("caixa2").prepend(novoH2);

// REMOVER O ELEMENTO CRIADO