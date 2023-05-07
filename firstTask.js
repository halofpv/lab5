setInterval(function()
{
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

document.getElementById("date").innerHTML = day+'/'+month+'/'+year;
document.getElementById("clock").innerHTML = hour+':'+minutes+':'+seconds;
}, 1000);
