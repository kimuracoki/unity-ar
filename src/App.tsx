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

import glb from "./assets/waving.glb";
import targetImage from "./assets/example-tracking-image.zpt";

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
  return (
    <>
      <BrowserCompatibility />
      <ZapparCanvas>
        <ZapparCamera
          key={undefined}
          rotateX={undefined}
          children={undefined}
          id={undefined}
          attach={undefined}
          onUpdate={undefined}
          args={undefined}
          backgroundTexture={undefined}
          rawPose={undefined}
          poseAnchorOrigin={undefined}
          isPerspectiveCamera={undefined}
          rearCameraSource={undefined}
          userCameraSource={undefined}
          stop={undefined}
          setPoseModeAnchorOrigin={undefined}
          currentMirrorMode={undefined}
          handleColorSpace={undefined}
          updateFrame={undefined}
          _updateProjectionMatrix={undefined}
          updateMatrixWorld={undefined}
          matrixWorldInverse={undefined}
          projectionMatrix={undefined}
          projectionMatrixInverse={undefined}
          isCamera={undefined}
          getWorldDirection={undefined}
          uuid={undefined}
          name={undefined}
          type={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          visible={undefined}
          castShadow={undefined}
          receiveShadow={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          clear={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          raycast={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
        <Suspense fallback={null}>
          <ImageTracker
            targetImage={targetImage}
            key={undefined}
            rotateX={undefined}
            id={undefined}
            attach={undefined}
            onUpdate={undefined}
            args={undefined}
            updateMatrixWorld={undefined}
            getWorldDirection={undefined}
            uuid={undefined}
            name={undefined}
            type={undefined}
            parent={undefined}
            modelViewMatrix={undefined}
            normalMatrix={undefined}
            matrixWorld={undefined}
            matrixAutoUpdate={undefined}
            matrixWorldAutoUpdate={undefined}
            matrixWorldNeedsUpdate={undefined}
            visible={undefined}
            castShadow={undefined}
            receiveShadow={undefined}
            frustumCulled={undefined}
            renderOrder={undefined}
            userData={undefined}
            customDepthMaterial={undefined}
            customDistanceMaterial={undefined}
            isObject3D={undefined}
            onBeforeRender={undefined}
            onAfterRender={undefined}
            applyMatrix4={undefined}
            applyQuaternion={undefined}
            setRotationFromAxisAngle={undefined}
            setRotationFromEuler={undefined}
            setRotationFromMatrix={undefined}
            setRotationFromQuaternion={undefined}
            rotateOnAxis={undefined}
            rotateOnWorldAxis={undefined}
            rotateY={undefined}
            rotateZ={undefined}
            translateOnAxis={undefined}
            translateX={undefined}
            translateY={undefined}
            translateZ={undefined}
            localToWorld={undefined}
            worldToLocal={undefined}
            lookAt={undefined}
            add={undefined}
            remove={undefined}
            removeFromParent={undefined}
            clear={undefined}
            getObjectById={undefined}
            getObjectByName={undefined}
            getObjectByProperty={undefined}
            getWorldPosition={undefined}
            getWorldQuaternion={undefined}
            getWorldScale={undefined}
            raycast={undefined}
            traverse={undefined}
            traverseVisible={undefined}
            traverseAncestors={undefined}
            updateMatrix={undefined}
            updateWorldMatrix={undefined}
            toJSON={undefined}
            clone={undefined}
            copy={undefined}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            anchorId={undefined}
            isReady={undefined}
            currentAnchor={undefined}
            isGroup={undefined}
          >
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
        onKeyPress={() => action.play()}
        tabIndex={0}
        onClick={() => action.play()}
      >
        Play Animation
      </div>
    </>
  );
}

export default App;
