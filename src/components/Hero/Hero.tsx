import { FC, useEffect } from "react";
import * as THREE from "three";

const Hero: FC = () => {
  useEffect(()=>{
    const scene = new THREE.Scene();

    const pov = 50;
    const camera = new THREE.PerspectiveCamera(pov, window.innerWidth / window.innerHeight);
    camera.position.z = 65;

    const canvas = document.getElementById("heroCanvas");

    const body = document.body;
    const html = document.documentElement;
    const rootHeight = document.getElementById("root")?.offsetHeight;
    const height = Math.max( rootHeight!, body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    //Debug logs:
    console.log(document.getElementById("root"));
    console.log(body);
    console.log(html);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas!, 
      antialias:true,
      alpha: true
    })
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(window.innerWidth,height!);

    const lineColor = 0x564553;
    const geometry = new THREE.SphereGeometry( height!/pov, 25, 25 ); 
    const basicMaterial = new THREE.MeshBasicMaterial({color: lineColor, wireframe:true});
    const mesh = new THREE.Mesh(geometry, basicMaterial)
    scene.add(mesh)

    const clock = new THREE.Clock();
    const animate = () => {
    const elapsedTime = clock.getElapsedTime();
      mesh.rotation.x = -elapsedTime*0.02;
      mesh.rotation.y = elapsedTime*0.01;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate)
    }
    animate();
  },[])

  return (
    <div className="hero">
      <canvas id="heroCanvas"></canvas>
      <p>Johnny Nava</p>
      <p>Front-End Developer</p>
    </div>
  );
};

export default Hero;
