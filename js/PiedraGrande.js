import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';
export default function PiedraG({ x, y, z, rotation = 0, world }) {

    // Base
    var AbajoGeo = new THREE.CylinderGeometry(7.38, 13.29, 7, 9, 1);
    var MatMarron = new THREE.MeshLambertMaterial({ color: 0x8C5637 });
    var mesh01 = new THREE.Mesh(AbajoGeo, MatMarron);

    // Parte Media 1
    var MedioGeo1 = new THREE.CylinderGeometry(13.29, 7.38, 4.018, 31, 1);
    var mesh02 = new THREE.Mesh(MedioGeo1, MatMarron);
    mesh02.position.set(0, 5, 0);

    // Parte Media 2 (Ancha)
    var MedioGeo2 = new THREE.CylinderGeometry(15, 15, 4.018, 31, 1);
    var mesh03 = new THREE.Mesh(MedioGeo2, MatMarron);
    mesh03.position.set(0, 9, 0);

    var mesh04 = new THREE.Mesh(MedioGeo2, MatMarron);
    mesh04.position.set(3, 12, 0);

    var mesh06 = new THREE.Mesh(MedioGeo2, MatMarron);
    mesh06.position.set(5, 15, 0);

    var Piedra = new THREE.Group();
    Piedra.add(mesh01, mesh02, mesh03, mesh04, mesh06);

    Piedra.position.set(x, y, z);
    Piedra.rotation.y = rotation;

    if (world) {
    const S = 5;

    const body = new CANNON.Body({
     mass: 0, // Estático
     type: CANNON.Body.STATIC
    });
    body.position.set(x, y, z);

    const quatBody = new CANNON.Quaternion();
    quatBody.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rotation);
    body.quaternion.copy(quatBody);

    const shapeBase = new CANNON.Cylinder(50, 50, 35, 16);
    body.addShape(shapeBase, new CANNON.Vec3(0, 17, 0));

    const shapeTop = new CANNON.Cylinder(75, 75, 60, 16);
    body.addShape(shapeTop, new CANNON.Vec3(0, 65, 0));

    world.addBody(body);
    }

    return Piedra;
}