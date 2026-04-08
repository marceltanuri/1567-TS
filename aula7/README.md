# Loja virtual


## Objetivo
Carrinho de compra com produtos a serem processados na finalização da compra que deve exibir o valor total da compra, e o valor individual de cada produto. Havendo descontos o valor dos descontos. Havendo pacotes promocionais os detalhes do pacote.


## Sugestões de modelagem
Classe: 
- Carrinho de compras
  - Atributo: Lista de produtos
  - Comportamento: imprimirResumoCompra()

- Produto
  - Atributos: private nome, valor, etc
  - Comportamento: getNome(), aplicarRegraDeDesconto
  - Herança se eu preciso de diferentes tipo de produto