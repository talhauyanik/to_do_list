const inputDOM = document.querySelector("#input")
const listDOM = document.querySelector("#ulist")

inputDOM.addEventListener("keyup", function(event) {
    // "Enter" tuşuna basıldıysa
    if (event.keyCode === 13) {
      // butonu tetikle
      addTodo()
    }
  });

function addTodo(){
    
    if (inputDOM.value.trim() === ""){
        alert("Boş Giriş Yapılamaz!")
    }
    
    else{
        const liDOM = document.createElement("li")
        liDOM.innerHTML = inputDOM.value
        listDOM.appendChild(liDOM)
        let spanDOM = document.createElement("span")
        spanDOM.innerHTML = "\u00d7"
        liDOM.appendChild(spanDOM)

        console.log(typeof(inputDOM.value.length))
        

    }
    inputDOM.value = ""
    saveData()
}

listDOM.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
        
    }
},false)

function saveData(){
    localStorage.setItem("data",listDOM.innerHTML)
}

function getData(){
    listDOM.innerHTML = localStorage.getItem("data")
}

getData()



