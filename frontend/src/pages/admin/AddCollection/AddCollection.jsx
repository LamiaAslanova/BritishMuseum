import React, { useContext } from 'react'
import './AddCollection.css'
import { Formik } from 'formik'
import MainContext from '../../../context/context'
import axios from 'axios'

const AddCollection = () => {

  const { setCollections, imageInputRef } = useContext(MainContext)

  return (
    <div className="add__co">
      <div className="container add__co__cont">
        <Formik
          initialValues={{ title: '', image: '', category: '' }}
          validate={values => { }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();

            if (values.image) {
              formData.append('image', values.image)
            }

            Object.keys(values).forEach(key => {
              if (key !== 'image') {
                formData.append(key, values[key])
              }
            });

            axios.post('http://localhost:8080/collections', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(res => {
                setCollections(res.data)
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
            <form className='add__co__form' onSubmit={handleSubmit}>
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

export default AddCollection