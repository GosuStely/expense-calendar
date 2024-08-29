import Category from "./components/Category"

function App() {
  let categories = [
    {
      category: "University",
      image: "https://cdn-icons-png.flaticon.com/512/124/124051.png",
      location: "university",
    },
    {
      category: "Apartament",
      image: "https://cdn-icons-png.flaticon.com/512/124/124051.png",
      location: "apartament",

    },
    {
      category: "Gym",
      image: "https://cdn-icons-png.flaticon.com/512/124/124051.png",
      location: "gym",

    },
    {
      category: "Weekly Food",
      image: "https://cdn-icons-png.flaticon.com/512/124/124051.png",
      location: "food",

    }
  ];
  let categoryTagArray = categories.map((category, index) =>
    <Category key={index} category={category.category} image={category.image} location={category.location} />)

  return (
    <div className="bg-slate-100 h-screen flex-col justify-center place-items-center text-center">
      <h1>Choose which expense you want to see</h1>
      <section className="flex flex-row justify-center place-items-center h-1/2 gap-10">
        {categoryTagArray}
      </section>
    </div >
  )
}

export default App
