<script lang="ts">

export default {
    props: [
        'username',
        'avatar',
        'postImage',
        'likesNum',
        'time',
        'content'
    ]
}

</script>

<template>
<div class="post">
                <div class="info">
                    <div class="user">
                        <div class="profile-pic"><img :src="avatar" alt=""></div>
                        <p class="username">{{username}}</p>
                    </div>
                    <img src="img/option.PNG" class="options" alt="">
                </div>
                <img :src="avatar" class="post-image" alt="">
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="img/like.PNG" class="icon" alt="">
                        <img src="img/comment.PNG" class="icon" alt="">
                        <img src="img/send.PNG" class="icon" alt="">
                        <img src="img/save.PNG" class="save icon" alt="">
                    </div>
                    <p class="likes">{{likesNum}} likes</p>
                    <p class="description"><span>{{username}} </span> {{content}}</p>
                    <p class="post-time">{{time}} </p>
                </div>
                <div class="comment-wrapper">
                    <img src="img/smile.PNG" class="icon" alt="">
                    <input type="text" class="comment-box" placeholder="Add a comment">
                    <button class="comment-btn">post</button>
                </div>
            </div>

</template>

<style >
@import '../assets/components.css';
</style>