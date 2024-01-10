<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid></knowledge-grid>
  </section>
</template>

<script>
//:topics="topics"
//@select-topic="$emit('select-topic', $event)"
export default {
  // props: ['topics'],
  emits: ['select-topic'],
};
</script>
