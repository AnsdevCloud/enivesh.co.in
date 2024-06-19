import fb from "../../Firebase/FireConfig";


const ReadBlogRealtimeDatabase = async () => {
    let data;
    var blogsRef = fb.database().ref('blogs');
    blogsRef.on('value', (snapshot) => {
        var resData = snapshot.val();
        if (resData) {
            let blogsArr = Object.keys(resData).map((key) => {
                return {
                    id: key,
                    ...resData[key],
                };
            });

            data = blogsArr

        }


    });

    return data;

}

export { ReadBlogRealtimeDatabase };