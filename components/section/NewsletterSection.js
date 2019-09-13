import React from 'react';
import { Form, Field, FORM_ERROR } from 'utils/form';
import { Cell, Div, Row, Space, BorderedDiv } from 'components/layout';
import { Button, Input, Label } from 'components/input';
import { P, Text, SubTitle } from 'components/text';

class NewsletterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageSent: false
    };
  }

  onSubmit = async values => {
    const result = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (!result.ok) {
      return { [FORM_ERROR]: 'Impossible de soumettre le formulaire' };
    } else {
      this.setState({ messageSent: true });
    }
  };

  render() {
    return (
      <Row bg="ultraLightGrey">
        <Cell w={{ xs: 1, sm: 1 / 3 }}>
          <Div p="40px">
            <SubTitle>Newsletter</SubTitle>
            <P>Inscrivez-vous à notre newsletter pour rester informé de notre actualité.</P>
          </Div>
        </Cell>
        <Cell w={{ xs: 1, sm: 2 / 3 }}>
          <Div p="40px">
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit, submitError, pristine, submitting, reset }) => (
                <form
                  onSubmit={async event => {
                    await handleSubmit(event);
                    reset();
                  }}
                >
                  {this.state.messageSent && (
                    <BorderedDiv borderRadius="5px" bg="lightGreen" p="15px" m="0 0 15px">
                      <Text>Vous avez bien été inscrit, merci !</Text>
                    </BorderedDiv>
                  )}
                  <Label value="Adresse email">
                    <Field name="email" component={Input} />
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

export default NewsletterSection;
