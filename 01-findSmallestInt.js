// Find the smallest integer
// findSmallestInt([34, 3423, -111, -110, 200])



function findSmallestInt(nums) {
    nums.sort((a,b) => a-b)
    return console.log(nums[0])
}

findSmallestInt([34, -315, -88, 200])
