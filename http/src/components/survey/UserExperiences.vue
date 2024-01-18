<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>

      <div>
        <base-button @click="loadExperiences">
          Load Submitted Experiences
        </base-button>
      </div>

      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import { FIREBASE_URL } from './../../utils/constants.vue';
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadExperiences() {
      this.getSurveysAxios();
    },
    getSurveysAxios() {
      // how to use
      // https://axios-http.com/docs/api_intro e https://axios-http.com/docs/res_schema
      axios
        .get(`${FIREBASE_URL}/surveys.json`)
        .then((response) => response.data)
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id]['name'],
              rating: data[id]['rating'],
            });
          }
          this.results = results;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getSurveysFetch() {
      fetch(`${FIREBASE_URL}/surveys.json`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);

          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id]['name'],
              rating: data[id]['rating'],
            });
          }
          this.results = results;
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
