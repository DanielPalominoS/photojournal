import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries';

class AlbumMaker extends React.Component {

  render() {
    console.log(entries);

    return (
      <div className="flex-container">
        {
          entries.itemlist.map((photo) => {
            return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} />
          }
          )
        }
        {/* <PhotoEntry src="Popayan.JPG" location="Popayan Colombia" caption="Colombian religious capital" />
        <PhotoEntry src="Cartagena.JPG" location="Cartagena, Colombia" caption="The walled city" />
        <PhotoEntry src="VLeiva.JPG" location="Villa de Leyva, Boyaca, Colombia" caption="Beautiful downtown" />
        <PhotoEntry src="ECI.JPG" location="Bogotá, Colombia" caption="Top engineering university in Colombia" /> */}
        {/* <PhotoEntry src="hawaii.JPG" location="Kona, Hawaii, USA" caption="Deep Thought" />
        <PhotoEntry src="london.JPG" location="London, UK" caption="Trafalgar Square" /> */}
      </div>
    )
  }
}

export default AlbumMaker;
