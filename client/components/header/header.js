import NewProjectModal from '../new-project-modal';
import OpenProjectModal from '../open-project-modal';
import NewAnnotationTrackModal from '../new-annotation-track-modal';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'header',
  components: {
    NewProjectModal: NewProjectModal,
    OpenProjectModal: OpenProjectModal,
    NewAnnotationTrackModal: NewAnnotationTrackModal
  },
  props: [],
  data () {
    return {
    };
  },
  computed: mapState({
    newProjectModalVisible: state => state.views.newProjectModal.visible,
    openProjectModalVisible: state => state.views.openProjectModal.visible,
    newAnnotationTrackModalVisible: state => state.views.newAnnotationTrackModal.visible
  }),
  mounted () {

  },
  methods: mapActions('views', [
    'toggleNewProjectModalVisible',
    'toggleOpenProjectModalVisible',
    'toggleNewAnnotationTrackModalVisible'
  ])
};
