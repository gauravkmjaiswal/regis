console.log('hello gaurav');
const searchDisplay = ' <input class="search"> <img src="image/search.svg" height="80%">';
//document.querySelector('.search_bar').innerHTML=searchDisplay;
const NoteBox =`<form action="/Notes" method="POST"  id="note">
<input type="textarea" name="notes"  placeholder="note" class="Note">


<input type="textarea" name="subjects"  class="Note2" >


<input type="submit" name="submit"  class="btn1" value="Login">

</form>`
let condition0 = true;
let condition1 = true;
let condition2 = true;
let condition3 = true;
let totalNotes=0;
let countNotes=-1;
let addNoteArray=[]


const menu_option11 = `<div class="menu_option2">  <ul>
<li> <div class="calender">Calender</div></li>
<li>  <div class="security_box"> Security Box</div></li>
<li> <div class="pencil"> Pencil </div></li>
<li> <div class="trash"> Trash </div></li>
</ul>
</div>`;


const changer = (e, Box,countNote) => {
    document.querySelector(`.${e}`).innerHTML = '';
    document.querySelector(`.${e}`).innerHTML = Box;
}


//////
//document.querySelector('.btn').addEventListener('click',function(){
//   addNote('search_bar',NoteBox);
//   console.log('hello');
//})
//document.querySelector('.search_image1').addEventListener('click',function(){
//  console.log('hiiii');
//  document.querySelector('search_bar').innerHTML='';
//  document.getElementById("note").innerHTML=searchDisplay;

//  addNote('search_image1',searchDisplay);
//})
let k=1;
const addNotetomid = (Box1,addNoteArray,countNotes) => {
    
    condition3=false;
    

   addNoteArray.push(Box1);


    if(k%4==0)
    { document.querySelector('.Notes').innerHTML += addNoteArray[countNotes];
     }
    else
    document.querySelector('.Notes').innerHTML += addNoteArray[countNotes];
    k++;
}
function mouseover() {
    document.getElementById('dltimg').style.display = "block"
}
function mouseout() {
    document.getElementById('dltimg').style.display = "none"
}
document.querySelector('.toggle').addEventListener('click', function () {
    if (condition0 === true) {
     
        changer('search_bar', NoteBox);
        document.querySelector('.toggle').src = "image/search.svg";
      
        

        //added notes to body bro
        // document.querySelector('.btn1').addEventListener('click', function () {
        //     const title = document.querySelector('.Note2').value
        //     const notebody = document.querySelector('.Note').value
        //     const tablenote1 = `<div class="addingnotes"><textarea  class="notetitle" placeholder="  Note" >${title}</textarea><textarea class="notebody" >${notebody}</textarea><img src="image/dltimg.png" id="dltimg">`;
        //     // const tablenote2 = `<div class="addingnotes"><textarea  class="notetitle" placeholder="Note" >${title}</textarea><textarea class="notebody" >${notebody}</textarea><img src="image/dltimg.png" id="dltimg">`;
        //     countNotes++;
        //     addNotetomid(tablenote1, addNoteArray,countNotes);
        //     // document.querySelector('.notetitle').style.filter ="blur(14px)";
        //     // document.querySelector('.notebody').style.filter ="blur(14px)";
        //       changer('search_bar', searchDisplay);
        //      document.querySelector('.toggle').src = "./image/e3e725d3b7d2339c41bb28ff92e8635d.svg";
        //      condition0 = true;
          
             
        // })
        
        condition0 = false;
    }
    else {
        changer('search_bar', searchDisplay);
        document.querySelector('.toggle').src = "./image/e3e725d3b7d2339c41bb28ff92e8635d.svg";
        condition0 = true;
    }
})





document.querySelector('#menu').addEventListener('click', function () {
    if (condition1 === true) {
        console.log('hey working');

        document.querySelector('.menu_option').style.width = "20%";
        document.querySelector('.Notes').style.width = "80%";
        document.querySelector('.menu_option').insertAdjacentHTML('beforeend', menu_option11);
        document.querySelector('.menu_option').style.padding = "auto";
        document.querySelector('.menu_option2').style.width = "200px";
        document.querySelector('.menu_option1').style.width = "70px";

        condition1 = false;

    }
    else {

        console.log('hey working');
        document.querySelector('.menu_option2').remove();

        document.querySelector('.menu_option').style.width = "5%";
        document.querySelector('.Notes').style.width = "95%";
        // document.querySelector('.menu_option2').style="none";
      

        condition1 = true;
    }
})

document.querySelector('.mode').addEventListener('click',function(){
    if(condition2===true)
    {
    document.querySelector('.Notes').style.backgroundColor= "#202124";
    document.body.style.backgroundColor= "#202124";
    document.querySelector('.header').style.backgroundColor= "#202124";
    document.querySelector('.menu_option').style.backgroundColor= "#202124";
    document.querySelector('.menu_option1').style.backgroundColor= "#202124";
    document.querySelector('.menu_option2').style.backgroundColor= "#202124";
    document.querySelector('.search').style.backgroundColor= "rgba(241, 243, 244, 0.24)";
    condition2 = false;
    }
    else
    {
    document.querySelector('.Notes').style.backgroundColor= "white";
    document.body.style.backgroundColor= "white";
    document.querySelector('.header').style.backgroundColor= "white";
    document.querySelector('.menu_option').style.backgroundColor= "whitesmoke";
    document.querySelector('.menu_option1').style.backgroundColor= "whitesmoke";
    document.querySelector('.menu_option2').style.backgroundColor= "whitesmoke";
    document.querySelector('.search').style.backgroundColor= " #e6eaec";
    condition2 = true;
    }
})


if(condition3===false)
document.querySelector('.notetitle').style.backgroundColor="#434441";


