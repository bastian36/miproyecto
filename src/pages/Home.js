import Banner from "../components/Banner";
import NewsCard from "../components/NewsCard";
import catan from "../img/imgsProductos/catan.png"; // thumb de la noticia

export default function Home() {
  return (
    <>
      <Banner />

      <section className="page">
        <h1 className="title">Últimas Noticias</h1>

        <NewsCard
          thumb={catan}
          date="15 de julio de 2024"
          title="Expansión de Catan: Navegantes Espaciales"
          text="La clásica isla de Catan se aventura al espacio exterior con nuevas reglas y recursos cósmicos. ¡Prepárate para colonizar galaxias!"
          onClick={() => alert("Abrir detalle de noticia…")}
        />
      </section>
    </>
  );
}
