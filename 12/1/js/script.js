window.addEventListener('DOMContentLoaded', () => {
	let tab = document.getElementsByClassName('info-header-tab'),
	    tab_content = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];


	function hideTabContents(a){
		for(let i = a; i < tab_content.length; i++){
			tab_content[i].classList.remove('show');
			tab_content[i].classList.add('hide');
		}
     }

	hideTabContents(1);
	
	function showTabContent (b){
		if(tab_content[b].classList.contains('hide')){
			hideTabContents(0);
			tab_content[b].classList.remove('hide');
			tab_content[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'info-header-tab'){
             for(let i = 0 ; i < tab.length; i++){
             	if(target == tab[i]){
             		showTabContent(i);
             		break;
             	} 
             }
		}
	})	
// Timer

  let deadline = '2018-06-22';

  function getTimeRemaining(endtime){
  	let t = Date.parse(endtime) - Date.parse(new Date()),
  	    seconds = Math.floor((t/1000) % 60 ),
  	    minutes = Math.floor((t/1000/60)%60),
  	    hours = Math.floor((t/(1000*60*60)) );

  	    return{
  	    	'total' : t,
  	    	'hours' : hours,
  	    	'minutes' : minutes,
  	    	'seconds' : seconds
  	    };
  };

  function setClock(id, endtime) {
  	let timer = document.getElementById(id),
  	    hours = timer.querySelector('.hours'),
  	    minutes = timer.querySelector('.minutes'),
  	    seconds = timer.querySelector('.seconds');

  	    function updateClock(){
  	    	let t = getTimeRemaining(endtime);
  	    	// hours.innerHTML = t.hours;
  	    	// minutes.innerHTML = t.minutes;
  	    	// seconds.innerHTML = t.seconds;
          if(t.hours < 10){
            hours.innerHTML = `0 ${t.hours}`;
          } else {
            hours.innerHTML = t.hours;
          }; 
          if(t.minutes< 10){
            minutes.innerHTML = `0 ${t.minutes}`;
          } else {
            minutes.innerHTML = t.minutes;
          } ;
          if(t.seconds < 10){
            seconds.innerHTML = `0 ${t.seconds}`;
          } else {
            seconds.innerHTML = t.seconds;
          };



          if(t.total <= 0){
            clearInterval(timeInterval);
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            } 
  	    };       

  	     updateClock();
  	  var timeInterval = setInterval(updateClock, 1000);   
  }

  setClock('timer', deadline);

  // Модальное окно

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close =  document.querySelector('.popup-close');

  more.addEventListener('click', () => {
     more.classList.add('more-splash');
     overlay.style.display = "block" ;
     document.body.style.overflow = "hidden" ;   
  });

close.addEventListener('click', () => {
  overlay.style.display = "none" ;
  more.classList.remove('more-splash');
  document.body.style.overflow = "" ;
});

let desc_btn = document.getElementsByClassName("description-btn");

for(let i = 0; i< desc_btn.length; i++){  
  desc_btn[i].addEventListener('click', () => {  
     more.classList.add('more-splash');
     overlay.style.display = "block" ;
     document.body.style.overflow = "hidden" ;
     })
  };

  // Форма 
  let message = new Object();
  message.loading = "Загрузка....";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failrue = "Что-то пошло не так...";


  let form = document.getElementsByClassName('main-form')[0],
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

      statusMessage.classList.add('status');

 form.addEventListener('submit', function (event){
   event.preventDefault();
   form.appendChild(statusMessage);

   // AJAX 
     let request = new XMLHttpRequest();

     request.open("POST", 'server.php')
     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");

     let formData = new FormData(form);
     request.send(formData)

     request.onreadystatechange = function (){
      if(request.readyState < 4){
        statusMessage.innerHTML = message.loading;
      } else if(request.readyState === 4) {
           if (request.status == 200 && request.status < 300){
             statusMessage.innerHTML = message.success;
           } else {
            statusMessage.innerHTML = message.failrue;
           }
        }
     }

     for (let i = 0; i < input.length; i++){
      input[i] = '';
      // очищаем поля ввода
     }
 })

  let form2 = document.getElementById('form'),
      input2 = form2.getElementsByTagName('input');

 form2.addEventListener('submit', function (event){
   event.preventDefault();
   form2.appendChild(statusMessage);

   // AJAX 
     let request = new XMLHttpRequest();

     request.open("POST", 'server.php')
     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");

     let formData = new FormData(form);
     request.send(formData)

     request.onreadystatechange = function (){
      if(request.readyState < 4){
        statusMessage.innerHTML = message.loading;
      } else if(request.readyState === 4) {
           if (request.status == 200 && request.status < 300){
             statusMessage.innerHTML = message.success;
           } else {
            statusMessage.innerHTML = message.failrue;
           }
        }
     }

     for (let i = 0; i < input.length; i++){
      input[i] = '';
      // очищаем поля ввода
     }
 })
   
})