<script lang="ts">

interface Options {
    name: string,
    value: boolean,
    option: string
}

interface selectOptionsInterface {
    [key: string]: Options
}

const selectOptions: selectOptionsInterface = {
    profile: {name: "Edit Profile", value: true, option: "profile"}, 
    password: {name: "Change Password", value: false, option: "password"},
    websites: {name: "Apps and Websites", value: false, option: "websites"},
    emailNotif: {name: "Email notifications", value: false, option: "emailNotif"},
    pushNotif: {name: "Push notifications", value: false, option: "pushNotif"},
    privacyAndSecurity: {name: "Privacy and Security", value: false, option:"privacyAndSecurity"},
    ads:{name: "Ads", value: false, option:"ads"},
    supervision:{name: "Supervision", value: false, option:"supervision"},
    loginActivity: {name: "Login activity", value: false, option:"loginActivity"},
    emailsFromInstagram: {name: "Email from Instagram", value: false, option:"emailsFromInstagram"},
    help: {name: "Help", value: false, option:"help"},
    digitalCollectibles: {name: "Digital collectibles", value: false, option:"digitalCollectibles"},
}

export default {
    data() {
        return {
            selectOptions,
            currentSelect: "profile",
        }
    },
    methods: {
        changeSelect(param: string) {
            var current: string = this.currentSelect
            this.selectOptions[current].value = false
            this.selectOptions[param].value = true 
            this.currentSelect = param

        }
    }
}

</script>

<template>
    <div class="main">
        <div class="w-3/4 h-1/2 border grid grid-cols-4">
        <div class="border border-black " >
            <div v-for="item in selectOptions" >
                <div @click="changeSelect(item.option)" v-if="!item.value" class="p-2 cursor-pointer hover:bg-gray-300">{{ item.name }}</div>     
                <div v-if="item.value" class="selected cursor-pointer p-2">{{ item.name }}</div>     
            </div>
           
           <div class="p-2 text-sm cursor-pointer text-blue-600 font-normal">Switch to professional account</div> 
        </div>
        <div class="border border-black col-span-3" >
            flex-2
        </div>
    </div>
    </div>

</template>

<style>
@import '../assets/components.css';
.main {
    /* border: 1px solid black; */
    
}

.selected {
    border-left: .2rem solid;
}

</style>