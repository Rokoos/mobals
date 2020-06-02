import React from "react";
import { connect } from "react-redux";
import Phones from "../Phones/Phones";
import Filtermodal from "../Modal/Filtermodal";
import { startFetchPhones } from "../../actions";
import "./home.styles.scss";

class Home extends React.Component {
  componentDidMount() {
    this.props.startFetchPhones();
  }
  render() {
    return (
      <div className="home">
        <Filtermodal />
        <Phones
          phones={this.props.items.phones}
          loading={this.props.items.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});
export default connect(mapStateToProps, { startFetchPhones })(Home);
