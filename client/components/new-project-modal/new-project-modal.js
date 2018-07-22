import Modal from '../modal';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'new-project-modal',
  components: {
    Modal: Modal
  },
  props: ['show'],
  data () {
    return {
      projectName: '',
      englishSrt: '',
      japaneseSrt: ''
    };
  },
  computed: mapState({
    errorMessage: state => state.views.newProjectModal.errorMessage
  }),
  mounted () {

  },
  methods: {
    ...mapActions('projects', [
      'createProject'
    ]),
    close: function () {
      this.$store.dispatch('views/toggleNewProjectModalVisible');
    }
  }
};
