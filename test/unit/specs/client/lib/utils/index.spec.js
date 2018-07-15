import utils from 'client/lib/utils';

describe('utils', function () {
  describe('calculatePixelSeconds', function () {
    [
      {
        captions: [{ time: 0 }, { time: 1 }, { time: 2 }],
        heights: [10, 520, 30],
        expected: 520
      },
      {
        captions: [{ time: 0 }, { time: 1.5 }, { time: 2 }],
        heights: [10, 520, 30],
        expected: 1040
      },
      {
        captions: [{ time: 0 }, { time: 1 }, { time: 1.5 }],
        heights: [10, 520, 30],
        expected: 1040
      }
    ].forEach((test) => {
      it('calcuates the correct pixelSeconds', function () {
        const pixelSeconds = utils.calculatePixelSeconds(test.captions, test.heights);
        expect(pixelSeconds).to.be.equal(test.expected);
      });
    });
  });
});
