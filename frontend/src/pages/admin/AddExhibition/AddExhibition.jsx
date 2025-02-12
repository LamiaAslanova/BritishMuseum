import React, { useContext, useRef } from 'react';
import './Add.css';
import { Formik } from 'formik';
import MainContext from '../../../context/context';
import axios from 'axios';

const AddExhibition = () => {
  const { setExhibitions, imageInputRef } = useContext(MainContext);

  return (
    <div className="add__ex">
      <div className="container add__ex__cont">
        <Formik
          initialValues={{ title: '', image: '', category: '', date: '', time: '', suppBy: '', additionalSuppBy: '', desc: '', additionalDesc: '', room: '', roomName: '', price: '' }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();

            if (values.image) {
              formData.append('image', values.image)
            }

            Object.keys(values).forEach((key) => {
              if (key !== 'image') {
                formData.append(key, values[key])
              }
            })

            axios.post('http://localhost:8080/exhibitions', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(res => {
                setExhibitions(res.data)
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
  )
}

export default AddExhibition;
