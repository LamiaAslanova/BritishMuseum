import React, { useContext } from 'react';
import './AddEvent.css';
import { Formik } from 'formik';
import MainContext from '../../../context/context';
import axios from 'axios';

const AddEvent = () => {
  const { events, setEvents } = useContext(MainContext);

  return (
    <div className="add__ev">
      <div className="container add__ev__cont">
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
          validate={values => { }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            Object.keys(values).forEach(key => {
              formData.append(key, values[key]);
            });

            axios.post('http://localhost:8080/events', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(res => {
                setEvents(res.data);
                resetForm();
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
            <form className='row form2' onSubmit={handleSubmit}>
              <div className="col-6 form2__left">
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
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
              <div className="col-6 form2__right">
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
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddEvent;
