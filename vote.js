function vote(){
    var name = document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var res=document.getElementById("res");

    if(age>=18){
        res.innerHTML="Congratulations🎉🎉!! You're eligible to vote"
    }
    else{
        res.innerHTML="Sorry😔😔!! You're not eligible to vote"
    }
}