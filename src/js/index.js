const chaveDaApi = "1f8421d36db24a9bba4134848241710";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click",()=>{
    const cidade = document.getElementById("input-busca").value;
    const dados = buscarDadosDaCidade(cidade);

    preencherDadosNaTela(dados, cidade);
    console.log(botaoDeBusca);

});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=nolang=pt`;

    const resposta = await fetch(apiUrl);

    const dados = resposta.jason();
    return dados;
}

function preencherDadosNaTela(dados, cidade){

    const temperatura = dados.current.temp_c;
    document.getElementById("cidade").textContent = cidade;
    document.getElementById("temperatura").textContent = `${temperatura}°C`;

}

