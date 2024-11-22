import StoryBooks from '../../assets/StoryBooks.png';
import authSecret from '../../assets/auth-secret.png';
import ecommerceShop from '../../assets/ecommerce-shop.png';
import bookStoreApi from '../../assets/book-store-api.png';
import foody from '../../assets/foody.png';
import ecommerce from '../../assets/ecommerce.png';
import singlePageResponsive from '../../assets/single-page-responsive.png';
import vuejsMeals from '../../assets/vuejs-meals.png';
import eventApp from '../../assets/eventApp.png';
// import  from '../../assets/';

const projects = [
    {
        id: 1,
        image: bookStoreApi,
        title: "Book Store Api",
        description: "An API for a Book store built with Node.js, Express, MongoDB, bcryptjs & jwt",
        github: "https://github.com/AliHamdi63/Book-Store-API",
        demo: "https://book-store-api-sm0w.onrender.com/api/books"
    },
    {
        id: 2,
        image: StoryBooks,
        title: "Story Books",
        description: "Login with Google Auth and write stories public or private using Node.js, Express.js, MongoDB, Passports.js",
        github: "https://github.com/AliHamdi63/StoryBooks",
        demo: null
    },
    {
        id: 3,
        image: authSecret,
        title: "Secret Authentication",
        description: "This is an authentication system built with Node.js, ejs, Express, MongoDB, passport.js, cookies & bcryptjs.",
        github: "https://github.com/AliHamdi63/Secrets-Authentication",
        demo: "https://secrets-auth-2y59.onrender.com/"
    },
    {
        id: 4,
        image: ecommerceShop,
        title: "Ecommerce Shop",
        description: "This is a simple ECommerce website where you can add or remove products from the cart. Using Reactjs & redux toolkit.",
        github: "https://github.com/AliHamdi63/ecommerce_Shop",
        demo: "https://ecommerce-shop-flax.vercel.app/home"
    },
    {
        id: 5,
        image: foody,
        title: "Foody website",
        description: "This is a fullstack website built with Reactjs, MaterialUI, Node.js, Express & MongoDB.",
        github: "https://github.com/AliHamdi63/final-project-frontend",
        demo: "https://final-project-alihamdi63.vercel.app/"
    },
    {
        id: 6,
        image: vuejsMeals,
        title: "VueJs Meals",
        description: "Simple Vue.js project",
        github: "https://github.com/AliHamdi63/vuejs-meals",
        demo: "https://vuejs-meals.vercel.app/"
    },
    {
        id: 7,
        image: eventApp,
        title: "Events-app",
        description: "Simple Next.js project.",
        github: "https://github.com/AliHamdi63/Events-App",
        demo: "https://events-app-psi-seven.vercel.app/"
    },
    {
        id: 8,
        image: ecommerce,
        title: "Ecommerce Furnitures website",
        description: "This is a frontend website where you can add or remove products from the cart. Using Reactjs, Bootstrap & react-redux.",
        github: "https://github.com/AliHamdi63/ecommerce-reactjs",
        demo: "https://ecommerce-reactjs-beta.vercel.app/home"
    },
    {
        id: 9,
        image: singlePageResponsive,
        title: "Single Page Responsive",
        description: "A responsive page built with Bootstrap.",
        github: "https://github.com/AliHamdi63/BootstrapWebPage",
        demo: "https://bootstrap-web-page-one.vercel.app/"
    },
];

export default projects;