var operand1=0;
var operand2=null;
var operator=null;
var display=document.getElementById('display');
var buttons=document.getElementsByClassName('button');
let shortdisplay=document.getElementById('checking');
function isOperator(value)
{
  return value=="+"||value=="*"||value=="/"||value=="-";
}
for(let i=0;i<buttons.length;i++)
{
  buttons[i].addEventListener('click',function()
  {
     let value=this.getAttribute('data-value');
     let text=display.textContent.trim();
    //  let uptext=shortdisplay.textContent.trim();
     if(isOperator(value))
     {
       operator=value;
       operand1=parseFloat(text);
       //text=display.textContent.trim();
       //display.textContent+=operator;
        // shortdisplay.textContent+=value; latest
        shortdisplay.textContent=operand1+value;
       display.textContent="";
     }
     else if(value=="ac"){
       display.textContent="";
       shortdisplay.textContent="";
     }
     else if(value=="sign")
     {
        operand1=parseFloat(text);
        operand1=-1*operand1;
        display.textContent=operand1;
          // shortdisplay.textContent=operand1; latest
     }
     else if(value=="%")
     {
        operand1=parseFloat(text);
        operand1=operand1/100;
        display.textContent=operand1;
        // shortdisplay.textContent+='/100'; latest
     }
     else if(value=="=")
     {
        operand2=parseFloat(text);
        let result=eval(operand1+''+operator+''+operand2);
        shortdisplay.textContent+=operand2;
        if (result) {
          display.textContent = result;
          operand1 = result;
          operand2 = null;
          operator = null;
          }
        else{
          display.textContent='0';
          operand1 = result;
          operand2 = null;
          operator = null;
        }
      }
      else if(value=='del'){
        // operand1=parseFloat(text);
        // let quetiont=Math.floor(operand1/10);
        // operand1=quetiont;
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
        // shortdisplay.textContent=shortdisplay.textContent.slice(0,shortdisplay.textContent.length-1); latest
      }
       else 
      {
      display.textContent += value;
      // shortdisplay.textContent+=value;  latest
      }
  });
}