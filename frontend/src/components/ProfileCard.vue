<script lang="ts">

export default {
    props: [
        'username',
        'subText',
        'avatar',
        'buttonType'
    ]
}
</script>

<template>
<div class="profile-card">
    <div class="profile-pic">
        <img :src="avatar" alt="">
    </div>
    <div>
        <p class="username">{{username}}</p>
        <p class="sub-text">{{subText}}</p>
    </div>
    <button class="action-btn">{{buttonType}}</button>
</div>
</template>

<style >
@import '../assets/components.css';
</style>