
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import fb from "../../Firebase/FireConfig";
const db = fb.firestore();
const likePost = async (postId, userId) => {
    try {
        await updateDoc(doc(db, "blogs", postId), {
            likes: arrayUnion(userId)
        });
    } catch (error) {
        console.error("Error liking post: ", error);
    }
};

const unlikePost = async (postId, userId) => {
    try {
        await updateDoc(doc(db, "blogs", postId), {
            likes: arrayRemove(userId)
        });
    } catch (error) {
        console.error("Error unliking post: ", error);
    }
};

export { likePost, unlikePost };
