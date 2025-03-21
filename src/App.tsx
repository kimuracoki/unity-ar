import React, { Suspense } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  ZapparCamera,
  ImageTracker,
  ZapparCanvas,
  Loader,
  BrowserCompatibility,
} from "@zappar/zappar-react-three-fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import glb from "./assets/human.glb";
import targetImage from "./assets/flier.zpt";
import soundFile from "./assets/sound.mp3"; // 音声ファイルのインポート
import useSound from "use-sound";

let action: THREE.AnimationAction;

const Model = () => {
  const clock = new THREE.Clock();
  const gltf = useLoader(GLTFLoader, glb) as any;
  const mixer = new THREE.AnimationMixer(gltf.scene);

  action = mixer.clipAction(gltf.animations[0]);
  gltf.scene.rotateX(Math.PI / 2);

  useFrame(() => mixer.update(clock.getDelta()));

  return <primitive object={gltf.scene} />;
};

function App() {
  // 音声ファイルのオーディオオブジェクト
  const [play] = useSound(soundFile);

  // ボタンがクリックされた時にアニメーションと音声を再生
  const handleClick = () => {
    action.play();
    play();
  };

  return (
    <>
      <BrowserCompatibility />
      <ZapparCanvas>
        <ZapparCamera {...({} as any)} />
        <Suspense fallback={null}>
          <ImageTracker targetImage={targetImage} {...({} as any)}>
            <React.Suspense fallback={null}>
              <Model />
            </React.Suspense>
          </ImageTracker>
        </Suspense>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
        <Loader />
      </ZapparCanvas>
      <div
        id="zappar-button"
        role="button"
        tabIndex={0}
        onClick={handleClick} // ボタンクリック時に音声とアニメーションを再生
      >
      話をきいてみる
      </div>
    </>
  );
}

export default App;
