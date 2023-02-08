<script lang="ts">
export default {
//https://dev.to/themodernweb/how-to-make-instagram-clone-using-html-css-fully-responsive-49co

}
</script>

<template>
<nav class="navbar">
    <div class="nav-wrapper">
        <img src="img/logo.PNG" class="brand-img" alt="">
        <input type="text" class="search-box" placeholder="search">
        <div class="nav-items">
            <img src="img/home.PNG" class="icon" alt="">
            <img src="img/messenger.PNG" class="icon" alt="">
            <img src="img/add.PNG" class="icon" alt="">
            <img src="img/explore.PNG" class="icon" alt="">
            <img src="img/like.PNG" class="icon" alt="">
            <!-- <div class="icon "> -->
            <img src="img/profile-pic.png" class="user-profile" alt="">
            <!-- </div> -->
        </div>
    </div>
</nav>
</template>

<style scoped>
.navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    justify-content: center;
    padding: 5px 0;
}

.nav-wrapper{
    width: 70%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-img{
    height: 100%;
    margin-top: 5px;
}

.search-box{
    position: absolute;
    left: 46%;
    transform: translateX(-50%);
    width: 300px;
    height: 25px;
    background: #fafafa;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    text-transform: capitalize;
}

.search-box::placeholder{
    color: rgba(0, 0, 0, 0.5);
}

.nav-items{
    height: 22px;
    right: 10%;
    position: absolute;
}

.icon{
    height: 100%;
    cursor: pointer;
    margin: 0 9px;
    display: inline-block;
}

.user-profile{
    display: inline-block;
    cursor: pointer;
    width: 26px;
    margin: 0 9px;
    border-radius: 50%;
    background-size: cover;
}

</style>