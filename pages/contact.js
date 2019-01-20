import React from 'react';
import { Form, Field } from 'utils/form';
import { Layout } from 'components/app';
import { Cell, Div, Row, Space } from 'components/layout';
import { Button, Input, Textarea, Label } from 'components/input';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';

class ContactPage extends React.Component {
  onSubmit = () => {
    console.log('submit');
  };

  validate = () => {};

  render() {
    return (
      <Layout>
        <TopSection image="contact.jpg">
            Contactez-moi
        </TopSection>
        <Row>
          <Cell w={{ xs: 1, sm: 1 / 3 }}>
            <Div p="30px">
              <SubTitle>Rencontrons-nous !</SubTitle>
              <P>
                N'hésitez pas à prendre contact avec moi en laissant vos coordonnées ci-contre, je répondrai à
                votre demande dans les meilleurs délais.
              </P>
            </Div>
          </Cell>
          <Cell w={{ xs: 1, sm: 2 / 3 }}>
            <Div p="30px">
              <Form
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({ handleSubmit, pristine, invalid }) => (
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
                    <Label value="Votre message">
                      <Field name="message" component={Textarea} />
                    </Label>
                    <Space />
                    <Button>Envoyer</Button>
                  </form>
                )}
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
