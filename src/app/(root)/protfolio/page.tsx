import PageTitle from "@/components/PageTitle";
import ProjectsSection from "@/components/sections/ProjectsSection";
import React from "react";

const Protfolio = () => {

interface All_ProjectsType {
    id: number;
    title: string;
    description: string;
    url: string;
    image: string;
}
const All_Projects:All_ProjectsType[] = [
    {
        id: 1,
        title: "Rajshahi Zela Porisod Website",
        description: "Developed the official website for Rajshahi Zela Porisod using React.js for the frontend and CodeIgniter for the backend. The site offers comprehensive information and services to the residents of Rajshahi, enhancing accessibility and user experience.",
        url: "https://zprajshahi.gov.bd/",
        image: "/images/zp-rajshahi-gov-bd.PNG"
    },
    {
        id: 2,
        title: "Rajshahi Zela Porisod Website",
        description: "Developed the official website for Rajshahi Zela Porisod using Next.js for the frontend. The site offers comprehensive information and services to the residents of Rajshahi, enhancing accessibility and user experience.",
        url: "https://zprajshahi-next-14.vercel.app/",
        image: "/images/zp-rajshahi-gov-bd-2.PNG"
    },
    {
        id: 3,
        title: "Product Management Softwere",
        description: "I have built a robust Product Management Software using Next.js, Tailwind CSS, and Shadcn UI. This application streamlines product management tasks, offering an intuitive and efficient user experience for managing products.",
        url: "https://productify-bd-2.vercel.app/",
        image: "/images/productify-bd-2.PNG"
    },
    {
        id: 4,
        title: "Furniture eCommerce Shop",
        description: "I have built a comprehensive Furniture eCommerce Shop using Next.js, Tailwind CSS, and Shadcn UI. This application provides a seamless shopping experience with a visually appealing and user-friendly interface for browsing and purchasing furniture.",
        url: "https://devnex-shop-1.vercel.app/",
        image: "/images/Furniture-eCommerce-Shop.PNG"
    },
    {
        id: 5,
        title: "Furniture eCommerce Shop",
        description: "I have built a comprehensive Furniture eCommerce Shop using Next.js, Tailwind CSS, and Shadcn UI. This application provides a seamless shopping experience with a visually appealing and user-friendly interface for browsing and purchasing furniture.",
        url: "https://devnex-shop-1.vercel.app/",
        image: "/images/eCommerce-website-2.PNG"
    },
    {
        id: 6,
        title: "Grocery Shop Clone",
        description: "I have cloned a Grocery Shop using Next.js, Tailwind CSS, and Shadcn UI. This application replicates the functionalities of a modern online grocery store, providing a smooth and intuitive user experience for browsing and purchasing groceries.",
        url: "https://devnex-shop-2.vercel.app/",
        image: "/images/eCommerce-website-2.PNG"
    },
    {
        id: 7,
        title: "Beautiful eCommerce Shop",
        description: "I have designed a beautiful eCommerce shop website using Tailwind CSS, Next.js, Framer Motion, and Daisy UI. This application offers a visually stunning and smooth shopping experience with engaging animations and an intuitive interface.",
        url: "https://devnex-shop-3.vercel.app/",
        image: "/images/eCommerce-website-3.PNG"
    },
    {
        id: 8,
        title: "Bd-Tickets: Bus, Train, and Plane Ticket Selling Website",
        description: "I have built a comprehensive ticket selling website named Bd-Tickets using Next.js and Tailwind CSS. This platform allows users to easily browse and purchase bus, train, and plane tickets with a user-friendly and responsive interface.",
        url: "https://devnex-shop-3.vercel.app/",
        image: "/images/bd-tickets.PNG"
    },
    {
        id: 9,
        title: "Modern Dashboard",
        description: "I have built a modern-looking dashboard using Next.js, Tailwind CSS, and Daisy UI. This dashboard provides a clean, intuitive, and responsive interface, perfect for managing and visualizing data efficiently.",
        url: "https://productify-bd.vercel.app/dsb",
        image: "/images/Dashboard-design.PNG"
    },
    {
        id: 10,
        title: "UI Library",
        description: "I have built a UI library using Next.js and Tailwind CSS. This library offers a collection of reusable, customizable components designed to streamline the development of modern web applications.",
        url: "https://suborno-dev-library.vercel.app/",
        image: "/images/ui-library.PNG"
    },
    {
        id: 10,
        title: "Product Management Dashboard",
        description: "I have built a beautiful, ( Email: suborno.dev@gmail.com, pass: 1234 ) functional product management dashboard using Next.js, Tailwind CSS, and Daisy UI. This dashboard offers an intuitive, responsive interface designed to streamline product management tasks effectively.",
        url: "https://devnex.vercel.app/",
        image: "/images/Dashboard-design-2.PNG"
    },
    {
        id: 12,
        title: "Product Management Dashboard-2",
        description: "I have built another product management dashboard using Next.js and Tailwind CSS. This dashboard features a sleek, user-friendly design that simplifies managing products and enhances productivity.",
        url: "https://productify360.vercel.app/",
        image: "/images/Dashboard-design-3.PNG"
    },
    {
        id: 13,
        title: "Beautiful Animated Portfolio",
        description: "Crafted a stunning animated portfolio using Tailwind CSS, Framer Motion, and Next.js. This visually appealing website combines elegant design with smooth animations to showcase my projects and skills in an engaging manner.",
        url: "https://car-rental-2023.vercel.app/",
        image: "/images/beautifull-protfolio.PNG"
    },
    {
        id: 12,
        title: "Animated Car Rental Website",
        description: "Created a stunning animated car rental website using Next.js, Tailwind CSS, and Framer Motion. This visually appealing website offers seamless navigation, beautiful design, and engaging animations to enhance the user experience and facilitate easy car rentals.",
        url: "https://car-rental-2023.vercel.app/",
        image: "/images/Car-rental-website.PNG"
    },
    {
        id: 14,
        title: "Polytechnic Website",
        description: "Crafted an educational website for Bangladesh Polytechnic Institute using Next.js, Tailwind CSS, Framer Motion, and Next UI. This comprehensive platform offers a seamless user experience, intuitive navigation, and engaging animations to facilitate learning. With a modern design and responsive layout, it aims to provide students and educators with a dynamic online learning environment.",
        url: "https://car-rental-2023.vercel.app/",
        image: "/images/bpi-website.PNG"
    },
    {
        id: 15,
        title: "Polytechnic Website",
        description: "Crafted an educational website for Bangladesh Polytechnic Institute using Next.js, Tailwind CSS, Framer Motion, and Next UI. This comprehensive platform offers a seamless user experience, intuitive navigation, and engaging animations to facilitate learning. With a modern design and responsive layout, it aims to provide students and educators with a dynamic online learning environment.",
        url: "https://car-rental-2023.vercel.app/",
        image: "/images/paralax-protfolio-dsign.PNG"
    },
    {
        id: 16,
        title: "Polytechnic Website",
        description: "Developed a comprehensive educational website for Bangladesh Polytechnic Institute using React.js, Bootstrap, and CSS3. This platform offers a user-friendly interface and responsive design, ensuring seamless navigation and accessibility across devices. Featuring interactive elements and engaging content, the website provides students and educators with valuable resources, course materials, and institutional information. Elevate the online learning experience with this dynamic and visually appealing educational platform.",
        url: "https://car-rental-2023.vercel.app/",
        image: "/images/bpi-polytechnic-web-react.PNG"
    },
    {
        id: 17,
        title: "Get-Together Registation Web App",
        description: "Introducing a vibrant get-together website for Bangladesh Polytechnic Institute, built with Next.js, Tailwind CSS, and Daisy UI. This platform fosters connections and community engagement among students, faculty, and alumni. With its modern design and intuitive interface, users can easily navigate event listings, RSVP for gatherings, and connect with peers. The website leverages Next.js for fast performance, Tailwind CSS for sleek styling, and Daisy UI for enhanced UI components. Join the celebration and stay connected with the Bangladesh Polytechnic Institute community!",
        url: "https://bpi-get-together.vercel.app/",
        image: "/images/get-together-web-app.PNG"
    },
    {
        id: 18,
        title: "Glass Porpoise Chat App",
        description: "Introducing a sleek and modern chat app with a glass-inspired design. Built using Next.js, Tailwind CSS, and Daisy UI, this chat app offers a visually stunning user experience. Engage in seamless conversations with friends, colleagues, and loved ones in a beautifully crafted interface. With its intuitive features and elegant aesthetics, the Glass Porpoise Chat App redefines the way you connect online. Explore its transparent UI elements, smooth animations, and responsive layout for an immersive chatting experience. Join the conversation today!",
        url: "https://chat-app-tau-eosin.vercel.app/messenger",
        image: "/images/chat-app.PNG"
    },
    {
        id: 19,
        title: "Football Match Time",
        description: "Welcome to the ultimate destination for football enthusiasts! Our Football Match Time Website, built with Next.js and Tailwind CSS, brings you the latest updates on upcoming matches, live scores, and match schedules. Powered by MongoDB and Prisma, our website ensures seamless data management and real-time updates. Whether you're a die-hard fan or a casual observer, stay ahead of the game with our comprehensive coverage of football matches from around the world. Explore match fixtures, team line-ups, player stats, and much more in a user-friendly interface designed for football lovers. Get ready to experience the thrill of football like never before!",
        url: "https://www.crackstreamsports.live/",
        image: "/images/football-match.PNG"
    },
]


  return (
    <div className="pt-20">
      <PageTitle title="Protfolio" />
      <main>
        {All_Projects.map((item, index) => (
          <>
            <div key={index}>
              {item.id}
              <ProjectsSection 
              image={item.image}
              url={item.url}
              title={item.title}
              description={item.description}
              isReflect={index % 2 ==  0 ? true : false} 
              />
            </div>
          </>
        ))}
      </main>
    </div>
  );
};

export default Protfolio;
