function modalGift (){
// Моджальное окно с подарком 
 let modalTop = document.querySelector(".popup-gift"),
     fixedGift = document.querySelector(".fixed-gift"),
     popupClose = document.getElementsByClassName("popup-close");

     fixedGift.addEventListener('click', () => {
      modalTop.style.display = "block";       
      fixedGift.style.display = "none";       
     });
    
// Назвначаем всем крестикам обработчик событий закрыть
    for(let b = 0; b < popupClose.length; b++){
    	popupClose[b].addEventListener('click', () => {
        modalTop.style.display = "none";
        fixedGift.style.display = "block";
        windowModalDesign.style.display = 'none';
        modalBtnConsultation.style.display = 'none';              
     });}
    
// Модальное окно button-design

  let modalDesign = document.querySelectorAll('.button-design'),
      windowModalDesign = document.querySelector('.popup-design');
      
      for(let i = 0; i < modalDesign.length; i++){
      	modalDesign[i].addEventListener('click', ()=>{
        windowModalDesign.style.display = 'block';
      })}

 // Модальное окно button-consultation 
    let btnConsultation = document.querySelectorAll('.button-consultation'),
        modalBtnConsultation = document.querySelector('.popup-consultation');
        
        for(let i = 0; i < btnConsultation.length; i++){
        	btnConsultation[i].addEventListener('click', ()=>{
        		modalBtnConsultation.style.display = 'block';
        	})
        }
};

module.exports = modalGift;