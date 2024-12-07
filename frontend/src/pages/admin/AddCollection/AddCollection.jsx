import React, { useContext } from 'react'
import './AddCollection.css'
import { Formik } from 'formik'
import MainContext from '../../../context/context'
import axios from 'axios'

const AddCollection = () => {

  const { collections, setCollections } = useContext(MainContext)

  return (
    <div className="add__co">
      <div className="container add__co__cont">
        <Formik
          initialValues={{ title: '', image: '', category: '' }}
          validate={values => { }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            Object.keys(values).forEach(key => {
              formData.append(key, values[key]);
            });

            axios.post('http://localhost:8080/collections', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(res => {
                setCollections(res.data);
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
            <form className='row form3' onSubmit={handleSubmit}>
              <div className="col-5 form3__col">
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
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddCollection