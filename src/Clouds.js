import * as THREE from 'three';

export default class Clouds {
  constructor(scene) {
    this.scene = scene;
    this.clouds = [];
    this.initClouds();
  }

  initClouds() {
    const cloudTexture = new THREE.TextureLoader().load('src/assets/cloudTexture.png'); // Provide the path to your cloud texture
    const cloudMaterial = new THREE.SpriteMaterial({ map: cloudTexture, transparent: true });

    for (let i = 0; i < 50; i++) {
      const cloud = new THREE.Sprite(cloudMaterial);
      cloud.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      cloud.scale.set(1, 1, 1);
      this.scene.add(cloud);
      this.clouds.push(cloud);
    }
  }

  update() {
    this.clouds.forEach(cloud => {
      cloud.position.x += 0.01 * (Math.random() - 0.5);
      cloud.position.y += 0.01 * (Math.random() - 0.5);
    });
  }
}
