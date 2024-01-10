<template>
  <div>
    <TheHeader />

    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

    <BadgeList />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <user-info
      :full-name="'Adriano Machado'"
      :info-text="'Dev'"
      :role="'author'"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.itemgoal }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
