var data={
    key:String,
    age:Number,
    description:String
}


function submit(){
    var key= document.getElementById("key").value;
    var val= document.getElementById("val").value;
    var desc= document.getElementById("desc").value;
    if(localStorage.getItem(key))
    alert('key already exists');
    else if(key=="" || val=="" || desc=="")
    alert("Enter the below fields");
else{
    data.key=key;
    data.age=val;
    data.description=desc;
localStorage.setItem(key,JSON.stringify(data));
    }
}
function keyRoute() {
    window.location = '/read';
}