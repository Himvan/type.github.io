function check_datatype(arr)
{
if(typeof(arr)=="undefined")
   {
      console.log("undefined")
      
   }
else if(typeof(arr)=="null")
   {
       console.log("null");
   }
else if(arr.constructor==Array)
    {
       
     if(arr[0].constructor==Object)
     {
        console.log("Array of Object");
        console.log(arr);
     }
     else 
     {
         console.log("array");
         console.log(arr);
     }
 }
 else if(arr.constructor==Number)
{
    console.log("Number");
    console.log(arr);
}
else if(arr.constructor==String)
{
    console.log("String");
    console.log(arr);
}
else if(arr.constructor==Object)
{
    console.log("object");
    console.log(arr);
}

else if(isNaN(arr)==true)
{
    console.log("NaN")
}
else {
    console.log("Empty");
}

}


var d;
var c = [{"key": 2}];
var e=123
check_datatype(d);
check_datatype(c);
check_datatype(e);
check_datatype("Himvan");
check_datatype([1,2,3,4]);

