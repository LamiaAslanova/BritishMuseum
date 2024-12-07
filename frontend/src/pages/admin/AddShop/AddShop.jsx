import React, { useContext } from 'react'
import './AddShop.css'
import { Formik } from 'formik'
import MainContext from '../../../context/context'
import axios from 'axios'

const AddShop = () => {

    const { setShop } = useContext(MainContext)

    return (
        <div className="add__sh">
            <div className="container add__sh__cont">
                <Formik
                    initialValues={{ title: '', images: [], category: '', price: '', about: '', dimensions: '', weight: '' }}
                    validate={values => { }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        const formData = new FormData();

                        if (values.images) {
                            values.images.forEach((file) => {
                                formData.append('images', file)
                            })
                        }

                        Object.keys(values).forEach((key) => {
                            if (key !== 'images') {
                                formData.append(key, values[key])
                            }
                        });

                        axios.post('http://localhost:8080/shop', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                            .then(res => {
                                setShop(res.data);
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
                                    name="images"
                                    placeholder='Image'
                                    onChange={(e) => {
                                        setFieldValue("images", Array.from(e.currentTarget.files));
                                    }}
                                    multiple
                                    accept='image/*'
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