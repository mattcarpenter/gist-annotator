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
      { text: 'wtf wtf'.repeat(10), time: 0.1 },
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
      pixelSeconds: 0,
      receivedNewPixelSecondsAfterResize: true
    };
  },
  computed: {

  },
  mounted () {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    timeScaleChange: function (pixelSeconds) {
      if (!this.receivedNewPixelSecondsAfterResize) {
        // window resize event occurred and we're now receiving new pixelSeconds from the transcript track
        // reset pixelSeconds otherwise we'll only be able to increase pixelSeconds, never decrease.
        this.pixelSeconds = 0;
        this.receivedNewPixelSecondsAfterResize = true;
      }
      this.pixelSeconds = Math.max(pixelSeconds, this.pixelSeconds);
    },
    handleResize: function () {
      this.receivedNewPixelSecondsAfterResize = false;
    }
  }
};
