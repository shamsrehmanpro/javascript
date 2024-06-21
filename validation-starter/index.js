const submit = document.querySelector('button');
const fullName = document.querySelector('.name');
const phoneNo = document.querySelector('.phone');
const EmailID = document.querySelector('.email');
const YourMessage = document.querySelector('.message');
const container = document.querySelector('form');
const p = document.querySelector("p");
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const span4 = document.querySelector('.span4');

submit.addEventListener('click', function(e){
    if (!fullName.value) {
        
        span1.style.visibility = 'visible';
        span1.innerHTML = "Enter your name";
        p.style.visibility = 'visible';
        
        setTimeout(() => {
            p.style.visibility = 'hidden';
        }, 3000);
       e.preventDefault();
    }
    else if (!phoneNo.value) {
        span2.style.visibility = 'visible';
        span2.innerHTML = "Enter your name";
        p.style.visibility = 'visible';
        
        setTimeout(() => {
            p.style.visibility = 'hidden';
        }, 3000);
       e.preventDefault();
    } 
    else if (!EmailID.value) {
        span3.style.visibility = 'visible';
        span3.innerHTML = "invalid Email";
        p.style.visibility = 'visible';
        
        setTimeout(() => {
            p.style.visibility = 'hidden';
        }, 3000);
       e.preventDefault();
    } 
    else if (YourMessage.value.length < 30) {
        span4.style.visibility = 'visible';
        span4.innerHTML = "write 30 character for this text area";
        p.style.visibility = 'visible';
        
        setTimeout(() => {
            p.style.visibility = 'hidden';
        }, 3000);
       e.preventDefault();
    } 
   

});

fullName.addEventListener('input', function(e) {

    
    if (fullName.value) {
        if (fullName.value.includes(' ')) {
            span1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        }
        else{
            span1.innerHTML = 'Enter your full name';
        }
      span1.style.visibility = 'visible';
      
    }
   
  });


  phoneNo.addEventListener('input', function(e) {
   
    if (phoneNo.value) {
        if (phoneNo.value.length == 10) {
            span2.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        }
        else{
            span2.innerHTML = 'Phone No should be ten digit';
        }
      span2.style.visibility = 'visible';
      
    }
   
  });

  
  EmailID.addEventListener('input', function(e) {
   
    if (EmailID.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (EmailID.value.match(emailPattern)) {
            span3.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        }
        else{
            span3.innerHTML = 'Invalid Email address';
        }
      span3.style.visibility = 'visible';
      
    }
   
  });
  YourMessage.addEventListener('input', function(e) {
   
    if (YourMessage.value) {
        

        if (YourMessage.value.length > 30) {
            span4.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        }
        else{
            
            
                span4.innerHTML = -((YourMessage.value.length)-30) + ' charcters remaining';
                
            
            
        }
      span4.style.visibility = 'visible';
      
    }
   
  });
 