
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import fb from "../../Firebase/FireConfig";
const db = fb.firestore();
const followUser = async (currentUserId, targetUserId) => {
    try {
        // Add targetUserId to currentUser's following list
        await updateDoc(doc(db, "users", currentUserId), {
            following: arrayUnion(targetUserId)
        });

        // Add currentUserId to targetUser's followers list
        await updateDoc(doc(db, "users", targetUserId), {
            followers: arrayUnion(currentUserId)
        });

    } catch (error) {
        console.error("Error following user: ", error);
    }
};

const unfollowUser = async (currentUserId, targetUserId) => {
    try {
        // Remove targetUserId from currentUser's following list
        await updateDoc(doc(db, "users", currentUserId), {
            following: arrayRemove(targetUserId)
        });

        // Remove currentUserId from targetUser's followers list
        await updateDoc(doc(db, "users", targetUserId), {
            followers: arrayRemove(currentUserId)
        });

    } catch (error) {
        console.error("Error unfollowing user: ", error);
    }
};


export { followUser, unfollowUser };