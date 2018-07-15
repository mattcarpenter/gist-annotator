<template>
  <div class="container">
    <Header />
    <Workspace />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../header';
import Workspace from '../workspace';
import Footer from '../footer';

export default {
  data: function () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Welcome!',
      api: '',
      error: {}
    };
  },
  methods: {
    helloCall: function () {
      axios.get('/api/call').then((response) => {
        this.api = response.data.message;
      }, (response) => {
        this.error = response.data;
      });
    }
  },
  components: {
    'Header': Header,
    'Workspace': Workspace,
    'Footer': Footer
  }
};
</script>

<style lang="sass">
body {
  font-family: Open Sans, sans-serif;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

.container {
  display: grid;
  height: 100vh;
  background-color: #FCFCFC;
  grid-template-areas: 'header'
                       'workspace'
                       'footer';
  grid-template-rows: auto 1fr auto;
}
</style>
