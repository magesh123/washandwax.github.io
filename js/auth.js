// signup
const register= document.querySelector('#signup-form');
register.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = register['signup-email'].value;
  const password = register['signup-password'].value;
  const username = register['signup-username'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(username,email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form
    //const modal = document.querySelector('#register');
    //M.Modal.getInstance(modal).close();
    //register.reset();
  });
});
