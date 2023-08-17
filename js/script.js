let printPost=document.querySelector(".printPost")
let name=document.querySelector(".name")
let caption2=document.querySelector(".caption2")
let button=document.querySelector(".button")
let heigthAdd=document.querySelector(".heigthAdd")
let span1=document.querySelector(".span1")
let main=document.querySelector(".main")


let arr=[]

button.addEventListener("click",function(){
    span1.innerHTML=""
    if(!name.value){
        span1.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`
    }else if(!(name.value.match(/^[A-Za-z]{1}[A-Za-z]*$/))){
        span1.innerHTML="Only String"
    }else if(!caption2.value){
        span1.innerHTML=`<i class="fa-solid fa-circle-check iColor"></i>`
        // button.style.background="#5f9bf4"
        // button.style.background="#0d6efd"
    }else{
        span1.innerHTML=""
        main.style.paddingBottom="0px"

          // console.log(name.value,caption2.value);
        arr.push({
        name:name.value,
       caption2:caption2.value,
      })
      printPost.innerHTML=""
      name.value=""
      caption2.value=""
      display()
    }
})

       ///////// Date function

let date= new Date()
let courrentDate=date.toLocaleDateString()

function display(){
    arr.map(item=>{
        printPost.innerHTML+=`<div class="pain">
    <h4 class="postHeading">${item.name}<span><i class="fa-solid fa-circle-check"></i></span><span class="dateFixed">${courrentDate}</span></h4>
    <span class="threeDot"><i class="fa-solid fa-ellipsis-vertical threeDotEdit"></i></span>
    <h5 class="edit"></h5>
    <img class="img3" src="images/profile.png" alt="">
    <h1 class="print3">${item.caption2}</h1>
    <ul class="printul">
        <li><i class="fa-regular fa-heart love"></i></li>
        <li><i class="fa-regular fa-comment"></i></li>
        <li><i class="fa-solid fa-share-nodes"></i></li>
        <li><button type="button" class="btn btn-danger deleteBtn">Delete</button></li>
    </ul>
    </div>`
    })
    

       ///////// Three function
            
    let threeDotEdit=document.querySelectorAll(".threeDotEdit")
    let convertThreeDotEdit=Array.from(threeDotEdit)
    convertThreeDotEdit.map((result3)=>{
        result3.addEventListener("click",function(){
            let edit=document.querySelector(".edit")
            edit.innerHTML="Edit post"
           

        })

    })
      
        ///////// Love React function

    let love=document.querySelectorAll(".love")
    let loveConvert=Array.from(love)
    loveConvert.map((result2)=>{
        result2.addEventListener("click",function(){
            
           result2.classList.add("love1")
           result2.classList.remove("love")
                

        })

    })

          ///////// Delete function

    let deleteBtn=document.querySelectorAll(".deleteBtn")
    let convertDeleteBtn=Array.from(deleteBtn)
    convertDeleteBtn.map((result,index)=>{
        result.addEventListener("click",function(){
            arr.splice(index,1)
            printPost.innerHTML=""
            display()
            if(index==0){
                main.style.paddingBottom="280px"
            }
        })
    })
    
}
