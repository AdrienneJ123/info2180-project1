/* Add your JavaScript to this file */
window.addEventListener('DOMContentLoaded', () =>{
  const form =document.querySelector('.newsletter form');
   const emailInput =document.querySelector('.newsletter input[type="email"]');
  const messageDiv=document.querySelector('.message');
   form.addEventListener('submit', (event) =>{
    event.preventDefault(); 
    const email =emailInput.value.trim();
    if (email=== '') {
      messageDiv.textContent='Please enter a valid email address.';
    } else {
      messageDiv.textContent=`Thank you! Your email address ${email} has been added to our mailing list!`;
    }});});
