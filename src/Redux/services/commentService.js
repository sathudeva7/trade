export const commentService = {
    getComments: getComments
};

async function getComments(signalId) {
    console.log('kk', signalId)
    try {
        //let comments = await fetch(`http://localhost:8080/api/v1/signal/${signalId}/comments`)
        let comments = [{
            id: 1,
            signalId: 1,
            comment: "This is a comment",
            createdAt: "2019-06-12T12:00:00.000Z",
            user: "Thev"
        },
        {
            id: 2,
            signalId: 1,
            comment: "This is a comment 2",
            createdAt: "2021-03-14T11:10:10.000Z",
            user: "Ananth"
        },
        {
            id: 3,
            signalId: 0,
            comment: "This is a comment 3",
            createdAt: "2021-03-14T11:10:10.000Z",
            user: "neon"
        },
        {
            id: 4,
            signalId: 2,
            comment: "This is a comment 4",
            createdAt: "2021-03-14T11:10:10.000Z",
            user: "Pei"
        }]
        return comments.filter(comment => comment.signalId === signalId);
    } catch (error) {
        console.log(error);
    }
}