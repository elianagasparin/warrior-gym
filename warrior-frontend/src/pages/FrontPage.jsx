import { Categories } from "../components/Categories"
import { Logo } from "../components/Logo"
import { ContactList } from "../components/ContactList"
import { LoginButton } from "../components/LoginButton"
import { Footer } from "../components/Footer"
import '../index.css';

export const FrontPage = () => {
    return (
        <>
        <Logo />
        <main>
            <section className="bloque1">
                <h1>
                    Transforma tu cuerpo, fortalece tu mente. Bienvenido al gimnasio donde los límites no existen.
                </h1>
                <button><LoginButton text={'Ingresa ya'}/></button>
                <article>
                    <p>Ofrecemos entrenamientos diseñados para ayudarte a alcanzar tu meta fit.</p>
                </article>
            </section>
            <section className="bloque2">
                <h2>Nuestras categorías</h2>
                <ul id="categorias">
                    <Categories 
                        svg={'/corazon.svg'}
                        titulo={'Resistencia'}
                        descripcion={'Nos sirve para mejorar la resistencia cardiovascular y respiratoria, así como promover la quema de calorías y la pérdida de peso.'}
                    />
                    <Categories 
                        svg={'/pesas.svg'}
                        titulo={'Fuerza'}
                        descripcion={'Para estimular las fibras musculares, promoviendo su crecimiento y adaptación. Levantamiento de pesas, entrenamiento con peso corporal, máquinas de fuerza, bandas elásticas, etc.'}
                    />
                    <Categories 
                        svg={'/bici.svg'}
                        titulo={'Equilibrio'}
                        descripcion={'Mejorar el equilibrio para ayudar a prevenir caídas, mejorar la coordinación, fortalecer los músculos estabilizadores y aumentar la conciencia corporal.'}
                    />
                    <Categories 
                        svg={'/zapatilla.svg'}
                        titulo={'Flexibilidad'}
                        descripcion={'Ayudan a prevenir lesiones, reducir la rigidez muscular, mejorar la postura y promover una mejor recuperación muscular.'}
                    />
                </ul>
            </section>
            <section className="bloque3">
                <h2 className="entrenamientos">Entrenamientos</h2>
                <video src="/videofront.mp4" autoPlay loop></video>
                <p>Ofrecemos gran variedad de entrenamientos hecha por los mejores entrenadores</p>
                <button><LoginButton text={'Apuntate ya!'}/></button>
            </section>
        </main>
        <div className="info">
            <section>
                <ul className="nosotros">
                    <ContactList title={'Dirección'} p1={'Calle Cualquiera 12, 28000. Madrid, España.'} />
                    <ContactList title={'Horario'} p1={'De Lunes a Sábado: 6:00 am a 10:00pm'} p2={'Domingo: 8:00 am a 7:00pm'} />
                    <ContactList title={'Contacto'} 
                        a1={'mailto:warriorgym@fitness.com'} aTitle1={'warriorgym@fitness.com'} 
                        a2={"tel:+34123456789"} aTitle2={'123 456 789'} 
                    />
                </ul>
            </section>
        </div>
        <Footer />
    </>
    );
};