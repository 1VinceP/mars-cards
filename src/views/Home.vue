<script>
import { mapState, mapMutations } from 'vuex';
import moment from 'moment';
import screenfull from 'screenfull';
import BaseButton from '@/components/BaseButton.vue';
import { LOGIN, LOGOUT } from '../state/types';

export default {
  name: 'home',
  data: () => ({
    username: '',
    altUsername: '',
  }),

  computed: {
    ...mapState('settings', ['user']),
  },

  methods: {
    ...mapMutations('settings', [LOGIN, LOGOUT]),

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
          alert(`Hello ${user.username}`); // eslint-disable-line
          this.LOGIN({ user: { ...user, ...userData } });
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
        this.LOGIN({ user: newUser });
      }

      this.username = '';
      this.altUsername = '';
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
      Welcome to Mars Cards
      <hr>
    </div>

    <div v-if="!user.username" class="auth">
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
      <!-- eslint-disable-next-line -->
      <p class="note">Nothing here is secure. <b>Do not</b> include any personal information anywhere on this website.</p>
    </div>
    <div v-else class="auth">
      Logged in as {{ user.username }}
      <BaseButton @click="LOGOUT()" :label="'Logout'" red />
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
    border: 1px solid var(--orange);
    padding: 0 10px;
    font-size: 16px;
    color: #fff;
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
    color: var(--orange);
  }
}
</style>
