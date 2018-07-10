export default {
  name: 'timeline',
  components: {},
  props: [
    'pixelSeconds'
  ],
  data () {
    return {

    };
  },
  computed: {
    markers: function () {
      const markers = [];
      let top = 0;
      for (let i = 0; i < 10; i++) {
        markers.push({
          time: i,
          top: top
        });
        top += this.$props.pixelSeconds || 0;
      }

      return markers;
    }
  },
  mounted () {

  },
  methods: {

  }
};
