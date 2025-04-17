let dados = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];

let ordenado = false
do 
{
    for (let i = 0; i < dados.length; i++) {    
        let aux = 0;
        if(dados[i] > dados[i + 1]){
            console.log(`$[${dados[i]}] é maior que $[${dados[i + 1]}]. Realizando inversão`);
            aux = dados[i];
            dados[i] = dados[i + 1];
            dados[i + 1] = aux;
        }  
        console.table(dados);
    }
}while(!ordenado);

console.log(dados);let dados = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];

