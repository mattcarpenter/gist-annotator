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
      { text: 'def '.repeat(190), time: 1 },
      { text: 'ghsi '.repeat(15), time: 2 }
    ];

    // linked list
    captions[0].next = captions[1];
    captions[1].prev = captions[0];
    captions[1].next = captions[2];
    captions[2].prev = captions[1];

    return {
      captions: captions,
      pixelSeconds: 0
    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    timeScaleChange: function (pixelSeconds) {
      this.pixelSeconds = pixelSeconds;
    }
  }
};
