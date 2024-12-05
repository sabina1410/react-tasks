import React from "react";

export default function CardForm({ handleOpenCard }) {
  const onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = [...formData.values()];

    const card = { number: data[0], balance: +data[1] };

    handleOpenCard(card);
    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          Карта
          <input
            placeholder="XXXX XXXX XXXX XXXX"
            name="number"
            required
            pattern="\d{4} \d{4} \d{4} \d{4}"
            title="Kart nömrəsi formatı: XXXX XXXX XXXX XXXX"
          />
        </h5>
        <div className="card-text">
          <ul className="list-group">
            <input
              className="list-group-item"
              placeholder="Баланс"
              name="balance"
              type="number"
              min="0"
              required
            />
            <hr />
            <button type="submit" className="btn btn-success">
              Открыть карту
            </button>
          </ul>
        </div>
      </div>
    </form>
  );
}
