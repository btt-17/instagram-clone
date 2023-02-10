<script lang="ts">
export default {
//https://dev.to/themodernweb/how-to-make-instagram-clone-using-html-css-fully-responsive-49co
    data() {
        return {
            showSubMenu: false,
        }
    },

    methods: {
        showMenu() {
            this.showSubMenu = !this.showSubMenu
        },

        LogOut() {
            this.$router.push('/')
        }
    }
}
</script>

<template>
<nav class="navbar">
    <div class="nav-wrapper">
        <img src="img/logo.PNG" class="brand-img" alt="">
        <input type="text" class="search-box" placeholder="search">
        <ul class="nav-items">
            <li class="icon" >
                <img src="img/home.PNG" class="icon-image" alt="">
            </li>
            <li class="icon" >
                <img src="img/messenger.PNG" class="icon-image" alt="">
                
            </li>
            <li class="icon" >
                <img src="img/add.PNG" class="icon-image"  alt="">
            </li>
            <li class="icon" >
                <img src="img/explore.PNG" class="icon-image" alt="">
            </li>
            <li class="icon" >
                <img src="img/like.PNG" class="icon-image" alt="">
            </li>
            <li class="icon" >
                <img src="img/profile-pic.png" class="user-profile" alt="">
            </li>     
        </ul>  
        
        <ul  class="main-menu">
            <li class="has-menu" >
                <img @click="showMenu" src="bars-solid.svg"  class="menu-image" alt=""> 
                <ul v-if="showSubMenu" class="sub-menu">
                    <li><p >Settings</p></li>
                    <li><p >Saved</p></li>
                    <li><p >Switch appearance</p></li>
                    <li><p >Your activity</p></li>
                    <li><p >Report a problem</p></li>
                    <li><p >Switch accounts</p></li>
                    <li @click="LogOut"><p >Log out</p></li>
                </ul>
            </li>
        </ul>    
    </div>

        
</nav>
</template>

<style scoped>
@import '../assets/components.css';
.icon:hover {
    height: 120%;
}

.icon-image {
    height: 100%;
}

.menu-image {
    height: 60%;
}


/* メインメニュー */
.main-menu {
    height:100%;
    right:3%;
    display: flex;
    justify-content: center;
    position: absolute;   
    margin-top: 1rem; 
    cursor: pointer;
}
.main-menu p {
    padding: 2px;
    color: #fff;
    display: inline-block;
    /* margin: 1rem; */
}


/* .main-menu a:hover {
    background: #0090aa;
} */

/* サブメニュー */
.sub-menu {
    position: absolute;
    top: 2em;
    right: .1rem;
    background: #666;
}
.sub-menu p {
    margin: 3px 9px;
    width: 180px;
}

/* サブメニューのあるメニュー */
.has-menu {
    position: relative;
}
.has-menu > a::after {
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    content: "\f078";
    margin-left: .5rem;
}



</style>