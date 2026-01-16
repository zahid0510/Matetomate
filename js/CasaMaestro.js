import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';
export default function CasaMaestro({ x, y, z, world }) {

  var maestro = new THREE.Group();

  const house = new THREE.Mesh(
  new THREE.BoxGeometry(10, 4, 6),
  new THREE.MeshLambertMaterial({ color: 0xCFCFCF })
  );
  house.position.set(0, 2, 0);
  maestro.add(house);

  const roof = new THREE.Mesh(
  new THREE.BoxGeometry(10.5, 1, 6.5),
  new THREE.MeshLambertMaterial({ color: 0x848484 })
  );
  roof.position.set(0, 4, 0);
  maestro.add(roof);

  const garage = new THREE.Mesh(
  new THREE.BoxGeometry(4, 3, 4),
  new THREE.MeshLambertMaterial({ color: 0xCFCFCF })
  );
  garage.position.set(7, 1.5, 0);
  maestro.add(garage);

  const garageRoof = new THREE.Mesh(
  new THREE.BoxGeometry(4.2, 0.3, 4.2),
  new THREE.MeshLambertMaterial({ color: 0x848484 })
  );
  garageRoof.position.set(7, 3.1, 0);
  maestro.add(garageRoof);

  const door = new THREE.Mesh(
  new THREE.BoxGeometry(3, 2, 0.1),
  new THREE.MeshLambertMaterial({ color: 0x5b3924 })
  );
  door.position.set(-3.5, 1, 3.05);
  maestro.add(door);

  const garageDoor = new THREE.Mesh(
  new THREE.BoxGeometry(3, 2.5, 0.1),
  new THREE.MeshLambertMaterial({ color: 0x87ceeb })
  );
  garageDoor.position.set(7, 1.25, 2.05);
  maestro.add(garageDoor);

  const addWindow = (x, y, z) => {
  const win = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 0.05),
  new THREE.MeshLambertMaterial({ color: 0x87ceeb })
  );
  win.position.set(x, y, z);
  maestro.add(win);
  };

  addWindow(-1, 2.5, 3.05);
  addWindow(1.5, 2.5, 3.05);
  addWindow(7, 2, -2.05); 

  const driveway = new THREE.Mesh(
  new THREE.PlaneGeometry(6, 10),
  new THREE.MeshLambertMaterial({ color: 0xCDCDCD })
  );
  driveway.rotation.x = -Math.PI / 2;
  driveway.position.set(7, 0.01, 6);
  maestro.add(driveway);

  const walkway = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 6),
  new THREE.MeshLambertMaterial({ color: 0xCDCDCD })
  );
  walkway.rotation.x = -Math.PI / 2;
  walkway.position.set(-3.5, 0.01, 6);
  maestro.add(walkway);

  maestro.position.set(x, y, z);

  if (world) {

  const sX = 3;
  const sY = 3;
  const sZ = 4;

  const body = new CANNON.Body({
  mass: 0, // Estático
  type: CANNON.Body.STATIC
  });
  body.position.set(x, y, z);

  const shapeCasa = new CANNON.Box(new CANNON.Vec3(
  (10 * sX) / 2, 
  (4 * sY) / 2, 
  (6 * sZ) / 2
  ));

  body.addShape(shapeCasa, new CANNON.Vec3(0, 2 * sY, 0));

  const shapeGarage = new CANNON.Box(new CANNON.Vec3(
  (4 * sX) / 2, 
  (3 * sY) / 2, 
  (4 * sZ) / 2
  ));

  body.addShape(shapeGarage, new CANNON.Vec3(7 * sX, 1.5 * sY, 0));

  world.addBody(body);
  }

  return maestro;
}