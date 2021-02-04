const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
//calc tax
const calculateTax = function(sales, taxRate) {
  let taxes = sales * taxRate;
  return taxes;
};
//calc total sales of given array of sales
const totalOfSales = function(arrayOfSales) {
  let total = 0;
  for (const sale of arrayOfSales) {
    total += Number(sale);
  }
  return total;
};
// iterate through company objects create new object with company name as key and add pertinent sales info as object for value of that key.
const calculateSalesTax = function(salesData, taxRates) {
  let result = {};
  for (const obj in salesData) {
    // console.log(salesData[obj]);
    if (result[salesData[obj].name] !== undefined) {
      result[salesData[obj].name].totalSales += totalOfSales(salesData[obj].sales);
      result[salesData[obj].name].totalTaxes += calculateTax(totalOfSales(salesData[obj].sales), salesTaxRates.AB);
    } else {
      result[salesData[obj].name] = {
        'totalSales': totalOfSales(salesData[obj].sales),
        'totalTaxes': calculateTax(totalOfSales(salesData[obj].sales), salesTaxRates.AB)
      };
    }
  }
  return result;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));


/* Expected Results:
{
  Telus: {
    totalSales: 1300,
    totalTaxes: 144
  }
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/