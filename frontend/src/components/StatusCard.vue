<script lang="ts">

export default {
    props:  [
        'username',
        'avatar',
    ]
}

</script>

<template>
    <div class="status-card">
        <div class="profile-pic"><img :src="avatar" alt=""></div>
        <p class="username">{{username}}</p>
    </div>
</template>

<style scoped>
@import '../assets/components.css';
</style>