function check()
{
    pet = document.getElementById("pet").value;
 
    switch (pet) 
    {
      case "lizard":
        console.log("I own a lizard");
        break;
      case "dog":
        console.log("I own a dog");
        break;
      case "cat":
        console.log("I own a cat");
        break;
      case "snake":
        console.log("I own a snake");
        break;
      case "parrot":
        console.log("I own a parrot");
        break;
      default:
        console.log("I don't own a pet");
        break;
    }

}
function num()
{
   var a; 
   a = document.getElementById("value").value;
   for ( var b = a;b>20; b--)
   {
    console.log(b);
   }

}
function wloop()
{
    var a; 
    a = document.getElementById("val").value;
     while (a<50)
    {
     console.log(a);
     a++;
    }
}
function dloop()
{
  let i;
    i = document.getElementById("dwhile").value;
    do {
      console.log(i);
      i++;
      } while(i <= 20);
}
function len()
{
  let a;
  a=document.getElementById("length").value;
  let b = a.length;
  console.log(b);
}
function rep()
{
  let a;
  a=document.getElementById("replace").value;
  let b = a.replace("work","rest");
  console.log(b);
}
function up()
{
  let a;
  a=document.getElementById("uppercase").value;
  let b = a.toUpperCase();
  console.log(b);
}
function low()
{
  let a;
  a=document.getElementById("lowercase").value;
  let b = a.toLowerCase();
  console.log(b);
}
function conct()
{
  let a;
  let b;
  let c;
  a=document.getElementById("con").value;
  b=document.getElementById("cat").value;
  c=a.concat("",b);
  console.log(c);
}
function trim()
{
  let a;
  a=document.getElementById("trim").value;
  let  b= a.trim();
  console.log(b);
}
function charat()
{
  let a;
  let b;
  a=document.getElementById("cha").value;
  b=document.getElementById("rat").value;
  let  c= a.charAt(b);
  console.log(c);
}
function index()
{
  let a;
  let b;
  let c;
  a=document.getElementById("index").value;
  b=document.getElementById("of").value;
  c=a.indexOf(b);
  console.log(c);
}
function slice()
{
  let a;
  let b;
  let c;
  a=document.getElementById("slice").value;
  b=document.getElementById("sl").value;
  c=a.slice(b);
  console.log(c);
}
function substng()
{
  let a;
  let b;
  let c;
  a=document.getElementById("sub").value;
  b=document.getElementById("stng").value;
  c=a.substring(b);
  console.log(c);
}
function split()
{
  let a 
  a=document.getElementById("split").value;
  let b= a.split(" ");
  console.log(b);
}
