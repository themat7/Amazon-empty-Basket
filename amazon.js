if(window.location.href.includes("cart/view.html")){

let list = document.getElementsByTagName("input");//grabbing every button with an input tag
var itemAmount = document.getElementsByClassName("a-dropdown-prompt");//unused ignore
let i = 0;//defining variable to be used in interval loop



var intervalId = setInterval(function(){
  console.log("current iteration " + list[i])
  console.log("list Length " +list.length);
  if(i==list.length -1){//reached end of list end the loop
    clearInterval(intervalId);//this clears a set timer
    }
if(list[i].name.includes("delete")){//checks if the button we looping through is a delete button
  var result =   list[i];//stores the current button
  console.log("ITS TRUE " + result.name  );

result.click();//clicks the current button
i=i-1;//takes off the counter after deleting so that we dont skip ahead (list length changes when we delete/click an item)
}




console.log(i);

i++;
},300)//miliseconds till next iteration, make it too fast and amazon tells me to fuck off.

}