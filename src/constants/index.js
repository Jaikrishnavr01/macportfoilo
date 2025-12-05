const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "My Recent Works", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  // {
  //   id: "photos",
  //   name: "Gallery", // was "Photos"
  //   icon: "photos.png",
  //   canOpen: true,
  // },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    title:
      "RoleLink CRM – Admin • Engineer • Customer Management",
    image: "/images/crm.jpeg",
    link: "https://jaikrishna-crm.netlify.app/",
  },
  {
    id: 2,
    title: "MBA – Online Ticket Booking System",
    image: "/images/movie.png",
    link: "https://moviebookingwebsite.netlify.app/",
  },
  {
    id: 3,
    title: "Iphone website clone",
    image: "/images/iphone.png",
    link: "https://effervescent-semolina-ff54e8.netlify.app/",
  },
  {
    id: 4,
    title: "Hotel Booking Website",
    image: "/images/hotel.png",
    link: "https://jaikrishna-hotelwebsite.netlify.app/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Html", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "CRM – Admin • Engineer • Customer Management",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "CrmProject.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our CRM System is a powerful platform designed to streamline communication between Admins, Engineers, and Customers.",
            "Instead of relying on manual tracking, users can manage tickets, monitor progress, and ensure faster issue resolution—all in one place.",
            "Think of it as a smart bridge that keeps every stakeholder connected, informed, and productive at every stage of the workflow.",
            "Built using the MERN stack, it delivers a seamless, secure, and responsive experience across devices with a clean, modern interface.",
          ],

        },
        {
          id: 2,
          name: "jaikrishna-crm.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://jaikrishna-crm.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "crm.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/crm.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Iphone website clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Iphone website clone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Our iPhone Website Clone is a sleek and modern recreation of Apple’s iconic product page experience.",
            "Instead of simple static layouts, it delivers smooth animations, dynamic sections, and a premium feel that mirrors Apple’s design language.",
            "Think of it like a mini Apple showcase—highlighting product details, features, and visuals with elegance and precision.",
            "It's built with Next.js and Tailwind, ensuring fast performance, pixel-perfect responsiveness, and a refined, professional UI across all devices.",
          ],

        },
        {
          id: 2,
          name: "effervescent-semolina-ff54e8.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://effervescent-semolina-ff54e8.netlify.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Iphone website clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/iphone.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Movie Booking Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Movie Booking Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Movie Booking Website is a seamless platform that makes discovering and reserving movie tickets effortless for users.",
            "Instead of standing in queues or switching between multiple apps, users can browse movies, check showtimes, and book seats instantly—all in one place.",
            "Think of it as a complete movie companion—helping users explore films, select preferred seats, and enjoy a smooth, hassle-free booking experience.",
            "Built using the MERN stack, it offers fast performance, secure bookings, and a clean, modern interface optimized for all devices.",
          ],


        },
        {
          id: 2,
          name: "moviebookingwebsite.netlify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://moviebookingwebsite.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Movie booking.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/movie.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.png",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 right-72",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.png",
      description: [
        "Hey! I’m Jai Krishna 👋, a MERN stack web developer who loves turning ideas into clean, functional, and visually pleasing web experiences.",
        "I specialize in JavaScript, React, Node.js, Express, and MongoDB—building fast, responsive apps that feel smooth and intuitive to use.",
        "I’m all about clean UI, solid UX, and writing code that future-me won’t panic about when debugging 😄.",
        "When I’m not coding, you’ll probably find me designing new layouts, exploring cool tech, or sipping chai while planning my next side project ☕✨",
      ],

    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;
const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contact: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  resume: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  safari: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  photos: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  terminal: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  txtfile: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  imgfile: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };