// Обнавление страницы
function refreshPage() {
    window.location.reload();
}

// Скролл 
const headerEL = document.getElementById("header")

window.addEventListener("scroll", function(){
    const scrollPos = window.scrollY

    if(scrollPos > 50){
        headerEL.classList.add("header_scroll")  
    }else{
        headerEL.classList.remove("header_scroll")
    }
})

// Карточка
function toggleBlock(blockId) {
    var blocks = document.getElementsByClassName('block');
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.display = 'none';
    }
    
    var block = document.getElementById(blockId);
    block.style.display = 'block';
  }

//Переход на новую страницу
let newWindow = null;

document.getElementById('toggleButton').addEventListener('click', function() {
if (newWindow && !newWindow.closed) {
newWindow.close();
newWindow = null;
} else {
newWindow = window.open('new collection.html');
}
});

// Модальное окно
const modal = document.getElementById('modal');

function openModal() {
  modal.style.display = 'block';
  document.addEventListener('keydown', closeModalOnEsc);
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.style.display = 'none';
  document.removeEventListener('keydown', closeModalOnEsc);
  document.body.classList.remove('modal-open');
}

function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

let quantity = 1;
const price = 14500; // Цена за один товар
const quantityElement = document.getElementById('quantity');
const totalElement = document.getElementById('total');

function updateTotal() {
  totalElement.textContent = quantity * price;
}

document.getElementById('increase').addEventListener('click', function() {
  quantity++;
  quantityElement.textContent = quantity;
  updateTotal();
});

document.getElementById('decrease').addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotal();
  }
});


const fullscreenImage = document.getElementById('fullscreenImage');

fullscreenImage.addEventListener('click', function() {
  if (fullscreenImage.requestFullscreen) {
    fullscreenImage.requestFullscreen();
  } else if (fullscreenImage.mozRequestFullScreen) { 
    fullscreenImage.mozRequestFullScreen();
  } else if (fullscreenImage.webkitRequestFullscreen) { 
    fullscreenImage.webkitRequestFullscreen();
  } else if (fullscreenImage.msRequestFullscreen) { 
    fullscreenImage.msRequestFullscreen();
  }
  
});








