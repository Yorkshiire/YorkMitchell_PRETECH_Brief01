// DASH MENU COMPONENT

'use strict';

var menu = {
    title: 'Bt Games',
    menus: [
    {
      title: 'Overview ',
      icon: 'fa fa-caret-right',
      isActive: true
    },
    {
      title: 'Comment',
      icon: 'fa fa-caret-right',
      isActive: false

    },
    {
      title: 'Community',
      icon: 'fa fa-caret-right',
      isActive: false

    },
    {
      title: 'Performance',
      icon: 'fa fa-caret-right',
      isActive: false
    },
    {
      title: 'Anylytics',
      icon: 'fa fa-caret-right',
      isActive: false,
    },
    {
      title: 'Settings',
      icon: 'fa fa-caret-right',
      isActive: false
    },
    {
      title: 'Theme colour',
      icon: 'fa fa-caret-right',
      isActive: false
    }
    ]
}


Vue.component('dash-menu', {
  template: `<div class="dash-menu">
              <h3>{{ title }}</h3>
              <ul v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">
                    {{ menu.title }}
                    <i :class="menu.icon"></i>
                  </a>
                </li>
              </ul>
            </div>
            `,
  data: function() {
    return menu;
  }
})

var dashMenu = new Vue({
  el: '#dashmenu'
})