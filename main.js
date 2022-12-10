 let arrTask = []
 getLocal()
 

function addTicket(){
const textarea = document.getElementById("textarea")
const date = document.getElementById("date")
const time = document.getElementById("time")

let task = {
    textarea:textarea.value,
    date:date.value,
    time:time.value
}

arrTask.push (task)
setLocal()
displayTask()

//addTicketריקון הטופס לאחר לחיצה על 
textarea.value = ""
date.value = ""
time.value = ""

}

function displayTask(){
    let index = 0
    let html = `<div class="row rowtask"   >`
    for(item of arrTask){
        item.index=index
        console.log(arrTask)
        html +=`<div class="col-3 note w3-container w3-container w3-center w3-animate-opacity text1 overflow-auto" >
                        <div class="tasktext overflow-auto">
                            <span class="text">${item.textarea} </span> 
                        </div>

                        <div class="icon">                     
                            <span class="glyphicon glyphicon-remove-circle" onclick="iconDelet(id)" id="${item.index}"></span>                   
                        </div>

                        <div class="time-date">
                            <p>${item.date}</p>
                            <p>${item.time}</p>
                        </div>
                </div> `
            index++         
    }   

let taksBox = document.getElementById ("bord")

taksBox.innerHTML = html

}


function setLocal(){
    json = JSON.stringify(arrTask)
    localStorage.setItem("arrTask" ,json)
}

 function getLocal(){
    json = localStorage.getItem("arrTask")
    if(json){
        arrTask = JSON.parse(json)
        displayTask()
    }
 }

 function iconDelet(index){
    arrTask.splice(index,1)
    setLocal()
    displayTask()

 }




