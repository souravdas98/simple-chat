const users = []

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return {
            error: "username and room are required!"
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username

    })

    //vaidate username
    if(existingUser){
        return {
            error: "username already use!"
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
        
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    //index -> which index you want to remove
    //1 -> number of element you want to remove

    if(index !== -1){
        return users.splice(index, 1)[0]
    }


}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
// addUser({
//     id : 22,
//     username : "somu",
//     room : "new delhi"
// })

// addUser({
//     id : 23,
//     username : "hari",
//     room : "new delhi"
// })

// addUser({
//     id : 24,
//     username : "somu",
//     room : "kolkata"
// })

// const user = getUser(23)
// console.log(user);

// const userList = getUsersInRoom("new delhi")
// console.log(userList);