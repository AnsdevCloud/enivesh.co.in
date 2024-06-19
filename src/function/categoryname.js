import { v4 } from "uuid";

const categories = [
    {
        cid: v4(),
        name: "life insurance",
        subname: [
            {
                scid: v4(),
                name: "term insurance"
            },
            {
                scid: v4(),
                name: "saving plan"
            },
            {
                scid: v4(),
                name: "ulip plan"
            }
        ]
    },
    {
        cid: v4(),
        name: "health insurance",
        subname: [
            {
                scid: v4(),
                name: "mediclaim"
            },
            {
                scid: v4(),
                name: "critical illness"
            },
            {
                scid: v4(),
                name: "personal accident policy"
            }
        ]
    },
]

export default categories