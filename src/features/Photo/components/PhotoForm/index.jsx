import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

let schema = yup.object().shape({
  title: yup.string().required('This field is required'),

  categoryId: yup.number().required('This field is required').nullable(),
  photo: yup.string().when('categoryId', {
    is: 1,
    then: yup.string().required('This field is required'),
    otherwise: yup.string().notRequired(),
  }),
});

function PhotoForm(props) {
  const { initialValues, isAddMode } = props;

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={props.onSubmit}>
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField name="photo" component={RandomPhotoField} label="Photo" />

            <FormGroup>
              <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                {isSubmitting && <Spinner size="sm" />}{' '}
                {isAddMode ? 'Add to album' : 'Update your photo'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
