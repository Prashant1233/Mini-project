const quiz=[{
    Q: "Q. What is the tech stack used for this project ?",
    opt1: "HTML",
    opt2: "CSS",
    opt3: "JavaScript",
    opt4: "All",
    ans: "ans4",
}, {
    Q: "Q. who is the founder of JavaScript?",
    opt1: "Brendan Eich",
    opt2: "Lily Cooper",
    opt3: "Grahm Bell",
    opt4: "None",
    ans: "ans1",
}, {
    Q: "Q. what is the full form of css?",
    opt1: "Casting Style Sheet",
    opt2: "Costume Style Sheet",
    opt3: "Cascading Style Sheet",
    opt4: "None",
    ans: "ans3",
}, {
    Q: "Q. What is the full form of HTTP",
    opt1: "Height Transfer Protocol",
    opt2: "Hypertext Transfer Protocol",
    opt3: "Hybrid Transfer protocol",
    opt4: "None",
    ans: "ans2",
}, {
    Q: "Q. What stands for URL",
    opt1: "Unique Resource Locator",
    opt2: "Uniform Resource Locator",
    opt3: "Undefined Resource Locator",
    opt4: "None",
    ans: "ans2",
}]

 
let count = 0, score = 0;
function prev(){
    if(count>0){
      count--;
    }
setQues()
}
function setQues(){
const heading = document.querySelector(".heading").innerText = quiz[count].Q;
const opt1 = document.querySelector(".opt1").innerText = quiz[count].opt1;
const opt2 = document.querySelector(".opt2").innerText = quiz[count].opt2;
const opt3 = document.querySelector(".opt3").innerText = quiz[count].opt3;
const opt4 = document.querySelector(".opt4").innerText = quiz[count].opt4;
}

setQues();
const btn = document.querySelector(".btn");
const rightAns = document.querySelectorAll(".answer")
function checkAns(){
    let ansid;
    rightAns.forEach((item)=>{
        if(item.checked){
        ansid=item.id;
        }
    })
    return ansid;

}
btn.addEventListener('click', ()=>{   
    const inputid= checkAns();   
    if(quiz[count].ans==inputid){
           score++;
    }
    if(count < quiz.length-1){
    count++;
    }
    
    if(count==quiz.length){
        const show= document.querySelector(".show").innerHTML=`
        <h4> your score ${score}/${quiz.length}`        
    }
       
    setQues();
 
})

    


