function bmi()
{
  var h=document.getElementById('Height').value;
  var w=document.getElementById('Weight').value
  var bmi=w/((h/100)*(h/100));
  var total=bmi.toFixed(2);
  if(h>0 && w >0)
  {document.getElementById('result').innerHTML="Your BMI is "+total+"\n";}
  else
  {
    document.getElementById('result').innerHTML="Please enter your height and weight";
  }

  if(bmi<18.5)
  document.getElementById('category').innerHTML="Underweight!";
  else if(bmi>=25&&bmi<=29.9)
  document.getElementById('category').innerHTML="Over Weight!";
  else if(bmi>=18.5&&bmi<=24.9)
  document.getElementById('category').innerHTML="Normal Weight";
  else if(bmi>29.9)
  document.getElementById('category').innerHTML="Obesity";
}
