import { useState } from "react"

const menuItems = [
  // Loaded Teas
  { name: "Sour Patch Kid", category: "Loaded Tea", price: 8, accent: "blue", description: "Blue Blast Orange.", tag: "Popular" },
  { name: "Cherry Limeade", category: "Loaded Tea", price: 8, accent: "pink", description: "Cherry Limeade." },
  { name: "Pink Starburst", category: "Loaded Tea", price: 8, accent: "pink", description: "Pink Starburst." },
  { name: "Chanel", category: "Loaded Tea", price: 8, accent: "yellow", description: "Pineapple Strawberry." },
  { name: "Skittles", category: "Loaded Tea", price: 8, accent: "pink", description: "Rainbow Candy Tropical Punch." },
  { name: "Airhead", category: "Loaded Tea", price: 8, accent: "blue", description: "Blue Blast Cherry Rainbow Candy." },
  { name: "Cactus Blossom", category: "Loaded Tea", price: 8, accent: "pink", description: "Watermelon Strawberry Kiwi Blue Blast." },
  { name: "Deadpool", category: "Loaded Tea", price: 8, accent: "pink", description: "Grape Rainbow Candy." },

  // Protein Shakes
  { name: "Banana Nut Bread", category: "Protein Shake", price: 10, accent: "yellow", description: "Vanilla-style protein shake.", tag: "Popular" },
  { name: "Butter Pecan", category: "Protein Shake", price: 10, accent: "yellow", description: "Butter pecan protein shake." },
  { name: "Birthday Cake", category: "Protein Shake", price: 10, accent: "blue", description: "Birthday cake protein shake." },
  { name: "Carrot Cake", category: "Protein Shake", price: 10, accent: "yellow", description: "Carrot cake protein shake." },
  { name: "Christmas Sugar Cookie", category: "Protein Shake", price: 10, accent: "blue", description: "Sugar cookie protein shake." },
  { name: "Cinnabon", category: "Protein Shake", price: 10, accent: "yellow", description: "Cinnamon roll protein shake." },
  { name: "Egg Nog", category: "Protein Shake", price: 10, accent: "yellow", description: "Egg nog protein shake." },
  { name: "Fall in a Cup", category: "Protein Shake", price: 10, accent: "yellow", description: "Pumpkin spice style protein shake." },
  { name: "Honey Bunn", category: "Protein Shake", price: 10, accent: "yellow", description: "Honey bun protein shake." },
  { name: "Pumpkin Cheesecake", category: "Protein Shake", price: 10, accent: "yellow", description: "Pumpkin cheesecake protein shake." },
  { name: "Salted Caramel", category: "Protein Shake", price: 10, accent: "yellow", description: "Salted caramel protein shake." },
  { name: "Tres Leches", category: "Protein Shake", price: 10, accent: "yellow", description: "Tres leches protein shake." },
  { name: "Chunky Monkey", category: "Protein Shake", price: 10, accent: "blue", description: "Chocolate, banana, and peanut butter style shake." },
  { name: "Gingerbread", category: "Protein Shake", price: 10, accent: "blue", description: "Gingerbread protein shake." },
  { name: "Reeses", category: "Protein Shake", price: 10, accent: "blue", description: "Peanut butter chocolate protein shake.", tag: "Popular" },
  { name: "Smores", category: "Protein Shake", price: 10, accent: "blue", description: "S’mores protein shake." },
  { name: "Mocha Monkey", category: "Protein Shake", price: 10, accent: "blue", description: "Mocha banana protein shake." },
  { name: "Chocolate Covered Strawberry", category: "Protein Shake", price: 10, accent: "pink", description: "Chocolate strawberry protein shake." },
  { name: "Cherry Cobbler", category: "Protein Shake", price: 10, accent: "pink", description: "Cherry cobbler protein shake." },
  { name: "Lucky Charms", category: "Protein Shake", price: 10, accent: "yellow", description: "Lucky Charms protein shake." },
  { name: "Strawberry Banana", category: "Protein Shake", price: 10, accent: "pink", description: "Strawberry banana protein shake." },
  { name: "Pineapple Mango", category: "Protein Shake", price: 10, accent: "yellow", description: "Pineapple mango protein shake." },
  { name: "Wild Berry", category: "Protein Shake", price: 10, accent: "pink", description: "Mixed berry protein shake." },
  { name: "Dole Whip", category: "Protein Shake", price: 10, accent: "yellow", description: "Dole whip protein shake." },

  // Protein Coffee
  { name: "Butter Pecan Coffee", category: "Protein Coffee", price: 9, accent: "yellow", description: "Butter pecan protein coffee." },
  { name: "Caramel Mint", category: "Protein Coffee", price: 9, accent: "yellow", description: "Caramel mint protein coffee." },
  { name: "Frosted Sugar Cookie", category: "Protein Coffee", price: 9, accent: "yellow", description: "Sugar cookie protein coffee." },
  { name: "Mocha", category: "Protein Coffee", price: 9, accent: "blue", description: "Mocha protein coffee." },
  { name: "Salted Caramel Coffee", category: "Protein Coffee", price: 9, accent: "yellow", description: "Salted caramel protein coffee.", tag: "Popular" },
]

const categories = ["All", "Loaded Tea", "Protein Shake", "Protein Coffee"]
const pickupTimes = ["ASAP", "30 min", "45 min", "1 hr"]

function getAccent(item) {
  if (item.accent === "pink") {
    return {
      text: "text-pink-500",
      border: "border-pink-500",
      bg: "bg-pink-100",
      hover: "hover:bg-pink-500",
    }
  }

  if (item.accent === "yellow") {
    return {
      text: "text-amber-500",
      border: "border-amber-500",
      bg: "bg-amber-100",
      hover: "hover:bg-amber-500",
    }
  }

  return {
    text: "text-blue-700",
    border: "border-blue-700",
    bg: "bg-blue-100",
    hover: "hover:bg-blue-700",
  }
}

function DrinkMock({ color, label }) {
  return (
    <div className="relative flex h-64 w-36 items-end justify-center overflow-hidden rounded-[2rem] bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:rotate-1 md:h-80 md:w-45">
      <div className={`absolute bottom-0 h-52 w-full md:h-64 ${color}`} />
      <div className="absolute bottom-0 h-16 w-full bg-white/30 md:h-20" />

      <div className="relative mb-12 h-28 w-20 rounded-b-3xl rounded-t-xl bg-white/30 backdrop-blur-sm ring-4 ring-white/70 md:mb-14 md:h-32 md:w-24">
        <img
          src="/logo.webp"
          alt=""
          className="absolute left-1/2 top-8 w-14 -translate-x-1/2 rounded-full md:top-10 md:w-16"
        />
      </div>

      <p className="absolute bottom-5 left-2 right-2 text-center text-[10px] font-black uppercase leading-tight tracking-wide text-white md:bottom-6 md:text-xs">
        {label}
      </p>
    </div>
  )
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [order, setOrder] = useState([])
  const [pickupTime, setPickupTime] = useState("ASAP")
  const [customerName, setCustomerName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [notes, setNotes] = useState("")
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [showAllMenu, setShowAllMenu] = useState(false)

  const categoryItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  const filteredItems = showAllMenu
    ? categoryItems
    : categoryItems.slice(0, 6)

  const addToOrder = (item) => {
    setOrder((current) => {
      const existing = current.find((orderItem) => orderItem.name === item.name)

      if (existing) {
        return current.map((orderItem) =>
          orderItem.name === item.name
            ? { ...orderItem, qty: orderItem.qty + 1 }
            : orderItem
        )
      }

      return [...current, { ...item, qty: 1 }]
    })
  }

  const removeFromOrder = (item) => {
    setOrder((current) =>
      current
        .map((orderItem) =>
          orderItem.name === item.name
            ? { ...orderItem, qty: orderItem.qty - 1 }
            : orderItem
        )
        .filter((orderItem) => orderItem.qty > 0)
    )
  }

  const total = order.reduce((sum, item) => sum + item.price * item.qty, 0)
  const itemCount = order.reduce((sum, item) => sum + item.qty, 0)

const canSubmit =
  order.length > 0 &&
  customerName.trim() !== "" &&
  phoneNumber.trim() !== ""

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf8f1] text-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#fbf8f1]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <img
            src="/logo.webp"
            alt="BA Energy Vault"
            className="h-12 w-auto transition duration-300 hover:scale-105 md:h-14"
          />

          <div className="hidden gap-8 text-sm font-black uppercase md:flex">
            <a href="#menu" className="cursor-pointer transition hover:text-blue-700">
              Menu
            </a>
            <a href="#order" className="cursor-pointer transition hover:text-blue-700">
              Order
            </a>
            <a href="#location" className="cursor-pointer transition hover:text-blue-700">
              Location
            </a>
          </div>

          <a
            href="#order"
            className="cursor-pointer rounded-full bg-blue-700 px-4 py-2 text-xs font-black uppercase text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-xl active:translate-y-0 active:scale-[0.98] md:px-6 md:py-3 md:text-sm"
          >
            Order Ahead
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-4 pb-10 pt-12 md:px-6 md:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-blue-700 md:mb-5 md:text-sm md:tracking-[0.35em]">
              Broken Arrow, Oklahoma
            </p>

            <h1 className="text-[2.65rem] font-black uppercase leading-[0.88] tracking-tight md:text-7xl">
              Drinks that
              <span className="block text-amber-400">fuel your day.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-700 md:mt-6 md:text-xl">
              Protein shakes, loaded teas, and protein coffee made for energy,
              workouts, and everyday life.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8 md:gap-4">
              <a
                href="#order"
                className="cursor-pointer rounded-full bg-blue-700 px-7 py-4 text-center text-sm font-black uppercase text-white shadow-xl shadow-blue-700/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-2xl active:translate-y-0 active:scale-[0.98] md:px-8"
              >
                Order Ahead 🥤
              </a>

              <a
                href="#menu"
                className="cursor-pointer rounded-full border-2 border-blue-700 bg-white px-7 py-4 text-center text-sm font-black uppercase text-blue-700 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 active:translate-y-0 active:scale-[0.98] md:px-8"
              >
                View Full Menu
              </a>
            </div>
          </div>

          <div className="relative h-[360px] md:h-[650px]">
            <div className="absolute left-0 top-4 scale-[0.78] rotate-[-10deg] transition duration-500 hover:-translate-y-2 hover:rotate-[-6deg] md:left-10 md:top-10 md:scale-100">
              <DrinkMock color="bg-blue-400" label="Loaded Tea" />
            </div>

            <div className="absolute right-0 top-20 z-10 scale-[0.78] rotate-[8deg] transition duration-500 hover:-translate-y-2 hover:rotate-[4deg] md:top-40 md:scale-100">
              <DrinkMock color="bg-pink-400" label="Protein Shake" />
            </div>

            <div className="absolute bottom-0 left-16 z-20 scale-[0.78] rotate-[-4deg] transition duration-500 hover:-translate-y-2 hover:rotate-0 md:left-28 md:scale-100">
              <DrinkMock color="bg-amber-300" label="Protein Coffee" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1fr_2fr] md:items-center md:gap-6 md:p-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-500 md:text-sm md:tracking-[0.3em]">
              First-Time Customer Offer
            </p>

            <h2 className="mt-2 text-2xl font-black md:text-3xl">
              Get a Loaded Tea for <span className="text-pink-500">$5</span>
            </h2>
          </div>

          <p className="text-base text-zinc-700 md:text-lg">
            Quick energy, refreshing flavors, and high-protein options right next to Crunch Fitness.
          </p>
        </div>
      </section>

      <section id="menu" className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700 md:text-sm md:tracking-[0.3em]">
            Build Your Order
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">Full Menu</h2>

          <div className="mt-5 flex flex-wrap gap-2 md:mt-6 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setShowAllMenu(false)
                }}
                className={`cursor-pointer rounded-full border-2 px-4 py-2 text-xs font-black uppercase transition duration-300 hover:-translate-y-1 active:scale-[0.98] md:px-5 md:py-3 md:text-sm ${
                  activeCategory === category
                    ? "border-blue-700 bg-blue-700 text-white"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-blue-700 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => {
              const accent = getAccent(item)

              return (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className={`relative h-20 md:h-28 ${accent.bg}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

                    <div className="absolute bottom-3 left-3 flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-white/70" />
                      <div className="h-2 w-2 rounded-full bg-white/40" />
                      <div className="h-2 w-2 rounded-full bg-white/20" />
                    </div>

                    {item.tag && (
                      <span className="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-[9px] font-black uppercase text-zinc-700 shadow-sm md:right-4 md:top-4 md:px-3 md:text-xs">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-3 md:p-4">
                    <p
                      className={`mt-2 text-[9px] font-black uppercase tracking-[0.18em] md:text-xs ${accent.text}`}
                    >
                      {item.category}
                    </p>

                    <h3 className="mt-1 text-base font-black leading-tight md:text-xl">
                      {item.name}
                    </h3>

                    <p className="mt-2 hidden text-sm leading-relaxed text-zinc-700 md:block">
                      {item.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between md:mt-4">
                      <p className={`text-lg font-black md:text-xl ${accent.text}`}>
                        ${item.price}
                      </p>

                      <button
                        onClick={() => addToOrder(item)}
                        className={`cursor-pointer rounded-full border-2 px-3 py-1.5 text-xs font-black uppercase transition duration-300 hover:text-white hover:shadow-md active:scale-[0.98] md:px-4 md:py-2 ${accent.text} ${accent.border} ${accent.hover}`}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {categoryItems.length > 6 && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllMenu(!showAllMenu)}
                className="cursor-pointer rounded-full border-2 border-blue-700 bg-white px-8 py-4 text-sm font-black uppercase text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white active:scale-[0.98]"
              >
                {showAllMenu ? "Show Less" : "View Full Menu"}
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="order" className="px-4 pb-14 md:px-6 md:pb-20">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg md:grid-cols-[1fr_1fr]">
          <div className="bg-blue-700 p-6 text-white md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300 md:text-sm md:tracking-[0.3em]">
              Step 1
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">Your Order</h2>

            <p className="mt-4 text-sm text-blue-100 md:text-base">
              Add drinks from the menu above. Your order summary updates here.
            </p>

            <div className="mt-6 rounded-3xl bg-white/10 p-4 md:mt-8 md:p-5">
              {order.length === 0 ? (
                <p className="text-sm text-blue-100 md:text-base">
                  No items added yet. Choose a drink from the menu to get started.
                </p>
              ) : (
                <div className="grid gap-3 md:gap-4">
                  {order.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3 text-zinc-950 md:gap-4 md:p-4"
                    >
                      <div>
                        <p className="font-black">{item.name}</p>
                        <p className="text-xs text-zinc-500 md:text-sm">
                          {item.category} • ${item.price}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 md:gap-3">
                        <button
                          onClick={() => removeFromOrder(item)}
                          className="cursor-pointer rounded-full bg-zinc-100 px-3 py-1 font-black transition hover:bg-zinc-200"
                        >
                          -
                        </button>

                        <p className="font-black">{item.qty}</p>

                        <button
                          onClick={() => addToOrder(item)}
                          className="cursor-pointer rounded-full bg-zinc-100 px-3 py-1 font-black transition hover:bg-zinc-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <p className="text-base font-black md:text-lg">Estimated Total</p>
                    <p className="text-2xl font-black text-amber-300 md:text-3xl">${total}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700 md:text-sm md:tracking-[0.3em]">
              Step 2
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">Pickup Details</h2>

            <div className="mt-6 md:mt-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-zinc-500 md:text-sm">
                Pickup Time
              </p>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {pickupTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setPickupTime(time)}
                    className={`cursor-pointer rounded-xl border-2 px-4 py-3 text-sm font-black transition duration-300 hover:-translate-y-1 active:scale-[0.98] md:text-base ${
                      pickupTime === time
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-blue-700"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <form className="mt-7 grid gap-4 md:mt-8">
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="rounded-xl border border-zinc-200 p-4 transition duration-300 focus:border-blue-700 focus:outline-none"
                placeholder="Your name"
              />

              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="10"
                className="rounded-xl border border-zinc-200 p-4 transition duration-300 focus:border-blue-700 focus:outline-none"
                placeholder="Phone number"
              />

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-28 rounded-xl border border-zinc-200 p-4 transition duration-300 focus:border-blue-700 focus:outline-none"
                placeholder="Any customizations? Example: less ice, no whip, flavor swaps, extra protein, or pickup notes."
              />

              <button
                type="button"
                onClick={() => {
                  if (!canSubmit) return
                  setOrderSubmitted(true)
                }}
                aria-disabled={!canSubmit}
                className={`rounded-full px-8 py-4 font-black uppercase text-white shadow-lg transition duration-300 active:translate-y-0 active:scale-[0.98] ${
                  canSubmit
                    ? "cursor-pointer bg-blue-700 shadow-blue-700/20 hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-xl"
                    : "cursor-not-allowed bg-zinc-300 shadow-none"
                }`}
              >
                Submit Demo Order 🥤
              </button>

              {orderSubmitted && (
                <p className="rounded-xl bg-green-50 p-4 text-center text-sm font-bold text-green-700">
                  Demo order submitted! In a live version, this would send directly to BA Energy Vault.
                </p>
              )}

              <p className="text-center text-xs text-zinc-500 md:text-sm">
                Demo only — live version could send this to the shop and support online payment.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="location" className="px-4 pb-20 md:px-6 md:pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700 md:text-sm md:tracking-[0.3em]">
              Find Us
            </p>

            <h2 className="mt-2 text-xl font-black md:text-2xl">
              3681 S Elm Pl, Broken Arrow, OK 74011
            </h2>

            <p className="mt-2 text-sm text-zinc-600 md:text-base">
              Right next to Crunch Fitness.
            </p>
          </div>

          <a
            href="#"
            className="cursor-pointer rounded-full border-2 border-blue-700 px-7 py-4 text-center text-sm font-black uppercase text-blue-700 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-700 hover:text-white active:translate-y-0 active:scale-[0.98] md:px-8"
          >
            Open Maps 📍
          </a>
        </div>
      </section>

      <a
        href="#order"
        className="fixed bottom-4 left-4 right-4 z-50 overflow-hidden rounded-2xl border border-white/10 bg-blue-700/95 text-white shadow-2xl shadow-blue-900/30 backdrop-blur-xl transition active:scale-[0.98] md:left-auto md:right-6 md:w-80"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />

        <div className="relative flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-100">
              {order.length > 0 ? "Your Order" : "Ready to Order?"}
            </p>

            <p className="mt-1 text-lg font-black text-white">
              {order.length > 0
                ? `${itemCount} item${itemCount !== 1 ? "s" : ""}`
                : "Build Your Drink"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-100">
              {order.length > 0 ? "Estimated" : ""}
            </p>

            <p className="mt-1 text-2xl font-black text-amber-300">
              {order.length > 0 ? `$${total}` : "↓"}
            </p>
          </div>
        </div>
      </a>

      <footer className="px-6 pb-28 pt-8 text-center text-sm text-zinc-500 md:pb-8">
        Unofficial redesign concept created for demonstration purposes.
      </footer>
    </main>
  )
}