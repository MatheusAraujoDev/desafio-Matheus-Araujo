const messages = {
  emptyCart: "Não há itens no carrinho de compra!",
  extraWithoutMain: "Item extra não pode ser pedido sem o principal",
};

const store = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
      if(itens.length < 1) {
        return messages["emptyCart"];
      }

        return "";
    }

}

const resultado = new CaixaDaLanchonete()
.calcularValorDaCompra('debito', []);

console.log(resultado);

export { CaixaDaLanchonete };
