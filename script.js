function addNewWeField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-1");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewProField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("proField");
  newNode.classList.add("mt-1");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let proOb = document.getElementById("pro");
  let proAddButtonOb = document.getElementById("proAddButton");

  proOb.insertBefore(newNode, proAddButtonOb);
}

function addNewAqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-1");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCv() {
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT1").innerHTML = nameField;
  // document.getElementById("nameT2").innerHTML=nameField;
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedin").value;
  document.getElementById("githubT").innerHTML =
    document.getElementById("github").value;
  document.getElementById("instagramT").innerHTML =
    document.getElementById("instagram").value;
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    if (e.value.trim() !== "") {
      str += `<li>${e.value}</li>`;
    }
  }
  if (str === "") {
    document.getElementById("we-card").style.display = "none";
  } else {
    document.getElementById("we-card").style.display = "block";

    document.getElementById("weT").innerHTML = str;
  }



  let pros = document.getElementsByClassName("proField");
  let str1 = "";
  for (let e of pros) {
    if (e.value.trim() !== "") {
      str1 += `<li>${e.value}</li>`;
    }
  }
  if (str1 === "") {
    document.getElementById("pro-card").style.display = "none";
  } else {
    document.getElementById("pro-card").style.display = "block";

    document.getElementById("proT").innerHTML = str1;
  }




  let aqs = document.getElementsByClassName("aqField");
  let str2 = "";
  for (let e of aqs) {
    str2 += `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str2;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-templete").style.display = "block";
  document.getElementById("printcv-container").style.display = "block";
}

function printCv() {
  const element = document.getElementById("cv-templete");
  let nameField = document.getElementById("nameField").value;
  html2pdf().from(element).save(`${nameField} Resume.pdf`);
}
