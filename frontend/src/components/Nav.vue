<script lang="ts">



export default {
//https://dev.to/themodernweb/how-to-make-instagram-clone-using-html-css-fully-responsive-49co
    props:['showSubMenu'],
    data() {
        return {
            _showSubMenu: this.showSubMenu,
        }
    },

    methods: {
        showMenu() {
            this._showSubMenu = !this.showSubMenu
            this.$emit('changeShowState', this._showSubMenu)
        },

        LogOut() {
            this.$router.push('/')
        }
    },
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
                    
                    <li class="sub-menu-item"><p  class="setting">Settings <font-awesome-icon class="setting-icon" icon="fa-solid fa-gear" /></p>  </li>
                    <li class="sub-menu-item"><p >Saved <font-awesome-icon class="save-icon" icon="fa-solid fa-bookmark" /></p></li>
                    <li class="sub-menu-item"><p >Switch appearance <font-awesome-icon class="appearance-icon" icon="fa-solid fa-moon" /></p></li>
                    <li class="sub-menu-item"><p >Your activity <font-awesome-icon class="activity-icon" icon="fa-solid fa-clock-rotate-left" /></p></li>
                    <li class="sub-menu-item"><p >Report a problem <font-awesome-icon class="report-icon" icon="fa-solid fa-circle-exclamation" /></p></li>
                    <li class="sub-menu-item"><p >Switch accounts</p></li>
                    <li class="sub-menu-item" @click="LogOut"><p >Log out</p></li>
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
    right:6%;
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
    top: 2.2rem;
    left: -6rem;
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


.sub-menu-item:hover {
    background: #a8a6a6;
}

.setting-icon {
    margin-left: 5.98rem;
}

.save-icon {
    margin-left: 7rem;
}

.appearance-icon{
    margin-left: 1.2rem;
}

.activity-icon {
    margin-left: 4.1rem;
}

.report-icon {
    margin-left: 1.85rem;
}

</style>