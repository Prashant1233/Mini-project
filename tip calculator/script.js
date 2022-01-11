function calculation(){
    let tip=document.getElementById("tip").value;
    let total_person=document.getElementById("total_person").value;
    let service=document.getElementById("service").value;
    if((tip) && (total_person) && (service)){
    let result=Math.floor(((tip * service)/100)/total_person);
    document.getElementById("show").innerHTML=`<div class="showclass">TIP AMOUNT:- Rs. ${result} Each </div>`;
    }else{
    document.getElementById("show").innerHTML=`<div class="showclass">Please fill required details !!</div>`;
    }
}
