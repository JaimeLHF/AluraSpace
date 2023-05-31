import Header from "components/Header/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import banner from '../../assets/banner.png'
import styles from './PaginaInicial.module.scss'
import "../../assets/fonts/GandhiSans-Bold.otf"
import Galery from "components/Galery";
import Populares from "components/Populares";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A Galeria Mais Completa do Espaço</h1>
                        <img src={banner} alt="Terra do Espaço" />
                    </div>
                </section>

                <div className={styles.galeria}>
                    <Galery />
                    <Populares />
                </div>

            </main>

            <Footer />
        </>
    )
}