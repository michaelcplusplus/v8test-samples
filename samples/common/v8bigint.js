//bigint support
const numberWithCommas = (x) => { 
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
}

function main() { 
  console.log("main");
  console.log((2n**31n/86400n)/365n);
  var foo= 2n**40n / (10n*100n*1000n);

  var x = BigInt(Number.MAX_SAFE_INTEGER);

  console.log(numberWithCommas(x));

  console.error(numberWithCommas((2n**63n)/(1000n*86400n*365n)));

  console.error(numberWithCommas((2n**31n)/(86400n*365n)));

  
  return numberWithCommas(foo);
};
