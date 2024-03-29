import React from "react";
import renderer from "react-test-renderer";

import AudioPlayer from "./audio-player";

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
};

it(`AudioPlayer is rendered correctly`, () => {
  const {song} = mock;

  const tree = renderer.create(
      <AudioPlayer
        src={song.src}
        isPlaying={false}
        onPlayButtonClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
