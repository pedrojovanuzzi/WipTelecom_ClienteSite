import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function PoliticsEmail() {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
              Política de Privacidade Email
            </h2>
            <p className="mt-6 text-lg/8 text-gray-200">
            A Wip Telecom leva sua privacidade a sério. Esta Política de Privacidade de E-mails descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais relacionadas a comunicações por e-mail.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl text-base/7 text-gray-300 lg:mx-0 lg:max-w-none">
            <h3 className="text-2xl font-semibold text-gray-200">
                Informações Coletadas
            </h3>
            <p className="mt-4">
            Quando você se comunica conosco via e-mail ou assina para receber nossas comunicações, podemos coletar as seguintes informações:
            </p>
            <li>
            Nome
            </li>
            <li>
            Endereço de e-mail
            </li>
            <li>
            Informações adicionais que você fornecer voluntariamente ao se comunicar conosco ou responder aos nossos e-mails.
            </li>
            <h3 className="text-2xl font-semibold text-gray-200 mt-8">
            Uso das Informações
            </h3>
            <p className="mt-4">
            As informações coletadas são usadas para:
            </p>
            <li>Enviar e-mails transacionais, como confirmações de pedidos, faturas e boletos</li>
            <li>Enviar e-mails de notificação ou informativos, como atualizações sobre nossos produtos, serviços ou políticas</li>
            <li>Responder a perguntas e fornecer suporte ao cliente</li>
            <li>Personalizar sua experiência e fornecer conteúdo relevante</li>
            <li>Cumprir com obrigações legais ou regulatórias</li>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
