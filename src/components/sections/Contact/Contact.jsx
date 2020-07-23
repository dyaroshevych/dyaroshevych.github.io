import React, { Component } from "react";
import { Fade } from "react-reveal";
import axios from "../../../axios";

import Section from "../../../hoc/Section/Section";
import Button from "../../UI/Button/Button";
import Field from "../../UI/Field/Field";
import Spinner from "../../UI/Spinner/Spinner";

import "./Contact.scss";

class Contact extends Component {
  state = {
    fields: [],
  };

  componentDidMount() {
    axios.get("/contact.json").then(({ data }) => {
      this.setState({ fields: data });
    });
  }

  render() {
    return (
      <Section className="Contact" heading="Contact me" id="contact">
        <form
          className="Contact_form"
          action="https://formspree.io/xjlqzbvx"
          method="POST"
        >
          {(this.state.fields.length && (
            <>
              {this.state.fields.map(
                ({ name, type, placeholder, isRequired, maxChars }, idx) => (
                  <Fade
                    key={idx}
                    bottom
                    delay={idx * 100}
                    duration={500}
                    distance="50px"
                  >
                    <div className="Contact_field">
                      <Field
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        isRequired={isRequired}
                        maxChars={maxChars}
                      />
                    </div>
                  </Fade>
                )
              )}

              <Fade bottom delay={300} duration={500} distance="50px">
                <Button color="white" shape="square" text="Submit" />
              </Fade>
            </>
          )) || <Spinner />}
        </form>
      </Section>
    );
  }
}

export default Contact;
