function calculate(num) {
   var str = "0";
   for (i = 1; i <= num; i++) {
       if (num % i == 0) {
           str += ',' + i;
       }
   }
   return str;
}

function main(){
  return calculate( 2019 );
}
