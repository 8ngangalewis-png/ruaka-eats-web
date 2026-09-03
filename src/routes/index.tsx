import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  MapPin,
  Phone,
  Star,
  Bike,
  Leaf,
  Flame,
  Wallet,
  MessageCircle,
  Navigation,
  Plus,
  Minus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero-chicken-fries.jpg";
import dishPilau from "@/assets/dish-pilau.jpg";
import dishUgali from "@/assets/dish-ugali.jpg";
import dishNyama from "@/assets/dish-nyama.jpg";
import dishChapati from "@/assets/dish-chapati.jpg";
import dishSamosa from "@/assets/dish-samosa.jpg";
import dishTilapia from "@/assets/dish-tilapia.jpg";
import interiorImg from "@/assets/interior.jpg";

const PHONE_DISPLAY = "0704 587 546";
const PHONE_TEL = "tel:+254704587546";
const WHATSAPP =
  "https://wa.me/254704587546?text=" +
  encodeURIComponent("Hi Vivian's Kitchen! I'd like to place an order.");
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Vivian's Kitchen, Gacharage Junction, Red Hill Road, Ruaka");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivian's Kitchen — Home-Cooked Kenyan Meals in Ruaka" },
      {
        name: "description",
        content:
          "Vivian's Kitchen serves fresh, home-style Kenyan meals at Gacharage Junction, Red Hill Road, Ruaka. Dine in, takeaway and delivery. Open daily until 10 PM.",
      },
      { property: "og:title", content: "Vivian's Kitchen — Home-Cooked Kenyan Meals in Ruaka" },
      {
        property: "og:description",
        content:
          "Fresh, home-style Kenyan meals at Gacharage Junction, Red Hill Road, Ruaka. Open daily until 10 PM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const dishes = [
  {
    img: heroImg,
    tag: "House Favourite",
    popular: true,
    name: "Chicken & Fries",
    price: "Ksh 650",
    priceKsh: 650,
    desc: "Crispy golden fried chicken with thick-cut fries, kachumbari and our house chilli sauce.",
  },
  {
    img: dishPilau,
    tag: "Rice Dishes",
    popular: true,
    name: "Chicken Pilau",
    price: "Ksh 700",
    priceKsh: 700,
    desc: "Fragrant spiced rice slow-cooked with tender chicken, served with kachumbari and soup.",
  },
  {
    img: dishUgali,
    tag: "Local Classics",
    popular: false,
    name: "Ugali, Sukuma & Beef Stew",
    price: "Ksh 500",
    priceKsh: 500,
    desc: "The hearty Kenyan lunch plate — rich beef stew, tender greens and fresh ugali.",
  },
  {
    img: dishNyama,
    tag: "Grill",
    popular: true,
    name: "Nyama Choma Platter",
    price: "Ksh 1,200",
    priceKsh: 1200,
    desc: "Slow-grilled meat served on a board with kachumbari and a side of your choice.",
  },
  {
    img: dishChapati,
    tag: "Local Classics",
    popular: false,
    name: "Chapati & Beans",
    price: "Ksh 350",
    priceKsh: 350,
    desc: "Soft, flaky chapatis with slow-simmered bean stew — simple, filling and full of flavour.",
  },
  {
    img: dishTilapia,
    tag: "From the Lake",
    popular: false,
    name: "Whole Fried Tilapia",
    price: "Ksh 1,100",
    priceKsh: 1100,
    desc: "Crisp-fried tilapia with ugali or rice and sautéed greens. Fresh in every morning.",
  },
  {
    img: dishSamosa,
    tag: "Snacks",
    popular: false,
    name: "Samosas & Chai",
    price: "Ksh 250",
    priceKsh: 250,
    desc: "Three beef samosas with tamarind dip and a hot cup of spiced Kenyan chai.",
  },
];

const perks = [
  {
    icon: Clock,
    title: "Open daily",
    desc: "Serving fresh meals every day until 10 PM.",
  },
  {
    icon: Flame,
    title: "Cooked to order",
    desc: "Every plate is prepared fresh — nothing sits around.",
  },
  {
    icon: Bike,
    title: "Takeaway & delivery",
    desc: "Call or WhatsApp and we deliver to Ruaka and nearby.",
  },
  {
    icon: Wallet,
    title: "Fair prices",
    desc: "Ksh 250–1,200 covers a full, satisfying meal.",
  },
];

const reviews = [
  {
    name: "Lilian Inyanji",
    when: "4 months ago",
    text: "Simply amazing. Great taste, great customer service & delivery on time.",
  },
  {
    name: "Hesbon Magara",
    when: "2 months ago",
    text: "Great food, excellent service. Ordered delivery and it arrived hot and on time.",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-star text-star" />
      ))}
    </span>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember font-display text-xl font-bold text-ember-foreground">
            V
          </span>
          <span className="font-display text-2xl font-semibold tracking-wide text-cream uppercase">
            Vivian's Kitchen
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold tracking-widest text-cream/90 uppercase md:flex">
          <a href="#menu" className="transition-colors hover:text-cream">Menu</a>
          <a href="#about" className="transition-colors hover:text-cream">About</a>
          <a href="#reviews" className="transition-colors hover:text-cream">Reviews</a>
          <a href="#contact" className="transition-colors hover:text-cream">Contact</a>
        </nav>
        <a
          href={PHONE_TEL}
          className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-ember-foreground shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden bg-espresso">
      <img
        src={heroImg}
        alt="Golden fried chicken with thick-cut fries and chilli sauce on a rustic wooden table"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/30" />
      <Header />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-32 pb-16 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-espresso/50 px-4 py-1.5 backdrop-blur-sm">
          <Stars />
          <span className="text-sm font-medium text-cream">5.0 on Google reviews</span>
        </div>
        <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[0.95] font-bold text-cream uppercase sm:text-6xl lg:text-7xl">
          Home-cooked Kenyan meals on Red Hill Road
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
          Vivian's Kitchen serves generous, honestly-priced local plates at Gacharage
          Junction in Ruaka. Dine in, grab a takeaway, or call ahead — we deliver.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full bg-ember px-7 py-3.5 text-sm font-bold tracking-wide text-ember-foreground uppercase shadow-xl transition-transform hover:scale-105"
          >
            View the menu
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-sm font-bold tracking-wide text-cream uppercase backdrop-blur-sm transition-colors hover:bg-cream/20"
          >
            Contact & directions
          </a>
        </div>
        <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
          {[
            { label: "Open daily", value: "Till 10 PM" },
            { label: "Avg. spend", value: "Ksh 250–1,200" },
            { label: "Location", value: "Ruaka" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-cream/15 bg-espresso/50 px-4 py-3 backdrop-blur-sm"
            >
              <p className="text-xs tracking-widest text-cream/60 uppercase">{stat.label}</p>
              <p className="mt-0.5 font-display text-lg font-semibold text-cream sm:text-xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type CartItem = { name: string; priceKsh: number; qty: number };

function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = (dish: { name: string; priceKsh: number }) => {
    setItems((prev) => {
      const found = prev.find((i) => i.name === dish.name);
      if (found) {
        return prev.map((i) => (i.name === dish.name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { name: dish.name, priceKsh: dish.priceKsh, qty: 1 }];
    });
    setOpen(true);
  };

  const setQty = (name: string, delta: number) =>
    setItems((prev) =>
      prev
        .map((i) => (i.name === name ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );

  const remove = (name: string) => setItems((prev) => prev.filter((i) => i.name !== name));
  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.qty * i.priceKsh, 0);

  return { items, open, setOpen, add, setQty, remove, clear, count, total };
}

type Cart = ReturnType<typeof useCart>;

function orderMessage(items: CartItem[], total: number, name: string, note: string) {
  const lines = items.map(
    (i) => `• ${i.qty} × ${i.name} — Ksh ${(i.qty * i.priceKsh).toLocaleString()}`,
  );
  return [
    `Hi Vivian's Kitchen! I'd like to place an order:`,
    "",
    ...lines,
    "",
    `Total: Ksh ${total.toLocaleString()}`,
    name.trim() ? `Name: ${name.trim()}` : "",
    note.trim() ? `Notes: ${note.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function CartPanel({ cart }: { cart: Cart }) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const link = useMemo(
    () =>
      "https://wa.me/254704587546?text=" +
      encodeURIComponent(orderMessage(cart.items, cart.total, name, note)),
    [cart.items, cart.total, name, note],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => cart.setOpen(true)}
        className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3.5 text-sm font-bold tracking-wide text-ember-foreground uppercase shadow-2xl transition-transform hover:scale-105"
      >
        <ShoppingBag className="h-5 w-5" />
        My order
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-espresso px-1.5 text-xs text-espresso-foreground">
          {cart.count}
        </span>
      </button>

      {cart.open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            aria-label="Close order cart"
            onClick={() => cart.setOpen(false)}
            className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
          />
          <aside className="relative flex h-full w-full max-w-md flex-col bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="font-display text-2xl font-bold uppercase">Your order</h2>
              <button
                type="button"
                onClick={() => cart.setOpen(false)}
                aria-label="Close"
                className="rounded-full p-2 hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {cart.items.length === 0 ? (
                <p className="text-muted-foreground">
                  Your order is empty. Add dishes from the menu to get started.
                </p>
              ) : (
                <ul className="space-y-4">
                  {cart.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3 border-b pb-4">
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Ksh {item.priceKsh.toLocaleString()} each
                        </p>
                        <div className="mt-2 inline-flex items-center gap-3 rounded-full border px-2 py-1">
                          <button
                            type="button"
                            aria-label={`Remove one ${item.name}`}
                            onClick={() => cart.setQty(item.name, -1)}
                            className="rounded-full p-1 hover:bg-secondary"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-5 text-center text-sm font-semibold">{item.qty}</span>
                          <button
                            type="button"
                            aria-label={`Add one ${item.name}`}
                            onClick={() => cart.setQty(item.name, 1)}
                            className="rounded-full p-1 hover:bg-secondary"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-lg font-bold text-ember">
                          Ksh {(item.qty * item.priceKsh).toLocaleString()}
                        </p>
                        <button
                          type="button"
                          onClick={() => cart.remove(item.name)}
                          className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {cart.items.length > 0 && (
                <div className="mt-6 space-y-3">
                  <div>
                    <label htmlFor="cart-name" className="text-sm font-semibold">
                      Your name
                    </label>
                    <input
                      id="cart-name"
                      value={name}
                      maxLength={60}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Amina"
                      className="mt-1 w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="cart-note" className="text-sm font-semibold">
                      Delivery address / notes
                    </label>
                    <textarea
                      id="cart-note"
                      value={note}
                      maxLength={500}
                      rows={3}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Deliver to Ruaka, near…"
                      className="mt-1 w-full resize-y rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-widest text-muted-foreground uppercase">
                  Total
                </span>
                <span className="font-display text-3xl font-bold text-ember">
                  Ksh {cart.total.toLocaleString()}
                </span>
              </div>
              <a
                href={cart.items.length ? link : undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={cart.items.length === 0}
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide uppercase transition-transform ${
                  cart.items.length
                    ? "bg-ember text-ember-foreground hover:scale-[1.02]"
                    : "pointer-events-none bg-muted text-muted-foreground"
                }`}
              >
                <MessageCircle className="h-4 w-4" /> Send order on WhatsApp
              </a>
              <div className="mt-3 flex items-center justify-between text-xs">
                <a href={PHONE_TEL} className="font-semibold text-ember hover:underline">
                  Or call {PHONE_DISPLAY}
                </a>
                {cart.items.length > 0 && (
                  <button
                    type="button"
                    onClick={cart.clear}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    Clear order
                  </button>
                )}
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function Menu({ onAdd }: { onAdd: (d: { name: string; priceKsh: number }) => void }) {
  return (

    <section id="menu" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="text-sm font-bold tracking-[0.25em] text-ember uppercase">Menu highlights</p>
      <h2 className="mt-2 font-display text-4xl font-bold uppercase sm:text-5xl">
        The plates our regulars keep coming back for
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Cooked fresh to order, served fast, and priced for everyday eating. Most guests
        spend between <strong className="text-foreground">Ksh 250 and Ksh 1,200</strong> per person.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <article
            key={dish.name}
            className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={dish.img}
                alt={dish.name}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {dish.popular && (
                <span className="absolute top-3 left-3 rounded-full bg-ember px-3 py-1 text-xs font-bold tracking-wide text-ember-foreground uppercase shadow">
                  Popular
                </span>
              )}
            </div>
            <div className="p-5">
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                {dish.tag}
              </p>
              <div className="mt-1.5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold">{dish.name}</h3>
                <span className="font-display text-xl font-bold whitespace-nowrap text-ember">
                  {dish.price}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dish.desc}</p>
              <button
                type="button"
                onClick={() => onAdd(dish)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-bold tracking-wide text-ember-foreground uppercase transition-transform hover:scale-[1.02]"
              >
                <Plus className="h-4 w-4" /> Add to order
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-secondary p-8 text-center">
        <p className="text-secondary-foreground">
          Craving something else? Browse the full menu below — breakfast, accompaniments,
          soft drinks and fresh juices served all day.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-bold tracking-wide text-ember-foreground uppercase shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          Ask about today's specials
        </a>
      </div>
    </section>
  );
}

const fullMenu: { category: string; items: { name: string; priceKsh: number }[] }[] = [
  {
    category: "Breakfast",
    items: [
      { name: "Andazi", priceKsh: 20 },
      { name: "Toast bread", priceKsh: 100 },
      { name: "Chapati", priceKsh: 50 },
      { name: "Pair of sausages", priceKsh: 140 },
      { name: "Pair of samosas", priceKsh: 100 },
      { name: "Eggs (to your liking)", priceKsh: 100 },
      { name: "Coffee", priceKsh: 100 },
      { name: "African tea", priceKsh: 100 },
      { name: "Hot chocolate", priceKsh: 100 },
      { name: "Porridge", priceKsh: 100 },
      { name: "Milk", priceKsh: 100 },
      { name: "Arrow roots", priceKsh: 150 },
      { name: "Sweet potato", priceKsh: 150 },
      { name: "Pair of pancakes", priceKsh: 100 },
      { name: "Pot of tea", priceKsh: 200 },
    ],
  },
  {
    category: "Main dishes",
    items: [
      { name: "Beef wet fry", priceKsh: 450 },
      { name: "Whole tilapia — wet or dry", priceKsh: 600 },
      { name: "Coconut fish", priceKsh: 650 },
      { name: "Chicken wet fry (portion)", priceKsh: 500 },
      { name: "Grilled chicken (portion)", priceKsh: 500 },
      { name: "Liver", priceKsh: 450 },
      { name: "Minced meat", priceKsh: 450 },
      { name: "Matumbo wet fry", priceKsh: 450 },
      { name: "Chicken biriani", priceKsh: 550 },
      { name: "Egg curry", priceKsh: 400 },
      { name: "Chicken curry", priceKsh: 550 },
      { name: "Pilau plain", priceKsh: 400 },
      { name: "Pilau + beef stew", priceKsh: 600 },
      { name: "Chicken fingers", priceKsh: 350 },
      { name: "Fish fingers", priceKsh: 350 },
      { name: "Beans", priceKsh: 200 },
      { name: "Ndengu", priceKsh: 200 },
      { name: "Githeri", priceKsh: 300 },
      { name: "Salad", priceKsh: 350 },
      { name: "Chicken salad", priceKsh: 500 },
      { name: "Omena fry", priceKsh: 200 },
    ],
  },
  {
    category: "Accompaniments",
    items: [
      { name: "Chips plain / seasoned", priceKsh: 150 },
      { name: "Chips masala", priceKsh: 250 },
      { name: "Ugali — white / brown", priceKsh: 100 },
      { name: "White rice", priceKsh: 100 },
      { name: "Veg. rice", priceKsh: 100 },
      { name: "Mokimo", priceKsh: 100 },
      { name: "Potato wedges", priceKsh: 250 },
      { name: "Sauté", priceKsh: 250 },
      { name: "Mashed potato", priceKsh: 200 },
      { name: "Bhajia", priceKsh: 300 },
    ],
  },
  {
    category: "Soft drinks",
    items: [
      { name: "Coke", priceKsh: 100 },
      { name: "Sprite", priceKsh: 100 },
      { name: "Fanta", priceKsh: 100 },
      { name: "Stoney", priceKsh: 100 },
      { name: "Fanta passion", priceKsh: 100 },
    ],
  },
  {
    category: "Fresh juices",
    items: [
      { name: "Mango", priceKsh: 150 },
      { name: "Pineapple", priceKsh: 150 },
      { name: "Passion", priceKsh: 150 },
      { name: "Orange", priceKsh: 150 },
      { name: "Apple", priceKsh: 150 },
      { name: "Tropical mix", priceKsh: 150 },
    ],
  },
];

function FullMenu({ onAdd }: { onAdd: (d: { name: string; priceKsh: number }) => void }) {
  return (
    <section id="full-menu" className="scroll-mt-20 bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-bold tracking-[0.25em] text-ember uppercase">Full menu</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase sm:text-5xl">
          Everything we serve, all day
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From breakfast to fresh juices — tap any item to add it to your order.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fullMenu.map((group) => (
            <div key={group.category} className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="font-display text-2xl font-bold uppercase text-ember">
                {group.category}
              </h3>
              <ul className="mt-4 divide-y divide-border">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 py-2.5">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="mx-1 flex-1 border-b border-dotted border-muted-foreground/40" />
                    <span className="font-display text-base font-bold whitespace-nowrap text-ember">
                      Ksh {item.priceKsh.toLocaleString()}
                    </span>
                    <button
                      type="button"
                      onClick={() => onAdd(item)}
                      aria-label={`Add ${item.name} to order`}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember text-ember-foreground transition-transform hover:scale-110"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-espresso py-20 text-espresso-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={interiorImg}
            alt="Warm, cozy dining room at Vivian's Kitchen with wooden tables, plants and amber pendant lights"
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-star uppercase">
            Our place in Ruaka
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase sm:text-5xl">
            A warm kitchen at Gacharage Junction
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-espresso-foreground/80">
            Vivian's Kitchen feeds the Ruaka neighbourhood every day — boda riders grabbing
            a quick lunch, families sharing a choma platter, friends catching up over chai.
            The tables are clean, the welcome is warm, and the kitchen never cuts corners.
          </p>
          <p className="mt-4 leading-relaxed text-espresso-foreground/70">
            We cook with fresh produce sourced each morning, keep prices honest, and treat
            every guest like a regular. That's the whole commitment.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {perks.map((perk) => (
              <li key={perk.title} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ember text-ember-foreground">
                  <perk.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{perk.title}</h3>
                  <p className="mt-0.5 text-sm text-espresso-foreground/70">{perk.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="text-sm font-bold tracking-[0.25em] text-ember uppercase">What diners say</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
          Rated 5.0 by our community
        </h2>
        <div className="flex items-center gap-3">
          <span className="font-display text-6xl font-bold text-ember">5.0</span>
          <div>
            <Stars />
            <p className="mt-1 text-sm text-muted-foreground">Google reviews</p>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <blockquote key={review.name} className="rounded-2xl border bg-card p-7 shadow-sm">
            <Stars />
            <p className="mt-4 text-lg leading-relaxed text-card-foreground">
              “{review.text}”
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display text-lg font-semibold text-secondary-foreground">
                {review.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.when} · Google review</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function EnquiryForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("Table for lunch at 1 PM, please.");

  const link =
    "https://wa.me/254704587546?text=" +
    encodeURIComponent(
      [
        "Hi Vivian's Kitchen!",
        name.trim() ? `Name: ${name.trim()}` : "",
        guests.trim() ? `Guests: ${guests.trim()}` : "",
        message.trim() ? `Message: ${message.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );

  return (
    <div className="mt-12 rounded-2xl border border-cream/15 bg-cream/5 p-6 sm:p-8">
      <h3 className="font-display text-2xl font-bold uppercase">Send an enquiry</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-espresso-foreground/75">
        Booking a table or ordering ahead? Send us a message on WhatsApp and we'll reply fast.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className="text-sm font-semibold">
            Your name
          </label>
          <input
            id="enq-name"
            value={name}
            maxLength={60}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Amina"
            className="mt-1.5 w-full rounded-lg border border-cream/20 bg-espresso/40 px-3 py-2.5 text-sm text-espresso-foreground outline-none placeholder:text-espresso-foreground/40 focus:ring-2 focus:ring-star"
          />
        </div>
        <div>
          <label htmlFor="enq-guests" className="text-sm font-semibold">
            Number of guests
          </label>
          <input
            id="enq-guests"
            type="number"
            min={1}
            max={50}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-cream/20 bg-espresso/40 px-3 py-2.5 text-sm text-espresso-foreground outline-none focus:ring-2 focus:ring-star"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="enq-message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="enq-message"
          rows={4}
          maxLength={800}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full resize-y rounded-lg border border-cream/20 bg-espresso/40 px-3 py-2.5 text-sm text-espresso-foreground outline-none placeholder:text-espresso-foreground/40 focus:ring-2 focus:ring-star"
        />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold tracking-wide text-espresso uppercase transition-transform hover:scale-[1.01]"
      >
        <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
      </a>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-espresso py-20 text-espresso-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-bold tracking-[0.25em] text-star uppercase">
          Contact & directions
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase sm:text-5xl">
          Come hungry, leave happy
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
            <MapPin className="h-6 w-6 text-star" />
            <h3 className="mt-3 font-display text-xl font-semibold">Find us</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-espresso-foreground/75">
              Gacharage Junction, Red Hill Road, Ruaka
              <br />
              Plus code: QQX6+6F Ruaka
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-star hover:underline"
            >
              <Navigation className="h-4 w-4" /> Get directions
            </a>
          </div>
          <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
            <Phone className="h-6 w-6 text-star" />
            <h3 className="mt-3 font-display text-xl font-semibold">Order ahead</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-espresso-foreground/75">
              Call or WhatsApp for takeaway and delivery around Ruaka.
            </p>
            <a
              href={PHONE_TEL}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-star hover:underline"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
            <Clock className="h-6 w-6 text-star" />
            <h3 className="mt-3 font-display text-xl font-semibold">Opening hours</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-espresso-foreground/75">
              Open daily
              <br />
              Kitchen closes 10 PM
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-star/15 px-3 py-1 text-xs font-bold tracking-wide text-star uppercase">
              <span className="h-2 w-2 rounded-full bg-star" /> Takeaway & delivery
            </span>
          </div>
        </div>
        <EnquiryForm />
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-ember p-10 text-center text-ember-foreground">
          <Leaf className="h-8 w-8" />
          <h3 className="font-display text-3xl font-bold uppercase">
            Ready to eat? Call and we'll start cooking.
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-bold tracking-wide text-espresso-foreground uppercase transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-espresso-foreground/40 px-7 py-3.5 text-sm font-bold tracking-wide uppercase transition-colors hover:bg-ember-foreground/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-espresso py-8 text-espresso-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6">
        <p className="font-display text-lg font-semibold tracking-wide uppercase">
          Vivian's Kitchen
        </p>
        <p className="text-espresso-foreground/60">
          Gacharage Junction, Red Hill Road, Ruaka · {PHONE_DISPLAY}
        </p>
        <p className="text-espresso-foreground/60">Open daily · Closes 10 PM</p>
      </div>
    </footer>
  );
}

function Home() {
  const cart = useCart();
  return (
    <div className="min-h-screen">
      <Hero />
      <main>
        <Menu onAdd={cart.add} />
        <FullMenu onAdd={cart.add} />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <CartPanel cart={cart} />
    </div>
  );
}
