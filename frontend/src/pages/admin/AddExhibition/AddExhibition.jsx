import React, { useContext } from 'react';
import './AddExhibition.css';
import { Formik } from 'formik';
import MainContext from '../../../context/context';
import axios from 'axios';

const AddExhibition = () => {
  const { exhibitions, setExhibitions } = useContext(MainContext);

  return (
    <div className="add__ex">
      <div className="container add__ex__cont">
        <Formik
          initialValues={{ title: '', image: '', category: '', date: '', time: '', suppBy: '', additionalSuppBy: '', desc: '', additionalDesc: '', room: '', roomName: '', price: '' }}
          validate={values => { }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            Object.keys(values).forEach(key => {
              formData.append(key, values[key]);
            });

            axios.post('http://localhost:8080/exhibitions', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(res => {
                setExhibitions(res.data);
                // resetForm();
              })
              .catch(err => {
                console.error(err);
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className='row form' onSubmit={handleSubmit}>
              <div className="col-6 form__left">
                <input
                  type="text"
                  name="title"
                  placeholder='Title'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <input
                  type="file"
                  name="image"
                  placeholder='Image'
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                  onBlur={handleBlur}
                />
                <input
                  type="text"
                  name="category"
                  placeholder='Category'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                />
                <input
                  type="text"
                  name="date"
                  placeholder='Date'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                />
                <input
                  type="text"
                  name="time"
                  placeholder='Time'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.time}
                />
                <textarea
                  name="desc"
                  placeholder='Description'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.desc}
                />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
              <div className="col-6 form__right">
                <input
                  type="text"
                  name="suppBy"
                  placeholder='Supported by'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.suppBy}
                />
                <input
                  type="text"
                  name="additionalSuppBy"
                  placeholder='Additional supported by'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.additionalSuppBy}
                />
                <input
                  type="text"
                  name="room"
                  placeholder='Room'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.room}
                />
                <input
                  type="text"
                  name="roomName"
                  placeholder='Room name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.roomName}
                />
                <input
                  type="number"
                  name="price"
                  placeholder='Ticket price'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                />
                <textarea
                  name="additionalDesc"
                  placeholder='Additional description'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.additionalDesc}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddExhibition;
