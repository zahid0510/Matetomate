import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';
export default function CasaMilitar({ x, y, z, rotation = 0, world }) {

  const militar = new THREE.Group();

  const suelo = new THREE.BoxGeometry(20, 20, 2);
  const sueloM = new THREE.MeshLambertMaterial({ color: 0xCFFCB8 });
  const mesh02 = new THREE.Mesh(suelo, sueloM);
  mesh02.position.set(0, 0, 0);
  mesh02.rotation.set(Math.PI / 2, 0, Math.PI / 2);

  const Faro2 = new THREE.CylinderGeometry(5, 5, 10, 20, 5, 0, 1.4, 3.5);
  const faroM = new THREE.MeshLambertMaterial({ color: 0xB8CCBE });
  const mesh01 = new THREE.Mesh(Faro2, faroM);
  mesh01.position.set(0, 1.5, 0);
  mesh01.rotation.x = Math.PI / 2;

  const rel = new THREE.CylinderGeometry(5.2, 5.2, 0.5, 20, 5, false, 1.4, 3.5);
  const RelieveM = new THREE.MeshLambertMaterial({ color: 0x95A69C });
  const mesh03 = new THREE.Mesh(rel, RelieveM);
  mesh03.position.set(0, 1.5, 0);
  mesh03.rotation.x = Math.PI / 2;

  const relCopy1 = mesh03.clone(); relCopy1.position.set(0, 1.5, 2.5);
  const relCopy2 = mesh03.clone(); relCopy2.position.set(0, 1.5, 5);
  const relCopy3 = mesh03.clone(); relCopy3.position.set(0, 1.5, -2.5);
  const relCopy4 = mesh03.clone(); relCopy4.position.set(0, 1.5, -5);

  const Puerta = new THREE.BoxGeometry(5, 4, 1);
  const Puertam = new THREE.MeshLambertMaterial({ color: 0xB8CCBE });
  const mesh04 = new THREE.Mesh(Puerta, Puertam);
  mesh04.position.set(0, 1.5, 5);

  const asta = new THREE.BoxGeometry(3.5, 2, 0.2);
  const astam = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
  const mesh05 = new THREE.Mesh(asta, astam);
  mesh05.position.set(8, 5, 5);

  const ban = new THREE.CylinderGeometry(0.2, 0.2, 7, 20);
  const banM = new THREE.MeshLambertMaterial({ color: 0x95A69C });
  const mesh06 = new THREE.Mesh(ban, banM);
  mesh06.position.set(6.2, 3, 5);

  const valla = new THREE.CylinderGeometry(0.2, 0.2, 3, 20);
  const vallaM = new THREE.MeshLambertMaterial({ color: 0xA66A00 });
  const mesh07 = new THREE.Mesh(valla, vallaM);
  mesh07.position.set(9.5, 1, 9);

  const vallas = new THREE.Group();
  for (let i = 0; i < 10; i++) {
    const clone = mesh07.clone();
    clone.position.set(9.5, 1, 9 - i * 2);
    vallas.add(clone);
  }

  const palo1 = new THREE.CylinderGeometry(0.1, 0.1, 18, 20);
  const paloM = new THREE.MeshLambertMaterial({ color: 0xA66A00 });
  const mesh08 = new THREE.Mesh(palo1, paloM);
  mesh08.position.set(9.5, 2, 0);
  mesh08.rotation.x = Math.PI / 2;

  const mesh09 = mesh08.clone();
  mesh09.position.set(9.5, 1.5, 0);

  vallas.add(mesh08, mesh09);

  const vallas2 = vallas.clone();
  vallas2.position.set(-19, 0, 0);

  const vallas3 = vallas.clone();
  vallas3.position.set(0, 0, 0.5);
  vallas3.rotation.set(0, Math.PI / 2, 0);

  militar.add(
    vallas, vallas2, vallas3,
    mesh01, mesh02, mesh03, mesh04,
    mesh05, mesh06,
    relCopy1, relCopy2, relCopy3, relCopy4
  );

  militar.position.set(x, y, z);
  militar.rotation.y = rotation;

  if (world) {

  const S = 3; 

  const body = new CANNON.Body({
  mass: 0,
  type: CANNON.Body.STATIC
  });
  body.position.set(x, y, z);

  const quatBody = new CANNON.Quaternion();
  quatBody.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rotation);
  body.quaternion.copy(quatBody);

  const shapeBunker = new CANNON.Box(new CANNON.Vec3(15, 8, 15));
  body.addShape(shapeBunker, new CANNON.Vec3(0, 8, 0));

  const shapeVallaLarga = new CANNON.Box(new CANNON.Vec3(1, 5, 27));
  body.addShape(shapeVallaLarga, new CANNON.Vec3(28.5, 5, 0));

  const shapeVallaCorta = new CANNON.Box(new CANNON.Vec3(27, 5, 1));
  body.addShape(shapeVallaCorta, new CANNON.Vec3(0, 5, -28));

  body.addShape(shapeVallaCorta, new CANNON.Vec3(0, 5, 28));

  world.addBody(body);
  }

  return militar;
}