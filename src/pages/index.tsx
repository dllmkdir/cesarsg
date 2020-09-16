import React, { useContext } from "react"
import Layout from "../components/Layout"
import Scene from "../components/Scene/index"
import { UserProvider, UserContext } from "../components/Navbar/userContext"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded"
import HeadsetIcon from "@material-ui/icons/Headset"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import PopBlock from "../components/PopBlock"
import { Grid, Button } from "@material-ui/core"
import { StageContext, StageProvider } from "../components/Stages/context"
import StageDivider from "../components/Stages"
import Username from "../components/Navbar/Username"
// Index for cesarsg.com SPA
const Index: React.FC = () => {
  const { stage } = useContext(StageContext)
  return (
    <Layout>
      <Scene wide position={"center"} stage={1}>
        <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
          <h2>
            Hola, <Username />. Gracias por visitar mi sitio web.
          </h2>
          <h2> Por si el nombre del sitio no fuera evidente, me presento.</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowDownwardIcon
              style={{
                color: "white",
                width: 50,
                height: 50,
                background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
                borderRadius: 50,
                padding: "1rem",
              }}
            />
          </div>
        </Parallax>
      </Scene>

      <Scene wide position="left" stage={2}>
        <h2>
          Me llamo <b>Cesar Salazar García</b>, soy egresado de{" "}
          <em>SAE Institute México</em> en la carrera de ingeniería en audio.
        </h2>
        <div id="space_ambience_1_id" style={{ width: "1px" }}>
          {" "}
        </div>
      </Scene>

      <Scene wide position={"left"} stage={3}>
        <div>
          <Parallax className="custom-class" x={[6, -6]} tagOuter="figure">
            <h2>Crecí en Naucalpan de Juárez, Estado de México.</h2>
          </Parallax>
          <Parallax className="custom-class" x={[-6, 6]} tagOuter="figure">
            <h2 style={{ paddingTop: "15vh", width: "70%" }}>
              Desde pequeño estuve interesado en todo lo que tuviera que ver con
              la música y la forma en la que se produce.
            </h2>
          </Parallax>
        </div>
      </Scene>

      <Scene wide stage={4}>
        <Parallax className="custom-class" y={[60, -60]}>
          <h2
            className="text-presentation"
            style={{ width: "80%", margin: "0 auto" }}
          >
            Quisiera explicarte un poco lo que un ingeniero en audio puede
            hacer.
          </h2>
        </Parallax>
      </Scene>

      <Scene wide stage={5}>
        <div>
          <h3>
            Como puedes escuchar, en este sitio web hay una gran cantidad de
            sonidos con los que podrás interactuar navegando por esta página.
          </h3>
          <h3>
            Estos sonidos han sido diseñados específicamente para ambientar y
            recrear este sitio web con el propósito de brindarte una experiencia
            inmersiva.
          </h3>
          <h3>
            La experiencia mejora con el uso de audífonos.{" "}
            <HeadsetIcon
              style={{
                color: "white",
                transition: "all 0.5s",
              }}
            />
          </h3>
        </div>
      </Scene>

      <Scene wide stage={6}>
        <div>
          <h3>
            El sonido forma parte casi indispensable de los medios audiovisuales
            desde hace más de <b>90 años</b>.
          </h3>
          <h3>
            ¿Te has puesto a pensar en cómo sería la experiencia de ver tu
            película favorita sin sonido?
          </h3>
          <h3>¿O quizás tu juego favorito sin el mismo?</h3>
        </div>
      </Scene>
      <Scene wide stage={7}>
        <div>
          <h3>El sonido tiene una capacidad narrativa impresionante.</h3>
          <h3>Como causar tensión de pronto.</h3>
          <h3>
            Quieres causar el espectador que sienta una extraña tensión en la
            que sienta que hay algún peligro.
          </h3>
        </div>
      </Scene>
      <Scene
        wide
        position="center"
        stage={8}
        background="linear-gradient( transparent, black)"
      >
        <h3>Algo está mal...</h3>
      </Scene>
      <Scene wide stage={9} background="black">
        <h3>No sabes qué sucede. Y de pronto...</h3>
      </Scene>

      <Scene
        wide
        stage={10}
        background="linear-gradient(to bottom, #000000, #0d060a, #140c15, #17121e, #151827)"
      ></Scene>

      <Scene wide stage={11} background="#151827">
        <h3>
          Como podrás ver, el sonido es una herramienta impresionante cuando se
          trata de comunicar un mensaje, y para eso, <Username />, puedo
          comentarte lo que a mi me gusta hacer:
        </h3>
      </Scene>
      <Scene wide stage={12} background="#151827">
        <div>
          <PopBlock bg="linear-gradient(135deg, #f6d365 0%, #fda085 100%)">
            <h2>Edición de sonido para video</h2>

            <div className="description-info-box">
              Grabación y edición de Diálogos. Grabación y edición de Ambientes.
              Grabación y edición de Foleys.
            </div>
          </PopBlock>
          <PopBlock bg="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
            <h2>Diseño Sonoro</h2>
            <div className="description-info-box">
              Creación de nuevas experiencias sonoras que se ajusten a las
              demandas de cada proyecto. Al final del día, nadie ha escuchado
              jamás a un dinosaurio, pero todos los que hemos visto aquellas
              películas, sabemos a qué suenan. Esto es gracias al diseño sonoro.
            </div>
          </PopBlock>
          <PopBlock bg="linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)">
            <h2>Programación de Sonido para plataformas interactivas</h2>
            <div className="description-info-box">
              <div style={{ margin: "0.2em" }}>
                Uso e implementación de FMOD en Unity para plataformas
                interactivas. ¡Como videojuegos!{" "}
              </div>
              <div style={{ margin: "0.2em" }}>
                La mayor parte de los sonidos de este sitio fueron programados
                en SuperCollider.
              </div>
            </div>
          </PopBlock>
          <Grid container>
            <Grid xs={6}>
              <PopBlock bg="linear-gradient(to right, #a55bbd, #cc2b5e)">
                <h2 style={{ textAlign: "center" }}>Producción de Streaming</h2>
              </PopBlock>
            </Grid>
            <Grid xs={6}>
              <PopBlock bg="linear-gradient(to right, #fbc7d4, #9796f0)">
                <h2 style={{ textAlign: "center" }}>Producción Musical</h2>
              </PopBlock>
            </Grid>
          </Grid>
        </div>
      </Scene>
      <Scene wide position="center" stage={13} background="#151827">
        <div>
          <h3>
            Bueno, <Username />, quería comentarte que todos los sonidos
            utilizados en este sitio están disponibles de forma gratuita para su
            descarga, sigue bajando para encontrarlos. Gracias por visitar mi
            sitio.
          </h3>
          <h3>Vuelve pronto por más sonidos.</h3>
        </div>
      </Scene>
      <Scene wide position="center" stage={14} background="#151827">
        <div>
          <Grid container>
            <Grid item xs={4}>
              <a
                href="https://mega.nz/#!Gh0ggQxA!KC9UVaZBlID34m8mMeF0p_GGV0TJjFgUo1xaMq1Ano4"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ margin: "3em" }}
                >
                  Descargar Librería (Music){" "}
                  <CloudDownloadIcon className="right-button" />
                </Button>
              </a>
            </Grid>
            <Grid item xs={4}>
              <a
                href="https://mega.nz/#!GwdhGKha!DZkKWddN4nIni0kjYb7b5keBq6AKatXJmHNFOh3hAzc"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  style={{ margin: "3em" }}
                >
                  Descargar Librería (Ambience){" "}
                  <CloudDownloadIcon className="right-button" />
                </Button>
              </a>
            </Grid>
            <Grid item xs={4}>
              <a
                href="https://mega.nz/#!CpNXGaRS!pGXueIYHlp_SVjAANgtlUzm6UCGm27b8L7UikODbTNQ"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  style={{
                    margin: "3em",
                    backgroundColor: "rgb(192, 56, 201)",
                  }}
                >
                  Descargar Librería (SFX){" "}
                  <CloudDownloadIcon className="right-button" />
                </Button>
              </a>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <a href="https://www.facebook.com/profile.php?id=100023781759905">
                <img src="/fb.png" alt={""} />
              </a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.instagram.com/cesarsalazarg">
                <img src="/ig.png" alt={""} />
              </a>
            </Grid>

            <Grid item xs={4}>
              <a href="https://soundcloud.com/cesar-salazar-570942046">
                <img src="/sc.png" alt={""} />
              </a>
            </Grid>
          </Grid>
        </div>
      </Scene>
    </Layout>
  )
}

const IndexWrapper: React.FC = () => {
  return (
    <StageProvider>
      <ParallaxProvider>
        <UserProvider>
          <Index />
        </UserProvider>
      </ParallaxProvider>
    </StageProvider>
  )
}

export default IndexWrapper
