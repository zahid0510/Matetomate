import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';
export default function ArbolesG ({ x, y, z, world }) {

    var troncoGeo = new THREE.CylinderGeometry(2, 3, 12, 20, 1);
    var troncoMat = new THREE.MeshLambertMaterial({ color: 0x8C5637 });
    var tronco = new THREE.Mesh(troncoGeo, troncoMat);
    tronco.position.set(0, 6, 0);

    var copaMat = new THREE.MeshLambertMaterial({ color: 0x6f8e4a });
    
    // Copa Principal
    var copa1 = new THREE.Mesh(new THREE.SphereGeometry(4, 16, 16), copaMat);
    copa1.position.set(0, 14, 0);

    // Copa Derecha
    var copa2 = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 16), copaMat);
    copa2.position.set(3.5, 12.5, 1);

    // Copa Izquierda
    var copa3 = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 16), copaMat);
    copa3.position.set(-3.5, 12.5, -1);

    // Copa Derecha Arriba
    var copa4 = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 16), copaMat);
    copa4.position.set(3.5, 15, 1);

    // Copa Izquierda Arriba
    var copa5 = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 16), copaMat);
    copa5.position.set(-3.5, 15, 1);

    // Grupo Base del Árbol
    const ArbolBase = new THREE.Group();
    ArbolBase.add(tronco, copa1, copa2, copa3, copa4, copa5);
    ArbolBase.scale.set(3, 2, 3); 

    const GrupoAr = new THREE.Group();

    const listaArboles = [
        { px: -200, py: -1, pz: 0,    rot: 0 },           
        { px: -170, py: -1, pz: 0,    rot: 0 },           
        { px: -140, py: -1, pz: 0,    rot: Math.PI/2 },
        { px: -150, py: -1, pz: 20,   rot: Math.PI/3 },
        { px: -180, py: -1, pz: 30,   rot: Math.PI/1 },   
        { px: -150, py: -1, pz: -20,  rot: Math.PI/3 },
        { px: -180, py: -1, pz: -20,  rot: Math.PI/1 },
        
        // Cerca militar
        { px: 120,  py: -1, pz: 120,  rot: Math.PI/1 },   
        { px: 100,  py: -1, pz: 140,  rot: Math.PI/2 },   
        { px: 120,  py: -1, pz: 100,  rot: Math.PI/3 },  
        { px: 120,  py: -1, pz: 80,   rot: Math.PI/3 },  

        // Cerca del edificio
        { px: 110,  py: -1, pz: -110, rot: Math.PI/3 },   
        // Cerca de bomberos
        { px: 110,  py: -1, pz: -160, rot: Math.PI/3 }, 
        { px: 50,   py: -1, pz: -160, rot: Math.PI/2 },  
        { px: 150,  py: -1, pz: -180, rot: Math.PI/4 }  
    ];

    listaArboles.forEach(dato => {
        
    const clon = ArbolBase.clone();
    clon.position.set(dato.px, dato.py, dato.pz);
    clon.rotation.y = dato.rot;
    GrupoAr.add(clon);

    if (world) {

    const shape = new CANNON.Box(new CANNON.Vec3(4, 12, 4));
            
    const body = new CANNON.Body({
    mass: 0,
    type: CANNON.Body.STATIC,
    shape: shape
    });
    body.position.set(x + dato.px, y + 11, z + dato.pz);
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), dato.rot);
    body.quaternion.copy(quaternion);

    world.addBody(body);
    }
    });

    GrupoAr.position.set(x, y, z);
    
    return GrupoAr;
}