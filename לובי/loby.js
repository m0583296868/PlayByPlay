let users=JSON.parse(localStorage.getItem("users"))
let nowUser=JSON.parse(localStorage.getItem("nowUser"))
const main = document.querySelector("main")
const mainn=()=>{
    main.style.display="block"
}
const main2=()=>{
    main.style.display="none"
}
const newus=()=>{
    window.location.href="../רישום/הרשמה.html"
}
const newpla=()=>{
    const arrPoint=users.map((user)=>{
        if (user.name==nowUser.name&&user.password==nowUser.password){
            nowUser.win=0
            nowUser.lose=0

        return {name:user.name,password:user.password,win:win=0, lose:lose=0}}
    else 
    return user
    })
    localStorage.setItem("users",JSON.stringify(arrPoint))
      localStorage.setItem("nowUser",JSON.stringify(nowUser))
      window.location.href="../רישום/כניסה.html"

}
const cni=()=>{
    window.location.href="../רישום/כניסה.html"

}