
function validate() {
    
    let email = document.getElementById('email').value;
    // let password = document.getElementById('password').value;
    
    
    
    
    if (email.includes('@') && email.includes('.com')) {
        
    
        console.log("This is true");
        document.getElementById('img-email').innerHTML =`<img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Green_tick_pointed.svg/1200px-Green_tick_pointed.svg.png" height="25px" width="25px" >  </img>`
    
    }else{

        document.getElementById('img-email').innerHTML =`<img class="img-fluid" src="https://starpng.com/public/uploads/preview/cross-png-cross-png-file-101576822852tlxz8fcrpq.png" height="25px" width="25px" >  </img>`

    }
}

