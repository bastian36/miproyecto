package ui.app

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import ui.home.HomeScreen
import ui.login.LoginScreen
import ui.register.RegistrarseScreen
import ui.recover.RecuperarPasswordScreen
import ui.principal.PrincipalScreen
import ui.profile.ProfileScreen
import ui.products.ProductsScreen
import ui.blog.BlogScreen
import ui.settings.SettingsScreen

@Composable
fun AppNavHost(
    navController: NavHostController = rememberNavController()
) {
    NavHost(
        navController = navController,
        startDestination = Route.HOME
    ) {
        composable(Route.HOME) {
            HomeScreen(
                onNavigateToLogin = { navController.navigate(Route.LOGIN) },
                onNavigateToRegister = { navController.navigate(Route.REGISTER) },
                onNavigateToRecover = { navController.navigate(Route.RECOVER) }
            )
        }
        
        composable(Route.LOGIN) {
            LoginScreen(
                onNavigateToHome = { 
                    navController.navigate(Route.PRINCIPAL) {
                        popUpTo(Route.HOME) { inclusive = true }
                    }
                }
            )
        }
        
        composable(Route.REGISTER) {
            RegistrarseScreen(
                onNavigateToLogin = { navController.navigate(Route.LOGIN) }
            )
        }
        
        composable(Route.RECOVER) {
            RecuperarPasswordScreen(
                onNavigateToLogin = { navController.navigate(Route.LOGIN) }
            )
        }
        
        composable(Route.PRINCIPAL) {
            PrincipalScreen(
                userName = "Bastian Guajardo",
                userEmail = "ba.guajardoh@duocuc.cl",
                onLogout = {
                    navController.navigate(Route.HOME) {
                        popUpTo(0) { inclusive = true }
                    }
                },
                onNavigateToProducts = {
                    navController.navigate(Route.PRODUCTS)
                },
                onNavigateToBlog = {
                    navController.navigate(Route.BLOG)
                },
                onNavigateToProfile = {
                    navController.navigate(Route.PROFILE)
                },
                onNavigateToSettings = {
                    navController.navigate(Route.SETTINGS)
                }
            )
        }
        
        composable(Route.PROFILE) {
            ProfileScreen(
                onLogout = {
                    navController.navigate(Route.HOME) {
                        popUpTo(0) { inclusive = true }
                    }
                },
                onNavigateToProducts = {
                    navController.navigate(Route.PRODUCTS)
                }
            )
        }
        
        composable(Route.PRODUCTS) {
            ProductsScreen()
        }
        
        composable(Route.BLOG) {
            BlogScreen()
        }
        
        composable(Route.SETTINGS) {
            SettingsScreen()
        }
    }
}