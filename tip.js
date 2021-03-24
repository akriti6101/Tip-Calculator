var x=0;
function cal()
{  x=setInterval(ref,8000)
    var bill_amount=document.getElementById('b_a').value
    var tip_per=document.getElementById('tip').value
   if(isNaN(bill_amount) || isNaN(tip_per) || (tip_per=="") ||(bill_amount==""))
      {
          alert("Enter a valid input!!!")
          document.getElementById('tip').value=""
          document.getElementById('b_a').value=""
      }
else{
     var tip=(bill_amount*tip_per)/100
    var total=parseFloat(bill_amount)+parseFloat(tip)
     document.getElementById('tip_am').value='Rs '+String(tip)
     document.getElementById('t_a').value='Rs '+String(total)
}}
function ref()
{
    clearInterval(x)
    document.getElementById('tip').value=""
    document.getElementById('b_a').value=""
    document.getElementById('tip_am').value=""
    document.getElementById('t_a').value=""
}