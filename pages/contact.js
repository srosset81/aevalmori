import React from 'react';
import { Form, Field, FORM_ERROR } from 'utils/form';
import { Layout } from 'components/app';
import { Cell, Div, Row, Space } from 'components/layout';
import { Button, Input, Textarea, Label } from 'components/input';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';

class ContactPage extends React.Component {
  onSubmit = async values => {
    const result = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if( !result.ok ) {
        return { [FORM_ERROR]: 'Impossible de soumettre le formulaire' };
    }
  };

  render() {
    return (
      <Layout>
        <TopSection image="contact.jpg">Contactez-moi</TopSection>
        <Row>
          <Cell w={{ xs: 1, sm: 1 / 3 }}>
            <Div p="30px">
              <SubTitle>Rencontrons-nous !</SubTitle>
              <P>
                N'hésitez pas à prendre contact avec moi en laissant vos coordonnées ci-contre, je répondrai à votre
                demande dans les meilleurs délais.
              </P>
            </Div>
          </Cell>
          <Cell w={{ xs: 1, sm: 2 / 3 }}>
            <Div p="30px">
              <Form
                onSubmit={this.onSubmit}
                render={({ handleSubmit, submitError, pristine, submitting, submitSucceeded }) =>
                  submitSucceeded ? (
                    <P>Votre message a bien été envoyé, merci !</P>
                  ) : (
                    <form onSubmit={handleSubmit}>
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
                      <Button disabled={submitting || pristine}>>Envoyer</Button>
                    </form>
                  )
                }
              />
            </Div>
          </Cell>
        </Row>
        <FooterSection />
      </Layout>
    );
  }
}

export default ContactPage;
