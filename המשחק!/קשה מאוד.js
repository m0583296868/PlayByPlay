const key1 = document.querySelector("#key1")
const key2 = document.querySelector("#key2")
const key3 = document.querySelector("#key3")
const key4 = document.querySelector("#key4")
const key5 = document.querySelector("#key5")
const key6 = document.querySelector("#key6")
const key7 = document.querySelector("#key7")
const key8 = document.querySelector("#key8")
const key9 = document.querySelector("#key9")
const key10 = document.querySelector("#key10")
const key11 = document.querySelector("#key11")
const key12 = document.querySelector("#key12")
const key13 = document.querySelector("#key13")
const key14 = document.querySelector("#key14")
const key15 = document.querySelector("#key15")
const key16 = document.querySelector("#key16")
const key17 = document.querySelector("#key17")
const key18 = document.querySelector("#key18")
const key19 = document.querySelector("#key19")
const key20 = document.querySelector("#key20")
const key21 = document.querySelector("#key21")
const key22 = document.querySelector("#key22")
const key23 = document.querySelector("#key23")
const key24 = document.querySelector("#key24")
const key25= document.querySelector("#key25")
const h3 = document.querySelector("h1")
const start = document.querySelector(".start")
const body = document.querySelector("body")
const title = document.querySelector("#title")

let users=JSON.parse(localStorage.getItem("users"))
let nowUser=JSON.parse(localStorage.getItem("nowUser"))

const arrBtn = [
    { id: key1, color: "pink", sound: "1.mp3" },
    { id: key2, color: "red", sound: "2.mp3" },
    { id: key3, color: "orange", sound: "3.mp3" },
    { id: key4, color: "yellow", sound: "4.mp3" },
    { id: key5, color: "green", sound: "5.mp3" },
    { id: key6, color: "blue", sound: "6.mp3" },
    { id: key7, color: "lightblue", sound: "7.mp3" },
    { id: key8, color: "darkorchid", sound: "8.mp3" },
    { id: key9, color: "pink", sound: "9.mp3" },
    { id: key10, color: "red", sound: "10.mp3" },
    { id: key11, color: "orange", sound: "11.mp3" },
    { id: key12, color: "yellow", sound: "12.mp3" },
    { id: key13, color: "green", sound: "13.mp3" },
    { id: key14, color: "red", sound: "14.mp3" },
    { id: key15, color: "orange", sound: "15.mp3" },
    { id: key16, color: "yellow", sound: "16.mp3" },
    { id: key17, color: "green", sound: "17.mp3" },
    { id: key18, color: "blue", sound: "18.mp3" },
    { id: key19, color: "lightblue", sound: "19.mp3" },
    { id: key20, color: "darkorchid", sound: "20.mp3" },
    { id: key21, color: "pink", sound: "21.mp3" },
    { id: key22, color: "red", sound: "22.mp3" },
    { id: key23, color: "orange", sound: "23.mp3" },
    { id: key24, color: "yellow", sound: "24.mp3" },
    { id: key25, color: "green", sound: "25.mp3" }]

let arrComp = [];
let arrUser = []
let n = 0
let moneStatic = n
let lose=nowUser.lose
let win=nowUser.win
let i=1,m=1
let mone = 0
let soundWinOrLose=0
h3.innerHTML=win+" ✅  |    "+lose+"❌ "
title.innerHTML=`המשחק של: ${nowUser.name}`
const points=(Win,Lose)=>{
    const arrPoint=users.map((user)=>{
        if (user.name==nowUser.name&&user.password==nowUser.password){
            nowUser.win+=Win
            nowUser.lose+=Lose

        return {name:user.name,password:user.password,win:win+=Win, lose:lose+=Lose}}
    else 
    return user
    })
    localStorage.setItem("users",JSON.stringify(arrPoint))
      localStorage.setItem("nowUser",JSON.stringify(nowUser))

}
/////////////////////תחילת משחק
const game = (i) => {

   start.style="display:none;"
  ////////////////פונקצית השוואה בין המערכים
    const compare=()=> {
        if (arrComp.length != arrUser.length) {points(0,1)
            soundWinOrLose="a"
            if(i%12==0)
            if(m>1)m--
       else i--
        }

        else {
            let y = 0
            while (y <= arrComp.length - 1) {
                if (arrComp[y] != arrUser[y]) {
                    points(0,1)
                    soundWinOrLose="a"
                    if(i%12==0)
                    if(m>1)m--
               else i--
                  break;
                }
                else y++
            }
            if (y == arrComp.length) {points(10,0)
                soundWinOrLose="b"
            }
        }  
         start.innerHTML=`<audio  autoplay src="${soundWinOrLose}.mp3"></audio>`
        h3.innerHTML=win+" ✅  |    "+lose+"❌ "
        game(i+=1)

       
    }

    const waiteUser = () => {
         const interWait = setInterval(() => {
         for (let c = 0; c < arrBtn.length; c++)
            arrBtn[c].id.style = "";
            moneStatic--
            
            if (moneStatic<=0) {

                clearInterval(interWait)
                compare()
            }
        },2500)
    }       
     ///////////////////פונקצית מחשב

    const waiteComp=()=>{
        mone=-1
        const computer = setInterval(() => {
            for (let c = 0; c < arrComp.length; c++)
                arrComp[c].id.style = "";
            if(mone>=0)
         {   const btnCompElement = arrComp[mone]
            console.log(btnCompElement)
            const btnComp = btnCompElement.id
            btnComp.innerHTML = `<audio  autoplay src=${arrComp[mone].sound}></audio>`}
            // btnComp.style = "box-shadow: 0 0 10px 10px " + arrComp[mone].color + ";"
            mone++
            if (mone===n) {
               
                clearInterval(computer) 
                waiteUser()
               
               
            }

        }, 800)

    }

      //////////////////פונקצית הגרלה  
    const randomi = (n, r, arrBtn) => {
        arrComp = []
        arrUser = []
        moneStatic = n * 1.5
        for (let k = 0; k < n; k++) {
            let ran = Math.floor(Math.random() * r)
            arrComp[k] = arrBtn[ran]

        }
        waiteComp()
   }

    let  r = 0;
if(i%12==0)m++
        switch (m) {
            case 1: n = 1; r = 8;   randomi(n, r, arrBtn);break;
            case 2: n = 1; r = 13;  randomi(n, r, arrBtn); break;
            case 3: n = 1; r = 18;  randomi(n, r, arrBtn); break;
            case 4: n = 1; r = 25; randomi(n, r, arrBtn); break;
            case 5: start.innerHTML=`<audio  autoplay src="c.mp3"></audio>`;
                  alert("כל הכבוד! סיימת את שלב זה!")

                     break;

        }
    }

// }

////////////פונקצית הכנסה למערך המשתמש
const user = (theObjBtn) => {
  
    if (n!=0 &&mone==n& moneStatic>0) { 
        arrUser.push(theObjBtn)
      
     
     if (arrUser.length===arrComp.length)
       moneStatic=0
    if(arrComp[arrUser.length-1]!=theObjBtn)
        moneStatic=0
   }  

}








///////////פונקצית לחיצה
const myClick = (button) => {
    const a = button.slice((3))
    const theObjBtn = arrBtn[a - 1]
    const theBtn = theObjBtn.id
    // theBtn.innerHTML = `<audio  autoplay src="${theObjBtn.sound}" ></audio>`
    theBtn.style = "box-shadow: 0 0 10px 10px " + theObjBtn.color + ";"

    user(theObjBtn)
}
const r = (button) => {
    const a = button.slice((3))
    const theObjBtn = arrBtn[a - 1]
    const theBtn = theObjBtn.id
    theBtn.style = ""
}

const exit=()=>{
    window.location.href="../לובי/לובי.html"
}


