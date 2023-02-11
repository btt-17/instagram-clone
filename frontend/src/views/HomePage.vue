<script lang="ts">
import Nav from '../components/Nav.vue'
import Status from '../components/Status.vue'
import EditProfile from '../components/EditProfile.vue'

export default {
    components: {
        Nav,
        Status,
        EditProfile,
    },
    data() {
        return {
            showSubMenu:  false,
            updateShowStatus:   false,
        }
    },
    methods: {
        showMenu() {
            if(this.showSubMenu === true){
                this.showSubMenu=!this.showSubMenu
            }

            if(this.showSubMenu === false && this.updateShowStatus === true){
                this.showSubMenu=!this.showSubMenu
                this.updateShowStatus = false
            }
        },

        updateShowState(status: any){ 
            this.updateShowStatus = status
        }
    },
    computed: {
        getRoute() {
            return this.$route.name
        }
    }
}

</script>

<template>
    <div @click="showMenu">
        <Nav :showSubMenu="showSubMenu" @changeShowState="updateShowState" />
        <!-- <Status v-if="getRoute === 'home' " />
        <EditProfile v-if="getRoute === 'home/profile' " /> -->
        <router-view></router-view>
    </div>
  
</template>
