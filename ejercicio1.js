function palindromo(palabra){
    var palabra2;
    palabra2 = palabra.split("").reverse().join("");
    if(palabra == palabra2){
        console.log("Es palindromo");
    }
    else{
        console.log("No es palindromo");
    }
    
}