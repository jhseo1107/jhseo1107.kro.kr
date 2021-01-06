import * as THREE from "https://threejs.org/build/three.module.js"
import {GLTFLoader} from "https://threejs.org/examples/jsm/loaders/GLTFLoader.js";

(function(){
    window.onload = () => {
        function init() {
            const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            renderer.setSize(420, 420);
            const cv = document.getElementById("canvaswrapper");
            cv.appendChild(renderer.domElement);
            const camera = new THREE.PerspectiveCamera(75, 420/420, 0.1, 1000);
            camera.position.z = 4;
            const scene = new THREE.Scene();
            const light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
            scene.add( light );
            
            let cube;
            let gltf = new GLTFLoader();
            gltf.load("jhseo.glb", (x) => {
                cube = x.scene;
                scene.add(x.scene);
            });

            function render(time) {
                time *= 0.001;
                if (cube) {
                    cube.rotation.x = time;
                    cube.rotation.z = time;
                }

                renderer.render(scene, camera);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        }
        init()
    }
})();