function readFile(){
    var key1=document.getElementById("key1").value; 
    if(key1=="")
        alert("key cannot be empty");
    else if(localStorage.getItem(key1)){
        
    var item= JSON.parse(localStorage.getItem(key1));
    var data= document.getElementById('data');
    var tr= document.createElement("tr");
    var td= document.createElement("td");
    var td1= document.createElement("td");
    var td3= document.createElement("td");
    var textkey=document.createTextNode(key1);
    var textage= document.createTextNode(item.age);
    var textdesc= document.createTextNode(item.description);
    td.appendChild(textkey);
    td1.appendChild(textage);
    td3.appendChild(textdesc);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td3);
    data.appendChild(tr);
    }
        else{
    alert("key doesn't Exist");
}
}

function keyRoute(){
    window.location = '/';
}


function del(){
    var key1=document.getElementById("key1").value; 
    if(key1=="")
    alert("key cannot be empty");
    else{
    localStorage.removeItem(key1);
    document.getElementById("key1").value="";
    }
    
}
