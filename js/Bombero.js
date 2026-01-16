import * as THREE from 'three';
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';
export default function CasaBomber({ x, y, z, world }) {

    var box = new THREE.BoxGeometry(100, 6, 100);
    var material0 = new THREE.MeshLambertMaterial({ color: 0x58505D });
    var mesh0 = new THREE.Mesh(box, material0);
    mesh0.receiveShadow = true;
    mesh0.position.set(0, 0, 0);

    var caja = new THREE.BoxGeometry(28.217, 29.638, 30, 7);
    var material01 = new THREE.MeshLambertMaterial({ color: 0xB0452B });
    var mesh01 = new THREE.Mesh(caja, material01);
    mesh01.position.set(0, 15, -16);

    var caja2 = new THREE.BoxGeometry(28.217, 21.808, 15, 7, 7, 5);
    var material02 = new THREE.MeshLambertMaterial({ color: 0xB0452B });
    var mesh02 = new THREE.Mesh(caja2, material02);
    mesh02.position.set(-20, 14, 0);

    var caja3 = new THREE.BoxGeometry(28.217, 21.808, 15, 7, 7, 5);
    var material03 = new THREE.MeshLambertMaterial({ color: 0xB0452B });
    var mesh03 = new THREE.Mesh(caja3, material03);
    mesh03.position.set(20, 14, 0);

    var caja4 = new THREE.BoxGeometry(15, 14, 14, 7, 7, 5);
    var material04 = new THREE.MeshLambertMaterial({ color: 0xD69B6F });
    var mesh04 = new THREE.Mesh(caja4, material04);
    mesh04.position.set(22, 20, 0);

    var caja5 = new THREE.BoxGeometry(15, 14, 14, 7, 7, 5);
    var material05 = new THREE.MeshLambertMaterial({ color: 0xD69B6F });
    var mesh05 = new THREE.Mesh(caja5, material05);
    mesh05.position.set(-22, 20, 0);

    var techoGeo = new THREE.CylinderGeometry(16, 18, 8, 10, 1);
    var techoMat = new THREE.MeshLambertMaterial({ color: 0xC99573 });
    var techo = new THREE.Mesh(techoGeo, techoMat);
    techo.position.set(0, 29.638 + 4, 0);
    techo.rotation.y = Math.PI / 2;

    var torreGeo = new THREE.CylinderGeometry(2, 2.5, 12, 8);
    var torreMat = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    var torre = new THREE.Mesh(torreGeo, torreMat);
    torre.position.set(30, 21.808 + 6, 5);

    var torreTechoGeo = new THREE.ConeGeometry(3, 4, 8);
    var torreTecho = new THREE.Mesh(torreTechoGeo, techoMat);
    torreTecho.position.set(30, 21.808 + 12, 5);

    var campanaGeo = new THREE.TorusGeometry(1.5, 0.8, 8, 12, Math.PI);
    var campanaMat = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
    var campana = new THREE.Mesh(campanaGeo, campanaMat);
    campana.position.set(30, 21.808 + 12, 5);
    campana.rotation.x = Math.PI / 2;

    var puertaGeo = new THREE.BoxGeometry(10, 8, 0.5);
    var puertaMat = new THREE.MeshLambertMaterial({ color: 0x644A41 });

    var puertaIzq = new THREE.Mesh(puertaGeo, puertaMat);
    puertaIzq.position.set(-5, 10, 7.6);
    puertaIzq.rotation.y = 0.2;

    var puertaDer = new THREE.Mesh(puertaGeo, puertaMat);
    puertaDer.position.set(5, 10, 7.6);
    puertaDer.rotation.y = -0.2;

    var ventanaGeo = new THREE.CylinderGeometry(6, 6, 0.3, 8);
    var ventanaMat = new THREE.MeshLambertMaterial({ color: 0x5F6D7D });

    var ventana1 = new THREE.Mesh(ventanaGeo, ventanaMat);
    ventana1.position.set(-8, 22, 7.6);

    var ventana2 = new THREE.Mesh(ventanaGeo, ventanaMat);
    ventana2.position.set(8, 22, 7.6);

    var cartelGeo = new THREE.BoxGeometry(8, 3, 0.5);
    var cartelMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var cartel = new THREE.Mesh(cartelGeo, cartelMat);
    cartel.position.set(0, 25, 7.8);

    var posteGeo = new THREE.CylinderGeometry(0.3, 0.3, 6, 6);
    var posteMat = new THREE.MeshLambertMaterial({ color: 0xD69B6F });
    var poste1 = new THREE.Mesh(posteGeo, posteMat);
    poste1.position.set(-4, 22, 7.5);
    var poste2 = new THREE.Mesh(posteGeo, posteMat);
    poste2.position.set(4, 22, 7.5);

    var ventanaPlana = new THREE.PlaneGeometry(15, 15);
    var materialFlat = new THREE.MeshLambertMaterial({ color: 0x5F6D7D, side: THREE.DoubleSide });
    var mesh18 = new THREE.Mesh(ventanaPlana, materialFlat);
    mesh18.position.set(20, 14, 10);

    var mesh09 = new THREE.Mesh(ventanaPlana, materialFlat);
    mesh09.position.set(-20, 14, 10);

    var bomberos = new THREE.Group();
    bomberos.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh09, mesh18, poste1, poste2, techo, puertaIzq, puertaDer, campana, cartel, ventana1, ventana2, torreTecho, torre);
    bomberos.position.set(x, y, z);

    if (world) {

    const body = new CANNON.Body({
    mass: 0, // Inmóvil
    type: CANNON.Body.STATIC
    });
    body.position.set(x, y, z);

    const shapeCentro = new CANNON.Box(new CANNON.Vec3(10.1, 14.8, 8));
    body.addShape(shapeCentro, new CANNON.Vec3(0, 15, -14));

    const shapeIzq = new CANNON.Box(new CANNON.Vec3(13.5, 10.9, 5.5));
    body.addShape(shapeIzq, new CANNON.Vec3(-10.5, 14, 0));

    const shapeDer = new CANNON.Box(new CANNON.Vec3(13.5, 10.9, 5.5));
    body.addShape(shapeDer, new CANNON.Vec3(10.5, 14, 0));

    world.addBody(body);
    }

    return bomberos;
}