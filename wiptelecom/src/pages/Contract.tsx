export const Contract = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <object
        data="/contract.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Seu navegador não suporta visualização de PDF. Clique{" "}
          <a href="/contract.pdf" target="_blank" rel="noopener noreferrer">
            aqui
          </a>{" "}
          para baixar o arquivo.
        </p>
      </object>
    </div>
  );
};
