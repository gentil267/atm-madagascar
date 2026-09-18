export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <div
          style={{
            padding: "4rem 2rem",
            textAlign: "center",
            fontFamily: "sans-serif",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "5rem", marginBottom: "1rem", color: "#2E7D32" }}>
            404
          </h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#333" }}>
            Page introuvable
          </p>
          <a
            href="/fr"
            style={{
              background: "#2E7D32",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "9999px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            ← Retour à l'accueil
          </a>
        </div>
      </body>
    </html>
  );
}