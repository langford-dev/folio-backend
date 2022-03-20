const ADD_USER = async (payload) => {

    try {
        await new UserModel(payload).save()
        return [true, "template created"]

    } catch (e) {
        return [false, e]
    }
}

module.exports = { ADD_USER }