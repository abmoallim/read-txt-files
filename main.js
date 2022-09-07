


let txt = document.getElementById("txt")

let displaytxt = document.getElementById("displaytxt")

txt.addEventListener('change',function(){
    let file = new FileReader();
    
    file.readAsText(txt.files[0])

    file.onload= function(){
        displaytxt.innerHTML = file.result;   
    }
})