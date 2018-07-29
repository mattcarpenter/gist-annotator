import { mapActions } from 'vuex';

export default {
  name: 'annotation-tracks',
  components: {},
  props: [],
  data () {
    return {

    };
  },
  computed: {

  },
  mounted () {

  },
  methods: mapActions('views', [
    'toggleNewAnnotationTrackModalVisible'
  ])
};
