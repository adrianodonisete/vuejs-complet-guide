<template>
  <base-card>
    <base-button
      type="button"
      @click="setSelectedTab('stored-resources')"
      :mode="StoredResourcesButtonMode"
    >
      Stored Resources
    </base-button>

    <base-button
      type="button"
      @click="setSelectedTab('add-resource')"
      :mode="AddResourceButtonMode"
    >
      Add Resource
    </base-button>
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official VueJS documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    StoredResourcesButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    AddResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.setSelectedTab('stored-resources');
    },
    removeResource(id) {
      const resIndex = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>

<style scoped></style>
