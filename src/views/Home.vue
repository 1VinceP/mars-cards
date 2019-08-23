<script>
import moment from 'moment';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'home',
  data: () => ({
    username: '',
    password: '',
  }),

  methods: {
    login() {
      // create userlist if there is none
      if (!localStorage.getItem('users')) {
        localStorage.setItem('users', '[]');
      }
      const users = JSON.parse(localStorage.getItem('users'));
      const user = users.find(u => u.username === this.username);

      if (user) {
        if (user.password === this.password) {
          const userData = JSON.parse(localStorage.getItem(`userdata-${user.userId}`));
          console.log(userData);
          alert(`Hello ${user.username}`); // eslint-disable-line
          // set userData on state here
        } else { alert('Wrong password'); } // eslint-disable-line
      // create new user if username does not exist
      } else {
        alert(`User not found. Creating new user "${this.username}"`) // eslint-disable-line
        const newUser = {
          username: this.username,
          password: this.password,
          userId: moment().format(),
        };
        const newUsers = JSON.stringify([...users, newUser]);
        localStorage.setItem('users', newUsers);
        localStorage.setItem(`userdata-${newUser.userId}`, '{}');
      }

      this.username = '';
      this.password = '';
    },
  },

  components: { BaseButton },
};
</script>

<template>
  <div class="home">
    <div class="intro">
      Welcome to Mars Cards.
      <hr>
    </div>

    <div class="auth">
      <input v-model="username" @keyup.enter="login()" placeholder="Username" />
      <input v-model="password" @keyup.enter="login()" type="password" placeholder="Password" />
      <BaseButton
        @onclick="login()"
        :label="'Login/Create'"
        style="margin: 10px 0;"
      />
      <!-- eslint-disable-next-line -->
      <p class="note">Nothing here is secure. Please don't include any personal information anywhere on this website.</p>
    </div>

    <div class="intro">
      <hr>
      <!-- eslint-disable-next-line -->
      To learn about the game, its components, and how to play, visit the <router-link to="/glossary" class="link">Glossary</router-link>. If you feel ready to just jump in, <router-link to="/game" class="link">go right ahead</router-link>. You can also login or create an account above.
      <hr>
      This game is based off of <a href="https://play.google.com/store/apps/details?id=com.The717pixels.DungeonCards&hl=en_US" class="link">Dungeon Cards</a>/<a>(iOS)</a>, give them some love and support too!
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 40px 20px;
}

.auth {
  width: 100%;
  display: flex;
  flex-direction: column;
  & input {
    height: 40px;
    padding: 0 10px;
    font-size: 16px;
  }
}

.intro {
  width: 100%;
  font-size: 20px;
  line-height: 112%;
  & .link {
    color: #42b983;
  }
}
</style>
