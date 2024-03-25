import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

const privacyStyles = {
  maxWidth: '800px',
  paddingLeft: '30px',
  paddingRight: '30px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '60px'
}

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div style={privacyStyles}>
        <h3>{t('Privacy Policy')}</h3>
        <p>{t('Privacy Policy main description')}</p>
        <h5>{t('Changes to this policy')}</h5>
        <p>{t('Changes to this policy description')}</p>
        <p className="mt-5">{t('Last modified with the date')}</p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
