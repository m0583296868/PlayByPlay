const InputName=document.querySelector("#fname")
const InputPassword=document.querySelector("#sisma")
const button=document.querySelector("button")
let arrUser=JSON.parse(localStorage.getItem("users"))||[]
let lower=false, num=false
//אירוע לחיצה
button.addEventListener("click", (e)=>{

     e.preventDefault()
    const res= arrUser.find(user=>{
return user.name===InputName.value && user.password===InputPassword.value})
// for (let i = 0; i <InputPassword.value.length; i++) {
//     if(InputPassword.value.charAt(i)>='a' && InputPassword.value.charAt(i)<='z')
//          lower=true
//      if(InputPassword.value.charAt(i)>='0' &&InputPassword.value.charAt(i)<='9')
//          num=true 
//  }

   if(InputName.value&&InputPassword.value&&res===undefined)
      newUser()
    else if (res!==undefined)  alert("שם המשתמש והסיסמא כבר קיימים במערכת")

   else alert("נא הכנס שם וסיסמא")
//    if(!InputPassword.value.length==6|| !num || !lower)
//    alert(" הסיסמא אינה חוקית, יש להכנס סיסמא באורך 6 תוים הכוללת אות קטנה ומספר")
    
})
//הכנסת אובייקט משתמש חדש למערך המשתמשים
const newUser =()=>{
    const nameUser=InputName.value
    const passwordUser=InputPassword.value
const objUser={
    name:nameUser,
    password: passwordUser,
    win:0,
    lose:0
}
arrUser.push(objUser)
localStorage.setItem("users",JSON.stringify(arrUser))
console.log(arrUser)
window.location.href="./כניסה.html"

}



