//Procurar botão
document.querySelector("#add-time").addEventListener("click", cloneField);

//Executar uma ação
function cloneField() {
    //Duplica um campo e salva em uma variavel
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    //Achar os campos
    const fields = newFieldContainer.querySelectorAll("input");

    //Limpar cada campo
    fields.forEach(function(field) {
        field.value = "";
    });
    
    //Coloca a replica que esta salva na variavel na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}

