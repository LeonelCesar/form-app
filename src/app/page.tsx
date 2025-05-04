"use client";

import ApiWithAxios from "./components/ApiWithAxios";
/* import ApiWithAxiosComReactQuery from "./components/ApiWithAxiosComReactQuery"; */
import ApiWithAxiosRestfullSemReactQuery from "./components/ApiWithAxiosRestfullSemReactQuery";
import ApiWithAxiosRestfull from "./components/ApiWithAxiosRestfullSemReactQuery";
import ApiWithReact from "./components/ApiWithReact";
import FormReactHook from "./components/FormReactHook";
import GraficoRecharts from "./components/GraficoRecharts";
import UserFormJsonApi from "./components/UserFormJsonApi";
import ShoppingCar from "@/app/components/ShoppinCar";
import NoticationApiFalsa from "@/app/components/NoticationApiFalsa";
import EventCliick from "./components/EventCliick";
import RenderizaçãoCondicionalIf from "./components/RenderizaçãoCondicionalIf";
import RenderizaçãoCondicionalCurtoCircuito from "./components/RenderizaçãoCondicionalCurtoCircuito";
import JuntandoEventoMaisCondição from "./components/JuntandoEventoMaisCondição";
import ProjetoPainelNotificação from "./components/ProjetoPainelNotificação";
import ProjetoPainelN from "./components/ProjetoPainelN";
import FormularioLogin from "./components/FomularioLogin";
import CadastroUsuario from "./components/CadastroUsuario";
import MeuFormulario from "./components/MeuFormulario";
import FormHandleForm from "./components/FormHandleForm";
import FetchDataJavaScript from "./components/FetchDataJavaScript";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h2 className="text-red-700 font-semibold pb-4 text-2xl">
        API, React-Form, E Outras habilidades
      </h2>
      {/*  <FormReactHook /> */}
      {/* <GraficoRecharts /> */}
      {/* <ApiWithReact /> */}
      {/* <ApiWithAxios /> */}
      {/*  <ApiWithAxiosRestfullSemReactQuery /> */}
      {/*  <ApiWithAxiosComReactQuery /> */}
      {/*  <UserFormJsonApi />   Aqui é o projeto do Rodolfo Mori */}
      {/*  <ShoppingCar /> */}
      {/*  <NoticationApiFalsa /> */}
      {/*   <EventCliick /> */}
      {/*  <RenderizaçãoCondicionalIf /> */}
      {/*  <RenderizaçãoCondicionalCurtoCircuito /> */}
      {/*  <JuntandoEventoMaisCondição /> */}
      {/*  <ProjetoPainelNotificação /> */}
      {/*   <ProjetoPainelN /> */}
      {/* <FormularioLogin /> */}
      {/*  <CadastroUsuario /> */}
      {/*   <MeuFormulario /> */}
     {/*  <FormHandleForm /> */}
     <FetchDataJavaScript />
    </div>
  );
}
