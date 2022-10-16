const feedbackbtn = document.querySelector(".feedbackbtn");
const body = document.querySelector(".body");


let popup = document.createElement("div");
let poptop = document.createElement("div");
let deletebtn = document.createElement("button");

feedbackbtn.addEventListener("click",function(){
    body.append(popup);
    popup.setAttribute("class","popup")
    popup.append(poptop);
    poptop.setAttribute("class","poptop")
    poptop.append(deletebtn)
    deletebtn.setAttribute("class","deletebtn")
    deletebtn.innerText="X"
    let p = document.createElement("p")
    popup.append(p);
    p.setAttribute("class","p")
    p.innerText="We'd love to know what you think of our site. All feedback is confidential but please do not leave any personal or account information in your message. If you have any questions that require a response please visit the help section. Please don't submit personal or account information. For customer service issues, please contact us.We'd love to know what you think of our site. All feedback is confidential but please do not leave any personal or account information in your message. If you have any questions that require a response please visit the help section. Please don't submit personal or account information. For customer service issues, please contact usWe'd love to know what you think of our site. All feedback is confidential but please do not leave any personal or account information in your message. If you have any questions that require a response please visit the help section. Please don't submit personal or account information. For customer service issues, please contact us.."
})
deletebtn.addEventListener("click",function(){
    popup.remove()
})