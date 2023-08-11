const messages = {
  emptyCart: "Não há itens no carrinho de compra!",
  extraWithoutMain: "Item extra não pode ser pedido sem o principal",
  invalidPaymentMethod: "Forma de pagamento inválida!",
  invalidItem: "Item inválido!",
  invalidQuantity: "Quantidade inválida!",
};

const store = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
const paymentMethods = ["dinheiro", "debito", "credito"];

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
      if(itens.length < 1) {
        return messages["emptyCart"];
      }

      if(!paymentMethods.includes(metodoDePagamento)) {
        return messages["invalidPaymentMethod"];
      }

      for(const item of itens) {
        const [itemName, quantity] = item.split(',');

        if (!store.includes(itemName)) return messages["invalidItem"];
        if(parseInt(quantity) === 0) return messages["invalidQuantity"];
      }

        return "";
    }

}

const resultado = new CaixaDaLanchonete()
.calcularValorDaCompra('debito', ['pizza, 1']);

console.log(resultado);

export { CaixaDaLanchonete };
