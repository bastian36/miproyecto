package auth

import model.User

// Comentado temporalmente hasta agregar Firebase
class AuthRepository {
    suspend fun login(email: String, pass: String): User? {
        // Simulación temporal - usuario de prueba
        return if (email == "ba.guajardoh@duocuc.cl" && pass == "bastian1988") {
            User(
                uid = "bastian123", 
                email = email,
                name = "Bastian Guajardo"
            )
        } else if (email.isNotEmpty() && pass.isNotEmpty()) {
            User(
                uid = "user123", 
                email = email,
                name = "Usuario Demo"
            )
        } else null
    }

    fun logout() { /* TODO */ }
    fun currentUser(): User? = null
}
