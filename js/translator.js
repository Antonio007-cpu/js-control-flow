
function languageTranslation(language1, language2) {
    let languages  = ["span", "eng", "fren"];
    let spanish = "Hola";
    let english = "Hello There";
    let french = "Bonjour";
    for (let i = 0; i <languages.length; i++) {
        if (language1 === languages[i]) {
            if (languag2 === languages[0]) {
                console.log(spanish)
            } else if (language2 === languages[1]) {
                console.log(english)
            } else if (language2 === languages[2]) {
                console.log(french)
            } else {
                console.log("Thats not a language")
            }
        }
    }
}

languageTranslation("fren","eng")