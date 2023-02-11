<script lang="ts">
import StatusCard from './StatusCard.vue';
import Post from './Post.vue';
import ProfileCard from './ProfileCard.vue';

export default {
    components: {
        StatusCard,
        Post,
        ProfileCard,
    },

    data() {
        return {
            // dummy data
            status_card: [
                {avatar: "/img/cover 1.png", username: "user_name_1"},
                {avatar: "/img/cover 2.png", username: "user_name_2"},
                {avatar: "/img/cover 3.png", username: "user_name_3"},
                {avatar: "/img/cover 4.png", username: "user_name_4"},
                {avatar: "/img/cover 5.png", username: "user_name_5"},
                {avatar: "/img/cover 6.png", username: "user_name_6"},
            ],
            posts: [
                {avatar: "/img/cover 1.png", username: "instagram_clone", likesNum:"1021", time:"2 minutes ago", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?"},
                {avatar: "/img/cover 2.png", username: "instagram_clone", likesNum:"1021", time:"2 minutes ago", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?"},
                {avatar: "/img/cover 3.png", username: "instagram_clone", likesNum:"1021", time:"2 minutes ago", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?"},
                {avatar: "/img/cover 4.png", username: "instagram_clone", likesNum:"1021", time:"2 minutes ago", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?"},
                {avatar: "/img/cover 5.png", username: "instagram_clone", likesNum:"1021", time:"2 minutes ago", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?"},
                {avatar: "/img/cover 6.png", username: "instagram_clone", likesNum:"1021", time:"2 minutes ago", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?"},
            ],
            profiles : [
                {avatar: "/img/profile-pic.png",  username: "instagram_clone", subText: "kunaal kumar", buttonType:'switch',mainAcc:true },
                {avatar: "/img/cover 9.png",  username: "instagram_clone", subText: "followed bu user", buttonType:'follow' ,mainAcc:false},
                {avatar: "/img/cover 10.png",  username: "instagram_clone", subText: "followed bu user" , buttonType:'follow',mainAcc:false},
                {avatar: "/img/cover 11.png",  username: "instagram_clone", subText: "followed bu user" , buttonType:'follow',mainAcc:false},
                {avatar: "/img/cover 12.png",  username: "instagram_clone", subText: "followed bu user" , buttonType:'follow',mainAcc:false},
            ]
        }
    }
}
</script>

<template>
<section class="main">
    <div class="wrapper">
        <div class="left-col">
            <div class="status-wrapper">
                <div v-for="status in status_card">
                    <StatusCard :avatar="status.avatar" :username="status.username" />
                </div>      
            </div>
            <div v-for="postInfo in posts">
                <Post :username="postInfo.username" :avatar="postInfo.avatar" :likesNum="postInfo.likesNum" :time="postInfo.time"
                    :content="postInfo.content"
                />
            </div>
        </div> 
        <div class="right-col">
            <div v-for="profile in profiles">
                <ProfileCard :username="profile.username" :avatar="profile.avatar" :subText="profile.subText" :buttonType="profile.buttonType"/>
                <p v-if="profile.mainAcc" class="suggestion-text">Suggestions for you</p>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
@import '../assets/components.css';

</style>