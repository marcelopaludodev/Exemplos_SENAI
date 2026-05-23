// ATRIBUTOS

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, categoria: "Eletrônicos", quantidade: 10 },
    { id: 2, nome: "Mouse", preco: 80, categoria: "Acessórios", quantidade: 10 },
    { id: 3, nome: "Teclado", preco: 150, categoria: "Acessórios", quantidade: 10 },
    { id: 4, nome: "Monitor", preco: 1200, categoria: "Eletrônicos", quantidade: 10 },
    { id: 5, nome: "Cadeira Gamer", preco: 900, categoria: "Móveis", quantidade: 10 }
];

// FUNÇÕES

function adicionar(produto) {
    if(!produto.nome || !produto.categoria){
        console.log("ERRO! Nome e categoria são obrigátorios.");
        return;
    }

    if(produto.preco < 0){
        console.log("ERRO! Preço abaixo de zero.");
        return;
    }

    produtos.push(produto);
    console.log("Produto adicionado!");
}

function listar(){
    console.table(produtos);
}

function buscar(nome){
    const resultado = [];

    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].nome.toLocaleLowerCase().includes(nome.toLocaleLowerCase())){
            resultado.push(produtos[i]);
        }
    }

    if (resultado.length === 0) {
        console.log("Produto não encontrado!");
    } else {
        console.table(resultado);
    }

    return resultado;
}

function atualizar(id, dados){
    for(let i = 0; i < produtos.length; i++){

        if(produtos[i].id === id){

            if(dados.preco !== undefined && dados.preco < 0){
                console.log("ERRO! Preço não pode ser vazio/negativo.");
                return;
            }

            produtos[i] = {...produtos[i], ...dados};

            console.log("Produto atualizado!");
            return;
        }
    }

    console.log("Produto não encontrado!");
}

function remover(id){
    for (let i = 0; i < produtos.length; i++) {

        if (produtos[i].id === id) {
            produtos.splice(i, 1);
            console.log("Produto removido!");
            return;
        }
    }

    console.log("Produto não encontrado!");
}

// TESTES

adicionar({
    id: 6,
    nome: "Fone de ouvido",
    preco: 120,
    categoria: "Acessórios",
    quantidade: 10
});

listar();

buscar("Mouse");

atualizar(1, { preco: 3000 });

remover(2);

buscar("Mouse")