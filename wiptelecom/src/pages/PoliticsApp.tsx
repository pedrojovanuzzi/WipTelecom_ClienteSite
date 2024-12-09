import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function PoliticsApp() {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
              Política de Privacidade App
            </h2>
            <p className="mt-6 text-lg/8 text-gray-200">
              Esta Política de Privacidade descreve como o aplicativo respeita
              e protege a privacidade dos seus usuários.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl text-base/7 text-gray-300 lg:mx-0 lg:max-w-none">
            <h3 className="text-2xl font-semibold text-gray-200">
              Coleta de Informações
            </h3>
            <p className="mt-4">
              O aplicativo não coleta, solicita ou armazena qualquer tipo de
              informação pessoal, como login, senha, dados financeiros ou
              localização.
            </p>

            <h3 className="text-2xl font-semibold text-gray-200 mt-8">
              Permissões do Aplicativo
            </h3>
            <p className="mt-4">
              Não são requeridas permissões adicionais para utilizar o serviço.
              O uso é anônimo e livre de rastreamento.
            </p>
            <h3 className="text-2xl font-semibold text-gray-200 mt-8">
              Contato
            </h3>
            <p className="mt-4">
              Para dúvidas ou sugestões, entre em contato com nossa equipe por
              meio do suporte no aplicativo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
