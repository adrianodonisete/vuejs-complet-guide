<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :itemgoal="goal" :another-prop="goal"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn VueJS'],
    };
  },
};
</script>
