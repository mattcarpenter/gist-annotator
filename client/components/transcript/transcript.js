import Caption from '../caption';

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

    let captions = this.$props.captions;
    let pixelSeconds = 0;

    for (let i = 0; i < captions.length; i++) {
      let height = this.$children[i].$el.clientHeight;
      let nextTime = (captions[i].next || { time: 0 }).time;
      let timeDelta = nextTime ? nextTime - captions[i].time : 1;
      pixelSeconds = Math.max(height / timeDelta, pixelSeconds);
    }

    this.$emit('time-scale-change', pixelSeconds);

    console.log('pixelSeconds: ', pixelSeconds);
  },
  methods: {

  },
  updated () {
  }
};
