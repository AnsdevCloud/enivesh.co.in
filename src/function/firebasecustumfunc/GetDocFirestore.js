import fb from "../../Firebase/FireConfig";
import ViewUpdateBoth from "./ViewUpdateBoth";


const db = fb.firestore();
const GetSingleBlogFiretore = async (bid) => {

    const docRef = db.collection("blogs").doc(bid);
    let blog = docRef.get().then((doc) => {
        if (doc.exists) {
            let data = {
                id: doc.id,
                ...doc.data()
            }
            ViewUpdateBoth(bid, data.views);
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