import * as THREE from "../js/three.module.js";
export default function casaMate({ x, y, z }) {

  const casaMate = new THREE.Group();

  const grupoPalos = new THREE.Group();
  const materialPalo = new THREE.MeshLambertMaterial({ color: 0x8C5637 });

  const palos = [
    { pos: [-15, 0, 0], h: 30 },
    { pos: [15, 0, 0], h: 30 },
    { pos: [-20, 0, 0], h: 30 },
    { pos: [20, 0, 0], h: 30 },
    { pos: [0, 15, 0], h: 43, rotZ: Math.PI / 2 },
    { pos: [0, 18, 0], h: 36, rotZ: Math.PI / 2 },
    { pos: [0, 20, 0], h: 30, rotZ: Math.PI / 2 },
    { pos: [0, 23, 0], h: 26, rotZ: Math.PI / 2 },
  ];

  palos.forEach(({ pos, h, rotZ }) => {
    const geo = new THREE.CylinderGeometry(2, 2, h, 8, 1);
    const mesh = new THREE.Mesh(geo, materialPalo);
    mesh.position.set(...pos);
    if (rotZ) mesh.rotation.z = rotZ;
    grupoPalos.add(mesh);
  });

  const grupoPalosAtras = grupoPalos.clone();
  grupoPalosAtras.position.set(0, 0, -50);

  const techoGeo = new THREE.CylinderGeometry(5, 5, 20, 3);
  const techoMat = new THREE.MeshLambertMaterial({ color: 0x8C5637 });
  const Lamina = new THREE.Mesh(techoGeo, techoMat);
  Lamina.position.set(0, 25, -22);
  Lamina.scale.set(3, 3, 3);
  Lamina.rotation.set(Math.PI / 2, Math.PI, 0);

  const vallaGeo = new THREE.CylinderGeometry(0.2, 0.2, 3, 20);
  const vallaMat = new THREE.MeshLambertMaterial({ color: 0xA66A00 });
  const baseValla = new THREE.Mesh(vallaGeo, vallaMat);

  const vallas = new THREE.Group();
  for (let i = 0; i < 10; i++) {
    const poste = baseValla.clone();
    poste.position.set(9.5, 1, 9 - i * 2);
    vallas.add(poste);
  }

  const maderaGeo = new THREE.CylinderGeometry(0.1, 0.1, 18, 20);
  const maderaMat = new THREE.MeshLambertMaterial({ color: 0xA66A00 });
  const madera1 = new THREE.Mesh(maderaGeo, maderaMat);
  madera1.position.set(9.5, 2, 0);
  madera1.rotation.x = Math.PI / 2;

  const madera2 = madera1.clone();
  madera2.position.y = 1.5;

  vallas.add(madera1, madera2);

  vallas.scale.set(8, 8, 8);

  const vallas2 = vallas.clone();
  vallas2.position.set(-19 * 8, 0, 0); 

  const vallas3 = vallas.clone();
  vallas3.position.set(0, 0, 0.5 * 8);
  vallas3.rotation.y = Math.PI / 2;

  casaMate.add(grupoPalos, grupoPalosAtras, Lamina, vallas, vallas2, vallas3);

  casaMate.position.set(x, y, z);

  return casaMate;
}
