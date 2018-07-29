import Modal from '../modal';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'new-annotation-track-modal',
  components: {
    Modal: Modal
  },
  props: ['show'],
  data () {
    return {
      projectName: ''
    };
  },
  computed: {

  },
  created () {

  },
  methods: {
    ...mapActions('projects', [
      'openProject'
    ]),
    close: function () {
      this.$store.dispatch('views/toggleNewAnnotationTrackModalVisible');
    }
  }
};
