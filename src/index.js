import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';

import JobsList from "./components/jobsList";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

// Detect browser language
const locale = navigator.language.startsWith('es') ? 'es' : 'en';
const messages = locale === 'es' ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList locale={locale} />
  </IntlProvider>, 
  document.getElementById("root")
);
