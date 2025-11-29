const categories = [
  { name: "SUV", img: "https://i.ibb.co/Yc8YzTb/suv.jpg" },
  { name: "Electric", img: "https://i.ibb.co/BG1yF9P/electric.jpg" },
  { name: "Sedan", img: "https://i.ibb.co/J5qFF8c/sedan.jpg" },
  { name: "Van", img: "https://i.ibb.co/tbHFRp0/van.jpg" },
];

const TopCategories = () => {
  return (
    <div className="my-25 px-20">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Top Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((c, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow group cursor-pointer"
          >
            <img
              src={c.img}
              className="h-40 w-full object-cover group-hover:scale-105 transition"
            />
            <div className="p-3 text-center font-semibold">{c.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
