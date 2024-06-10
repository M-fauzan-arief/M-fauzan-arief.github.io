import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";

function App() {
  return (
    <>
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControl pages={4} damping={0.1}>
      <Experience />
      <Scroll html>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </Scroll>
      </ScrollControl>
    </Canvas>
    
    </>
  );
}

export default App;
