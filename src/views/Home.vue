<script>
import moment from 'moment';
import screenfull from 'screenfull';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'home',
  data: () => ({
    username: '',
    altUsername: '',
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
        if (user.altUsername === this.altUsername) {
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
          altUsername: this.altUsername,
          userId: moment().format(),
        };
        const newUsers = JSON.stringify([...users, newUser]);
        localStorage.setItem('users', newUsers);
        localStorage.setItem(`userdata-${newUser.userId}`, '{}');
      }

      this.username = '';
      this.altUsername = '';
    },

    deleteUser() {
      if (!localStorage.getItem('users')) { return; }
      const users = JSON.parse(localStorage.getItem('users'));
      const userIndex = users
        .findIndex(u => u.username === this.username && u.altUsername === this.altUsername);
      if (userIndex >= 0) {
        const newUsers = [...users];
        newUsers.splice(userIndex, 1);
        localStorage.removeItem(`userdata-${users[userIndex].userId}`);
        localStorage.setItem('users', JSON.stringify(newUsers));
        alert('User deleted'); // eslint-disable-line

        this.username = '';
        this.altUsername = '';
      } else {
        alert('User not found or the password is incorrect'); // eslint-disable-line
      }
    },

    enableFullscreen() {
      screenfull.request();
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
      <input
        v-model="username"
        class="input first"
        @keyup.enter="login()" placeholder="Username"
      />
      <input
        v-model="altUsername"
        class="input last"
        @keyup.enter="login()" type="password" placeholder="Password"
      />
      <BaseButton
        @click="login()"
        :label="'Login/Create'"
      />
      <BaseButton
        @click="deleteUser()"
        :label="'Delete User'"
        style="border-color: red; color: red;"
      />
      <!-- eslint-disable-next-line -->
      <p class="note">Nothing here is secure. <b>Do not</b> include any personal information anywhere on this website.</p>
    </div>

    <div class="intro">
      <hr>
      <!-- eslint-disable-next-line -->
      To learn about the game, its components, and how to play, visit the
      <router-link to="/glossary" class="link">
        <span @click="enableFullscreen()">Glossary</span>
      </router-link>.
      If you feel ready to just jump in,
      <router-link to="/game" class="link">
        <span @click="enableFullscreen()">go right ahead</span>
      </router-link>.
      You can also login or create an account above.
      <hr>
      This game is based off of
      <a href="https://play.google.com/store/apps/details?id=com.The717pixels.DungeonCards&hl=en_US" class="link">Dungeon Cards</a>,
      give them some love and support too!
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
  .note {
    margin-top: 10px;
  }
  & .input {
    height: 40px;
    background: none;
    border: 1px solid #42b983;
    padding: 0 10px;
    font-size: 16px;
    &.first {
      border-radius: 5px 5px 0 0;
    }
    &.last {
      border-top: none;
      border-radius: 0 0 5px 5px;
      margin-top: -1px;
    }
  }
  & button {
    margin-top: 10px;
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
