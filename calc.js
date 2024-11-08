const input=document.querySelector('input')
const btnList=document.querySelectorAll('button')


btnList.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(btn.innerText==='=')//e.target.innertext==='='
        {
            input.value=eval(input.value)
        }
        else if(btn.innerText==='AC'){
            input.value=''
        }
        else if(btn.innerText==='DE'){        
            input.value=input.value.slice(0,-1)
            
        }
        else{
            input.value+=e.target.innerText
        }
    })
})

