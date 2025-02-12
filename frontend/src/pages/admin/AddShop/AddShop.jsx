import React, { useContext } from 'react'
import '../AddExhibition/Add.css'
import { Formik } from 'formik'
import MainContext from '../../../context/context'
import axios from 'axios'

const AddShop = () => {

    const { setShop, imageInputRef } = useContext(MainContext)

    return (
        <div className="add__ex">
            <div className="container add__ex__cont">
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

export default AddShop