import React, { useContext } from "react";
import { Fade } from "react-reveal";

import { ContactContext } from "../../context";
import { Section } from "../../hoc";
import { Button, Field } from "../../components";

import "./ContactSection.scss";

const ContactSection = () => {
  const contact = useContext(ContactContext);

  return (
    <Section className="ContactSection" heading="Contact me">
      <form
        className="ContactSection_form"
        action="https://formspree.io/xjlqzbvx"
        method="POST"
      >
        {contact.map(
          ({ name, type, placeholder, isRequired, maxChars }, idx) => (
            <Fade
              key={idx}
              bottom
              delay={idx * 100}
              duration={500}
              distance="50px"
            >
              <div className="ContactSection_field">
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
      </form>
    </Section>
  );
};

export default ContactSection;
