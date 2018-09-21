// LOGIN COMPONENT

'use strict';


Vue.component('login', {
  template: `
              <div id="cover">
        <div id="form-ui">
            <form method="post" action="">
                <div id="close-form"></div>
                <div id="form-body">
                    <div id="welcome-lines">
                        <div id="w-line-1">Hi!!!</div>
                        <div id="w-line-2">Welcome Back</div>
                    </div>
                    <div id="input-area">
                         <input v-on:click="focus" type="text" id="username" placeholder="Username">
                         <input v-on:click="scream" type="password" id="password" placeholder="Password">
                    </div>
                    <input v-on:click="checkpass" type="submit" value="Login" class="btn success">
                    <div id="forgot-pass">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
            </form>
            <div id="img-box">
                <img src="img/btgames.jpg" alt="UI Image" >
            </div>
        </div>
    </div>

            `,
  methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'andrew' && pass === '123456') {
        alert('Username and password correct!');

        window.location = "./dashboard.html";
        
      } else {
        alert('OOOF!');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "#ff0000";
      
    },
    scream: function() {
        alert("OOF!!!!!!!");
      
    }
  }
});



var login = new Vue({
  el: '#login'
});
