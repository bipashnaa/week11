function myFunction(){
  const element = document.body;
  element.classList.toggle("dark-mode");
  const button = document.querySelector("button");
  if(element.classList.contains("dark-mode")){
    button.textContent="Light Mode";
  }else{
    button.textContent="Dark Mode";
  }
}

const textchange = document.querySelector("span");
const values = ["a fullstack developer", "a student",  "a des"]
let counter =0;
setInterval(()=>{
    textchange.textContent=value[counter];
    counter=(counter+1) %values.length;
},3000);