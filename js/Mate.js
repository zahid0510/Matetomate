import * as THREE from "../js/three.module.js";

export default function MateCar({ x, y, z }) {
//Textura
const textureLoader = new THREE.TextureLoader();
const frontTexture = textureLoader.load('image/ojosMate.jpg');
const frontBoca = textureLoader.load('image/bocaMate.jpg');

//BASE CABEZA

var base = new THREE.BoxGeometry(2,1,2);
var material = new THREE.MeshLambertMaterial({color:0x854E3A});
var Mesh01 = new THREE.Mesh(base,material);

var base1 = new THREE.BoxGeometry(2,1,1);
var faroM = new THREE.MeshLambertMaterial({color:0x734232});
var Mesh02 = new THREE.Mesh(base1,faroM);
Mesh02.position.set(0,1,-0.5);

var base3 = new THREE.BoxGeometry(2,1,2);
var Mesh11 = new THREE.Mesh(base3,material);
Mesh11.position.set(0,0,-2);

//ojos

const materials = [
  new THREE.MeshBasicMaterial({ color: 0x734232 }),
  new THREE.MeshBasicMaterial({ color: 0x734232 }),
  new THREE.MeshBasicMaterial({ color: 0x734232 }),
  new THREE.MeshBasicMaterial({ color: 0xffffff }),
  new THREE.MeshBasicMaterial({ map: frontTexture }),
  new THREE.MeshBasicMaterial({ color: 0xffffff }),
];

var Ojo1 = new THREE.BoxGeometry(1.8,1,1);
var materialOjo = new THREE.MeshLambertMaterial({color:0xffffff});
var Mesh03 = new THREE.Mesh(Ojo1,materials);
Mesh03.position.set(0,0.8,-0.4);

//Faros
var Faro1 = new THREE.CylinderGeometry(0.2,0.2,4.1,8);
var mesh04 = new THREE.Mesh(Faro1,faroM);
mesh04.position.set(0.9,0.5,-1);
mesh04.rotation.x = Math.PI/2;

var Faro2 = new THREE.CylinderGeometry(0.2,0.2,4.1,8);
var mesh05 = new THREE.Mesh(Faro2,faroM);
mesh05.position.set(-0.9,0.5,-1);
mesh05.rotation.x = Math.PI/2;

//foco
var Foco1 = new THREE.SphereGeometry(0.15,10,10);
var foco1 = new THREE.MeshLambertMaterial({color:0xF4D80B});
var mesh06 = new THREE.Mesh(Foco1,foco1);
mesh06.position.set(-0.9,0.5,1);

var Foco2 = new THREE.SphereGeometry(0.15,10,10);
var foco2 = new THREE.MeshLambertMaterial({color:0x513224});
var mesh07 = new THREE.Mesh(Foco2,foco2);
mesh07.position.set(0.9,0.5,1);

var Foco3 = new THREE.SphereGeometry(0.15,10,10);
var foco3 = new THREE.MeshLambertMaterial({color:0xFF0028});
var mesh13 = new THREE.Mesh(Foco3,foco3);
mesh13.position.set(-0.9,0.5,-3);

var Foco4 = new THREE.SphereGeometry(0.15,10,10);
var mesh14 = new THREE.Mesh(Foco4,foco3);
mesh14.position.set(0.9,0.5,-3);

var Motor2 = new THREE.CylinderGeometry(0.2,0.4,0.5,8);
var Foco4 = new THREE.MeshLambertMaterial({color:0xFF9400});
var mesh20 = new THREE.Mesh(Motor2,Foco4);
mesh20.position.set(0,1.5,-0.5);


//Bomba
var Bomba1 = new THREE.BoxGeometry(0.6,0.2,0.4);
var materialBom = new THREE.MeshLambertMaterial({color:0x175F09});
var Mesh15 = new THREE.Mesh(Bomba1,materialBom);
Mesh15.position.set(0,0.8,0.5);

//Motor
var Motor = new THREE.CylinderGeometry(0.4,0.4,0.5,8);
var MotorM = new THREE.MeshLambertMaterial({color:0x513224});
var mesh08 = new THREE.Mesh(Motor,MotorM);
mesh08.position.set(0,0.5,0.5);

//Luz focos
var luz1 = new THREE.PointLight(0xffffff,3,2);
luz1.position.set(-0.9,0.5,1.5);

var luz2 = new THREE.PointLight(0xA10000,3,2);
luz2.position.set(-0.9,0.5,-3.5);

var luz3 = new THREE.PointLight(0xA10000,3,2);
luz3.position.set(0.9,0.5,-3.5);

var luz4 = new THREE.PointLight(0xFF9400,3,2);
luz4.position.set(0,2,-0.5);

//LLantas
var Llanta1 = new THREE.CylinderGeometry(0.5,0.5,0.5,30);
var LlantaM1 = new THREE.MeshLambertMaterial({color:0x513224});
var mesh09 = new THREE.Mesh(Llanta1,LlantaM1);
mesh09.position.set(0.9,-0.3,-0.3);
mesh09.rotation.z = Math.PI/2;

var Llanta2 = new THREE.CylinderGeometry(0.5,0.5,0.5,30);
var mesh10 = new THREE.Mesh(Llanta1,LlantaM1);
mesh10.position.set(-0.9,-0.3,-0.3);
mesh10.rotation.z = Math.PI/2;

var Llanta3 = new THREE.CylinderGeometry(0.5,0.5,0.5,30);
var mesh11 = new THREE.Mesh(Llanta3,LlantaM1);
mesh11.position.set(0.9,-0.3,-2);
mesh11.rotation.z = Math.PI/2;

var Llanta4 = new THREE.CylinderGeometry(0.5,0.5,0.5,30);
var mesh12 = new THREE.Mesh(Llanta4,LlantaM1);
mesh12.position.set(-0.9,-0.3,-2);
mesh12.rotation.z = Math.PI/2;

//Grupo Mate
var mate1 = new THREE.Group();
mate1.add(mesh20,luz4,luz1,luz2,luz3,Mesh01,Mesh02,Mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,Mesh11,mesh11,mesh12,mesh13,mesh14,Mesh15);
mate1.position.set(x,y,z);

return mate1;


}
