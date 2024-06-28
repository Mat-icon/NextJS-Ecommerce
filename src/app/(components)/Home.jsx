"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Home = () => {
  

  useEffect(() => {
    const canvas = document.querySelector("#main")
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20,2, 1, 1000);

    camera.position.x = 20;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas });
    
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
   

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const manager = new THREE.LoadingManager();
    const loader = new FBXLoader(manager);

    controls.enabled = false;

    const path = "../assets/Ch22_nonPBR.fbx"; // Make sure this path is correct
    let character;
    const sceneData = {
      character: null,
      animations: [],
    };

    function getMaterial() {
      // Dummy material function, replace with your actual material settings
      return new THREE.MeshStandardMaterial({ color: 0x994400 });
    }

    loader.load(path, (fbx) => {
      function initCharacter(fbx) {
        const char = fbx;
        char.scale.setScalar(0.02);
        char.position.set(0, -1.5, -5);
        char.traverse((c) => {
          if (c.isMesh) {
            if (c.material.name === "Alpha_Body_MAT") {
              c.material = getMaterial();
            }
            c.castShadow = true;
          }
        });
        const mixer = new THREE.AnimationMixer(char);
        const update = (t) => {
          mixer.update(0.02);
        };
        char.userData = { mixer, update };
        return char;
      }

      character = initCharacter(fbx);
      sceneData.character = character;
    });

    const animations = ["Standard Walk"];
    const apath = "../assets/animations/"; // Make sure this path is correct
    manager.onLoad = () => initScene(sceneData);
    animations.forEach((name) => {
      loader.load(`${apath}${name}.fbx`, (fbx) => {
        let anim = fbx.animations[0];
        anim.name = name;
        sceneData.animations.push(anim);
      });
    });

    function setupActions(character, animations) {
      const actions = [];
      animations.forEach((anim) => {
        let action = character.userData.mixer.clipAction(anim);
        action.setLoop(THREE.LoopRepeat); // Ensure the animation loops continuously
        action.timeScale = 0.5; // Reduce the speed of the animation (0.5 is half speed)
        actions.push(action);
      });
      return actions;
    }

    function initScene(sceneData) {
      const { character, animations } = sceneData;
      const actions = setupActions(character, animations);
      scene.add(character);

      const sunLight = new THREE.DirectionalLight(0xffffff, 5);
      sunLight.position.set(2, 4, 3);
      sunLight.castShadow = true;
      scene.add(sunLight);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      scene.add(hemiLight);

      let timeElapsed = 0;
      function animate(t = 0) {
        timeElapsed += 0.01;
        requestAnimationFrame(animate);

        character?.userData.update(timeElapsed);
        renderer.render(scene, camera);
        controls.update();
      }
      let index = 0;
      let previousAction;

      function playRandomAnimationClip() {
        const action = actions[index];
        if (action !== previousAction) {
          previousAction?.fadeOut(1);
          action.reset();
          action.fadeIn(1);
          action.play();
          previousAction = action;
        }
        index = Math.floor(Math.random() * actions.length);
      }

      animate();

      function handleWindowResize() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
      window.addEventListener("resize", handleWindowResize, false);

      window.addEventListener("keydown", (e) => {
        if (e.key === " ") {
          playRandomAnimationClip();
        }
      });
    }

    return () => {
    
      renderer.dispose();
    };
  }, []);

  return (
   <canvas id="main" className=" w-screen h-screen overflow-x-hidden bg-black"></canvas>
  );
};

export default Home;
