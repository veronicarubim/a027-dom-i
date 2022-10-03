const frutas = ["laranja", "limão", "uva", "banana"];

    let fruta1 = document.getElementById("fruta-1")
    fruta1.innerHTML = frutas[0]

    let fruta2 = document.getElementById("fruta-2")
    fruta2.innerHTML = frutas[1]

    let fruta3 = document.getElementById("fruta-3")
    fruta3.innerHTML = frutas[2]

    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = frutas[3]


    function addFruta () {
    const frutaDoInput = document.getElementById("fruta");
    const lista = document.getElementById("lista-de-frutas")
    lista.innerHTML += `<li>${frutaDoInput.value}</li>`
    frutaDoInput.value = ""
   }
   