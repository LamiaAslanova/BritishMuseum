class User {
    constructor(firstName, lastName, userName, email, password, src, role) {
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.email = email
        this.password = password
        this.src = src
        // this.role = role
        this.isBanned = false
        this.banDate = null
        this.banCount = 0
        this.favorites = [];
    }
}
export default User