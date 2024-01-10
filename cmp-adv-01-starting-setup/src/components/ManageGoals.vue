<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>

    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input must not be empty!</h2>
        <p>Please enter at least a few characteres...</p>
        <button @click="confirmError">Ok</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      this.inputIsInvalid = !enteredValue;
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
