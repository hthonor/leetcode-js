/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var string=[];
    if (nums.length!==0){
        for(var i=0;i<nums.length;){
        var j=i;
        var start = nums[i];
        var end = nums[j];
        while((nums[++j]==++start&&(j<nums.length))){
            end=nums[j];
        }
        if(nums[i]==end){
            string.push(end.toString());
             
        }else{
            string.push(nums[i]+'->'+end);

        }
        i=j;
    }
    }else{
        string=[];
    }
    
    return string;
    };