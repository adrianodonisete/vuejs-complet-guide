<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  components: { LearningResource },
  inject: ['resources'],

  methods: {
    toggleFavoriteFriend(friendId) {
      const theFriend = this.friends.find((friend) => friend.id == friendId);
      if (theFriend) {
        theFriend.isFavorite = !theFriend.isFavorite;
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: auto;
  padding: 0;
  max-width: 40rem;
}
</style>
