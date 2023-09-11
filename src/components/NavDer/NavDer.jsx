import Description from "./Description"
import Historical from "./Historical"
import "./NavDer.css"

function NavDer() {
  return (
    <nav className="navDer">
      <Description></Description>
      <Historical 
        title="EXPERIENCIA PROFESIONAL" 
        initialDate="2023"
        profX="ANALISTA DE PROYECTOS ESTRUCTURALES"
        endDate="2021"
        experience=" Analisis de proyectos de la construccion civil. Con finalidad de 
        identificar formatos, elementos y piezas para la edificacion de pequeñas y grandes
        estructuras. Experiencia con organización de archivos y almoxarifado"
        >  
      </Historical>
      <Historical 
        initialDate="2021"
        profX=" AYUDANTE DE MARCENARIA"
        endDate="2020"
        experience=" Apoyo en la elaboración del proyecto, corte de la madera, pega, filetagem,
        prega, envernizamiento y transporte de los mobiles junto al marceneiro"
        >  
      </Historical>
      <Historical 
        initialDate="2018"
        profX="ASISTENTE ADMINISTRATIVO"
        endDate="2016"
        experience=" Apoyo en las areas financiera, auditoria y de proyectos. Elaboración y 
        manejo de plantillas financieras y de auditoria en Excel. Visitación de espacios para
        para elaboración y manutención de proyectos arquitetonicos."
        >  
      </Historical>

      <Historical
        title="EDUCACIÓN"
        initialDate="2022"
        profX="TECNICO EN EDIFICACIONES"
        endDate="2021"
        school="UNIVERSIDADE NOVE DE JULHO"
        experience="Estructuras, Propriedades del Suelo, materiales de construcción,
        Diseño arquitetonico."
      >
      </Historical>
      <Historical
        initialDate="2017"
        profX="AUTOCAD 2018"
        endDate="2017"
        school="SENAC LAPA TITO"
        experience="Curso de AUTOCAD 2018. Elaboración de proyectos arquitetonicos"
      >
      </Historical>
      <Historical
        initialDate="2011"
        profX="PAQUETE OFFICE BASICO"
        endDate="2010"
        school="LOGUS INFORMATICA"
        experience="Curso de Paquete Office Básico. Excel, Power-Point, Word."
      >
      </Historical>
    </nav>
  )
}

export default NavDer
