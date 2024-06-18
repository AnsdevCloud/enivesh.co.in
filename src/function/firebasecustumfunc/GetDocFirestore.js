import fb from "../../Firebase/FireConfig";


const db = fb.firestore();
const GetSingleBlogFiretore = async (bid) => {

    const docRef = db.collection("blogs").doc(bid);
    let blog = docRef.get().then((doc) => {
        if (doc.exists) {
            let data = {
                id: doc.id,
                ...doc.data()
            }
            return data
        } else {
            return null;
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


    return await blog
}

export default GetSingleBlogFiretore;