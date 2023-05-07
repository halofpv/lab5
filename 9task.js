function showAlphabet()
{
    const alphabet = [];
    for(let i = 65; i<90; i++)
    {
        alphabet.push(String.fromCharCode(i));
    }
    document.getElementById("result").innerHTML = alphabet.join("<br>");
}