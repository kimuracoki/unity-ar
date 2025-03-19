declare global {
    interface Window {
      UnityLoader?: {
        instantiate: (canvasId: string, jsonPath: string) => any;
      };
      unityInstance?: any;
    }
  }
  
  export {};
  