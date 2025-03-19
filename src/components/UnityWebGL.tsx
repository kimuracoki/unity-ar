import { useEffect } from "react";

const UnityWebGL: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/unity/Build/UnityLoader.js";
    script.onload = () => {
      if (window.UnityLoader) {
        window.unityInstance = window.UnityLoader.instantiate(
          "unity-canvas",
          "/unity/Build/WebGL.json"
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas id="unity-canvas" style={{ width: "100%", height: "100%" }} />;
};

export default UnityWebGL;
