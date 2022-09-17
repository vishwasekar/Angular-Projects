function amztab() 
{
    document.getElementById("amz").style.color="red";
    window.open("https://www.amazon.in");
}
function flktab() 
{
    document.getElementById("flk").style.color="green";
    window.open("https://www.flipkart.com");
}
function myttab()
{
    document.getElementById("myt").style.color="blue";
    window.open("https://www.myntra.com");
}

function selectCity() 
{
    var cty = document.getElementById("cities").value;
    document.getElementById("slcCty").innerHTML
    ="Selected City: " + cty;
}
function onmouse() 
{
    document.getElementById("onmseov").style.backgroundColor="red"
    
}
function outmouse()
{
    document.getElementById("onmseot").style.backgroundColor="green"
}
function keyPress()
{
    document.getElementById("txtBox").style.backgroundColor= "#5188db"; 
}