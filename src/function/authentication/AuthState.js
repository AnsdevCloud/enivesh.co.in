import fb from "../../Firebase/FireConfig";

const auth = fb.auth();

const monitorAuthState = (callback) => {
    auth.onAuthStateChanged(auth, (user) => {
        callback(user ? user : null);
    });
};

export default monitorAuthState