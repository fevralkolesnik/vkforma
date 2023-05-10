import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [tower, setTower] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  let floors = [];
  let rooms = [];

  function getOptions(array, begin, end) {
    for (let i = begin; i <= end; i++) {
      array.push(i);
    }
    return array.map((index) => {
      return <option value={index}>{index}</option>;
    });
  }

  const optionsFloor = getOptions(floors, 3, 27);
  const optionsRoom = getOptions(rooms, 1, 10);

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      tower,
      floor,
      room,
      startDate,
      comment,
    };
    console.log(user);

    setTower("");
    setFloor("");
    setRoom("");
    setStartDate();
    setEndDate();
    setComment("");
    setIsOpen(true);
  }

  function handleReset(e) {
    e.preventDefault();

    setTower("");
    setFloor("");
    setRoom("");
    setStartDate();
    setEndDate();
    setComment("");
    setIsOpen(false);
  }

  return (
    <div className="page">
      <div className="container">
        <h3 className="title">Форма бронирования переговорной</h3>
        <form className={`popup__form`} name="vkform" onSubmit={handleSubmit}>
          <label className="form-field">
            <select
              className="input"
              value={tower}
              required
              onChange={(e) => setTower(e.target.value)}
            >
              <option disabled={true} value="">
                Выберите башню...
              </option>
              <option value="A">А</option>
              <option value="Б">Б</option>
            </select>
          </label>
          <label className="form-field">
            <select
              className="input"
              value={floor}
              required
              onChange={(e) => setFloor(e.target.value)}
            >
              <option disabled={true} value="">
                Выберите этаж...
              </option>
              {optionsFloor}
            </select>
          </label>
          <label className="form-field">
            <select
              className="input"
              value={room}
              required
              onChange={(e) => setRoom(e.target.value)}
            >
              <option disabled={true} value="">
                Выберите переговорную...
              </option>
              {optionsRoom}
            </select>
          </label>
          <p className="title_date">Забронируйте время переговорной:</p>
          <label className="form-field form-field__date">
            <DatePicker
              className="input input__date"
              dateFormat="MMMM d, yyyy h:mm aa"
              selected={startDate}
              showTimeSelect
              minDate={new Date()}
              required
              onChange={(date) => setStartDate(date)}
            />
            <DatePicker
              className="input input__date"
              dateFormat="MMMM d, yyyy h:mm aa"
              selected={endDate}
              showTimeSelect
              minDate={new Date()}
              required
              onChange={(date) => setEndDate(date)}
            />
          </label>

          <label className="form-field">
            <textarea
              className="popup__input popup__input_type_name"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Оставьте комментарий..."
            />
          </label>
          <button className="button" type="submit" aria-label="Отправить форму">
            Отправить форму
          </button>
          <button
            className="button"
            type="reset"
            onClick={handleReset}
            aria-label="Очистить форму"
          >
            Очистить форму
          </button>
        </form>
        <p className={`message ${isOpen ? "message_opened" : ""}`}>Вы успешно забронировали!</p>
      </div>
    </div>
  );
}

export default App;
