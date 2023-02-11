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
        return {
            showPass:false,
            showConfirmPass: false,
            username: '',
            email:'',
            password: '',
            passwordType:'password',
            confirmPasswordType:'password',
            confirmPassword: '',
            status:'',
            message:'',
            showMessage: false
        }
    },
    methods: {
        show_pass() {
            this.showPass = !this.showPass
            
        },
        show_confirm() {
            this.showConfirmPass = !this.showConfirmPass

            if (this.confirmPasswordType === 'text') {
                this.confirmPasswordType = 'password'
            }
            if (this.confirmPasswordType === 'password') {
                this.confirmPasswordType = 'text'
            }
        },
        async handleSignup () {
            if (this.password === this.confirmPassword){
                const res = await this.$axios.post('/api/signup', {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                })
        
                const resStatus = res.data.data
                if (resStatus === "successfully") { 
                    this.status = ''
                    this.username = ''
                    this.email = ''
                    this.password = ''
                    this.confirmPassword =  ''
                    this.showMessage = true
                    this.message="Your signed up successfully!. "
                }

                if (resStatus !== 'successfully') { 
                    this.status = resStatus
                }
            }

            if (this.password !== this.confirmPassword){
                this.status = "Your password and confirm password do not match!"
            } 
           
        },
        moveToLogin() {
            this.$router.push('/')
        }
    }
    
}
</script>

<template>

<div class="bg-gray-200 w-full h-screen flex items-center justify-center">
    <div class="w-full py-3">
        <div v-if="showMessage" class=" w-1/3 ml-3 flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p class="mr-3">{{message}} </p> 
            <a @click="moveToLogin" class="underline text-white-600 hover:text-blue-400 text-sm font-semibold">Login</a>
        </div>
                <div class="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">

                    <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>
                    <p class="text-center text-sm text-gray-600 mt-2">Already have an account? <a @click="moveToLogin()" class="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>

                    <form @submit.prevent="handleSignup" class="my-8 text-sm">
                        <div class="flex flex-col my-4">
                            <label for="name" class="text-gray-700">Name</label>
                            <input v-model="username"  type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name" required>
                        </div>

                        <div class="flex flex-col my-4">
                            <label for="email" class="text-gray-700">Email Address</label>
                            <input v-model="email" type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email" required>
                        </div>
                        
                        <div class="flex flex-col my-4">
                            <label for="password" class="text-gray-700">Password</label>
                            <div class="relative flex items-center mt-2">
                                <input v-if="!showPass" v-model="password" type="password"  name="password" id="password" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" required>
                                <input v-else v-model="password" type="text"  name="password" id="password" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" required>
                                <button @click="show_pass" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                    <svg v-if="!showPass" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>

                                    <svg v-if="showPass" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </button>
                            </div>
                        </div>

                        <div class="flex flex-col my-4">
                            <label for="password_confirmation" class="text-gray-700">Password Confirmation</label>
                            <div class="relative flex items-center mt-2">
                                <input v-if="!showConfirmPass" v-model="confirmPassword" type="password" name="password_confirmation" id="password_confirmation" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password again" required>
                                <input v-else v-model="confirmPassword" type="text" name="password_confirmation" id="password_confirmation" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password again" required>
                                <button @click="show_confirm" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                    <svg v-if="!showConfirmPass" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </button>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded" required>
                            <label for="remember_me" class="text-gray-700">I accept the <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
                        </div>
                        <p class="text-sm text-red-600">{{ status  }}</p>
                        <div class="my-4 flex items-center justify-end space-x-4">
                            <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
                        </div>
                    </form>
                    
                   
                </div>
            </div>
        </div>
</template>