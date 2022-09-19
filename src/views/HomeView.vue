<template>
<div v-if="user.loggedIn">
    <v-row no-gutters style="padding: 2rem; ">
      <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/basicMath">
          <v-img max-width="350" height="300" src="https://static.vecteezy.com/system/resources/previews/000/491/709/original/calculator-icon-design-vector.jpg"></v-img>
        </router-link>
        <v-card-title>Calculator</v-card-title>
        <v-card-text class="text--primary">
          <div> A tool that performs mathematical operations on numbers.</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/stringApp">
          <v-img max-width="350" height="300" src="https://clipground.com/images/vowel-clipart-2.jpg"></v-img>
        </router-link>
        <v-card-title>String Manipulation</v-card-title>
        <v-card-text class="text--primary">
          <div>  The Process of Handling and Analyzing Strings.</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/aboutvuetify">
          <v-img max-width="350" height="300" src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png"></v-img>
        </router-link>
        <v-card-title>About Vuetify</v-card-title>
        <v-card-text class="text--primary">
          <div> Shows the Information About Vuetify.</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/aboutMe">
          <v-img max-width="350" height="300" src="http://cdn.onlinewebfonts.com/svg/img_314945.png"></v-img>
        </router-link>
        <v-card-title>About Me</v-card-title>
        <v-card-text class="text--primary">
          <div> Contains some Information About Me.</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card  max-width="350">
        <router-link to="/QuizView">
          <v-img max-width="350" height="300" src="https://cdn3.iconfinder.com/data/icons/brain-games/1042/Quiz-Games.png"></v-img>
        </router-link>
        <v-card-title>Quiz App</v-card-title>
        <v-card-text class="text--primary">
          <div> Quick and Informal assessment of Knowledge</div>
        </v-card-text>
      </v-card>
    </v-col>
     </v-row>
</div>
</template>
  
  <script>
      import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebase'

export default {
  data: () => ({
    show: true,
    overlay: true,
    items: [
      {
        title: 'Calculator',
        path: '/basicMath',
      },

      {
        title: 'String Manipulator',
        path: '/stringApp',

      },

      {
        title: 'About Vuetify',
        path: '/aboutvuetify',

      },

      {
        title: 'Quiz App',
        path: '/QuizView',

      },

      {
        title: 'About Me',
        path: '/aboutMe',

      },

     
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),

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
    return { user, signOut, Image }
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false
    }, 1300)
  }
}
    </script>