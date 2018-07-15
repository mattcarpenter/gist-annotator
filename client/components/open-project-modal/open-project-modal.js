import Modal from '../modal';

export default {
  name: 'open-project-modal',
  components: {
    Modal: Modal
  },
  props: ['show'],
  data () {
    return {

    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    close: function () {
      this.$emit('close');
    }
  }
};
