console.warn("NOTE:THE VALUES YOU GIVE WILL BE CONSIDERED AS 'STRING' IN INPUT FIELD SO SOME INPUT FIELD VALUES ARE CONVERTED TO 'ARRAY' FOR PROGRAM UNDERSTANDING")
function arystng()
{
  let a;
  a=document.getElementById("arystng").value;
  let b = a.split("-");
  let c = b;
  console.log(b);
  console.log("The converted string values are:" + c.toString());
}
function join()
{
  let a;
  a=document.getElementById("join").value;
  let b = a.split(" ");
  let c = b;
  console.log(b);
  console.log("The joined values are   :" + c.join("-"));
}
function push()
{
  let a = ["Mobile","Ipad","Laptop",];
  let b=document.getElementById("push").value;
  a.push(b);
  console.log(a);
}
function ushift()
{
  let a = ["Mobile","Ipad","Laptop",];
  let b=document.getElementById("ushift").value;
  a.unshift(b);
  console.log(a);
}
function adcnge()
{
  let a = ["Mobile","Ipad","Laptop",];
  let b=document.getElementById("adcnge").value;
  let c=document.getElementById("no").value;
  a[c]=b;  
  console.log(a);
}

function pp(actType)
{
  
  if (actType == 'add')
  {
     let a=document.getElementById("pp").value;
     let b = a.split(" ");
     console.log(b);  
 }
 else if (actType == 'delete') 
 {
  let a=document.getElementById("pp").value;
  let b = a.split(" ");
  b.pop()
  console.log(b);
 }
}
function sht(actType)
{
  
  if (actType == 'add')
  {
     let a=document.getElementById("sht").value;
     let b = a.split(" ");
     console.log(b);  
 }
 else if (actType == 'delete') 
 {
  let a=document.getElementById("sht").value;
  let b = a.split(" ");
  b.shift()
  console.log(b);
 }
}
function flenth()
{
     let a=document.getElementById("flenth").value;
     let b = a.split(" ");
     console.log(b); 
     console.log("the length of array:" +  b.length);

}
function concat()
{
     let a=document.getElementById("con").value;
     let b = a.split(" ");
     console.log(b); 
     let x=document.getElementById("cat").value;
     let y = x.split(" ");
     console.log(y);
     console.log(b.concat(y));
}

function splice()
{
  let a= ["Banana", "Orange", "Apple", "Mango"];
  let b=document.getElementById("fsplice").value;
  let c=document.getElementById("ssplice").value;
  let d=document.getElementById("asplice").value;
  a.splice(b,c,d);
  console.log(a);
}

function slice()
{
  let a=["Banana", "Orange", "Apple", "Mango"];
  let b=document.getElementById("fslice").value;
  let c=document.getElementById("sslice").value;
  let d=a.slice(b,c);
  console.log(d);
}

function sarry()
{
  let a=document.getElementById("sarry").value;
  let b = a.split(" ");
  b.sort();
  console.log(b);
}
function rarry()
{
  let a=document.getElementById("rarry").value;
  let b = a.split(" ");
  b.reverse();
  console.log(b);
}
function inarry()
{
  let a = ["Mobile","Ipad","Laptop","charger"];
  let b=document.getElementById("inarry").value;
  let c=a.indexOf(b);
  console.log(c);
}
function incarry()
{
  let a =["Banana", "Orange", "Apple", "Mango"];
  let b=document.getElementById("incarry").value;
  let c=a.includes(b);
  console.log(c);
}
function arr()
{
  let a=document.getElementById("arr").value;
  let b=a.split(" ");
  console.log(b);
  let c=Array.isArray(b);
  console.log(c);
}
function stng()
{
  let a=document.getElementById("stng").value;
  console.log(a);
  let b=Array.isArray(a);
  console.log(b);
}
