import React from 'react';
import { Button, Input, Label } from '../input';
import { Field, Form } from 'react-final-form';
import { Div, Row, Cell, BorderedDiv, Visible, Space } from 'components/layout';
import { P, Text } from 'components/text';
import { FORM_ERROR } from 'final-form';
import { useTranslate, useTolgee } from 'utils/i18n';

const FooterSection = () => {
  const { t } = useTranslate();
  const locale = useTolgee(['language']).getLanguage() || 'fr';

  const onSubmit = async values => {
    const result = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...values, locale })
    });

    if (!result.ok) {
      alert(t('footer.newsletter.error', "Impossible de s'abonner à la newsletter. Veuillez me contacter directement."));
      return { [FORM_ERROR]: 'Impossible de soumettre le formulaire' };
    } else {
      alert(t('footer.newsletter.success', 'Vous vous êtes bien inscrit à la newsletter, merci !'));
    }
  };

  return (
    <Div bg="darkGrey" p={{ xs: '25px 30px', sm: '30px 50px 40px 50px' }}>
      <Row>
        <Cell w={{ xs: 1, sm: 1 / 4 }}>
          <P bold upper color="white" lineHeight="1em">
            Anna Elisa Valmori
          </P>
          <P color="white" linkColor="white" lineHeight="1.4em">
            Copyright &copy; 2019-{new Date().getFullYear()}
          </P>
        </Cell>
        <Cell w={{ xs: 1, sm: 1 / 4 }}>
          <P bold upper color="white" lineHeight="1em">
            {t('footer.newsletter.title', 'Newsletter')}
          </P>
          <P color="white" linkColor="white" lineHeight="1.4em">
            {t('footer.newsletter.tagline1', 'Abonnez-vous pour rester')}
            <br />
            {t('footer.newsletter.tagline2', 'informé de notre actualité !')}
          </P>
        </Cell>
        <Cell w={{ xs: 1, sm: 1 / 2 }} p={{ xs: '0', sm: '25px 0 0' }}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, pristine, submitting, reset }) => (
              <form
                onSubmit={async event => {
                  await handleSubmit(event);
                  reset();
                }}
              >
                <Row>
                  <Cell w={{ xs: 1, sm: 2 / 5 }}>
                    <Label value={t('footer.newsletter.form.name', 'Votre nom')} color="white">
                      <Field name="name" component={Input} />
                    </Label>
                  </Cell>
                  <Cell w={{ xs: 1, sm: 2 / 5 }}>
                    <Label value={t('footer.newsletter.form.email', 'Adresse email')} color="white">
                      <Field name="email" component={Input} />
                    </Label>
                  </Cell>
                  <Cell w={{ xs: 1, sm: 1 / 5 }}>
                    <Space h="28px" />
                    <Button disabled={pristine || submitting}>{t('footer.newsletter.form.submit', "S'abonner")}</Button>
                  </Cell>
                </Row>
              </form>
            )}
          />
        </Cell>
      </Row>
    </Div>
  );
};

export default FooterSection;
