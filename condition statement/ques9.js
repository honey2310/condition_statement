
let amount=6000;

if(amount>5000)
{
    console.log(amount*20/100);
}
else if(amount<1000 && amount>5000)
{ 
    console.log(amount*10/100);
}
else if(amount<1000)
{
    console.log("No Discount");
}
else{
    console.log("Invalid")
}
