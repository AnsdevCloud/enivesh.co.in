
import fb from '../../Firebase/FireConfig';
const db = fb.firestore();



const AddBlogBothDatabase = (contents) => {

    if (contents === undefined) {
        console.info("Send Document as a props ");

    } else {
        if (contents.title && contents?.content) {
            db.collection("blogs").add({
                title: contents?.title,
                content: contents?.content,
                views: 0,
                likes: [],
                comments: [],
                ...contents,
                // createdAt: fb.firestore.
                // servertimestamp: fb.firestore.FieldValue.serverTimestamp()
            })
                .then((docRef) => {
                    // console.log("Document written with ID: ", docRef.id);
                    const docRefd = db.collection("blogs").doc(docRef.id)
                    if (docRef.id) {


                        writeUserData(docRef.id, contents)
                    }
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        } else {
            alert("Documents not found ");
            console.info("Title is mendetary");
        }
    }




}
function writeUserData(userId, contents) {
    fb.database().ref('blogs/' + userId).set({
        title: contents.title,
        bid: userId,
        coverImageUrl: contents?.coverImageUrl ? contents?.coverImageUrl : null
        // timestamp: fb.firestore.Timestamp.fromDate(new Date()),
        // servertimestamp: fb.firestore.FieldValue.serverTimestamp()

    });
}

export default AddBlogBothDatabase
