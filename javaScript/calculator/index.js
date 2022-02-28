outputscreen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
console.log(buttons);
optValue = '';
for(btn of buttons){
    btn.addEventListener('click', (e) => {
        btnText = e.target.innerText;

        lastOfOptText = optValue.charAt(optValue.length-1);

        if(lastOfOptText == btnText){
            if(btnText == '+' || btnText == '-' || btnText == '*' || btnText == '/'){
                alert("invalid input");
            } 
        } 
        else{
            
            if(btnText == 'C'){
                optValue = "";
                outputscreen.value = optValue; 
            }
            else if(btnText == '='){
    
                outputscreen.value = eval(optValue); 
            }
            else{
                if( ['+','-','*','/'].lastIndexOf(lastOfOptText) !== -1 && 
                ['+','-','*','/'].lastIndexOf(btnText) !== -1){
                    optValue = optValue.slice(0,-1) + btnText;
                    outputscreen.value = optValue;

                }else{
                    optValue += btnText;
                    outputscreen.value = optValue;
                }
                 
            }
           
        }
    });
}