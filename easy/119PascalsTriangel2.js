/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var number = new Array();
    var onenumber = [];
    for(var i=0;i<=rowIndex;i++){
        number[i] = new Array();
        for(var j=0;j<=i;j++){
            if(j===0||j==i){
                number[i][j]=1;
            }else{
               number[i][j]=number[i-1][j-1]+number[i-1][j];
            }
            
            if(i==rowIndex){
                onenumber.push(number[i][j]);
            }
        }
            
    }
    return onenumber;
       
};