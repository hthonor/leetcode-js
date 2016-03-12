/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var arr = [];
    var steps = 0;
    var len=nums.length;
    if(k!==0){
        steps = k%len;
    }
    for(var i=0;i<steps;i++){
        arr.push(nums[len-1-i]);
    }
    for(var j=0;j<arr.length;j++){
        nums.unshift(arr[j]);
    }
     
     nums.length = len;
  
};