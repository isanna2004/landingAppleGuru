import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  render() {

    return (
      <div className="modal-window  text-center" id="modal">
          <h3>Остались вопросы?</h3>
          <p>Оставьте свой телефон и мы перезвоним вам в ближайшее время</p>
        <form className="modal-wrapper" onSubmit={this.props.handleSubmit}>
          <label className="modal-text">Ваш номер телефона : </label>
          <input type="number" className="modal-input  pl-2 ml-2" />
          <div className="button-group mt-2">
            <button className="btn-sm mr-2" onClick={this.props.onClose}>
              Отмена
            </button>
            <button className="btn-sm" type="submit" onClick={()=>{
                alert("Ваш запрос отправлен!")
                document.getElementById("modal").style.display="none"
            }} >
              Отправить
            </button>
          </div>
        </form>
      </div>
    );
  }
}
