import Category from "./components/Category"

function App() {
  const categories = [
    {
      category: "University",
      image: "/university.png",
      location: "university",
    },
    {
      category: "Apartament",
      image: "/apartament.png",
      location: "apartament",

    },
    {
      category: "Gym",
      image: "/gym.png",
      location: "gym",

    },
    {
      category: "Weekly Food",
      image: "/food.png",
      location: "food",

    }
  ];
  const categoryTagArray = categories.map((category, index) =>
    <Category key={index} category={category.category} image={category.image} location={category.location} />)

  return (
    <main className="bg-gray-300 h-screen flex-col justify-center place-items-center text-center">
      <h1 className="p-20 text-xl">Choose which expense you want to see</h1>
      <section className="grid grid-cols-2 justify-center place-items-center h-1/2 gap-5">
        {categoryTagArray}
      </section>
    </main >
  )
}

export default App
