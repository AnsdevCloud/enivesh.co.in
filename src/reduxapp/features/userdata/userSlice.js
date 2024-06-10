import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userinfo: [],
    modelForm: false,
    dslpin: "",
    otp: "",
    daclDoc: "",
    insuranceForm: "",
    quikInsuranceForm: "",
    mailupdate: {
        whatsapp: false,
        sent: false
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.userinfo.push(action.payload)
        },
        hadleModelForm: (state, action) => {
            state.modelForm = action.payload;
        },
        setDslPin: (state, action) => {
            state.dslpin = action.payload;
        },
        setOTP: (state, action) => {
            state.otp = action.payload;
        },
        setDaclDoc: (state, action) => {
            state.daclDoc = action.payload;
        },
        setInsForm: (state, action) => {
            state.insuranceForm = action.payload;
        },
        setQuikInsForm: (state, action) => {
            state.quikInsuranceForm = action.payload;
        },
        setWhatsAppMail: (state, action) => {
            state.mailupdate = action.payload;
        }
    },
})

export const { adduser, hadleModelForm, setDslPin, setOTP, setDaclDoc, setInsForm, setQuikInsForm, setWhatsAppMail } = userSlice.actions

export default userSlice.reducer