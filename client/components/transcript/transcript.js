import Caption from '../caption';
import utils from '../../lib/utils';

export default {
  name: 'transcript',
  components: {
    Caption: Caption
  },
  props: [
    'captions',
    'pixelSeconds'
  ],
  data () {
    return {

    };
  },
  computed: {

  },
  mounted () {
    window.addEventListener('resize', this.handleResize);
    this.layoutCaptions();
  },
  methods: {
    handleResize () {
      this.layoutCaptions();
    },
    layoutCaptions () {
      if (!this.$props.captions) {
        return;
      }

      const heights = this.$children.map(component => component.$el.clientHeight);
      const pixelSeconds = utils.calculatePixelSeconds(this.$props.captions, heights);
      this.$emit('time-scale-change', pixelSeconds);
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize);
  }
};
