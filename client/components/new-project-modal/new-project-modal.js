import Modal from '../modal';

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
  computed: {

  },
  mounted () {

  },
  methods: {
    close: function () {
      this.$emit('close');
    },
    create: function () {
      this.close();
    }
  }
};
