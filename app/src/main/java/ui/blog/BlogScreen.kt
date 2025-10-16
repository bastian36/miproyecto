package ui.blog

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import model.News
import cl.duoc.example.myapplication.R

@Composable
fun BlogScreen() {
    val news = remember {
        listOf(
            News(1, "Expansión de Catan: Navegantes Espaciales", "La clásica isla de Catan se aventura al espacio exterior con nuevas reglas y recursos cósmicos. ¡Prepárate para colonizar galaxias!", "15 de julio de 2024", "catan"),
            News(2, "Guía para optimizar tu PC con la ROG Strix", "Descubre cómo configurar un equipo de alto rendimiento y mantenerlo refrigerado para tus sesiones maratónicas de juego.", "10 de junio de 2024", "rog_strix"),
            News(3, "Reseña: HyperX Cloud II", "Probamos los populares auriculares HyperX y te contamos por qué son la elección favorita de muchos streamers.", "5 de mayo de 2024", "audifono_hyper_x"),
            News(4, "¿Vale la pena un mousepad RGB?", "Los mousepads iluminados se han vuelto tendencia. Revisamos sus ventajas y te ayudamos a decidir si necesitas uno.", "20 de abril de 2024", "mousepad")
        )
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                Brush.verticalGradient(
                    colors = listOf(
                        Color(0xFF1E1E2E),
                        Color(0xFF2A2A3E)
                    )
                )
            )
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "📰",
                    fontSize = 32.sp,
                    modifier = Modifier.padding(end = 12.dp)
                )
                Text(
                    text = "Gaming News",
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White
                )
            }

            LazyColumn(
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                items(news) { article ->
                    NewsCard(news = article)
                }
            }
        }
    }
}

@Composable
fun NewsCard(news: News) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 8.dp),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = Color(0xFF3D4465)
        )
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            val imageRes = when(news.imageUrl) {
                "catan" -> R.drawable.catan
                "rog_strix" -> R.drawable.rog_strix
                "audifono_hyper_x" -> R.drawable.audifono_hyper_x
                "mousepad" -> R.drawable.mousepad
                else -> R.drawable.logo_android
            }
            
            Image(
                painter = painterResource(id = imageRes),
                contentDescription = news.title,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(200.dp)
                    .clip(RoundedCornerShape(8.dp)),
                contentScale = ContentScale.Crop
            )
            
            Spacer(modifier = Modifier.height(12.dp))
            
            Text(
                text = news.date,
                fontSize = 12.sp,
                color = Color(0xFF00FF88)
            )
            
            Spacer(modifier = Modifier.height(8.dp))
            
            Text(
                text = news.title,
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )
            
            Spacer(modifier = Modifier.height(8.dp))
            
            Text(
                text = news.text,
                fontSize = 14.sp,
                color = Color.White.copy(alpha = 0.8f)
            )
        }
    }
}