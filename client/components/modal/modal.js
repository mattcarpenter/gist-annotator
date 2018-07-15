export default {
  name: 'modal',
  components: {},
  props: [
    'show',
    'width'
  ],
  data () {
    return {
    };
  },
  computed: {

  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (this.show && e.keyCode === 27) {
        this.close();
      }
    });
  },
  methods: {
    close: function () {
      this.$emit('close');
    }
  }
};
