import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';
export default function CasaEdificio({ x, y, z, rotation = 0, world }) {

    // Edificio Principal
    var caja = new THREE.BoxGeometry(30, 12, 30, 7);
    var material01 = new THREE.MeshLambertMaterial({ color: 0xFFEB91 });
    var mesh01 = new THREE.Mesh(caja, material01);
    mesh01.position.set(0, 11, -16);

    // Puertas / Bloques extra
    var caja1 = new THREE.BoxGeometry(10, 3, 10, 7);
    var material02 = new THREE.MeshLambertMaterial({ color: 0xCCBB7C });
    var mesh02 = new THREE.Mesh(caja1, material02);
    mesh02.position.set(0, 15, 4);

    var caja2 = new THREE.BoxGeometry(10, 3, 10, 7);
    var material03 = new THREE.MeshLambertMaterial({ color: 0xCCBB7C });
    var mesh03 = new THREE.Mesh(caja2, material03);
    mesh03.position.set(20, 15, -20);

    // Techos (Decoración)
    var techoGeo = new THREE.CylinderGeometry(1, 1, 8, 10, 1);
    var techoMat = new THREE.MeshLambertMaterial({ color: 0xFFEB91 });

    var techo = new THREE.Mesh(techoGeo, techoMat);
    techo.position.set(-3, 11, 6);
    var techo1 = new THREE.Mesh(techoGeo, techoMat);
    techo1.position.set(5, 11, 6);
    var techo2 = new THREE.Mesh(techoGeo, techoMat);
    techo2.position.set(24, 11, -16);
    var techo3 = new THREE.Mesh(techoGeo, techoMat);
    techo3.position.set(24, 11, -24);

    // Pilares (Decoración superior)
    var pilarMat = new THREE.MeshLambertMaterial({ color: 0xD6CB98 });
    var pilarGeo1 = new THREE.CylinderGeometry(5, 5, 3, 10, 1);
    var pilar1 = new THREE.Mesh(pilarGeo1, pilarMat);
    pilar1.position.set(10, 18, -10);

    var pilarGeo2 = new THREE.CylinderGeometry(3, 3, 3, 10, 1);
    var pilar2 = new THREE.Mesh(pilarGeo2, pilarMat);
    pilar2.position.set(10, 20, -10);

    var pilarGeo3 = new THREE.CylinderGeometry(2, 2, 10, 10, 1);
    var pilar3 = new THREE.Mesh(pilarGeo3, pilarMat);
    pilar3.position.set(10, 25, -10);

    // Grupo
    var edificioF = new THREE.Group();
    edificioF.add(
        mesh01, mesh02, mesh03,
        techo, techo1, techo2, techo3,
        pilar1, pilar2, pilar3
    );

    // Posición y rotación visual
    edificioF.position.set(x, y, z);
    edificioF.rotation.y = rotation;

    if (world) {
     const S = 1.2; 

     const body = new CANNON.Body({
        mass: 0, // Estático
        type: CANNON.Body.STATIC
    });
    body.position.set(x, y, z);

    const quatBody = new CANNON.Quaternion();
    quatBody.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rotation);
    body.quaternion.copy(quatBody);

    const shapeMain = new CANNON.Box(new CANNON.Vec3(18, 7.2, 18));
    body.addShape(shapeMain, new CANNON.Vec3(0, 13.2, -19.2));

    const shapeFront = new CANNON.Box(new CANNON.Vec3(6, 1.8, 6));
    body.addShape(shapeFront, new CANNON.Vec3(0, 18, 4.8));

    const shapeSide = new CANNON.Box(new CANNON.Vec3(6, 1.8, 6));
    body.addShape(shapeSide, new CANNON.Vec3(24, 18, -24));

     world.addBody(body);
    }

    return edificioF;
}