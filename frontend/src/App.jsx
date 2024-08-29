import Category from "./components/Category"

function App() {
  let categories = [
    {
      category: "University",
      image: "../public/university.png",
      location: "university",
    },
    {
      category: "Apartament",
      image: "../public/apartament.png",
      location: "apartament",

    },
    {
      category: "Gym",
      image: "../public/gym.png",
      location: "gym",

    },
    {
      category: "Weekly Food",
      image: "../public/food.png",
      location: "food",

    }
  ];
  let categoryTagArray = categories.map((category, index) =>
    <Category key={index} category={category.category} image={category.image} location={category.location} />)

  return (
    <div className="bg-slate-100 h-screen flex-col justify-center place-items-center text-center">
      <h1>Choose which expense you want to see</h1>
      <section className="grid grid-cols-2 justify-center place-items-center h-1/2 gap-4">
        {categoryTagArray}
      </section>
    </div >
  )
}

export default App
