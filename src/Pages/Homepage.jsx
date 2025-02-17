import React from "react";

const blogData = [
  {
    id: 3,
    title:
      "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas from Acurable",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
    author: "Darrell Etherington",
    published_date: "2023-10-01",
    content:
      "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
    category: "Tech",
  },
  {
    id: 4,
    title:
      "Rainforest raises $8.5M to help software companies embed financial services, payments",
    image:"https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
    author: "Mary Ann Azevedo",
    published_date: "2023-10-01",
    content:
      "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared that, “Every company will be a fintech company.” Specifically, Strange projected that — in the not-too-d...",
    category: "Innovation",
  },
  {
    id: 5,
    title:
      "Pow.bio says biomanufacturing is broken and its continuous fermentation tech will fix it",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/Pow-Lab2.jpg?w=430&h=230&crop=1",
    author: "Christine Hall",
    published_date: "2023-10-01",
    content:
      "Pow.bio intends to bring down the costs associated with biomanufacturing by reimagining of fermentation facility operations.",
    category: "Technology",
  },
  {
    id: 6,
    title:
      "Recapitalization, $60M Series D support growth of e-commerce financier Clearco",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1",
    author: "Christine Hall",
    published_date: "2023-10-01",
    content:
      "Today is news marks a turnaround for a company that is had its share of ups and downs over the past year.",
    category: "Entrepreneurship",
  },
];

const Homepage = () => {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mb-10">
      {blogData.length != 0 ?
        blogData.map((blogPost, index) => (
          <div key={index} className="shadow hover:shadow-lg rounded-xl m-5 relative">
           <div className="w-full h-40 object-cover">
           <img src={blogPost.image} alt={blogPost.title} className="w-full h-40"/>
           </div>
           <div className="px-4 py-3">
            <h1 className="font-bold text-md mb-2">{blogPost.title}</h1>
            <p className="text-sm text-ellipsis text-gray-600">{blogPost.content.slice(0,100)}...</p>

              <p className="py-4 text-xs text-gray-800">{blogPost.published_date}</p>

            <div className="absolute top-3 p-2 px-4 bg-blue-900 rounded-full w-max">
              <p className="text-sm text-white">{blogPost.category}</p>
            </div>

           </div>
          </div>
        ))
      
      :
      <div className="flex h-screen w-full justify-center items-center">No blog post...</div>
      }
    </div>
  );
};

export default Homepage;