import React from 'react';

import Title from '../components/title';
import Description from '../components/description';
import SpeechToText from '../components/speech-to-text';
import Footer from '../components/footer';

export default () => (
  <React.Fragment>
    <header>
      <Title />
    </header>

    <main>
      <section>
        <Description />
      </section>

      <SpeechToText />
    </main>

    <hr />

    <Footer />
  </React.Fragment>
);