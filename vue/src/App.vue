<template>
    <div id="app">
      <div class="sidebar">
        <a href="#home"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="21" r="20.5" fill="#F4F4F4" stroke="black"/>
        </svg>
        </a>
        <a href="#" @click="[on = 1]"><i class="far fa-comment-dots"></i></a>
        <a href="#"><i class="fas fa-book"></i></a>
        <a href="#" @click="[on = 3]"><i class="fas fa-users"></i></a>
        <a href="#" @click="[on = 4]"><i class="far fa-file-alt"></i></a>
        <a href="#"><i class="fas fa-id-card"></i></a>
        <a class="last" href="#"><i class="fas fa-cog"></i></a>
      </div>

      <div class="main">
         <div v-if="on === 1">
          <Message><Message>
        </div>
        <div v-if="on === 3">
          <Team><Team>
        </div>
        <div v-if="on === 4">
          <Report><Report>
        </div>
      </div>
    </div>
</template>

<script>
import Message from './components/Message'
import Team from './components/Team'
import Report from './components/Report'

export default {
  name: "app",
  components: {
        Message,
        Team,
        Report,
    },
  data() {
    return {
      on : 1,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      // this.$router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1008px;
  height: 619px;
}
body {font-family: "Lato", sans-serif;}

.sidebar {
  height: 100%;
  width: 60px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 16px;
}

.sidebar a {
  text-decoration: none;
  font-size: 40px;
  color: #818181;
  display: block;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 60px; /* Same as the width of the sidenav */
  width: 959px;
  height: 100%;
}
.last{
  padding-top: 135px;
  padding-bottom: 10px;
}

/* @media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
} */
</style>
