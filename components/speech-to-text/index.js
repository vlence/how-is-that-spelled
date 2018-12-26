import React from 'react';
import styled from 'styled-components';

import ListenButton from '../listen-button';
import Result from '../result';

const CenterSection = styled.section`
  text-align: center;
`;

/**
 * Provides an interface to speak into and get the transcript
 */
class SpeechToText extends React.Component {

  recognition = null;
  abortTimeout = null;

  state = {
    supportsSpeechRecognition: null,
    shouldDisplayNoSupportMessage: false,
    transcript: null,
    listening: false,
    tookTooLong: false,
  };

  constructor(props) {
    super(props);

    this.listen = this.listen.bind(this);
    this.onResult = this.onResult.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onStart = this.onStart.bind(this);
    this.abort = this.abort.bind(this);
  }

  componentDidMount() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!!SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';

      this.recognition.addEventListener('result', this.onResult);
      this.recognition.addEventListener('start', this.onStart);
      this.recognition.addEventListener('end', this.onEnd);

      this.setState(() => ({supportsSpeechRecognition: true}));
    }
    else {
      this.setState(() => ({supportsSpeechRecognition: false}));
    }
  }

  /**
   * Checks if speech recognition is supported and then listens for a word.
   */
  listen() {
    if (!this.state.supportsSpeechRecognition) {
      this.setState(() => ({shouldDisplayNoSupportMessage: true}));
    }
    else {
      this.recognition.start();
    }
  }

  /**
   * Listener for the 'result' event for speech recognition
   */
  onResult(e) {
    clearTimeout(this.abortTimeout);

    const transcript = Array.from(e.results)
      .map(result => result[0].transcript);

    this.setState(() => ({transcript}));
  }

  /**
   * Listener for the 'end' event for speech recognition
   */
  onEnd() {
    this.setState(() => ({listening: false}));
  }

  /**
   * Listener for the 'start' event for speech recognition
   */
  onStart() {
    this.setState(() => ({listening: true, tookTooLong: false, transcript: null}), () => {
      this.abortTimeout = setTimeout(this.abort, 5000);
    });
  }

  /**
   * Aborts speech recognition attempt
   */
  abort() {
    this.recognition.abort();
    this.setState(() => ({tookTooLong: true}));
  }

  render() {
    const {shouldDisplayNoSupportMessage, listening, tookTooLong, transcript} = this.state;

    // Show message if speech recognition is not supported
    if (shouldDisplayNoSupportMessage) {
      return (
        <CenterSection>
          <small>Bummer... Your browser does not support speech recognition :(</small>
        </CenterSection>
      );
    }

    if (listening) {
      return (
        <CenterSection>
          <small>Listening for 5s...</small>
        </CenterSection>
      );
    }

    if (transcript) {
      return (
        <React.Fragment>
          <CenterSection>
            <Result transcript={transcript} />
          </CenterSection>

          <CenterSection>
            <div>
              <ListenButton onClick={this.listen} />
            </div>
          </CenterSection>
        </React.Fragment>
      );
    }

    if (tookTooLong) {
      return (
        <CenterSection>
          <div>
            <ListenButton onClick={this.listen} />
          </div>
          <div>
            <small>You took too long. Try again.</small>
          </div>
        </CenterSection>
      );
    }

    return (
      <CenterSection>
        <div>
          <ListenButton onClick={this.listen} />
        </div>
        <div>
          <small>We currently support only English (US)</small>
        </div>
      </CenterSection>
    );
  }
}

export default SpeechToText;