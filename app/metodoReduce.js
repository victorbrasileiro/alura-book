function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acumlador, livro) => acumlador + livro.preco, 0).toFixed(2)
}