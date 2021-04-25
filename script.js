const hamburger=document.getElementById('burger')
const navigation=document.querySelector('.navigation')
const product = document.querySelector('.product')
const productMenu=document.querySelector('.productMenu')
const company = document.querySelector('.company')
const companyMenu=document.querySelector('.companyMenu')
const connect = document.querySelector('.connect')
const connectMenu=document.querySelector('.connectMenu')
const productArrow=document.querySelector('.productArrow')
const companyArrow=document.querySelector('.companyArrow')
const connectArrow=document.querySelector('.connectArrow')
const productArrowDes=document.querySelector('.productArrowDes')
const companyArrowDes=document.querySelector('.companyArrowDes')
const connectArrowDes=document.querySelector('.connectArrowDes')
let active=0
openMenuFunction=()=>{
    active=!active
    navigation.classList.toggle('active')
   if(active)
   {
hamburger.src='images/icon-close.svg';

   }
   else if(!active)
   {
    hamburger.src='images/icon-hamburger.svg';
   }
    console.log(active)
}
hamburger.addEventListener('click',openMenuFunction)
const openProductMenu=function(){
    productMenu.classList.toggle('active')
    productArrow.classList.toggle('rotate')
    productArrowDes.classList.toggle('rotate')
    

}
product.addEventListener('click',openProductMenu)
const openCompanyMenu=function(){
    companyMenu.classList.toggle('active')
    companyArrow.classList.toggle('rotate')
    companyArrowDes.classList.toggle('rotate')
    

}
company.addEventListener('click',openCompanyMenu)
const openConnectMenu=function(){
    connectMenu.classList.toggle('active')
    connectArrow.classList.toggle('rotate')
    connectArrowDes.classList.toggle('rotate')
    

}
connect.addEventListener('click',openConnectMenu)