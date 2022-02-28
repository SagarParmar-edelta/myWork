let buttons = document.querySelectorAll('button');
for(btn of buttons){
    btn.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        let optValue ='';
        optValue += btnText;
    
    });
}