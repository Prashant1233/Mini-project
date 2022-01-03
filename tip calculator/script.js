function calculation(){
    let tip=document.getElementById("tip").value;
    let total_person=document.getElementById("total_person").value;
    if((tip) && (total_person)){
    let service=document.getElementById("service").value;
    let result=Math.floor(((tip * service)/100)/total_person);
    document.getElementById("show").innerHTML=`<div class="showclass">TIP AMOUNT:- Rs. ${result} Each </div>`;
    }else{
    document.getElementById("show").innerHTML=`<div class="showclass">Please fill required details !!</div>`;
    }
}