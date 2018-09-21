// HEADER COMPONENT

'use strict';

var menu = {
    menus: [
    {
      title: 'dashboard',
      link: 'index.html',
      isActive: true
    },
    {
      title: 'workflow',
      link: 'workflow.html',
      isActive: false

    },
    {
      title: 'todo list',
      link: 'todo.html',
      isActive: false

    },
    {
      title: 'messages',
      link: 'messages.html',
      isActive: false
    }
    ]
}
Vue.component('main-menu', {
  methods: {
    changeTheme(){
      $("#theme-changer").on('click', function(){
        $("main").toggleClass('dark');
      });
    }
  },
  template: `
              <div class="topnav">
                <a class="pic" <img src="img/profilepic.png" alt="profile picture"/></a>
                <h1>Micheal Mathews</h1>
                <a class="active" href="#home"><i class="fa fa-angle-right"></i></a>
                <a href="#"><i class="fa fa-bell"></i></a>
                <a href="#contact"><i class="fa fa-envelope"></i></a>
                  <div class="search-container">
                    <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search">
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                   <button v-on:click="changeTheme" class="btn btn-outline-success my-2 my-sm-0" type="submit" id="theme-changer">Theme</button>
                </div>
              </div>
            `,
  data: function() {
    return menu;
  }
});

var menus = new Vue({
  el: '#mainmenu'
})





