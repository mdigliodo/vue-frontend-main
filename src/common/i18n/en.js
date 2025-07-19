export default {
    company: {
        name: 'Ambar',
        slogan: 'Keep it simple!',
        calendarSlogan: 'Capture every moment—your life, perfectly organized in one calendar.',
    },
    language: 'Language',
    languages: {
        en: 'en 🇺🇸',
        es: 'es 🇪🇸',
    },
    navigation: {
        menu: {
            home: 'Home',
            intro: 'Introduction',
            challengeOne: 'Challenge 1: Form',
            challengeTwo: 'Challenge 2: Design',
            challengeThree: 'Challenge 3: Calendar',
        },
        navbar: {
            home: 'Home',
            intro: 'Introduction',
            register: 'Register',
            profile: 'Profile',
            calendar: 'My Calendar',
            challenges: 'Challenges',
            contact: 'Contact',
        },
        backHome: 'Back to Home',
    },
    home: {
        title: "Welcome to Ambar's Technical Challenge",
        subtitle: 'Explore and solve exciting coding challenges designed to boost your skills.',
        getReady: "Ready to shape the future—let's begin.",
        introButton: 'Introduction',
        liveDemoButton: 'Live Demo',
    },
    registerForm: {
        title: 'Registration Form',
        description: 'Please fill out the form below to register.',
        submitButton: 'Create Account',
        successMessage: 'Registration successful!',
        errorMessage: 'There was an error with your registration. Please try again.',
    },
    profile: {
        navbar: {
            title: 'Profile',
            subtitle: 'Manage your profile and settings.',
        },
    },
    intro: {
        title: 'Introduction',
        description: {
            p1: 'In this technical challenge, we present you with a web-development project that uses <strong>Vue 3 and TailwindCSS</strong>. Your goal is to solve the technical tasks proposed in the different views. Each challenge view will contain the necessary technical details for its development, but if you have any doubts in any of them, contact us and we will resolve it as soon as possible.',
            p2: 'In addition to the three technical challenges, <strong>personal contributions to the project base will be positively valued</strong>, such as <strong>improving the interface to make it responsive and more up-to-date, or refactoring existing code for better content loading</strong>. There is no single way to solve the exercises; don’t fall into infinite improvement loops—<strong>beyond assessing knowledge, we want to understand how you work</strong>. Feel free to use whatever you consider best for each situation.',
            p3: "And while we're at it… we'd love to see a <strong>testing</strong> structure with a couple of examples! We have prepared our testing stack for you: Playwright, Vitest, and Vue Testing Library. You can use it or not, but if you do, we will value it positively. Nothing complex—just an idea of how you might structure your tests.",
            p4: "Finally, to deliver your results, please provide a link to a repository containing your solution. You can send the invitation to tech.interview{'@'}ambarpartners.com.",
            p5: 'Good luck!',
        },
        titleChallengeOne: 'Technical Challenge 1: User Registration Form.',
        descriptionChallengeOne: {
            p1: 'Design a user-registration form in the first view. Make sure it is intuitive, functional, and applies rules to validate the data. Also, incorporate best-development practices to keep the code clean, organized, and <strong>reusable</strong>. In this case we would like to avoid validation libraries such as VeeValidate or Vuelidate. We believe this exercise is the best example to see how you handle testing.',
        },
        titleChallengeTwo: 'Technical Challenge 2: User Data View.',
        descriptionChallengeTwo: {
            p1: 'The second view focuses on presenting user data in a clear and readable way. You must ensure the view is fully <strong>responsive</strong> and follows best practices.',
        },
        titleChallengeThree: 'Technical Challenge 3: Events Calendar.',
        descriptionChallengeThree: {
            p1: 'In the third view, your challenge is to fix an events-registration system. <strong>By default, the view will not work</strong>. We are providing a set of data that we have not managed to display—can you help us with that?',
        },
    },
}
