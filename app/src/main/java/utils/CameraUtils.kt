package utils

import android.content.Context
import android.net.Uri
import androidx.activity.compose.ManagedActivityResultLauncher
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.core.content.FileProvider
import java.io.File
import java.text.SimpleDateFormat
import java.util.*

@Composable
fun rememberCameraLauncher(
    onImageCaptured: (Uri) -> Unit
): Pair<ManagedActivityResultLauncher<Uri, Boolean>, () -> Unit> {
    val context = androidx.compose.ui.platform.LocalContext.current
    
    val cameraLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.TakePicture()
    ) { success ->
        if (success) {
            // La imagen se guardó en el URI proporcionado
        }
    }
    
    val imageUri = remember {
        createImageUri(context)
    }
    
    val launchCamera = {
        cameraLauncher.launch(imageUri)
        onImageCaptured(imageUri)
    }
    
    return Pair(cameraLauncher, launchCamera)
}

private fun createImageUri(context: Context): Uri {
    val timeStamp = SimpleDateFormat("yyyyMMdd_HHmmss", Locale.getDefault()).format(Date())
    val imageFile = File(context.filesDir, "IMG_${timeStamp}.jpg")
    return FileProvider.getUriForFile(
        context,
        "${context.packageName}.fileprovider",
        imageFile
    )
}