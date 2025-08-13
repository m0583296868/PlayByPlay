const InputName=document.querySelector("#fname")
const InputPassword=document.querySelector("#sisma")
const button=document.querySelector("button")
const arrUser=JSON.parse(localStorage.getItem("users"))||[]
button.addEventListener("click", (e)=>{
    e.preventDefault()
    checkEnter()

})
const checkEnter=()=>{
    const res= arrUser.find(user=>{
        return user.name===InputName.value && user.password===InputPassword.value})
            
           if(InputName.value&&InputPassword.value&&res===undefined)
              alert("שם המשתמש או הסיסמא שגויים")
            else if (InputName.value&&InputPassword.value&&res!==undefined)  {
                window.location.href="../לובי/לובי.html"
                localStorage.setItem("nowUser",JSON.stringify(res))

    }
           else alert("נא הכנס שם וסיסמא")

           

}
