import Transcript from '../transcript';
import Timeline from '../timeline';

export default {
  name: 'workspace',
  components: {
    'Transcript': Transcript,
    'Timeline': Timeline
  },
  props: [],
  data () {
    const captions = [
      { text: 'abc'.repeat(10), time: 0 },
      { text: 'def '.repeat(100), time: 1 },
      { text: 'ghsi '.repeat(15), time: 2 }
    ];

    const captions2 = [
      { text: 'lol '.repeat(20), time: 1 },
      { text: 'wtf '.repeat(100), time: 2 },
      { text: 'wat '.repeat(15), time: 3 }
    ];

    return {
      captions: captions,
      captions2: captions2,
      pixelSeconds: 0
    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    timeScaleChange: function (pixelSeconds) {
      this.pixelSeconds = Math.max(pixelSeconds, this.pixelSeconds);
    }
  }
};
