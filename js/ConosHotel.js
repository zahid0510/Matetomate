import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';

export default function ConoHotel({ x, y, z, rotation = 0, world }) {

    var cono = new THREE.CylinderGeometry(2, 6, 13, 20);
    var ConoM = new THREE.MeshLambertMaterial({color: 0xF57327});
    var mesh02 = new THREE.Mesh(cono, ConoM);
    mesh02.position.set(0, 6, 0);

    var baseC = new THREE.CylinderGeometry(7, 7, 1, 20);
    var mesh04 = new THREE.Mesh(baseC, ConoM);
    mesh04.position.set(0, 0, 0);

    var Puerta = new THREE.BoxGeometry(2, 2, 4);
    var Puertam = new THREE.MeshLambertMaterial({color: 0x944313});
    var mesh03 = new THREE.Mesh(Puerta, Puertam);
    mesh03.position.set(0, 1.5, 4);

    var hotel = new THREE.Group();
    hotel.add(mesh02, mesh03, mesh04);

    hotel.position.set(x, y, z);
    hotel.rotation.y = rotation; 

    if (world) {
    const body = new CANNON.Body({
    mass: 0,
    type: CANNON.Body.STATIC
    });
    body.position.set(x, y, z);

    const quatBody = new CANNON.Quaternion();
    quatBody.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rotation);
    body.quaternion.copy(quatBody);

    const ALTURA = 40; 
    const RADIO = 13;  
    const shapeCilindroAlto = new CANNON.Cylinder(RADIO, RADIO, ALTURA, 16);
    body.addShape(shapeCilindroAlto, new CANNON.Vec3(0, (ALTURA / 2) - 5, 0));

    world.addBody(body);
    }

    return hotel;
}