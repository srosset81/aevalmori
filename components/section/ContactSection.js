import React, { useState } from 'react';
import { Form, Field, FORM_ERROR } from 'utils/form';
import { Cell, Div, Row, Space, BorderedDiv } from 'components/layout';
import { Button, Input, Textarea, Label } from 'components/input';
import { P, Text, SubTitle } from 'components/text';
import { useTranslate } from 'utils/i18n';

const ContactSection = () => {
  const { t } = useTranslate();
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = async values => {
    const result = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    const submitError = t(
      'contact.submitError',
      'Impossible de soumettre le formulaire. Veuillez me contacter directement.'
    );

    if (!result.ok) {
      return { [FORM_ERROR]: submitError };
    } else {
      const json = await result.json();
      if (json.success !== true) {
        return { [FORM_ERROR]: submitError };
      } else {
        setMessageSent(true);
      }
    }
  };

  return (
    <Row>
      <Cell w={{ xs: 1, sm: 1 / 3 }}>
        <Div p={{ xs: '25px 25px 0', sm: '50px ' }}>
          <SubTitle>{t('contact.title', 'Rencontrons-nous !')}</SubTitle>
          <P>
            {t(
              'contact.intro',
              "N'hésitez pas à prendre contact avec moi en laissant vos coordonnées ci-contre, je répondrai à votre demande dans les meilleurs délais."
            )}
          </P>
          <P>
            {t(
              'contact.bookOnline',
              'Si vous le souhaitez, les séances peuvent être réservées en ligne directement sur '
            )}
            <a href="https://perfactive.fr/psychologue/compiegne/anna-elisa-valmori" target="_blank">
              {t('contact.bookOnlineLinkLabel', 'cette page')}
            </a>
            .
          </P>
          <P>
            {t('contact.callOrSms', "Vous pouvez également m'appeler ou m'envoyer un SMS au ")}
            <a href="tel:+33659026479">06 59 02 64 79</a>
            .
          </P>
        </Div>
      </Cell>
      <Cell w={{ xs: 1, sm: 2 / 3 }}>
        <Div p={{ xs: '10px 25px 25px', sm: '50px ' }}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitError, pristine, submitting, reset }) => (
              <form
                onSubmit={async event => {
                  const result = await handleSubmit(event);
                  if (!result) reset();
                }}
              >
                {messageSent && (
                  <BorderedDiv borderRadius="5px" bg="lightGreen" p="15px" m="0 0 15px">
                    <Text>{t('contact.success', 'Votre message a bien été envoyé, merci !')}</Text>
                  </BorderedDiv>
                )}
                <Label value={t('contact.form.name', 'Votre nom')}>
                  <Field name="name" component={Input} />
                </Label>
                <Label value={t('contact.form.email', 'Adresse email')}>
                  <Field name="email" component={Input} />
                </Label>
                <Label value={t('contact.form.phone', 'Téléphone')}>
                  <Field name="phone" component={Input} />
                </Label>
                <Label value={t('contact.form.message', 'Message')}>
                  <Field name="message" component={Textarea} />
                </Label>
                {submitError ? <P color="red">{submitError}</P> : <Space />}
                <Button disabled={submitting || pristine}>{t('contact.form.submit', 'Envoyer')}</Button>
              </form>
            )}
          />
        </Div>
      </Cell>
    </Row>
  );
};

export default ContactSection;
