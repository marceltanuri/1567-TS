interface ItemCarrinho{
    nome: string;
    preco: number;
    descricao: string | number;
}

const carrinho: ItemCarrinho[] = [
    {
        nome: "Livro", 
        preco: 50, 
        descricao : "TypeScript"
    },
    {
        nome: "Caneta", 
        preco: 10, 
        descricao : "Bic Azul"
    },
    {
        nome: "Caneta", 
        preco: 10, 
        descricao : "Vermelha"
    }
];

function calcularTotal(itens: ItemCarrinho[]): number{
    let total = 0;
    for (const item of itens){
        total += item.preco;
    }
    return total;
}

const total = calcularTotal(carrinho);
console.log(total);
console.log(carrinho);