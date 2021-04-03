var Storage={};
var InputValue = document.querySelector('.inputvalue')

var Link = ''
var Item;

window.addEventListener('DOMContentLoaded', (event) => {
    
    if(JSON.parse(localStorage.getItem("links"))){
        Storage = JSON.parse(localStorage.getItem("links"))
        Object.keys(Storage).forEach(function(key,index) {
            if(document.querySelector(`#${key}`)){
                document.querySelector(`#${key}`).href = Storage[key]
            }    
        });
    }
    else{
        localStorage.setItem("links", JSON.stringify(Storage));
    }
});
var Text = document.querySelector('.texturl')
var EditURL = document.querySelector('.editURL')

if(InputValue){
    document.querySelector('.inputvalue').addEventListener('change',(e)=>{
        Link = e.target.value
       
    })
}
document.querySelectorAll('.flex').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.children[0].style.display='block'
    })
  })

  document.querySelectorAll('.flex').forEach(item => {
    item.addEventListener('mouseout', event => {
      item.children[0].style.display='none'
    })
  })
  document.querySelectorAll('.edit').forEach(item => {
    item.addEventListener('click', event => {
      
      Item = item
      var a = Item.nextElementSibling
      var ID = a.id
      Text.innerHTML = `Change   ${ ID }  Url`
      if(Storage[ID]){
          InputValue.value = Storage[ID]
      }
      else{
          InputValue.value = ''
      }
      EditURL.style.display='flex'
    })
  })

if(document.querySelector('.confirm')){
    document.querySelector('.confirm').addEventListener('click', event => {
        var a = Item.nextElementSibling
        a.href=Link
        var ID = a.id
        Storage[ID]=Link
        localStorage.setItem("links", JSON.stringify(Storage));
        InputValue.value=''
        EditURL.style.display='none'
  
      })
}
 
  