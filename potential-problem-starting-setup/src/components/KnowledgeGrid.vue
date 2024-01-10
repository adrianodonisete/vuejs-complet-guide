<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
//@select-topic="$emit('select-topic', $event)"
export default {
  // props: ['topics'],
  // emits: ['select-topic'],
  inject: ['topics'],
};
</script>
