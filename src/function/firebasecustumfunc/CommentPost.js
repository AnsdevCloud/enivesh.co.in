
import { doc, updateDoc, arrayUnion, serverTimestamp, FieldValue, Timestamp, arrayRemove } from "firebase/firestore";
import fb from "../../Firebase/FireConfig";
const db = fb.firestore();
const addComment = async (postId, userId, text) => {
    try {
        const comment = {
            userId,
            text,
            timestamp: new Date().getTime()
        };
        await updateDoc(doc(db, "blogs", postId), {
            comments: arrayUnion(comment)
        });

    } catch (error) {
        console.error("Error adding comment: ", error);
    }
};
const deleteComment = async (postId, comment) => {
    try {
        const postRef = doc(db, "blogs", postId);
        await updateDoc(postRef, {
            comments: arrayRemove(comment)
        });
    } catch (error) {
        console.error("Error deleting comment: ", error);
    }
};
export { addComment, deleteComment }
