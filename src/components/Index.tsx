import React from "react"
import Layout from "./Layout"
import Scene from "./Scene/index"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"
import HeadsetIcon from "@material-ui/icons/Headset"
import { Parallax } from "react-scroll-parallax"
import PopBlock from "./PopBlock"
import { Grid, Button } from "@material-ui/core"
import Username from "./User/Username"
import ArrowDown from "./Springs/ArrowDown"
import Highlight from "./Highlight"
import FadeWaypoint from "./Springs/FadeWaypoint"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
// Home for all scene logic
// Index for cesarsg.com SPA
const IndexComponent: React.FC = () => {
  //check media query with hook
  const theme = useTheme()
  const isXS = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <Layout>
      <Scene wide position={"center"} stage={1}>
        <div>
          <h2 style={{ textAlign: "center" }}>
            Hola, <Username />. Gracias por visitar mi sitio web.
            <br /> Por si el nombre del sitio no fuera evidente, me presento.
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowDown />
          </div>
        </div>
      </Scene>

      <Scene wide position="left" stage={2}>
        <h2>
          Me llamo <Highlight type="user">Cesar Salazar García</Highlight>, soy
          egresado de <Highlight type="place">SAE Institute México</Highlight>{" "}
          en la carrera de ingeniería en audio.
        </h2>
        <div id="space_ambience_1_id" style={{ width: "1px" }}>
          {" "}
        </div>
      </Scene>

      <Scene wide position={"left"} stage={3}>
        <div>
          <Parallax x={[10, -5]}>
            <h2>
              Crecí en Naucalpan de Juárez,{" "}
              <Highlight type="text">Estado de México.</Highlight>
            </h2>
          </Parallax>
          <Parallax x={[-5, 5]}>
            <h2 style={{ paddingTop: "15vh", width: "80%" }}>
              Desde pequeño estuve interesado en todo lo que tuviera que ver con
              la música y la forma en la que se produce.
            </h2>
          </Parallax>
        </div>
      </Scene>

      <Scene wide stage={4}>
        <Parallax y={[60, -60]}>
          <h2 style={{ width: "60%" }}>
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
            El sonido forma parte casi indispensable de los{" "}
            <Highlight type="text">medios audiovisuales</Highlight> desde hace
            más de <b>90 años</b>.
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

      <Scene wide stage={9} background="black" position="center">
        <h3>No sabes qué sucede. Y de pronto...</h3>
      </Scene>

      <Scene
        wide
        stage={10}
        background="linear-gradient(to bottom, #000000, #0d060a, #140c15, #17121e, #151827)"
        position="center"
      >
        <h3>...</h3>
      </Scene>

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

            <div>
              Grabación y edición de Diálogos. Grabación y edición de Ambientes.
              Grabación y edición de Foleys.
            </div>
          </PopBlock>
          <PopBlock bg="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
            <h2>Diseño Sonoro</h2>
            <div>
              Creación de nuevas experiencias sonoras que se ajusten a las
              demandas de cada proyecto. Al final del día, nadie ha escuchado
              jamás a un dinosaurio, pero todos los que hemos visto aquellas
              películas, sabemos a qué suenan. Esto es gracias al diseño sonoro.
            </div>
          </PopBlock>
          <PopBlock bg="linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)">
            <h2>Programación de Sonido para plataformas interactivas</h2>
            <div>
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
            <Grid item xs={12} sm={6}>
              <PopBlock bg="linear-gradient(to right, #a55bbd, #cc2b5e)">
                <h2 style={{ textAlign: "center" }}>Producción de Streaming</h2>
              </PopBlock>
            </Grid>
            <Grid item xs={12} sm={6}>
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
            utilizados en este sitio están{" "}
            <Highlight type="text">disponibles de forma gratuita</Highlight>{" "}
            para su descarga, sigue bajando para encontrarlos. Gracias por
            visitar mi sitio.
          </h3>
          <h3>Vuelve pronto por más sonidos.</h3>
        </div>
      </Scene>
      <Scene wide position="center" stage={14} background="#151827">
        <FadeWaypoint>
          <div>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <Grid container justify="center" alignItems="center">
                  <a
                    href="https://mega.nz/#!Gh0ggQxA!KC9UVaZBlID34m8mMeF0p_GGV0TJjFgUo1xaMq1Ano4"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      style={{
                        background:
                          "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
                        textTransform: "capitalize",
                        color: "white",
                        fontFamily: "Open sans Semibold",
                        margin: isXS ? "2em" : "3em",
                      }}
                    >
                      Descargar Librería
                      <br /> (Music) <CloudDownloadIcon />
                    </Button>
                  </a>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container justify="center" alignItems="center">
                  <a
                    href="https://mega.nz/#!GwdhGKha!DZkKWddN4nIni0kjYb7b5keBq6AKatXJmHNFOh3hAzc"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      style={{
                        background:
                          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                        textTransform: "capitalize",
                        fontFamily: "Open sans Semibold",
                        margin: "3em",
                      }}
                    >
                      Descargar Librería <br /> (Ambience) <CloudDownloadIcon />
                    </Button>
                  </a>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container justify="center" alignItems="center">
                  <a
                    href="https://mega.nz/#!CpNXGaRS!pGXueIYHlp_SVjAANgtlUzm6UCGm27b8L7UikODbTNQ"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      style={{
                        background:
                          "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
                        textTransform: "capitalize",
                        fontFamily: "Open sans Semibold",
                        margin: "3em",
                        backgroundColor: "rgb(192, 56, 201)",
                      }}
                    >
                      Descargar Librería <br /> (SFX) <CloudDownloadIcon />
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ padding: 40, marginBottom: isXS ? 30 : 0 }}
            >
              <a href="https://www.facebook.com/profile.php?id=100023781759905">
                <img
                  src="/fb.png"
                  alt={""}
                  style={{
                    width: isXS ? 48 : 80,
                    height: isXS ? 48 : 80,
                    padding: isXS ? 10 : 20,
                  }}
                />
              </a>
              <a href="https://www.instagram.com/cesarsalazarg">
                <img
                  src="/ig.png"
                  alt={""}
                  style={{
                    width: isXS ? 48 : 80,
                    height: isXS ? 48 : 80,
                    padding: isXS ? 10 : 20,
                  }}
                />
              </a>

              <a href="https://soundcloud.com/cesar-salazar-570942046">
                <img
                  src="/sc.png"
                  alt={""}
                  style={{
                    width: isXS ? 48 : 80,
                    height: isXS ? 48 : 80,
                    padding: isXS ? 10 : 20,
                  }}
                />
              </a>
            </Grid>
          </div>
        </FadeWaypoint>
      </Scene>
    </Layout>
  )
}
export default IndexComponent
