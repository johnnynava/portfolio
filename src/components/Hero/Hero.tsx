import { FC, useEffect, useState } from "react";
import * as THREE from "three";

const Hero: FC = () => {
  const [height, setHeight] = useState(
    document.getElementById("root")!.offsetHeight,
  );
  const [width, setWidth] = useState(
    document.getElementById("root")!.offsetHeight,
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (height !== document.getElementById("root")!.offsetHeight) {
        setHeight(document.getElementById("root")!.offsetHeight);
      }
      if (width != document.getElementById("root")!.offsetWidth) {
        setWidth(document.getElementById("root")!.offsetWidth);
      }
    });
    const scene = new THREE.Scene();
    const pov = 50;
    const camera = new THREE.PerspectiveCamera(
      pov,
      window.innerWidth / window.innerHeight,
    );
    camera.position.z = 65;

    const canvas = document.getElementById("heroCanvas");

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas!,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height!);

    const lineColor = 0x564553;
    const geometry = new THREE.SphereGeometry(height / pov, 25, 25);
    const basicMaterial = new THREE.MeshBasicMaterial({
      color: lineColor,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, basicMaterial);
    scene.add(mesh);

    let myReq: number;

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      mesh.rotation.x = -elapsedTime * 0.02;
      mesh.rotation.y = elapsedTime * 0.01;
      renderer.render(scene, camera);
      myReq = window.requestAnimationFrame(animate);
    };
    animate();
    setHeight(document.getElementById("root")!.offsetHeight);
    setWidth(document.getElementById("root")!.offsetWidth);

    return () => {
      window.cancelAnimationFrame(myReq);
    };
  }, [height, width]);

  return (
    <div className="hero">
      <canvas id="heroCanvas"></canvas>
      <p>Johnny Nava</p>
      <p>Full-Stack Developer</p>
    </div>
  );
};

export default Hero;
