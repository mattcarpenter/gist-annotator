import Modal from '../modal';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'open-project-modal',
  components: {
    Modal: Modal
  },
  props: ['show'],
  data () {
    return {
      projectName: ''
    };
  },
  computed: mapState({
    projects: state => state.projects.all
  }),
  created () {
    this.$store.dispatch('projects/getAllProjects');
  },
  methods: {
    ...mapActions('projects', [
      'openProject'
    ]),
    close: function () {
      this.$store.dispatch('views/toggleOpenProjectModalVisible');
    }
  }
};
