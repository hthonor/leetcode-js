/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var flag = 0;
    var len = nums.length;
    for(var i=0;i<len-flag;){
        if(nums[i]===0){
            nums[len]=0;
            nums.splice(i,1);
            flag++;
            i=i-flag;
        }else{
            i++;
        }
    }
   
};