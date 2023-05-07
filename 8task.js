function reverse()
{
    const string = document.getElementById("string").value;
    let reversed='';
    for(let i = string.length - 1; i>=0; i--)
    {
        reversed += string[i];
    }
    document.getElementById("result").innerHTML = reversed;
}