import Banner from 'components/Banner';
import Images from 'constants/images';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import PhotoList from 'features/Photo/components/PhotoList';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  console.log(photos);

  function handleOnPhotoEditClick(photo) {
    console.log(photo);
  }
  function handleOnPhotoRemoveClick(photo) {
    console.log(photo);
  }

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handleOnPhotoEditClick}
          onPhotoRemoveClick={handleOnPhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
