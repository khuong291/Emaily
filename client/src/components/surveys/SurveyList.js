import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey, changeLoader } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderDeleteBtn(surveyId) {
    if (this.props.isLoading === surveyId) {
      // if it's loading then return loader
      return (
        <div className="preloader-wrapper small active right">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <a
          className="right"
          onClick={() => {
            this.props.deleteSurvey(surveyId);
            this.props.changeLoader(surveyId);
          }}
        >
          <i className="material-icons">delete</i>
        </a>
      );
    }
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            {this.renderDeleteBtn(survey._id)}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys, isLoading: state.loading.isLoading };
}

export default connect(
  mapStateToProps,
  {
    fetchSurveys,
    deleteSurvey,
    changeLoader
  }
)(SurveyList);
