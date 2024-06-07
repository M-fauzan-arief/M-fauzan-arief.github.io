import * as SPLAT from "gsplat";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const renderer = new SPLAT.WebGLRenderer(canvas);
const scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const controls = new SPLAT.OrbitControls(camera, renderer.domElement);

async function main() {
    const url="gaussian/gs_Nmax-cleanUpplyfixx.cleaned.splat";
    await SPLAT.Loader.LoadAsync(url, scene, () => {});

    const frame = () => {
        controls.update();
        renderer.render(scene, camera);

        requestAnimationFrame(frame);
    };


    requestAnimationFrame(frame);
}

main();
