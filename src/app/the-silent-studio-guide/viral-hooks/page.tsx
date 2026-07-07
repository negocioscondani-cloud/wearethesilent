
'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Instagram } from 'lucide-react';
import Link from 'next/link';

const ViralHooksPage = () => {
    const router = useRouter();

    const hooks = [
        { text: 'Esto representa tu X antes, durante y después de X', url: 'https://www.instagram.com/p/C-ta_pvhfvK/' },
        { text: 'Aquí está exactamente cuánto (insertar acción/elemento) necesitas (insertar resultado)', url: 'https://www.instagram.com/reel/C9vqgHxuz1E/?utm_source=ig_web_copy_link&igsh=MzRlOBiNWFlZA==' },
        { text: '¿Puedes decirnos cómo (insertar resultado) en 60 segundos?', url: 'https://www.instagram.com/p/C8dJXv1PjzF/' },
        { text: 'Así se ve (insertar cosa) cuando estás (insertar acción). Y así se ve cuando no estás (insertar acción).', url: 'https://www.instagram.com/reel/C4tAzeYL8yA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
        { text: 'Te voy a decir cómo conseguir (insertar resultado), (insertar método alucinante).', url: 'https://www.instagram.com/p/C7WV9_TI5dT/' },
        { text: 'Me llevó 10 años aprender esto, pero te lo enseñaré en menos de 1 minuto.', url: 'https://www.instagram.com/p/C-sSyDpoyMX/' },
        { text: 'Cuando obtengas (insertar elemento/resultado), aquí están las # cosas que debes hacer de inmediato.', url: 'https://www.instagram.com/p/C9bUq2CtvUv/' },
        { text: 'Si no tienes (insertar elemento/acción), haz (insertar elemento/acción).', url: 'https://www.instagram.com/p/C8rJipAy8I8/' },
        { text: 'Mis reglas de dinero como (insertar descripción) trabajando hacia la independencia financiera.', url: 'https://www.instagram.com/p/C_-u411xe4m/' },
        { text: 'El dinero puede comprarte (insertar elemento), pero no puede comprarte (insertar resultado).', url: 'https://www.instagram.com/p/DBkvHncxD2t/' },
        { text: 'A continuación se muestra cómo desarrollar una (insertar habilidad) tan fuerte que físicamente no puedas dejar de (hacer la habilidad).', url: 'https://www.instagram.com/reel/C-CPzwMReyb/?igsh=MXBiYmdmc3dudm5vcg==' },
        { text: 'Así es como se ve (insertar número) de (insertar elemento).', url: 'https://www.instagram.com/alexgamblecoach/reel/C60q1FPPrLW/' },
        { text: 'Si me despertara (insertar punto de dolor) mañana y quisiera (insertar resultado del sueño) antes del (insertar hora), esto es exactamente lo que haría.', url: 'https://www.instagram.com/p/DGOZZYhS1cj/' },
        { text: 'Si eres un (insertar público objetivo) y quieres (insertar resultado del sueño) de (insertar avenida) entonces escucha este video.', url: 'https://www.instagram.com/reel/DE9tW4dyxlJ/?igsh=MWwyeWRoYXlkeXd5cA==' },
        { text: 'Si usted es (insertar grupo de edad o rango) no haga (insertar acción).', url: 'https://www.instagram.com/reel/DEsW49SM6z3/?igsh=MXc4eXFleDU0cDB4OA==' },
        { text: 'Como un niño de (insertar rasgo) y (insertar edad) años responsable con el objetivo de (insertar objetivo), aquí hay tres cosas de las que nunca me arrepentiré al hacer.', url: 'https://www.instagram.com/reel/DBZT2Q5RJ2W/?igsh=MTBtc3gwNXVyM2ppdg==' },
        { text: 'No es por presumir, pero soy muy bueno en (insertar habilidad/nicho).', url: 'https://www.instagram.com/p/C-SR22KOEDY/' },
        { text: 'Así es como se ve (insertar objeto/artículo) cuando estás usando/haciendo (insertar producto/servicio).', url: 'https://www.instagram.com/sethwickstrom_fitness/reel/DAtNQtAxUNQ/' },
        { text: '¿Sigues (insertar acción)? Tengo (insertar resultado) en (insertar plazo) y nunca (insertar acción).', url: 'https://www.instagram.com/reel/C4YY12SxuRo/' },
        { text: '3 canales de Youtube que te enseñarán más que cualquier título de (insertar industria/nicho).', url: 'https://www.instagram.com/p/DBfqo-0zxTb/' },
        { text: 'Creo que acabo de encontrar el código de trampa más grande (insertar nicho/industria).', url: 'https://www.instagram.com/p/DB6kCMQR0oX/' },
        { text: 'Aquí hay 3 personas que te harán un mejor (insertar título).', url: 'https://www.instagram.com/p/C9uwXS_uJJ6/' },
        { text: '(insertar rasgo) Chico vs (insertar rasgo) Chico.', url: 'https://www.instagram.com/share/_9R_a4MER' },
        { text: 'Veo que no haces nada más que (insertar acción) después de (insertar evento), así que sigue esta agenda para evitar eso.', url: 'https://www.instagram.com/share/BADjOvZhzs' },
        { text: '¿Quieres ser el primero (insertar resultado de sueño) en tu familia?', url: 'https://www.instagram.com/reel/DEVCeefOF08/?igsh=MThxZXZyMnFkZXNj' },
        { text: 'Esta es la cantidad de (insertar elemento) que necesitas (insertar resultado).', url: 'https://www.instagram.com/reel/C83vXP6NqXU/' },
        { text: 'Todo el mundo te dice que hagas (inserta acción), pero nadie te dice cómo hacerlo. Aquí tienes un tutorial paso a paso de # segundos que puedes guardar.', url: 'https://www.instagram.com/reel/DC2pqKUpy7C/?igsh=ZzBjeG93cDh6aWoy' },
        { text: 'Si tienes (insertar rango de edad), estas son las cosas que debes hacer para no terminar (insertar punto débil) antes del (insertar edad).', url: 'https://www.instagram.com/reel/C9atuV6s3J0/?igsh=aDhtdm5wNXNzOTk5' },
        { text: 'Si tuviera que empezar de nuevo en mi (insertar rango de edad) sin (insertar elemento), aquí están las principales cosas que haría para (insertar resultado soñado).', url: 'https://www.tiktok.com/t/ZT2MLqDUQ/' },
        { text: 'A continuación se presentan algunos trucos ligeramente poco éticos (inserte industria/nicho) que debe conocer si pertenece a (inserte público objetivo).', url: 'https://www.instagram.com/reel/C-8RO71JxRv/?igsh=MTdrZzdrZWdnbTdzZA==' },
        { text: 'Aquí te explicamos exactamente cómo vas a bloquearlo si quieres (insertar resultado soñado).', url: 'https://www.instagram.com/reel/DC5P-_EMzFm/?igsh=MTZyajlweWk5ZGI1cQ==' },
        { text: 'Esto es exactamente lo mismo (insertar cosa) pero el primero es/obtuvo (insertar resultado) y el segundo es/obtuvo X', url: 'https://www.instagram.com/p/DIBDSW9Maq7/' },
        { text: 'Si deseas terminar (insertar punto débil), omite este video.', url: 'https://www.instagram.com/p/DDfZ4qZPTN8/' },
        { text: 'Nunca hemos usado (insertar sustantivo) en nuestro hogar porque hemos descubierto que generalmente es (insertar rasgo/rasgos).', url: 'https://www.instagram.com/p/DGF_p8lORgI/' },
        { text: '(insertar acción) durante (insertar período de tiempo) y obtendrás (insertar resultado del sueño).', url: 'https://www.instagram.com/georgiaheins/reel/C8Z9DfdMgZ_/' },
        { text: 'Si tienes entre (insertar edad) y (insertar edad) y sientes que (insertar punto débil).', url: 'https://www.instagram.com/p/DH2KovNtk8l/' },
        { text: '(insertar antes del estado) a (insertar después del estado) en # pasos simples en menos de # segundos.', url: 'https://www.instagram.com/p/DHD4frVya7Z/' },
        { text: 'Si estás intentando (insertar resultados de tus sueños), aquí está lo que debes hacer (insertar cosa).', url: 'https://www.instagram.com/p/DFCyBHfNnlZ/' },
        { text: '¿Cuánto tiempo crees que tienes que (insertar acción) para (insertar resultado)?', url: 'https://www.instagram.com/reel/C50_VCluWFe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
        { text: 'Si quieres hacer esto, primero haz esto.', url: 'https://www.instagram.com/p/C5AmorRpUqF/' },
        { text: 'Si estás intentando (insertar resultado de sueño) y no tienes idea de qué hacer (insertar acción) a diario, te voy a mostrar un ejemplo.', url: 'https://www.instagram.com/p/C5yjeP-REZx/' },
        { text: 'Esta es la cantidad de (insertar elemento) que necesitas (insertar resultado).', url: 'https://www.instagram.com/p/C-M1nkcNPAV/' },
        { text: 'Te ahorraré # minutos en tu próximo entrenamiento con # consejos simples.', url: 'https://www.instagram.com/jeffnippard/reel/C9zuGtYJ8ck/' },
        { text: 'Si solo tuviera (insertar período de tiempo) en (insertar ubicación/lugar), esto es exactamente lo que haría para obtener (insertar resultado soñado).', url: 'https://www.instagram.com/p/C-9slRRoYAA/' },
        { text: '¿Cuánto tiempo puedes saltar (insertar acción) antes de perder (insertar resultado)?', url: 'https://www.instagram.com/sethwickstrom_fitness/reel/DB1WXxVx6B4/' },
        { text: 'Si quieres (insertar resultado soñado) una semana durante las próximas (insertar semanas) sin (insertar punto de dolor), entonces escucha.', url: 'https://www.instagram.com/reform.nutrition.training/reel/C6SEO0svXyy/' },
        { text: 'Si acabas de cumplir (inserta edad) y no quieres (inserta punto débil), debes hacer las siguientes # cosas inmediatamente.', url: 'https://www.instagram.com/share/BAKR4pqxlZ' },
        { text: 'Puedes conseguir un resultado perfecto (inserta el resultado de tus sueños) simplemente simplificando las cosas.', url: 'https://www.instagram.com/share/BAOoa4qroW' },
        { text: '¿Sabías que esto, esto, esto y esto obtienen (insertar resultado del sueño)?', url: 'https://www.instagram.com/share/BAExbVPhak' },
        { text: 'No empieces a hacer (insertar acción) hasta que aprendas cómo hacerlo.', url: 'https://www.instagram.com/share/BA7hIj8Es8' },
        { text: 'Lista de niveles de (insertar industria) para (insertar año).', url: 'https://www.instagram.com/p/DEirLE_s0QS/' },
        { text: 'En 60 segundos te voy a enseñar más sobre (inserta cosa) de lo que hayas aprendido en toda tu vida.', url: 'https://www.instagram.com/p/DEqFNhryVXt/' },
        { text: 'Todo el mundo te dice que hagas (inserta acción), pero nadie te muestra cómo hacerlo. Aquí tienes un segundo tutorial paso a paso que puedes guardar para más tarde.', url: 'https://www.instagram.com/calltoleap/reel/C2tER1GvhOc/' },
        { text: 'Si tienes entre (insertar 20, 30, 40, 50, 60, etc.), estas son las cosas que debes hacer para asegurarte de no terminar en (insertar punto débil) antes de (insertar edad).', url: 'https://www.instagram.com/calltoleap/reel/C9atuV6s3J0/' },
        { text: '(Insertar sustantivo) pierde (Insertar sustantivo) en esto, por lo que pueden ganar (Insertar sustantivo) en esto.', url: 'https://www.instagram.com/marktilbury/reel/DEkDrvSojnz/' },
        { text: 'Tienes (insertar sustantivo) mañana, pero no tienes tiempo para (insertar acción). Así es como ahorras (insertar sustantivo).', url: 'https://www.instagram.com/ultimateivyleagueguide/reel/CoNHORnOLUt/' },
        { text: '(Insertar escenario) e (Insertar resultado del sueño), aquí están los # pasos para obtener (insertar resultado del sueño).', url: 'https://www.instagram.com/ultimateivyleagueguide/reel/Co5Kp8QLhRZ/' },
        { text: 'Todos te dicen que hagas (insertar acción), pero crees que es demasiado tarde porque tienes (insertar edad). Soy (insertar ocupación) y estas son algunas cosas que necesitas saber a tu (insertar edad).', url: 'https://www.instagram.com/calltoleap/reel/C4wQD6DPqTe/' },
        { text: '(Insertar público objetivo) si realmente quieres jugar en el siguiente nivel.', url: 'https://www.instagram.com/kelseypoulter/reel/DDpruSIJm9i/' },
        { text: 'Solo tienes que estar concentrado en una serie de cosas para ser un élite (insertar título).', url: 'https://www.instagram.com/kelseypoulter/reel/DAK0EOTRweE/' },
        { text: '(Insertar sustantivo) para tontos.', url: 'https://www.instagram.com/share/BA6XRL1fXU' },
        { text: 'No me odies, pero realmente no me importa (insertar sustantivo).', url: 'https://www.instagram.com/p/DFydpeiy6GJ/' },
        { text: 'Si quieres hacer esto, primero haz esto.', url: 'https://www.instagram.com/p/C5nXYgsy6RR/' },
        { text: 'Las mejores formas de ahorrar dinero mientras (insertar acción).', url: 'https://www.instagram.com/p/DCkE_cUo3mq/' },
        { text: 'Esta es todas las formas de (insertar acción).', url: 'https://www.instagram.com/p/DHtlJGYN5wB/' },
        { text: '¿Qué pasaría si te dijera que este (insertar elemento) podría (insertar resultado)?', url: 'https://www.instagram.com/p/DChgwnJyE3b/' },
        { text: '¿Sabías que si (insertar acción, (Insertar acción), (insertar acción), etc.', url: 'https://www.instagram.com/p/C-Alb5KsBwA/' },
        { text: 'Lo (inserte cosa) que tienes ahora en ti (inserte grupo de edad) es tan (inserte sustantivo).', url: 'https://www.instagram.com/p/DBhHzSeJ_L6/' },
        { text: 'A la edad (insertar edad) la edad que muchos (insertar público objetivo) tienen cuando (insertar punto débil).', url: 'https://www.instagram.com/p/DGkzdT8Mc21/' },
        { text: 'Escuche, si no está forzando a su (insertar persona/personas) a (insertar acción) en su (insertar estado actual), no espere que sean (insertar rasgo) en su (insertar estado posterior).', url: 'https://www.instagram.com/p/DHQ-medJYC2/' },
        { text: '¿Preferirías ver a tu (insertar persona/personas) (insertar punto débil) o unirte a ellos en su (insertar nicho) viaje para salvar sus vidas?', url: 'https://www.instagram.com/p/DGDkKWdPN7W/' },
        { text: 'Esta es la cantidad de (insertar sustantivo) que perderías por día en un (insertar estado).', url: 'https://www.instagram.com/p/DGN4d45NAga/' },
        { text: 'Si estás en un viaje hacia (insertar resultado de sueño), esto es exactamente lo que necesitas hacer para (insertar objetivo de sueño) en # pasos simples.', url: 'https://www.instagram.com/p/DFGXCydPPOM/' },
        { text: 'Si me hubieras dicho hace # años que estaría (inserta el resultado del sueño), no te habría creído.', url: 'https://www.instagram.com/p/DGs6ZD6NMaE/' },
        { text: 'Si estás recibiendo (insertar adjetivo) o conoces a alguien (insertar adjetivo), hay una cantidad de cosas increíblemente importantes que debes asegurarte de poder hacer físicamente para (resultado soñado).', url: 'https://www.instagram.com/p/DEgJY7yOUYp/' },
        { text: 'Si no quieres fracasar (inserta acontecimiento de la vida).', url: 'https://www.instagram.com/p/C-TyArttuFT/' },
        { text: 'Me metí en los asuntos más difíciles (insertar sustantivo) y (insertar resultado del sueño).', url: 'https://www.instagram.com/p/CzjQfxOLpKO/' },
        { text: 'Si estás ansioso por tu (insertar evento de vida) pero aún no puedes encontrar la motivación para hacer (insertar acción), querrás ver esto.', url: 'https://www.instagram.com/p/DC3Zn1Vx7O9/' },
        { text: 'Aquí está la diferencia entre (insertar título), (insertar título) y (insertar título).', url: 'https://www.instagram.com/p/DFKZBcFRisK/' },
        { text: 'Si estuviera en mi (insertar rango de edad) así es exactamente como evitaría (insertar mal resultado).', url: 'https://www.instagram.com/p/DEICudmOqeQ/' },
        { text: 'Aquí encontrarás todo lo que realmente necesitas saber (insertar sustantivo).', url: 'https://www.instagram.com/p/DBhdAc3RY-X/' },
        { text: 'Las cosas más importantes que les enseñaré a mis hijos como (insertar título del puesto).', url: 'https://www.instagram.com/p/DDce9wDuc8j/' },
        { text: 'Si no puedes resolver este (insertar problema) en menos de 5 segundos, regresa a (insertar etapa de preclasificación).', url: 'https://www.instagram.com/p/C0g-j3EJuM6/' },
        { text: '30 segundos de consejo (insertar industria) que le daría a mi mejor amigo si estuviera empezando desde cero.', url: 'https://www.instagram.com/p/DDyGbH-xMoc/' },
        { text: 'Yo haría esto antes de dejar tu trabajo.', url: 'https://www.instagram.com/p/C_D27RuxXHn/' },
        { text: 'Si haces esto, obtendrás (insertar resultado).', url: 'https://www.instagram.com/p/DEP_swuolhm/' },
        { text: 'Si eres un (insertar público objetivo) que (insertar punto débil) y quieres (insertar resultado soñado), repasemos un plan de pasos muy simple que puedes seguir para (insertar resultado soñado) rápidamente.', url: 'https://www.instagram.com/p/Cpf3cfujvTd/' },
        { text: 'Aquí hay 5 libros para (insertar resultado de sueño) mejor que el 99% de otras personas.', url: 'https://www.instagram.com/p/DG3T4N9xdXD/' },
        { text: 'Si eres de los que (insertar acción) y tu objetivo es (insertar resultado soñado) y (insertar resultado soñado) al mismo tiempo, aquí tienes mis mejores consejos.', url: 'https://www.instagram.com/p/DGn7kKyu_5G/' },
        { text: 'Si no puede realizar (insertar acción).', url: 'https://www.instagram.com/p/DC7SzidSNOX/' },
        { text: 'Si puedes hacer # de (insertar acción), entonces puedes hacer # de (insertar acción).', url: 'https://www.instagram.com/p/DDKZbeoo1gF/' },
        { text: 'Si tu mamá no te enseñó a hacer (insertar sustantivo) creciendo, no te preocupes, ahora soy tu mami.', url: 'https://www.instagram.com/p/DBEeZ2MvZ16/' },
        { text: 'Nunca pierdas un juego de (insertar juego) por el resto de tu vida.', url: 'https://www.instagram.com/p/DCoC6YHJ_k1/' },
        { text: '3 niveles de (insertar sustantivo).', url: 'https://www.instagram.com/p/DBt0hSaNxqH/' },
        { text: '¿Sabías que si… (Insertar acción), (insertar acción), (insertar acción), etc.?', url: 'https://www.instagram.com/p/DIGJHsKPfj2/' },
        { text: 'Soy un hacker profesional de (insertar industria) y aquí está cada hack en (insertar tienda/ubicación/evento/etc.).', url: 'https://www.instagram.com/p/DG3-nRhyvRq/' },
        { text: 'Tengo una lista muy larga de (insertar sustantivo) que (insertar acción) no comparto con nadie. Pero hoy quiero retribuir, así que te lo voy a contar.', url: 'https://www.instagram.com/p/DCpBTqzpGdp/' },
        { text: 'Voy a enseñarte cómo identificar un (insertar sustantivo) bueno y un (insertar sustantivo malo).', url: 'https://www.instagram.com/p/DHWUyptyp9B/' },
        { text: 'Fui a (insertar tipo de escuela) para que tú no tengas que hacerlo.', url: 'https://www.instagram.com/p/DCrxn_5RFDS/' },
        { text: 'Clasificar todos los (insertar sustantivo) más populares, para poder ordenarlos del peor al mejor.', url: 'https://www.instagram.com/p/DIPGBRQR0Sb/' },
        { text: 'Así es como yo (insertar acción) como (insertar etiqueta) (insertar edad).', url: 'https://www.instagram.com/p/C6Hkr_QRQ60/' },
        { text: 'No obtendrías (insertar resultado malo) cuando (insertar acción) si (insertar acción).', url: 'https://www.instagram.com/p/DHlNHSfuHoh/' },
        { text: 'Esto es más difícil que entrar en Harvard.', url: 'https://www.instagram.com/p/DFNdSUruSOQ/' },
        { text: 'Ahora bien, ¿cuánto cuesta realmente (insertar acción)?', url: 'https://www.instagram.com/p/DE75-Fhyg_T/' },
        { text: 'Por eso nadie se acuerda de ti.', url: 'https://www.instagram.com/p/DFaQuJYueF1/' },
        { text: 'Tengo 20 años, lo que significa que mis años de adolescencia terminaron oficialmente, así que aquí está todo lo que aprendí de los 7 años más extraños de mi vida.', url: 'https://www.instagram.com/p/Cuq324pIiKY/' },
        { text: 'Si eres un (público objetivo) y quieres convertirte en (insertar resultado soñado) mediante (insertar acción), entonces escucha este video porque tienes una gran ventaja y te diré cómo conquistarla.', url: 'https://www.instagram.com/p/DE9tW4dyxlJ/' },
        { text: 'Si tomas (inserta sustantivo) obtendrás (inserta resultado).', url: 'https://www.instagram.com/p/DIMBlJ4MgHH/' },
        { text: 'Acabo de crear un sitio web llamado (inserte el más largo pero nombre del sitio web más identificable).', url: 'https://www.instagram.com/p/DIWeFGhRT9u/' },
        { text: 'Cómo convertir un solo (insertar sustantivo) en toda una vida de (insertar sustantivo) gratis.', url: 'https://www.instagram.com/p/DIEbK1dSZJ2/' },
        { text: 'Cosas que están dañando tu (insertar sustantivo) sin que ni siquiera te des cuenta.', url: 'https://www.instagram.com/p/DDxIde3vWO7/' },
        { text: 'Si tienes cuando ves a una chica y ella simplemente tiene (insertar resultado del sueño).', url: 'https://www.instagram.com/p/DFNwwbpvxzi/' },
        { text: 'He logrado (insertar resultado del sueño) a pesar de tener (insertar punto de dolor) y esta es la rutina que lo logró.', url: 'https://www.instagram.com/p/DHbXdlkIoZh/' },
        { text: 'Cambie estos (inserte sustantivo) por uno mejor (inserte resultado).', url: 'https://www.instagram.com/p/DE5r6TspMQA/' },
        { text: '¿Sabías que este, este y este objetivo (insertar resultado del sueño)?', url: 'https://www.instagram.com/p/DFk6dhNykvl/' },
        { text: 'Tu (insertar sustantivo) se ve así y quieres que se vea así.', url: 'https://www.instagram.com/p/DD0PRBppkqQ/' },
        { text: '(Insertar año pasado) (insertar sustantivo), (insertar año actual) (insertar sustantivo).', url: 'https://www.instagram.com/p/DEDdSAESaFJ/' },
        { text: 'Está bien (inserte el punto problemático), ¿qué tal si no arruinamos (inserte el año actual)?', url: 'https://www.instagram.com/p/DDiWd5eSlPC/' },
        { text: 'Este es el programa/pasos que seguiría si estuviera intentando (insertar resultado del sueño).', url: 'https://www.instagram.com/p/DB4om1CIUoZ/' },
        { text: 'Si su (insertar sustantivo) se parece a esto, estos no son (insertar sustantivo), estos son (insertar sustantivo) y aquí está cómo puede obtener (insertar resultado soñado).', url: 'https://www.instagram.com/p/DDGYmIHxlhH/' },
        { text: 'A continuación se muestran algunas (insertar acción) que puedes hacer sin (insertar sustantivo).', url: 'https://www.instagram.com/p/DB-HjvtP1A9/' },
        { text: 'Descubramos qué (insertar sustantivo) eres en # pasos.', url: 'https://www.instagram.com/p/DHXLZyrSP0w/' },
        { text: 'La mayoría de las personas solo pueden hacer (insertar acción) cuando intentan (insertar acción), pero como (insertar título) deberías poder (insertar acción).', url: 'https://www.instagram.com/p/C_3kQAkIuKn/' },
        { text: 'Como (insertar título) deberías poder hacer esto, si no puedes (insertar diagnóstico).', url: 'https://www.instagram.com/reel/DF_Cn86o0Ki/' },
        { text: 'Si eres (insertar título), deberías poder hacer esto, esto y esto. Si no, te entiendo. Simplemente haz este paso/rutina/programa para (insertar resultado ideal).', url: 'https://www.instagram.com/reel/DDo0rP9o4Yl/' },
        { text: 'Si tiene (inserte punto débil), (inserte punto débil) y (inserte punto débil), es posible que esté (inserte acción) equivocado.', url: 'https://www.instagram.com/p/DDCdiwNO6cO/' },
        { text: 'Si sientes que nunca (inserta punto) aquí tienes todo lo que necesitas para obtener un (inserta resultado soñado).', url: 'https://www.instagram.com/p/DCkDGtppM_u/' },
        { text: '¿Tiene un (inserte un punto débil) no malgaste su dinero intentando (inserte una solución), simplemente volverá.', url: 'https://www.instagram.com/p/DEu0CsYu3Qa/' },
        { text: 'Si darte a ti mismo (insertar resultado) causa (insertar punto doloroso), (insertar punto doloroso) y (insertar punto doloroso), aquí está cómo hago trampa.', url: 'https://www.instagram.com/p/DCh2GnEzezF/' },
        { text: 'No tienes (insertar punto de dolor), no tienes (insertar adjetivo), no tienes (insertar adjetivo), solo necesitas (insertar solución) y te voy a decir cómo hacerlo.', url: 'https://www.instagram.com/p/DHSIRSHJuWc/' },
        { text: 'Lo peor que puedes hacer por tu (insertar cosa) es ignorar tu (insertar sustantivo) cuando (insertar escenario).', url: 'https://www.instagram.com/p/DFGZHpOpv9E/' },
        { text: 'Señoras, pueden hacer todo el (insertar acción) pero eso no les servirá de nada a sus (insertar sustantivo).', url: 'https://www.instagram.com/p/DFLUAphSOE0/' },
        { text: 'Nunca (insertar acción) primero y luego (insertar acción).', url: 'https://www.instagram.com/p/DF58v36zILq/' },
        { text: '¿Qué pasa cuando pasas X horas/días/semanas/años sin (insertar sustantivo)?', url: 'https://www.instagram.com/p/DHQcFEpuMHI/' },
        { text: 'No tengo ninguna duda de que (insertar acción) son las mejores (insertar sustantivo) para su (insertar sustantivo).', url: 'https://www.instagram.com/p/DFnjpQ1x5mZ/' },
        { text: 'No toques esto.', url: 'https://www.instagram.com/p/DAMZdJhRaKj/' },
        { text: 'Lo que me hubiera gustado saber a (insertar edad) en lugar de (insertar edad).', url: 'https://www.instagram.com/p/C3-e4acrDdB/' },
        { text: 'Estás dañando tu (insertar sustantivo) si tú (insertar sustantivo) te ves así o así.', url: 'https://www.instagram.com/p/C-AwpFRxDcg/' },
        { text: 'Mi (insertar sustantivo) más elogiado de (insertar año).', url: 'https://www.instagram.com/p/DDhpuYgRmps/' },
        { text: 'He estado saliendo con mi novia/novio durante # años. Aquí hay # conceptos básicos que aprendí que todo chico/chica debería hacer por una pareja en (insertar escenario).', url: 'https://www.instagram.com/p/DEbs2tsxl8_/' },
        { text: 'Cuando digo que hago (insertar acción) todos los días y no hago (insertar acción) todos los días la gente siempre me pregunta…', url: 'https://www.instagram.com/p/DGDy2KMJfQH/' },
        { text: '# de formas de criar a los niños (insertar adjetivo).', url: 'https://www.instagram.com/p/DDP0DJDvdAL/' },
        { text: 'Está bien si tu mamá no te habló de eso.', url: 'https://www.instagram.com/p/DCJwFyKvi03/' },
        { text: 'La razón por la que no puedes (insertar resultado del sueño) obtener ese (insertar resultado del sueño) del que sigues hablando es porque…', url: 'https://www.instagram.com/p/DDKbMBDPz-R/' },
        { text: 'Este es tu (insertar sustantivo) en un día normal, este eres tú (insertar sustantivo) en (insertar escenario).', url: 'https://www.instagram.com/p/DFGFur-uB7M/' },
        { text: 'Ustedes conocen esa mirada, cuando alguien perfectamente (insertar acción) y (insertar acción) Estoy obsesionada con este (insertar sustantivo).', url: 'https://www.instagram.com/p/DDpulHmx30Z/' },
        { text: 'Anhelas (insertar sustantivo) en tu (insertar escenario) aquí está el por qué.', url: 'https://www.instagram.com/p/DFYO1KMxUoy/' },
        { text: 'Este eres tú (insertar sustantivo) cuando tú (insertar acción), y este es tu (insertar sustantivo) cuando tú (insertar acción).', url: 'https://www.instagram.com/p/DHI7KYmOgHL/' },
        { text: 'Tengo (insertar sustantivo) comercial (insertar sustantivo).', url: 'https://www.instagram.com/p/DH6Nb_7JpIT/' },
        { text: 'Detente (insertar acción) si realmente quieres (insertar resultado del sueño).', url: 'https://www.instagram.com/p/DGaYM9PIO9b/' },
        { text: 'Esto es lo que (inserte el resultado de su sueño) puede lograr si (inserte la acción), y esto es lo que (inserte el resultado de su sueño) puede lograr si (inserte la acción) y esta cantidad de trucos.', url: 'https://www.instagram.com/p/DE8lZdOOLDa/' },
        { text: 'Si deseas (inserta # del resultado de tu sueño) por semana, así es como lo vas a hacer.', url: 'https://www.instagram.com/p/DBumWY_tbj-/' },
        { text: 'Esto es para los colegas que prometieron (insertar persona/personas) y que son agradables y elegantes (insertar sustantivo).', url: 'https://www.instagram.com/p/DHZJfckxUnr/' },
        { text: '¿Qué pasaría si te dijera que puedes (insertar acción) por sólo (insertar bajo costo)?', url: 'https://www.instagram.com/p/DGjhMiPO7bd/' },
        { text: '¿Por qué me llevó más de # años darme cuenta de que se puede hacer (insertar resultado) en # minutos?', url: 'https://www.instagram.com/p/DHGjH0Gioy2/' },
        { text: 'No me odies, pero realmente no me importa (inserta algo básico de nicho), pero no te preocupes, te mostraré cómo hacerlo mucho mejor.', url: 'https://www.instagram.com/p/DIKPqy-TeZ9/' },
        { text: '(insertar resultado del sueño) y (insertar resultado del sueño) con estos consejos. Como referencia, tengo (insertar resultado personal).', url: 'https://www.instagram.com/p/DA35oVOpAAe/' },
        { text: 'Si tienes un (insertar resultado de sueño), sigue leyendo. Hoy vamos a hablar de un (insertar rutina, método) estrategia) para (insertar resultado del sueño) ¿Sabías que si (insertar acción), (insertar acción), (insertar acción), etc.', url: 'https://www.instagram.com/p/DFvcBZRp0kh/' },
        { text: 'Aquí te mostramos exactamente cuánto (inserta sustantivo) puedes ganar con menos de (inserta monto en dólares).', url: 'https://www.instagram.com/p/DG8MN0rAwpR/' },
        { text: 'La falta de estudios clínicos sobre (insertar sustantivo) no se debe a que no funcione, sino a que…', url: 'https://www.instagram.com/p/DHjYM2oukHZ/' },
        { text: 'Nunca obtendrás (inserta el resultado de tus sueños) en tu (inserta el rango de edad) si no haces estas 3 cosas cuando cumplas (inserta la edad).', url: '' }
    ];

    return (
        <main className="bg-white text-black">
            <div className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-gray-100 text-sm text-gray-500 hover:text-black">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Módulo
                    </Button>
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Biblioteca de<br/>Ganchos Virales.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Una colección curada de ganchos probados para detener el scroll y capturar la atención en los primeros 3 segundos.
                    </p>

                    <div className="space-y-8">
                        {hooks.map((hook, index) => (
                            hook.url && <div key={index} className="p-6 border-l-4 border-gray-200 hover:border-gold transition-colors group">
                                <p className="text-lg text-gray-700 leading-relaxed mb-4 group-hover:text-black">{hook.text}</p>
                                <Link href={hook.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gold flex items-center gap-2">
                                    <Instagram size={16} /> Ver en Instagram
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ViralHooksPage;
