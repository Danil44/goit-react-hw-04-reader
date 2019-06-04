import React from 'react';
import publications from '../publications';
import Reader from '../components/Reader/Reader';

const ReaderPage = () => {
  return <Reader items={publications} />;
};

export default ReaderPage;
