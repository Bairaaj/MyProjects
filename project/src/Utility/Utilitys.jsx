import React, {useState} from 'react';

// Dynamically load all images from the assets/images folder
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,gif,svg}', { eager: true } );

// Create an array of image objects (name and path)
const imageArray = Object.keys(images).map((path) => ({
  name: path.replace('./src/assets/images/', ''), // Get the file name
  src: images[path].default || images[path], // Get the image path
}));

const HtmlArray = () =>{
  let listItems = [];
  imageArray.forEach(image => {
    listItems.push(<img key={image.name} src={image.src} alt={image.name} width="100" height="100" />)
  });
  return listItems;
}




///Sending A message to my personal email (not functional yet)





export default HtmlArray;