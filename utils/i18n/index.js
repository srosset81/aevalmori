import { Tolgee, FormatSimple, TolgeeProvider, useTranslate, useTolgee, T } from '@tolgee/react';

import frMessages from '../../locale/fr/messages.json';
import itMessages from '../../locale/it/messages.json';

export { TolgeeProvider, useTranslate, useTolgee, T };

// In-context editing is done via the "Tolgee Tools" browser extension, which supplies its
// own credentials — the site itself never ships an API key, per Tolgee's own guidance.
export const tolgee = Tolgee()
  .use(FormatSimple())
  .init({
    defaultLanguage: 'fr',
    staticData: {
      fr: frMessages,
      it: itMessages
    }
  });
