import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';

export default function Gasolineria({ x, y, z, rotation = 0, world }) {

    const EdificioGroup = new THREE.Group();

    //Entrada (Radio 15)
    var Abajo = new THREE.CylinderGeometry(15, 15, 12.642, 26, 10);
    var abajoMat = new THREE.MeshLambertMaterial({ color: 0x00FFF7 });
    var mesh1 = new THREE.Mesh(Abajo, abajoMat);

    //Suelo (empieza en Y=-6)
    var Suelo1 = new THREE.CylinderGeometry(20, 20, 2, 26, 10);
    var sueloMat1 = new THREE.MeshLambertMaterial({ color: 0x828282 });
    var mesh2 = new THREE.Mesh(Suelo1, sueloMat1);
    mesh2.position.set(0, -6, 0);

    //Parte media
    var Suelo2 = new THREE.CylinderGeometry(20, 20, 2, 26, 10);
    var sueloMat2 = new THREE.MeshLambertMaterial({ color: 0x828282 });
    var mesh3 = new THREE.Mesh(Suelo2, sueloMat2);
    mesh3.position.set(0, 6, 0);

    //Parte Superior 1
    var Arriba1 = new THREE.CylinderGeometry(22, 22, 1, 36, 20);
    var arribaMat1 = new THREE.MeshLambertMaterial({ color: 0xADADAD });
    var mesh4 = new THREE.Mesh(Arriba1, arribaMat1);
    mesh4.position.set(0, 7, 0);

    //Bodega
    var Bodega = new THREE.CylinderGeometry(21, 21, 8, 34, 9);
    var bodegaMat = new THREE.MeshLambertMaterial({ color: 0xC7B304 });
    var mesh5 = new THREE.Mesh(Bodega, bodegaMat);
    mesh5.position.set(0, 11, 0);

    //Parte Superior 2
    var Arriba2 = new THREE.CylinderGeometry(22, 22, 1, 36, 20);
    var arribaMat2 = new THREE.MeshLambertMaterial({ color: 0xADADAD });
    var mesh6 = new THREE.Mesh(Arriba2, arribaMat2);
    mesh6.position.set(0, 15, 0);

    EdificioGroup.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6);

    // --- Grupo estación de gasolina ---
    const GasStationGroup = new THREE.Group();

    var techoIzq = new THREE.BoxGeometry(10, 0.5, 20);
    var materialTecho = new THREE.MeshLambertMaterial({ color: 0xE9CB97 });
    var mallaTechoIzq = new THREE.Mesh(techoIzq, materialTecho);
    mallaTechoIzq.position.set(-10, 6, 0);

    var techoDer = new THREE.BoxGeometry(10, 0.5, 20);
    var mallaTechoDer = new THREE.Mesh(techoDer, materialTecho);
    mallaTechoDer.position.set(10, 6, 0);

    var columnaGeo = new THREE.BoxGeometry(0.4, 6, 0.4);
    var materialColumna = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var posicionesColumnas = [
        [-15, 3, -9], [-5, 3, -9], [-15, 3, 9], [-5, 3, 9],
        [5, 3, -9], [15, 3, -9], [5, 3, 9], [15, 3, 9]
    ];

    const columnasGroup = new THREE.Group();
    for (var i = 0; i < posicionesColumnas.length; i++) {
        var mallaColumna = new THREE.Mesh(columnaGeo, materialColumna);
        mallaColumna.position.set(...posicionesColumnas[i]);
        columnasGroup.add(mallaColumna);
    }

    // Bombas (en Y=1.5)
    var posicionesZ = [-9, -3, 3, 9];
    var baseBombaGeo = new THREE.BoxGeometry(1.5, 3, 1.5); 
    var materialBase = new THREE.MeshLambertMaterial({ color: 0x00FFF7 });
    var ventana = new THREE.BoxGeometry(1, 1, 0.4);
    var materialVentana = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var manguera = new THREE.CylinderGeometry(0.05, 0.05, 2, 16);
    var materialManguera = new THREE.MeshLambertMaterial({ color: 0x000000 });

    for (var i = 0; i < posicionesZ.length; i++) {
        // Lado izquierdo
        const bombaIzq = new THREE.Group();
        bombaIzq.add(new THREE.Mesh(baseBombaGeo, materialBase));
        var vMesh = new THREE.Mesh(ventana, materialVentana);
        vMesh.position.set(0, 0.9, 0.85);
        bombaIzq.add(vMesh);
        var mMesh = new THREE.Mesh(manguera, materialManguera);
        mMesh.rotation.z = Math.PI / 2;
        mMesh.position.set(0.6, -0.3, 0);
        bombaIzq.add(mMesh);
        bombaIzq.position.set(-10, 1.5, posicionesZ[i]);
        GasStationGroup.add(bombaIzq);

        // Lado derecho
        const bombaDer = new THREE.Group();
        bombaDer.add(new THREE.Mesh(baseBombaGeo, materialBase));
        var vMeshD = new THREE.Mesh(ventana, materialVentana);
        vMeshD.position.set(0, 0.9, 0.85);
        bombaDer.add(vMeshD);
        var mMeshD = new THREE.Mesh(manguera, materialManguera);
        mMeshD.rotation.z = Math.PI / 2;
        mMeshD.position.set(0.6, -0.3, 0);
        bombaDer.add(mMeshD);
        bombaDer.position.set(10, 1.5, posicionesZ[i]);
        GasStationGroup.add(bombaDer);
    }

    GasStationGroup.add(mallaTechoIzq, mallaTechoDer, columnasGroup);

    const focosGroup = new THREE.Group();
    function crearFoco(x, y, z, color = 0xffffff, radio = 1) {
        const geo = new THREE.SphereGeometry(radio, 16, 16);
        const mat = new THREE.MeshLambertMaterial({ color });
        const esfera = new THREE.Mesh(geo, mat);
        esfera.position.set(x, y, z);
        return esfera;
    }
    const offsetX = [-3, -1, 1, 3];
    const offsetZ = [-7, -2, 2, 7];
    const alturaFoco = 6.5;
    for (let i = 0; i < 4; i++) {
        focosGroup.add(crearFoco(-10 + offsetX[i], alturaFoco, offsetZ[i]));
        focosGroup.add(crearFoco(10 + offsetX[i], alturaFoco, offsetZ[i]));
    }
    GasStationGroup.add(focosGroup);

    GasStationGroup.position.set(0, 0, 35);

    const Gas = new THREE.Group();
    Gas.add(EdificioGroup, GasStationGroup);

    const rotacionFinalY = -Math.PI / 2 + rotation;
    Gas.rotation.y = rotacionFinalY;
    Gas.position.set(x, y, z);

    if (world) {
    const sX = 1.5;
    const sY = 2;
    const sZ = 1.5;

    const body = new CANNON.Body({
    mass: 0, 
    type: CANNON.Body.STATIC
    });
    body.position.set(x, y, z);

    const quatBody = new CANNON.Quaternion();
    quatBody.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rotacionFinalY);
    body.quaternion.copy(quatBody);

    const shapeEdificio = new CANNON.Cylinder(22.5, 22.5, 44, 20);
    body.addShape(shapeEdificio, new CANNON.Vec3(0, 10, 0));

    const shapeBomba = new CANNON.Box(new CANNON.Vec3(1.2, 3, 1.2));
    var posicionesBombasZ = [-9, -3, 3, 9];

    const yPosBomba = 1; 

    for (let i = 0; i < posicionesBombasZ.length; i++) {
    const zLocal = posicionesBombasZ[i];
    const zFinal = (zLocal + 35) * sZ;

    body.addShape(shapeBomba, new CANNON.Vec3(-15, yPosBomba, zFinal));
     body.addShape(shapeBomba, new CANNON.Vec3(15, yPosBomba, zFinal));
    }

    const shapeColumna = new CANNON.Box(new CANNON.Vec3(0.3, 6, 0.3));
    const bajadaColumnas = 2;

    for (let i = 0; i < posicionesColumnas.length; i++) {
        const [cX, cY, cZ] = posicionesColumnas[i];
        body.addShape(shapeColumna, new CANNON.Vec3(cX * sX, (cY * sY) - bajadaColumnas, (cZ + 35) * sZ));
    }

    world.addBody(body);
    }

    return Gas;
}