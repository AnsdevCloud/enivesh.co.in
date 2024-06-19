import fb from "../../Firebase/FireConfig";



const ViewUpdateBoth = (bid, value) => {
    const docRef = fb.firestore().collection("blogs").doc(bid);
    docRef.update({ views: value + 1 })
    fb.database().ref(`/blogs/${bid}`).update({ views: value + 1 }).then(() => {
    }).catch((error) => {
        console.error(error);
    });

}

export default ViewUpdateBoth