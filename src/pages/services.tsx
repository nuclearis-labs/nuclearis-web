import React, { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

function Services(_props: Props): ReactElement {
  return (
    <>
      <Seo/>
      <Header isLanding={false} />
      <div className="w-full max-w-5xl m-auto py-20 px-8">
        <div className="sm:grid sm:grid-cols-12 sm:gap-10">
          <div className="sm:col-span-8 box-border">
            <h1 className="font-bold text-3xl mb-7 text-gable tracking-wide">
              Servicios
            </h1>
            <h2 className="font-bold text-xl mb-2 sm:pr-32 text-gable tracking-wide">FABRICACIÓN DE COMPONENTES</h2>
            <p className="text-gable md:text-justify mb-4">Soluciones tecnológicas de alta complejidad</p>
            
            <h2 className="font-bold text-xl mb-2 sm:pr-32 text-gable tracking-wide">INGENIERÍA DE VANGUARDIA</h2>
            <p className="text-gable md:text-justify mb-4">De Diseño de Equipos, Básica de Procesos e Ingeniería de Detalle</p>

            <h2 className="font-bold text-xl mb-2 sm:pr-32 text-gable tracking-wide">QUALITY ASSURANCE</h2>
            <p className="text-gable md:text-justify mb-4">Garantizando las normas internacionales de calidad</p>

            <h2 className="font-bold text-xl mb-2 sm:pr-32 text-gable tracking-wide">ALIANZAS ESTRATÉGICAS</h2>
            <p className="text-gable md:text-justify mb-4">Cooperación comercial internacional de primera línea</p>
            <p className="text-gable md:text-justify mb-4"> Al día de hoy Nuclearis ha desarrollado y fabricado diversos componentes y equipos automáticos para los siguientes proyectos y reactores:</p>

            <ul className="list-disc">
              <li><p className="text-gable md:text-justify mb-0">CENTRAL NUCLEAR ATUCHA I: NA-SA.</p></li>
              <li><p className="text-gable md:text-justify mb-0">CENTRAL NUCLEAR ATUCHA II: NA-SA.</p></li>
              <li><p className="text-gable md:text-justify mb-0">CENTRAL NUCLEAR EMBALSE: NA-SA.</p></li>
              <li><p className="text-gable md:text-justify mb-0">CAREM 25 REACTOR: CNEA.</p></li>
              <li><p className="text-gable md:text-justify mb-0">RA-10 RESEARCHING REACTOR: CNEA.</p></li>
              <li><p className="text-gable md:text-justify mb-0">NUEVA PLANTA DE URANIO: DIOXITEK.</p></li>
            </ul>
          </div>
          <div className="col-span-4 hidden sm:block">
            <StaticImage src="../images/services.jpg" alt="Services" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
