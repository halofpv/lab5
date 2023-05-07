function array()
{
    const result = [];
    for(let i = 1; i <= 100; i++)
    {
        if(i%2==0)
        {
            result.push(i);
        }
        document.getElementById("result").innerHTML = result.join("<br>");
    }
}