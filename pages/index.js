import Model3d from '../components/Model';
import Gallery from '../components/gallery';
import DataForm from '../libs/DataForm';
import Header from '../sections/Header';
import { LineStat } from './info';
import React from "react";
export default function HomePage() {
  return (
    <>
      <Header />
      <Gallery />
      {/* <Model3d /> */}
      <LineStat />
    </>
  );
}
