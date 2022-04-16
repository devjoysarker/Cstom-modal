
// Get elements

const button    = document.getElementById('apply');
const modal     = document.querySelector('.haq-modal');
const mcloser   = document.querySelector('.haq-modal .close');
const acloser   = document.querySelector('.haq-alert .close');
const aleart_h  = document.querySelector('.haq-alert');
const keep      = document.querySelector('#keep'); 
const discard   = document.querySelector('#discard');

button.addEventListener('click', function(e){
    e.preventDefault()
    modal.classList.add('active');
});

mcloser.addEventListener('click', function() {
//   modal.classList.remove('active');
   aleart_h.style.display = 'flex';
});
acloser.addEventListener('click', function() {
//   modal.classList.remove('active')
   aleart_h.style.display = 'none';
});
keep.addEventListener('click', function(){
    aleart_h.style.display = 'none';
});
discard.addEventListener('click', function(){
    aleart_h.style.display = 'none';
    modal.classList.remove('active');
});
modal.addEventListener('click', function(e) {
    if(e.target == this){
    modal.classList.remove('active');
    }

});

