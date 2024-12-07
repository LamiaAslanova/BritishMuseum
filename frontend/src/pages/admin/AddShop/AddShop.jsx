import React, { useContext } from 'react'
import './AddShop.css'
import { Formik } from 'formik'
import MainContext from '../../../context/context'
import axios from 'axios'

const AddShop = () => {

    const { shop, setShop } = useContext(MainContext)

    return (
        <div className="add__sh">
            <div className="container add__sh__cont">
                <Formik
                    initialValues={{ title: '', image: '', additionalImage: '', category: '', price: '', about: '', dimensions: '', weight: '' }}
                    validate={values => { }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        const formData = new FormData();
                        Object.keys(values).forEach(key => {
                            formData.append(key, values[key]);
                        });

                        axios.post('http://localhost:8080/shop', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                            .then(res => {
                                setShop(res.data);
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
                        <form className='row form4' onSubmit={handleSubmit}>
                            <div className="col-6 form4__left">
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
                                    name="additionalImage"
                                    placeholder='Additional Image'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.additionalImage}
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
                                    type="number"
                                    name="price"
                                    placeholder='Price'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date}
                                />
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                            <div className="col-6 form4__right">
                                <input
                                    type='text'
                                    name="dimensions"
                                    placeholder='Dimensions'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.dimensions}
                                />
                                <input
                                    type="number"
                                    name="weight"
                                    placeholder='Weight'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.weight}
                                />
                                <textarea
                                    name="about"
                                    placeholder='About'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.about}
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AddShop