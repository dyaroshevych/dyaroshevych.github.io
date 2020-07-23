import React, { Component } from "react";
import { Fade } from "react-reveal";
import axios from "../../../axios";

import { connect } from "react-redux";
import { setMessage } from "../../../store/actions";

import Section from "../../../hoc/Section/Section";
import Button from "../../UI/Button/Button";
import FormField from "../../UI/FormField/FormField";
import Spinner from "../../UI/Spinner/Spinner";

import "./Contact.scss";

const API_KEY =
  "1fed4839cc809349803734f261c4a36b32b81338dcb531dd083d6fe98607b62b";

class Contact extends Component {
  state = {
    formConfig: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          required: true,
          name: "name",
          "aria-label": "Your name",
          placeholder: "Your name",
        },
        value: "",
        shouldValidate: true,
        valid: false,
        touched: true,
        regex: /^[a-zA-Z ]{2,30}$/,
        error: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          required: true,
          name: "email",
          "aria-label": "Your email",
          placeholder: "Your email",
        },
        value: "",
        shouldValidate: true,
        valid: false,
        touched: true,
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: "",
      },
      comments: {
        elementType: "textarea",
        elementConfig: {
          name: "comments",
          "aria-label": "Comments (optional)",
          placeholder: "Comments (optional)",
        },
        value: "",
        shouldValidate: false,
      },
    },
  };

  clearForm = () => {
    const formConfig = {};

    Object.entries(this.state.formConfig).forEach(
      ([fieldName, fieldConfig]) => {
        formConfig[fieldName] = { ...fieldConfig, value: "" };
      }
    );

    this.setState({ formConfig });
  };

  validateForm = () => {
    let nameErrorMessage = "";

    if (
      !this.state.formConfig.name.regex.test(this.state.formConfig.name.value)
    ) {
      nameErrorMessage = "Please enter correct name.";
    }

    let emailErrorMessage = "";

    if (
      !this.state.formConfig.email.regex.test(this.state.formConfig.email.value)
    ) {
      emailErrorMessage = "Please enter correct email.";
    }
    const formConfig = { ...this.state.formConfig };

    if (nameErrorMessage) {
      formConfig.name = {
        ...formConfig.name,
        valid: false,
        touched: false,
        error: nameErrorMessage,
      };
    }

    if (emailErrorMessage) {
      formConfig.email = {
        ...formConfig.email,
        valid: false,
        touched: false,
        error: emailErrorMessage,
      };
    }

    if (nameErrorMessage || emailErrorMessage) {
      this.setState({ formConfig });

      return false;
    }

    return true;
  };

  handleInputChange = (event, name) => {
    const formConfig = { ...this.state.formConfig };

    formConfig[name] = {
      ...formConfig[name],
      value: event.target.value,
      touched: true,
    };

    this.setState({ formConfig });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    this.props.onSetMessage("waiting", "Sending email...");

    axios
      .post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`)
      .then(({ data }) => {
        const formConfig = {
          senderId: data.id,
          to: "91d1550c-bb6e-4867-ba7d-1e3c69ba2dc1@mailslurp.com",
          subject: `${this.state.formConfig.name.value} [${this.state.formConfig.email.value}]`,
          body: this.state.formConfig.comments.value,
        };

        axios({
          method: "POST",
          url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
          data: formConfig,
          json: true,
        }).then(() => {
          this.props.onSetMessage("success", "Sent.");
          this.clearForm();
        });
      })
      .catch(() => {
        this.props.onSetMessage("danger", "Network error.");
      });
  };

  render() {
    return (
      <Section className="Contact" heading="Contact me" id="contact">
        <form className="Contact_form" onSubmit={this.handleFormSubmit}>
          {(Object.keys(this.state.formConfig).length && (
            <>
              {Object.entries(this.state.formConfig).map(
                (
                  [
                    label,
                    {
                      elementType,
                      elementConfig,
                      value,
                      shouldValidate,
                      valid,
                      touched,
                      error,
                    },
                  ],
                  idx
                ) => (
                  <Fade
                    key={idx}
                    bottom
                    delay={idx * 100}
                    duration={500}
                    distance="50px"
                  >
                    <div className="Contact_field">
                      <FormField
                        label={label}
                        elementType={elementType}
                        elementConfig={elementConfig}
                        value={value}
                        shouldValidate={shouldValidate}
                        valid={valid || touched}
                        error={error}
                        change={this.handleInputChange}
                      />
                    </div>
                  </Fade>
                )
              )}

              <Fade bottom delay={300} duration={500} distance="50px">
                <Button
                  color="white"
                  shape="square"
                  text="Submit"
                  click={this.handleFormSubmit}
                />
              </Fade>
            </>
          )) || <Spinner />}
        </form>
      </Section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetMessage: (type, text) => dispatch(setMessage(type, text)),
  };
};

export default connect(null, mapDispatchToProps)(Contact);
