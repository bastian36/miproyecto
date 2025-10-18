package ui.reminders

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Save
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import model.Reminder

@Composable
fun RemindersScreen(
    viewModel: RemindersViewModel = viewModel()
) {
    val reminders by viewModel.reminders.collectAsState()
    var messageText by remember { mutableStateOf("") }
    var editingReminder by remember { mutableStateOf<Reminder?>(null) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(
            text = "📅 Recordatorios",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,
            color = Color.Black,
            modifier = Modifier.padding(bottom = 16.dp)
        )

        // Cuadro de texto para mensaje
        OutlinedTextField(
            value = messageText,
            onValueChange = { messageText = it },
            label = { Text(if (editingReminder != null) "Editando recordatorio" else "Escribe tu recordatorio") },
            modifier = Modifier
                .fillMaxWidth()
                .height(120.dp),
            maxLines = 4
        )

        Spacer(modifier = Modifier.height(16.dp))

        // Botones Nuevo y Guardar
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Button(
                onClick = {
                    messageText = ""
                    editingReminder = null
                },
                modifier = Modifier.weight(1f),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Blue)
            ) {
                Icon(Icons.Default.Add, contentDescription = null)
                Spacer(Modifier.width(4.dp))
                Text("Nuevo")
            }

            Button(
                onClick = {
                    if (messageText.isNotBlank()) {
                        if (editingReminder != null) {
                            // Actualizar recordatorio existente
                            val updated = editingReminder!!.copy(
                                title = messageText.take(30),
                                description = messageText
                            )
                            viewModel.updateReminder(updated)
                        } else {
                            // Crear nuevo recordatorio
                            viewModel.addReminder(
                                title = messageText.take(30),
                                description = messageText,
                                date = java.text.SimpleDateFormat("dd/MM/yyyy", java.util.Locale.getDefault()).format(java.util.Date()),
                                time = java.text.SimpleDateFormat("HH:mm", java.util.Locale.getDefault()).format(java.util.Date())
                            )
                        }
                        messageText = ""
                        editingReminder = null
                    }
                },
                modifier = Modifier.weight(1f),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Green)
            ) {
                Icon(Icons.Default.Save, contentDescription = null)
                Spacer(Modifier.width(4.dp))
                Text("Guardar")
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Lista de recordatorios
        LazyColumn(
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            items(reminders) { reminder ->
                ReminderCard(
                    reminder = reminder,
                    onEdit = {
                        editingReminder = reminder
                        messageText = reminder.description
                    },
                    onDelete = {
                        viewModel.deleteReminder(reminder)
                        if (editingReminder?.id == reminder.id) {
                            editingReminder = null
                            messageText = ""
                        }
                    }
                )
            }
        }
    }
}

@Composable
fun ReminderCard(
    reminder: Reminder,
    onEdit: () -> Unit,
    onDelete: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(
            containerColor = Color.White
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Text(
                text = reminder.title,
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold,
                color = Color.Black
            )
            if (reminder.description != reminder.title) {
                Text(
                    text = reminder.description,
                    fontSize = 14.sp,
                    color = Color.Black.copy(alpha = 0.7f),
                    maxLines = 2
                )
            }
            Text(
                text = "${reminder.date} - ${reminder.time}",
                fontSize = 12.sp,
                color = Color.Blue
            )
            
            Spacer(modifier = Modifier.height(8.dp))
            
            // Botones Editar y Eliminar
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Button(
                    onClick = onEdit,
                    modifier = Modifier.weight(1f),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF2196F3))
                ) {
                    Text("Editar", color = Color.White)
                }
                
                Button(
                    onClick = onDelete,
                    modifier = Modifier.weight(1f),
                    colors = ButtonDefaults.buttonColors(containerColor = Color.Red)
                ) {
                    Text("Eliminar", color = Color.White)
                }
            }
        }
    }
}

