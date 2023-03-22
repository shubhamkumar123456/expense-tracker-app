let exprenseAmount = document.getElementById('expenseamount');
let description = document.getElementById('description');
let Category = document.getElementById('category');
let submitbtn = document.getElementById('submit');
let itemList = document.getElementById('items')
submitbtn.addEventListener('click', savedata);
// submitbtn.className="mb-2"

let arr=JSON.parse(localStorage.getItem("data"))||[];
appendData()
function savedata(e) {
    e.preventDefault();

    let obj = {
        exprenseAmount: exprenseAmount.value,
        description: description.value,
        category: Category.value,
    }
    arr.push(obj)
    localStorage.setItem("data", JSON.stringify(arr))
    appendData();
}
function appendData() {
    itemList.innerHTML=null
    arr.forEach((element,index) => {
       
       let div1= document.createElement('div')
       div1.className="container mb-2 text-center"
        let span1=document.createElement('span')
        let span2=document.createElement('span')
        let span3=document.createElement('span')
        let delbtn=document.createElement('button')
        let editbtn=document.createElement('button')
        editbtn.className = 'btn btn-primary'
        delbtn.className = 'btn btn-danger mx-2'
        span1.innerHTML=element.exprenseAmount;
        span2.innerHTML=element.description;
        span3.innerHTML=element.category;
        delbtn.innerHTML="Delete"
        delbtn.onclick=(index)=>{
            arr.splice(index, 1)
            localStorage.setItem("data", JSON.stringify(arr))
            appendData();
        }
        editbtn.innerHTML="Edit"
        editbtn.onclick=(e,index)=>{
            // console.log(e.target.parentNode.childNodes[0].textContent);
            exprenseAmount.value=e.target.parentNode.childNodes[0].textContent;
            description.value=e.target.parentNode.childNodes[4].textContent;
            Category.value=e.target.parentNode.childNodes[2].textContent
            arr.splice(index, 1)
            localStorage.setItem("data", JSON.stringify(arr))
            appendData();
        }
        div1.append(span1,"-",span3,"-",span2," ",delbtn,editbtn)
        itemList.append(div1)
    
    });
}

