function Area_Circunferencia(radio){
    if(radio <=0){
        alert("El radio tiene que ser mayor que 0 :(");
    }
    var area = Math.PI*Math.pow(radio,2);
    console.log("El area de la circunferencia es: "+area);
}