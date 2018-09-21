// PROFILE COMPONENT

'use strict';

var profile = {
    fname: 'Dashboard',
    status: false,
}


Vue.component('profile', {
  template: `<div class="profile-container">
              
              <h2>{{ fname }}</h2>
              <div class="user-status">
                <i v-bind:class="{ active: status }"></i>
                <p v-if="status">ACTIVE</p>
              </div>
            </div>
            `,
  data: function() {
    return profile;
  }
})

var profile = new Vue({
  el: '#profile'
})