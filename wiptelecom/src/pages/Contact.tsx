import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";
import {
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

import { FaRobot } from "react-icons/fa";


export const Contact = () => {
  return (
    <div className="bg-gray-900">
      <NavBar />
      <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
            Entre em Contato
          </h2>
        </div>
        <div className="mx-auto mt-20 max-w-lg space-y-16">
          <div className="flex gap-x-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <ChatBubbleLeftRightIcon
                aria-hidden="true"
                className="size-6 text-white"
              />
            </div>
            <div>
              <h3 className="text-base/7 font-semibold text-gray-200">
                Whatsapp
              </h3>
              <p className="mt-2 text-base/7 text-gray-300">
                Mande uma mensagem em Nosso Whatsapp!
              </p>
              <p className="mt-4 text-sm/6 font-semibold">
                <a href="https://api.whatsapp.com/send/?phone=5514982332963&text=%22Ol%C3%A1,%20estou%20entrando%20em%20Contato%20pelo%20Site%20de%20Voc%C3%AAs%22&type=phone_number&app_absent=0" className="text-indigo-400">
                  Contatar <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <ComputerDesktopIcon
                aria-hidden="true"
                className="size-6 text-white"
              />
            </div>
            <div>
              <h3 className="text-base/7 font-semibold text-gray-200">
                Suporte Técnico
              </h3>
              <p className="mt-2 text-base/7 text-gray-300">
                Mande uma Mensagem para nós, relatando o suporte que precisa!
              </p>
              <p className="mt-4 text-sm/6 font-semibold">
                <a href="https://api.whatsapp.com/send/?phone=5514982332963&text=%22Ol%C3%A1,%20preciso%20de%20Suporte%20T%C3%A9cnico!%22&type=phone_number&app_absent=0" className="text-indigo-400">
                  Contatar <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
              <FaRobot
                aria-hidden="true"
                className="size-6 text-white"
              />
            </div>
            <div>
              <h3 className="text-base/7 font-semibold text-gray-200">
                Bot de Atendimento
              </h3>
              <p className="mt-2 text-base/7 text-gray-300">
                Solicite Serviços/ou a Fatura pelo Nosso Bot!
              </p>
              <p className="mt-4 text-sm/6 font-semibold">
                <a href="https://wa.me/message/MWHGELKC45WDN1" className="text-indigo-400">
                  Contatar <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Overlay />
      <Footer />
    </div>
  );
};
