const store = [
  {name: "cafe", price: 3},
  {name: "chantily", price: 1.5},
  {name: "suco", price: 6.2},
  {name: "sanduiche", price: 6.5},
  {name: "queijo", price: 2},
  {name: "salgado", price: 7.25},
  {name: "combo1", price: 9.5},
  {name: "combo2", price: 7.5}
];

const paymentMethods = ["dinheiro", "debito", "credito"];

const messages = {
  emptyCart: "Não há itens no carrinho de compra!",
  extraWithoutMain: "Item extra não pode ser pedido sem o principal",
  invalidPaymentMethod: "Forma de pagamento inválida!",
  invalidItem: "Item inválido!",
  invalidQuantity: "Quantidade inválida!",
};

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
      const onlyItemsNames = [];
      let totalValue = 0;

      if(itens.length < 1) return messages["emptyCart"];
      if(!paymentMethods.includes(metodoDePagamento)) return messages["invalidPaymentMethod"];

      for(const item of itens) {
        const [itemName, itemQuantity] = item.split(',');
        
        if (!store.find(item => item.name === itemName)) return messages["invalidItem"];
        if(parseInt(itemQuantity) === 0) return messages["invalidQuantity"];
        if(itemName === 'chantily' && !onlyItemsNames.includes('cafe')) return messages["extraWithoutMain"];
        if(itemName === 'queijo' && !onlyItemsNames.includes('sanduiche')) return messages["extraWithoutMain"];

        const itemPrice = store.find(item => item.name === itemName).price * itemQuantity;

        totalValue += itemPrice;
        onlyItemsNames.push(itemName);
      }

        if(metodoDePagamento === 'credito') totalValue += (totalValue * 0.03);
        if(metodoDePagamento === 'dinheiro') totalValue -= (totalValue * 0.05);

        const formatedValue = totalValue.toFixed(2).replace('.', ',');
        return `R$ ${formatedValue}`;
    }

}

// const resultado = new CaixaDaLanchonete()
// .calcularValorDaCompra('credito', ['cafe,4', 'sanduiche,3', 'queijo,2']);
// console.log(resultado);

export { CaixaDaLanchonete };
