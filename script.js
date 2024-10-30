let button=document.getElementById("followButton");

function toggleFollow(){

    
    if(button.textContent=="Follow"){
        let reply=window.prompt("Are you Sure u want to Follow Anna Smith?");
       
        
        
        if(reply.length === 0 || reply.toLowerCase()==="yes" || reply.toLowerCase()==="ok"){
        
        button.textContent="Following";
        button.style.transition="backgroundColor 1s ease"
        button.style.backgroundColor="green";


       } 
       else if(reply.toLowerCase==="no"){
        button.textContent="Follow";

       }

    }
    
   
    else{
        button.textContent="Follow";
        button.style.backgroundColor="#4070f4";
    }

}



