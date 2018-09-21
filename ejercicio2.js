function ordenar(a){
    var temp;
    a = a.split(",");
    for(var i =0 ;i< a.lenght;i++){
        for(var j =0 ;j< a.lenght;j++){
            if(a[i]< a[j]){
                temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        }
    }
    console.log(a);
}