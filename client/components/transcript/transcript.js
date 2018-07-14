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
    if (!this.$props.captions) {
      return;
    }

    const heights = this.$children.map(component => component.$el.clientHeight);
    const pixelSeconds = utils.calculatePixelSeconds(this.$props.captions, heights);
    this.$emit('time-scale-change', pixelSeconds);
  },
  methods: {

  },
  updated () {
  }
};
