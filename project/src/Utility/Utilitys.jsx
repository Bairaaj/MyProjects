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
    listItems.push(<img key={image.name} src={image.src} alt={image.name} width="150" height="150" />)
  });
  return listItems;
}




///Sending A message to my personal email (not functional yet)


//
const InfiniteImagesScroll = () =>
{
  let Images = HtmlArray();
  return (
    <div className="infinite-scroll-container">
      <div className="infinite-scroll-content">
        {Images.map((image, index) => 
        (
          <img className="infinite-scroll-item" key={index} src ={image.props.src} width="150" height="150"/>
        ))}
        {Images.map((img, index) => (
          <img key={`dup-${index}`} src={img} alt="" />
        ))}
      </div>
    </div>
  );
}
export {InfiniteImagesScroll};

export default HtmlArray;