/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     var plus = 1;
     var len  = digits.length;
     digits.reverse();
     for(var x in digits){
         if(digits[x]==9){
             if(plus){
                digits[x]=0;  
                plus=1;
             }  
            }else{
                 digits[x]=digits[x]+plus;
                 plus=0;
         }
     }

     if(plus==1){
         
         digits[digits.length]=1;

     }
     return digits.reverse();
 };