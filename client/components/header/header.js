import NewProjectModal from '../new-project-modal';
import OpenProjectModal from '../open-project-modal';

export default {
  name: 'header',
  components: {
    NewProjectModal: NewProjectModal,
    OpenProjectModal: OpenProjectModal
  },
  props: [],
  data () {
    return {
      showNewProjectModal: false,
      showOpenProjectModal: false
    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    toggleNewProjectModal: function () {
      this.showNewProjectModal = !this.showNewProjectModal;
    },
    toggleOpenProjectModal: function () {
      this.showOpenProjectModal = !this.showOpenProjectModal;
    }
  }
};
