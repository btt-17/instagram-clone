<script lang="ts">
import Nav from '../components/Nav.vue'
import Status from '../components/Status.vue'
export default {
    components: {
        Nav,
        Status,
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
    }
}

</script>

<template>
    <div @click="showMenu">
        <Nav :showSubMenu="showSubMenu" @changeShowState="updateShowState"/>
        <Status />
    </div>
  
</template>
