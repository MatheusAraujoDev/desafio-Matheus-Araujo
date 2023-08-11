const messages = {
  emptyCart: "Não há itens no carrinho de compra!",
  extraWithoutMain: "Item extra não pode ser pedido sem o principal",
  invalidPaymentMethod: "Forma de pagamento inválida!",
};

const store = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
const paymentMethods = ["dinheiro", "debito", "credito"];

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
      if(itens.length < 1) {
        return messages["emptyCart"];
      }

      if(!metodoDePagamento.includes(paymentMethods)) {
        return messages["invalidPaymentMethod"];
      }

        return "";
    }

}

const resultado = new CaixaDaLanchonete()
.calcularValorDaCompra('pix', ["teste"]);

console.log(resultado);

export { CaixaDaLanchonete };
