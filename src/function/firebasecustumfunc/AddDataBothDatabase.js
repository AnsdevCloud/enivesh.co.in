

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

const EditBlogUpdateBothDatabase = (bid, isEditData, contents) => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

    if (contents === undefined) {
        console.info("Send Document as a props ");

    } else {
        if (contents.title && contents?.content) {
            db.collection("blogs").doc(bid).set({
                author: user,
                title: contents?.title,
                content: contents?.content,
                views: isEditData?.views ? isEditData?.views : 0,
                timestamp: new Date().getTime(),
                ...contents,
            })
                .then(() => {
                    console.info("Document successfully written!");
                    if (bid) {
                        writeUserData(bid, contents, user, isEditData)
                    }
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });

        } else {
            alert("Documents not found ");
            console.info("Title is mendetary");
        }
    }


    return 1;
}


function writeUserData(userId, contents, user, isEditData) {
    fb.database().ref('blogs/' + userId).set({
        author: user,
        title: contents.title,
        bid: userId,
        views: isEditData?.views ? isEditData?.views : 0,
        category: contents?.category,
        timestamp: new Date().getTime(),
        coverImageUrl: contents?.coverImageUrl ? contents?.coverImageUrl : null


    });
    alert("Blog Posted ❤️ , Navigating..... ");



}


export { EditBlogUpdateBothDatabase }
export default AddBlogBothDatabase
