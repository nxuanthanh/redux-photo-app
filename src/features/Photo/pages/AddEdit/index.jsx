import { addPhoto, updatePhoto } from 'app/photoSlice';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import './styles.scss';

AddEditPage.propTypes = {};

const randomId = () => {
  return Math.trunc(Math.random() * 1000);
};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) => state.photos.find((photo) => photo.id === +photoId));

  const initialValues = isAddMode ? { title: '', categoryId: null, photo: '' } : editedPhoto;

  function handleOnSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          values.id = randomId();
          const action = addPhoto(values);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        navigate('/photos');

        resolve(true);
      }, 2000);
    });
  }

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleOnSubmit} initialValues={initialValues} isAddMode={isAddMode} />
      </div>
    </div>
  );
}
export default AddEditPage;
