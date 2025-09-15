// Minimal JS for menu toggle and form feedback
document.addEventListener('click', function(e){
  if(e.target.closest('.menu-toggle')){
    const nav = document.querySelector('.nav');
    if(nav.style.display === 'flex'){ nav.style.display = ''; }
    else{ nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.gap = '1rem'; }
  }
});

function submitForm(e){
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Message sent! (Demo — configure your backend to process submissions.)';
  e.target.reset();
}
