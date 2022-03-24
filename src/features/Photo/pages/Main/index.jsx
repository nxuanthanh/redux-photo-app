import { removePhoto } from 'app/photoSlice';
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photos = useSelector((state) => state.photos);
  console.log(photos);

  function handleOnPhotoEditClick(photo) {
    const editPhotoUrl = `/photos/${photo.id}`;
    navigate(editPhotoUrl);
  }
  function handleOnPhotoRemoveClick(photo) {
    const action = removePhoto(photo.id);

    dispatch(action);
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
