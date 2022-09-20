<template>
    <v-card color="#7CB342" class="ma-5 mx-auto mx-auto text-black" max-width="600">
           <v-card-title>Sign In</v-card-title>
            
              <div v-if="error" class="alert alert-danger">{{error}}</div>

              <v-text-field  
              label="Email" 
              id="email" 
              type="email" 
              name="email" 
              required v-model="email" 
              class="mt-3"></v-text-field>

              <v-text-field 
              label="Password" 
              id="password" 
              type="password" 
              name="password" 
              required v-model="password" 
              class="mt-3"></v-text-field>

              <v-btn block color="#FFFF8F" class="primary" @click="Login">
                    <button type="submit" class="btn btn-primary">Login</button>
              </v-btn>
  
  </v-card>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  export default {
    name: "LoginComponent",
      setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const store = useStore()
      const router = useRouter()
      const Login = async () => {
        try {
          await store.dispatch('logIn', {
            email: email.value,
            password: password.value
          })
          router.push('/')
        }
        catch (err) {
          error.value = err.message
        }
      }
      return { Login, email, password, error }
    }
  };
  </script>