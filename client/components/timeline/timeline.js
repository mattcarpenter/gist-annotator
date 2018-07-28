import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
momentDurationFormatSetup(moment);

export default {
  name: 'timeline',
  components: {},
  props: [
    'pixelSeconds',
    'duration'
  ],
  data () {
    return {
    };
  },
  computed: {
    markers: function () {
      const markers = [];
      let top = 0;

      for (let milliseconds = 0; milliseconds < (this.duration || 1000); milliseconds += 1000) {
        const duration = moment.duration(milliseconds, 'milliseconds').format('h:mm:ss', { trim: false });
        markers.push({
          time: duration,
          top: top,
          beginningOfMinute: !((milliseconds / 1000) % 60)
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
