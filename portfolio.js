 
        const menuBtn=document.querySelector('.menuBtn')
        const navbar=document.querySelector('.navbar')

        menuBtn.addEventListener('click',() =>{
            navbar.classList.toggle('change')
            menuBtn.classList.toggle('change')

        },20);

    
let number = document.getElementById("number")
let counter= 0;
setInterval(() =>{
    if(counter == 85){
        clearInterval();
    }else{
    counter += 1;
    number.innerHTML = counter + "%";
    }

}, 20);


    
let css = document.getElementById("css")
let count= 0;
setInterval(() =>{
    if(count == 70){
        clearInterval();
    }else{
    count += 1;
    css.innerHTML = count + "%";
    }

}, 20);



    
let js = document.getElementById("js")
let calculate= 0;
setInterval(() =>{
    if(calculate == 65){
        clearInterval();
    }else{
    calculate += 1;
    js.innerHTML = calculate + "%";
    }

}, 20);




function message(){
    
    let Name= document.getElementById('name');
    let Email= document.getElementById('email');
    let msg= document.getElementById('msg');
    let phonenumber= document.getElementById('phonenumber');
    const success= document.getElementById('success');
    const danger= document.getElementById('danger');
   
    if(Name.value === '' || email.value === ''|| msg.value === '' ||phonenumber.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value= '';
            email.value= '';
            msg.value= '';
            phonenumber.value='';


        },2000);

         success.style.display ='block';

    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display='none';


    },4000);

}

   


        






