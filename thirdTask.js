function findGreatest()
{
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    const nums = [num1, num2, num3];
    let greatest = nums[0];
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i]>greatest)
        {
            greatest = nums[i];
        }
    }
    document.getElementById("result").innerHTML = "Greatest number: " + greatest;
}