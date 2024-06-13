
import fb from '../../Firebase/FireConfig';
const db = fb.firestore();



const AddBlogBothDatabase = (contents) => {

    if (contents === undefined) {
        console.info("Send Document as a props ");

    } else {
        if (contents.title && contents?.content) {
            db.collection("blogs").add({
                name: contents?.title,
                content: contents?.content
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
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

    });
}

export default AddBlogBothDatabase
