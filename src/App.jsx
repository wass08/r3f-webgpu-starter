import { Canvas, extend } from "@react-three/fiber";
import { Experience } from "./components/Experience";

import * as THREE from "three/webgpu";
import { WebGPURenderer } from "three/webgpu";

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 3, 3], fov: 30 }}
      gl={(props) => {
        extend(THREE);
        const renderer = new WebGPURenderer({
          ...props,
          powerPreference: "high-performance",
          antialias: true,
          alpha: false,
          stencil: false,
          shadowMap: true,
        });
        return renderer.init().then(() => renderer);
      }}
    >
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
