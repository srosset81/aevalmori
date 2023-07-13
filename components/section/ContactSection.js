import React from 'react';
import { Form, Field, FORM_ERROR } from 'utils/form';
import { Cell, Div, Row, Space, BorderedDiv } from 'components/layout';
import { Button, Input, Textarea, Label } from 'components/input';
import { P, Text, SubTitle } from 'components/text';

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageSent: false
    };
  }

  onSubmit = async values => {
    const result = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (!result.ok) {
      return { [FORM_ERROR]: 'Impossible de soumettre le formulaire. Veuillez me contacter directement.' };
    } else {
      const json = await result.json();
      if( json.success !== true ) {
        return { [FORM_ERROR]: 'Impossible de soumettre le formulaire. Veuillez me contacter directement.' };
      } else {
        this.setState({ messageSent: true });
      }
    }
  };

  render() {
    return (
      <Row>
        <Cell w={{ xs: 1, sm: 1 / 3 }}>
          <Div p={{ xs: '25px 25px 0', sm: '50px ' }}>
            <SubTitle>Rencontrons-nous !</SubTitle>
            <P>
              N'hésitez pas à prendre contact avec moi en laissant vos coordonnées ci-contre, je répondrai à votre
              demande dans les meilleurs délais.
            </P>
            <P>
              Si vous le souhaitez, les séances peuvent être réservées en ligne directement sur <a href="https://perfactive.fr/psychologue/compiegne/anna-elisa-valmori" target="_blank">cette page</a>.
            </P>
            <P>
              Vous pouvez également m'appeler ou m'envoyer un SMS au <a href="tel:+33659026479">06 59 02 64 79</a>.
            </P>
          </Div>
        </Cell>
        <Cell w={{ xs: 1, sm: 2 / 3 }}>
          <Div p={{ xs: '10px 25px 25px', sm: '50px ' }}>
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit, submitError, pristine, submitting, reset }) => (
                <form
                  onSubmit={async event => {
                    const result = await handleSubmit(event);
                    if( !result ) reset();
                  }}
                >
                  {this.state.messageSent && (
                    <BorderedDiv borderRadius="5px" bg="lightGreen" p="15px" m="0 0 15px">
                      <Text>Votre message a bien été envoyé, merci !</Text>
                    </BorderedDiv>
                  )}
                  <Label value="Votre nom">
                    <Field name="name" component={Input} />
                  </Label>
                  <Label value="Adresse email">
                    <Field name="email" component={Input} />
                  </Label>
                  <Label value="Téléphone">
                    <Field name="phone" component={Input} />
                  </Label>
                  <Label value="Message">
                    <Field name="message" component={Textarea} />
                  </Label>
                  {submitError ? <P color="red">{submitError}</P> : <Space />}
                  <Button disabled={submitting || pristine}>Envoyer</Button>
                </form>
              )}
            />
          </Div>
        </Cell>
      </Row>
    );
  }
}

export default ContactSection;
