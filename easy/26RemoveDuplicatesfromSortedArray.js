/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i=0;
    var j=1;
    var arr=[];
    for(;i<nums.length;){
        while(nums[i]==nums[i+j]){
        arr.push(i+j);
        j++;
     }
     i=i+j;
     j=1;
    }
    for(var x=0;x<arr.length;x++){
        nums.splice(arr[x]-x,1);
    }
    return nums.length;
};