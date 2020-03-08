import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({
  toMatchImageSnapshot: configureToMatchImageSnapshot({
    customSnapshotsDir: '__image_snapshots__',
    customSnapshotIdentifier: ({ testPath, currentTestName, counter, defaultIdentifier }) => {
      const testFileName = (testPath.split('/').pop() || testPath).split('.').shift();
      return currentTestName.replace('-snap', '');
    }
  }),
});
