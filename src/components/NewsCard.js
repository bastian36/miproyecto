export default function NewsCard({ thumb, date, title, text, onClick }) {
  return (
    <article className="news-card">
      {thumb && <img className="news-thumb" src={thumb} alt={title} />}
      <div className="news-body">
        <p className="news-date">{date}</p>
        <h2 className="news-title">{title}</h2>
        <p className="news-text">{text}</p>
        <button className="btn btn-primary" onClick={onClick}>Leer más</button>
      </div>
    </article>
  );
}
