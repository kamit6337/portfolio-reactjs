import CustomImages from "../assets/images/index";
import ReactIcons from "../assets/icons/index";

const ProjectsData = [
  {
    title: "SendIt",
    category: "Social Media Application",
    tech: "React JS,Socket.io, React-Query, Tailwind-CSS, Node JS, Express JS, MongoDB, Mongoose, Passport.js, JsonWebToken, AWS, Docker",
    image: CustomImages.sendit,
    github: "https://github.com/kamit6337/send-It-client",
    preview:
      "https://amit-general-bucket.s3.ap-south-1.amazonaws.com/videos/send-it.mp4",
    details: [
      "It's a social media website like Twitter where you can post, like, reply post and share post and also chat with members",
      "follow and communicate to peoples all around the world",
      "login with email or password or login with much more trustworthy, Google OAuth2.0",
      "real-time response and chat features",
      "search personality and follow them",
    ],
    icons: [
      {
        icon: ReactIcons.reactjs,
        name: "React JS",
      },
      {
        icon: (
          <img
            alt="image"
            width={30}
            height={30}
            src={CustomImages.reactQuery}
          />
        ),
        name: "React-Query",
      },
      {
        icon: ReactIcons.socketIO,
        name: "SocketIO",
      },
      {
        icon: ReactIcons.redux,
        name: "Redux",
      },
      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: ReactIcons.nodejs,
        name: "Node JS",
      },
      {
        icon: ReactIcons.express,
        name: "Express JS",
      },
      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <img
            width={50}
            height={50}
            src={CustomImages.mongoose}
            alt="mongoose"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },
    ],
  },

  {
    title: "Commercify",
    category: "E-Commerce Application",
    tech: "React JS, React-Query, Tailwind-CSS, Redux, Node JS, Express JS, Passport.js, JsonWebToken, Stripe API, MongoDB, Mongoose, JsonWebToken",
    image: CustomImages.addtocart,
    github: "https://github.com/Kamit6337/commercify-client",
    preview:
      "https://amit-general-bucket.s3.ap-south-1.amazonaws.com/videos/commercify.mp4",
    details: [
      "like Amazon, Flipkart or any other E-Commerce platform, see a collections of products of different categories",
      "login using mobile OTP which is gaining popularity now a days",
      "filter products based on categories, pricing",
      "sort product list based on price",
      "payment mechanism using Stripe API which accept payment through Debit and Credit card in local currency",
      "create wishlist of products to buy them later",
      "cancel the product before it gets delivered",
      "return the product after it was delivered",
      "rate the delivered product out of 5 stars along with title and comment",
    ],
    icons: [
      {
        icon: ReactIcons.reactjs,
        name: "React JS",
      },
      {
        icon: (
          <img
            width={30}
            height={30}
            alt="image"
            src={CustomImages.reactQuery}
          />
        ),
        name: "React-Query",
      },
      {
        icon: ReactIcons.redux,
        name: "Redux",
      },

      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: ReactIcons.nodejs,
        name: "Node JS",
      },
      {
        icon: ReactIcons.express,
        name: "Express JS",
      },
      {
        icon: ReactIcons.stripe,
        name: "Stripe API",
      },

      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <img
            width={50}
            height={50}
            src={CustomImages.mongoose}
            alt="mongoose"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },

      {
        icon: (
          <img alt="image" width={40} height={40} src={CustomImages.axios} />
        ),
        name: "Axios",
      },
    ],
  },
  {
    title: "Notable",
    category: "CRUD based Application",
    tech: "React JS,React-Quill, Socket.io, React-Query, Tailwind-CSS, Node JS, Express JS, MongoDB, Mongoose, Passport.js, JsonWebToken",
    image: CustomImages.notable,
    github: "https://github.com/Kamit6337/notable-client",
    preview:
      "https://amit-general-bucket.s3.ap-south-1.amazonaws.com/videos/notable.mp4",
    details: [
      "here you can write your memories, study material, diaries and many more things",
      "login with email or password or login with much more trustworthy, Google OAuth2.0",
      "create notebook for each of the of category to segregate the topic",
      "you can attach tag to each notes which help in filtering of notes",
      "enabling text-editor to highlight or cutomise your text to make your notes much more readable and understandable to you",
    ],
    icons: [
      {
        icon: ReactIcons.reactjs,
        name: "React JS",
      },
      {
        icon: (
          <img
            alt="image"
            width={30}
            height={30}
            src={CustomImages.reactQuery}
          />
        ),
        name: "React-Query",
      },

      {
        icon: ReactIcons.redux,
        name: "Redux",
      },

      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: ReactIcons.nodejs,
        name: "Node JS",
      },
      {
        icon: ReactIcons.express,
        name: "Express JS",
      },
      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <img
            width={50}
            height={50}
            src={CustomImages.mongoose}
            alt="mongoose"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },
    ],
  },
];

export default ProjectsData;
