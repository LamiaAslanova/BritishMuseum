import React, { useContext, useRef } from 'react';
import '../AddExhibition/Add.css'
import { Formik } from 'formik';
import MainContext from '../../../context/context';
import axios from 'axios';

const AddEvent = () => {
  const { setEvents, imageInputRef } = useContext(MainContext);

  return (
    <div className="add__ex">
      <div className="container add__ex__cont">
        <Formik
          initialValues={{
            title: '',
            image: '',
            category: '',
            type: '',
            date: '',
            time: '',
            age: '',
            miniDesc: '',
            desc: '',
            additionalDesc: '',
            place: '',
            price: ''
          }}

          onSubmit={(values, { setSubmitting, resetForm }) => {

            const formData = new FormData();

            Object.keys(values).forEach(key => {
              if (key !== 'image') {
                formData.append(key, values[key])
              }
            })

            if (values.image) {
              formData.append('image', values.image)
            }

            axios.post('http://localhost:8080/events', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(res => {
                setEvents(res.data);
                resetForm()
                imageInputRef.current.value = ''
              })
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting
          }) => (
            <form className='add__ex__form' onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder='Title'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <input
                ref={imageInputRef}
                type="file"
                name="image"
                placeholder='Image'
                onChange={(e) => {
                  setFieldValue("image", e.currentTarget.files[0]);
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
                name="type"
                placeholder='Type'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.type}
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
              <input
                type="text"
                name="place"
                placeholder='Place'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.place}
              />
              <input
                type="text"
                name="age"
                placeholder='Age'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
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
                name="miniDesc"
                placeholder='Mini description'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.miniDesc}
              />
              <textarea
                name="desc"
                placeholder='Description'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desc}
              />
              <textarea
                name="additionalDesc"
                placeholder='Additional description'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.additionalDesc}
              />
              <button type="submit" onClick={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddEvent;
