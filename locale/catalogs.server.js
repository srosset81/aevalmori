import fr from "@lingui/loader!./fr/messages.json";
import it from "@lingui/loader!./it/messages.json";

const catalogs = { fr, it };

export default function getCatalog(locale) {
  return catalogs[locale] || catalogs.fr;
}
