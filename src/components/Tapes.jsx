import { trustClients } from "../data/siteData.js";

const goods = [
  "T-Shirts",
  "Hoodies",
  "Lanyards",
  "Tote Bags",
  "Gift Boxes",
  "Stickers",
  "Caps",
  "Bottles",
  "Welcome Kits",
  "Swag Boxes",
];

function Track({ items, sep }) {
  const row = items.map((t) => (
    <span key={t} className="tape__item">
      {t}
      <span className="tape__sep" aria-hidden="true">
        {sep}
      </span>
    </span>
  ));
  return (
    <div className="tape__track">
      <div className="tape__row">{row}</div>
      <div className="tape__row" aria-hidden="true">
        {row}
      </div>
    </div>
  );
}

export default function Tapes() {
  return (
    <section className="tapes" aria-label="What we make and who we work with">
      <div className="tape tape--pink">
        <Track items={goods} sep="✶" />
      </div>
      {/* trustClients are placeholders — swap for real client names or logos. */}
      <div className="tape tape--ink tape--reverse">
        <Track items={trustClients.map((c) => `Trusted by ${c}`)} sep="●" />
      </div>
    </section>
  );
}
