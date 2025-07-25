function classificarEstudante(){
    const nome = document.getElementById("nomeEstudante").value.trim();
    const xp = parseInt(document.getElementById("xpEstudante").value);

    if (!nome || isNaN(xp) || xp <= 0){
        document.getElementById('resultado').innerHTML = '<div class="result error">Por favoe, preencha todos os campos corretamente!</div>';
        return;
    }

    let horasTotais = parseInt(localStorage.getItem(nome)) || 0;
    horasTotais += xp;
    localStorage.setItem(nome, horasTotais);

    let tipoMedalha = "";
    let classeMedalha = "";

    if(horasTotais < 1000){
        tipoMedalha = "Ferro";
        classeMedalha = "ferro";
    } else if (horasTotais <= 2000){
        tipoMedalha = "Bronze";
        classeMedalha = "bronze";
    } else if (horasTotais <=5000){
        tipoMedalha = "Prata";
        classeMedalha = "prata";
    } else if (horasTotais <= 7000){
        tipoMedalha = "Ouro";
        classeMedalha = "ouro";
    } else if (horasTotais <=8000){
        tipoMedalha = "Platina";
        classeMedalha = "platina";
    } else if (horasTotais <= 9000){
        tipoMedalha = "Ascendente";
        classeMedalha = "ascendente";
    } else {
        tipoMedalha = "Radiante";
        classeMedalha = "radiante";
    }

    document.getElementById('resultado').innerHTML = 
        `<div class="result success"> A jornada não para, <span">${nome}</span>! Parabéns, você acumulou <span>${horasTotais}</span> horas estudadas.` + ` Medalha conquistada <span class="medalha ${classeMedalha}"> ${tipoMedalha}</span></div>`;

    
}