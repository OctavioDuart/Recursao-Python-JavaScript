function soma_array(lista){
    if (lista.length === 1) {
        return lista[0]
    }
    else{
        let f = lista[0];
        lista.shift();
        return f + soma_array(lista);
    };
};

console.log(soma_array([10, 3, 8, 5])); // 26
