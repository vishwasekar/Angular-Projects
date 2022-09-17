let x;
let age;
let finaloutput;
function calculate()
{
    let x;
    let y;
    x = document.getElementById("salery").value;
     
    if (x<=300000)
    {
        
     y = (x/100)*8;
      document.getElementById('output').value = y;
      agelimit();
    }
    else if(x>300000 && x<=500000)
    {
        y=(a/100)*10;
        document.getElementById('output').value = y; 
        agelimit();  
    }
    else if(x>500000 && x<=800000)
    {
        y=(x/100)*12;
        document.getElementById('output').value = y;
        agelimit();  
    }
    else if (x>800000 && x<=1000000)
    {
        y=(x/100)*14;
        document.getElementById('output').value = y; 
        agelimit();
    }
}
agelimit()

function agelimit()
{
    
     age = document.getElementById("age").value;
    if (age<18 || age>60)
    {
        x =  document.getElementById("output").value ;
    finaloutput = (x/100)*50;
    document.getElementById("finaloutput").value = finaloutput;
    console.log(x);
    }
   
    else if (age>18 && age<60) {
        gender();
       }
   
    } 
   
    gender()
    x=document.getElementById("output").value;
    
    function gender(){
     
     if (document.getElementById("female").checked)
     {
         x=document.getElementById("output").value;
         finaloutput = (x/100)*10;
         document.getElementById("finaloutput").value = finaloutput;
         console.log(x);
     }
     else if (document.getElementById("male").checked){
   document.getElementById("finaloutput").value = document.getElementById("output").value;
     }
    }



   function reset()
   {
       document.getElementById("name").value="";
       document.getElementById("age").value="";
       document.getElementById("salery").value="";
       document.getElementById("output").value="";
       document.getElementById("finaloutput").value="";
       
   }