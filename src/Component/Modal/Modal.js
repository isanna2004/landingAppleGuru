import React from "react";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ModalWindow extends React.Component {
 
  render() {
   
    let { show, close,value } = this.props; 
    return (
      <Modal show={show}>
        <Modal.Header>
          <b>У Вас остались вопросы?</b>
        </Modal.Header>
        <Modal.Body>
          Оставьте свой номер и мы Вам перезвоним!
          <form className="modal-wrapper my-2">
            <label className="modal-text font-weight-bold">
              Ваш номер телефона :
            </label>
            <input type="number" className="modal-input  pl-2 ml-2" id="phoneNumber" />
          </form>
        </Modal.Body>
        <Modal.Footer>
       
          <button onClick={close} className="btn-primary rounded p-1">
            Отмена
          </button>
          <button className="btn-primary rounded p-1" onClick={value}>
            Отправить
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
