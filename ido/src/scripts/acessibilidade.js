function acessibilidade() {

    if(sessionStorage.getItem("name") === "Normal") {
        /* NORMAL */
        document.body.style.setProperty('--cor--azul', '#5D84C2');
        document.body.style.setProperty('--cor--verde', '#51BDAB');
        document.body.style.setProperty('--cor--roxo', '#7463C7');
        document.body.style.setProperty('--cor--amarela', '#FFCA6D');

    } else if (sessionStorage.getItem("name") === "Protanopia") {
        /* PROTANOPIA */
        document.body.style.setProperty('--cor--azul', '#5D84C2');
        document.body.style.setProperty('--cor--verde', '#DAD080');
        document.body.style.setProperty('--cor--roxo', '#059ECC');
        document.body.style.setProperty('--cor--amarela', '#FFE36D');

    } else if(sessionStorage.getItem("name") === "Deuteranopia") {
        /* DEUTERANOPIA */
        document.body.style.setProperty('--cor--azul', '#5D84C2');
        document.body.style.setProperty('--cor--verde', '#00C34D');
        document.body.style.setProperty('--cor--roxo', '#1CA0C7');
        document.body.style.setProperty('--cor--amarela', '#FFCA6D');

    } else if (sessionStorage.getItem("name") === "Tritanopia") {
        /* TRITANOPIA */
        document.body.style.setProperty('--cor--azul', '#95F313');
        document.body.style.setProperty('--cor--verde', '#238FF7');
        document.body.style.setProperty('--cor--roxo', '#FFA58D');
        document.body.style.setProperty('--cor--amarela', '#E44D4D');

    } else {
        /* NORMAL */
        document.body.style.setProperty('--cor--azul', '#5D84C2');
        document.body.style.setProperty('--cor--verde', '#51BDAB');
        document.body.style.setProperty('--cor--roxo', '#7463C7');
        document.body.style.setProperty('--cor--amarela', '#FFCA6D');
    }
}

export default acessibilidade;