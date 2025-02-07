function addNewWeField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-1")
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAqField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-1")
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}


function generateCv(){
    //  console.log("generation cv")
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT1");

    nameT.innerHTML=nameField;
    // setting the nameT2 value directly
    document.getElementById("nameT2").innerHTML=nameField
    // setting the contact value directly
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    // address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // links 
    document.getElementById("linkedinT").innerHTML=document.getElementById("linkedin").value;
    document.getElementById("githubT").innerHTML=document.getElementById("github").value;
    document.getElementById("instagramT").innerHTML=document.getElementById("instagram").value;

    // objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    // work experience
    
    let wes = document.getElementsByClassName("weField");
    let str=""
    for(let e of wes){
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //Education Qualification

    let aqs = document.getElementsByClassName("aqField");
    let str2=""
    for(let el of aqs){
        str2=str2+`<li>${el.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str2;


    //hiding and showing the form and the templete respectivley

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-templete").style.display="block"; 

}


// print cv

function printCv(){
    window.print();
}