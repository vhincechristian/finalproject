<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-title>
        <span class="font-weight-light">FINAL PROJECT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            Dropdown
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" router :to="item.path" :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-if="!user.loggedIn">
        <v-btn router :to="register" color="black">
          <span>Register</span>
        </v-btn>

        <v-btn router :to="login" color="black">
          <span>Login</span>
        </v-btn>
      </div>

      <div v-else>
        <v-btn @click.prevent="signOut" color="black">
          <span>Sign Out</span>
        </v-btn>
      </div>
    </v-toolbar>

    <v-navigation-drawer app expand-on-hover rail="true">
      <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon">
        <v-list-item-title>{{ item.title }}</v-list-item-title>

      </v-list-item>

    </v-navigation-drawer>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebase'
export default {
  data() {
    return {
      login: '/SignInView',
      register: '/RegisterView',
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
        { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
        { title: 'String App', icon: 'mdi-help-box', path: '/stringApp' },
        { title: 'About Me', icon: 'mdi-account-box', path: '/aboutMe' },
        { title: 'About Vuetify', icon: 'mdi-account-box', path: '/aboutvuetify' },
        { title: 'Quiz App', icon: 'mdi-atom', path: '/QuizView' },
        { title: 'Match History', icon: 'mdi-atom', path: '/MatchHistory' },
      ], rail: false,
    }
  },
  name: "DashboardComponent",

  setup() {

    const store = useStore()
    const router = useRouter()
    auth.onAuthStateChanged(user => {
      store.dispatch("fetchUser", user);
    });
    const user = computed(() => {
      return store.getters.user;
    });
    const signOut = async () => {
      await store.dispatch('logOut')
      router.push('/login')
    }
    return { user, signOut }
  }


};
</script>