import NewsCard from "../components/NewsCard";
import catan from "../img/imgsProductos/Catan.png";
import rog from "../img/imgsProductos/Rog Strix.png";
import headset from "../img/imgsProductos/Audifono Hyper X.png";
import mousepad from "../img/imgsProductos/MousePad.png";

export default function Blog() {
  return (
    <section className="page">
      <h1 className="title">Últimas Noticias</h1>
      
      <div className="blog-grid">
        <NewsCard
          thumb={catan}
          date="15 de julio de 2024"
          title="Expansión de Catan: Navegantes Espaciales"
          text="La clásica isla de Catan se aventura al espacio exterior con nuevas reglas y recursos cósmicos. ¡Prepárate para colonizar galaxias!"
          onClick={() => alert("Leer más...")}
        />
        
        <NewsCard
          thumb={rog}
          date="10 de junio de 2024"
          title="Guía para optimizar tu PC con la ROG Strix"
          text="Descubre cómo configurar un equipo de alto rendimiento y mantenerlo refrigerado para tus sesiones maratónicas de juego."
          onClick={() => alert("Leer más...")}
        />
        
        <NewsCard
          thumb={headset}
          date="5 de mayo de 2024"
          title="Reseña: HyperX Cloud II"
          text="Probamos los populares auriculares HyperX y te contamos por qué son la elección favorita de muchos streamers."
          onClick={() => alert("Leer más...")}
        />
        
        <NewsCard
          thumb={mousepad}
          date="20 de abril de 2024"
          title="¿Vale la pena un mousepad RGB?"
          text="Los mousepads iluminados se han vuelto tendencia. Revisamos sus ventajas y te ayudamos a decidir si necesitas uno."
          onClick={() => alert("Leer más...")}
        />
      </div>
    </section>
  );
}
