export default {
    company: {
        name: 'Ambar',
        slogan: '¡Hazlo simple!',
        calendarSlogan: 'Captura cada momento: tu vida, perfectamente organizada en un solo calendario.',
    },
    language: 'Idioma',
    languages: {
        en: 'en 🇺🇸',
        es: 'es 🇪🇸',
    },
    navigation: {
        menu: {
            home: 'Inicio',
            intro: 'Introducción',
            challengeOne: 'Reto 1: Formulario',
            challengeTwo: 'Reto 2: Diseño',
            challengeThree: 'Reto 3: Calendario',
        },
        navbar: {
            home: 'Inicio',
            intro: 'Introducción',
            register: 'Registro',
            profile: 'Perfil',
            calendar: 'Mi Calendario',
            challenges: 'Retos',
            contact: 'Contacto',
        },
        backHome: 'Volver a Inicio',
    },
    home: {
        title: 'Bienvenido al Reto Técnico de Ambar',
        subtitle: 'Explora y resuelve emocionantes retos de programación diseñados para potenciar tus habilidades.',
        getReady: 'Listo para crear el futuro: empecemos.',
        introButton: 'Introducción',
        liveDemoButton: 'Demostración en Vivo',
    },
    registerForm: {
        title: 'Formulario de Registro',
        description: 'Por favor, completa el formulario a continuación para registrarte.',
        submitButton: 'Enviar',
        successMessage: '¡Registro exitoso!',
        errorMessage: 'Hubo un error con tu registro. Por favor, inténtalo de nuevo.',
    },
    profile: {
        navbar: {
            title: 'Perfil',
            subtitle: 'Gestiona tu perfil y configuraciones.',
        },
    },
    intro: {
        title: 'Introducción',
        description: {
            p1: 'En este desafío técnico, te presentamos un proyecto de desarrollo web que utiliza <strong>Vue 3 y TailwindCss</strong>. Tu objetivo es solucionar los retos técnicos propuestos en las diferentes vistas. Las vistas de cada reto contendrán la información técnica necesaria para el desarrollo del mismo, pero si en alguno de ellos existe alguna duda, contacta con nosotros y lo resolveremos lo antes posible.',
            p2: 'Además de los tres retos técnicos, <strong>se valorarán positivamente</strong> las aportaciones personales que se le quieran dar a la base del proyecto, como por ejemplo, <strong>mejoras a la interfaz para hacerla responsive y más actual, o refactorizar código existente para una mejor carga del contenido</strong>. No hay una única manera de resolver los ejercicios, no entres en bucles infinitos de mejora, <strong>más allá de evaluar el conocimiento queremos conocer tu forma de trabajar</strong>. Siéntete libre de utilizar lo que tú consideres que es lo mejor para cada situación.',
            p3: 'Y puestos a pedir... ¡nos encantaría ver una estructura de <strong>testing</strong> con un par de ejemplos! Te hemos dejado preparado nuestro stack de testing: Playwright, Vitest y Vue Testing Library. Puedes utilizarlo o no, pero si lo haces, te lo valoraremos positivamente. Nada complejo, solo una idea de cómo podrías estructurar tus tests.',
            p4: "Finalmente, para entregarnos tus resultados, por favor proporciona un enlace a un repositorio que contenga tu solución. Puedes enviar la invitación a tech.interview{'@'}ambarpartners.com.",
            p5: '¡Buena suerte!',
        },
        titleChallengeOne: 'Reto Técnico 1: Formulario de Registro de Usuarios.',
        descriptionChallengeOne: {
            p1: 'Diseña un formulario de registro de usuarios en la primera vista. Asegúrate de que sea intuitivo, funcional y aplica reglas para validar los datos. Además, incorpora buenas prácticas de desarrollo para mantener un código limpio, organizado y <strong>reutilizable</strong>. En este caso nos gustaría evitar librerías tipo VeeValidate o Vuelidate para la validación. Creemos que este ejercicio es el mejor ejemplo para ver cómo te desenvuelves con el testing.',
        },
        titleChallengeTwo: 'Reto Técnico 2: Vista de Datos del Usuario.',
        descriptionChallengeTwo: {
            p1: 'La segunda vista se centra en presentar datos de usuarios de manera clara y legible. Debes asegurarte de que la vista sea completamente <strong>responsive</strong> y cumpla con buenas prácticas.',
        },
        titleChallengeThree: 'Reto Técnico 3: Calendario de Eventos.',
        descriptionChallengeThree: {
            p1: 'En la tercera vista, tu desafío consiste en arreglar un sistema de registro de eventos. <strong>La vista, por defecto, no funcionará</strong>. Estamos proporcionando una serie de datos que no conseguimos mostrar, ¿puedes ayudarnos con ello?',
        },
    },
}
