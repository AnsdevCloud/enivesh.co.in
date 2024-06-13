import fb from '../../Firebase/FireConfig';
const db = fb.firestore();
const database = fb.database();
const DeleteBlogBothDatabase = (bid) => {
    DeleteBlogFirestoreDatabase(bid);
}




const DeleteBlogFirestoreDatabase = (bid) => {


    db.collection("blogs").doc(bid).delete().then(() => {
        console.info("Document successfully deleted!");
        DeleteBlogRealtimeDatabase(bid);
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}


const DeleteBlogRealtimeDatabase = (bid) => {
    let dataRef = database.ref('blogs/' + bid);

    dataRef.remove().then(function () {
        console.info("Data deleted successfully!");
    }).catch(function (error) {

        console.error("Error deleting data:", error);

    });
}



export default DeleteBlogBothDatabase;
export { DeleteBlogFirestoreDatabase, DeleteBlogRealtimeDatabase };