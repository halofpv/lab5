function checkAge()
{
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    if(age>=18)
    {
        document.getElementById("result").innerHTML = name + "is eligibled to vote";
    }
    else
    {
        document.getElementById("result").innerHTML = name + "is not eligibled to vote";
    }
}