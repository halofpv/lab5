function reverse()
{
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
    const string3 = document.getElementById("string3").value;
    let strs = [string1, string2, string3];
    strs.reverse();
    let reversedStrings = strs.join("<br>");
    document.getElementById("result").innerHTML = reversedStrings;
}