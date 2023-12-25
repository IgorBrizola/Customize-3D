import { proxy } from "valtio";

const state = proxy({
  intro:true,
  color:'#2c1a1f',
  isLogoTexture: true,
  isFullTexture:false,
  logoDecal: './prin.png',
  fullDecal: './11.jpg',
});

export default state