/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var count = [];
  for(var x in nums){
      if(nums[x]==val){
          count.push(x);
      }

  }  
  for(var i=0;i<count.length;i++){
      nums.splice(count[i]-i,1);
  }
  return nums.length;
};