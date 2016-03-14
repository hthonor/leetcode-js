**

 * @param {number} numRows

 * @return {number[][]}

 */

var generate = function(numRows) {
    var number = new Array();
    for(var i=0;i<numRows;i++){
        number[i] = new Array();
        for(var j=0;j<=i;j++){
            
                    if(j==0||j==i){
                        number[i][j]=1;
                    }else{
                       number[i][j]=number[i-1][j-1]+number[i-1][j];
                    }
                }
        }
        return number;
    }