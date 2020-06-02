import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";

import "./filtermodal.style.scss";

class Filtermodal extends React.Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div className="modal-box">
        <div className="button-box">
          <Button color="primary" onClick={this.show(true)}>
            Filters
          </Button>
        </div>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Content>Filters</Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.close}>
              OK
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  phones: state.items,
});
export default connect(mapStateToProps)(Filtermodal);
