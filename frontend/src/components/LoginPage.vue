<script lang="ts">
import type {AxiosInstance} from 'axios'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
    catTags: string[]
  }
}

export default {
    data() {
        return{
            username: '',
            password: '',
            status: '',
        }
    },
    
    methods: {
        async handleLogin() {
            const res = await this.$axios.post('/api/login', {
                username: this.username,
                password: this.password
            })
    
            const resStatus = res.data.data
            if (resStatus === "successfully") { 
                this.status = ''
            }

            if (resStatus !== "successfully") { 
                this.status = resStatus
            }
        },

        moveToSignup() {
            this.$router.push('/signup')
        }
    }
}

</script>

<template>
    <div class="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div class="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
            <h1 class="bg-no-repeat instagram-logo"></h1>
            <form @submit.prevent="handleLogin" class="mt-8 w-64 flex flex-col">
                <input v-model="username" autofocus
                    class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="email" placeholder="Phone number, username, or email" type="text">
                <input v-model="password" autofocus
                    class="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="password" placeholder="Password" type="password">
                <p class="text-sm text-red-600">{{ status  }}</p>
                 <button class=" text-sm text-center bg-blue-600 hover:bg-blue-300 text-white py-1 rounded font-medium">
                    Log In
                </button>
            </form>
            <div class="flex justify-evenly space-x-2 w-64 mt-4">
                <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                <span class="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
                <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            </div>
            <button class="mt-4 flex">
                <div class="bg-no-repeat facebook-logo mr-1"></div>
                <span class="text-xs text-blue-900 font-semibold">Log in with Facebook</span>
            </button>
            <a class="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">Forgot password?</a>
        </div>
        <div class="bg-white border border-gray-300 text-center w-80 py-4">
            <span class="text-sm">Don't have an account? </span>
            <a @click="moveToSignup" class="underline text-blue-600 hover:text-blue-400 text-sm font-semibold">Sign up</a>
        </div>
        <div class="mt-3 text-center">
            <span class="text-xs">Get the app</span>
            <div class="flex mt-3 space-x-2">
                <div class="bg-no-repeat apple-store-logo"></div>
                <div class="bg-no-repeat google-store-logo"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.instagram-logo {
    background-position: 0 -130px;
    height: 51px;
    width: 175px;
    background-image: url(https://bit.ly/3v2LT17);
}
.facebook-logo {
    background-position: -414px -259px;
    background-image: url(https://bit.ly/3v2LT17);
    height: 16px;
    width: 16px;
}
.apple-store-logo {
    background-position: -132px -182px;
    height: 42px;
    width: 128px;
    background-image: url(https://bit.ly/3v2LT17);
}
.google-store-logo {
    background-position: 0 -182px;
    height: 42px;
    width: 130px;
    background-image: url(https://bit.ly/3v2LT17);
}
</style>