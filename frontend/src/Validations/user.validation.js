import * as Yup from "yup";
const userValidation = Yup.object().shape({
    firstName: Yup.string().min(2).required(),
    lastName: Yup.string().min(2).required(),
    userName: Yup.string().min(2).required(),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "password regex failed").required(),
    confirm__password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().email().required(),
    src: Yup.mixed()
        .test("fileSize", "File too big, can't exceed 5MB", (file) => {
            return file ? file.size <= 5_000_000 : true;
        })
        .test("fileType", "Please provide a supported file type", (file) => {
            return file ? file.type.includes('image/') : true;
        })
})
export default userValidation