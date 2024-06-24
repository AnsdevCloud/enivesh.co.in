

import fb from '../../Firebase/FireConfig';
const db = fb.firestore();



const AddBlogBothDatabase = (contents) => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

    if (contents === undefined) {
        console.info("Send Document as a props ");

    } else {
        if (contents.title && contents?.content) {
            db.collection("blogs").add({
                author: user,
                title: contents?.title,
                content: contents?.content,
                views: 0,
                likes: [],
                comments: [],
                timestamp: new Date().getTime(),
                ...contents,

            })
                .then((docRef) => {

                    if (docRef.id) {
                        writeUserData(docRef.id, contents, user)
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


    return 1;

}
function writeUserData(userId, contents, user) {
    fb.database().ref('blogs/' + userId).set({
        author: user,
        title: contents.title,
        bid: userId,
        views: 0,
        category: contents?.category,
        timestamp: new Date().getTime(),
        coverImageUrl: contents?.coverImageUrl ? contents?.coverImageUrl : null


    });
    alert("Blog Posted ❤️ , Navigating..... ");



}

export default AddBlogBothDatabase
