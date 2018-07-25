import Transcript from '../transcript';
import Timeline from '../timeline';
import { mapState, mapActions } from 'vuex';
import kuroshiro from 'kuroshiro';

kuroshiro.init();

export default {
  name: 'workspace',
  components: {
    'Transcript': Transcript,
    'Timeline': Timeline
  },
  props: [],
  data () {
    return {
      pixelSeconds: 0,
      receivedNewPixelSecondsAfterResize: true
    };
  },
  computed: mapState({
    englishCaptions: state => (state.projects.current || {}).englishCaptions || [],
    japaneseCaptions: state => (state.projects.current || {}).japaneseCaptions || []
  }),
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
