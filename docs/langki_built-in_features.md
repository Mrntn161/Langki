---
sidebar_position: 4
---

# Langki Built-in features

The Langki template also comes with out-of-the-box support for text-to-speech, speech-to-text, and speech analysis features.

To convert text to speech, use the syntax `((tts:text))` or `((tts_autoplay:text))`. The autoplay version will automatically play the audio when the card is rendered. Additionally, `((speech))` and `((speech:script))` are used when you want to integrate speech analysis into the flashcard.

For example, this is a flashcard used for shadowing practice (listen and repeat).

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750083747/Langki/zgxdxdc5arvcbgtq9sh4.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750083766/Langki/rdtqny85te1nlm9lcoo5.png"
    width="400"
    height="500"
  />
</div>
<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
      src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750083944/Langki/ptxng8ojvnvxun0bi7ev.png"
      width="400"
      height="500"
  />
</div>
Similarly, this is a flashcard for speaking practice. The difference is that this flashcard uses unscripted speech analysis.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750084344/Langki/afysmxtvdseznpffciwn.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750084368/Langki/ov2riyqxbr18dyymx1z3.png"
    width="400"
    height="500"
  />
</div>

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750084570/Langki/ri8deyvzb0oqws1h6prx.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750084585/Langki/pgzuhh5gp25l2qt0qvfp.png"
    width="400"
    height="500"
  />
</div>

To use the speech-to-text feature, simply click the microphone icon next to the input field. For unscripted speech, speech-to-text is much faster than speech analysis.

:::note
Due to security concerns, the WebView on AnkiDroid and AnkiMobile do not support recording, so speech-to-text and speech analysis features are unavailable on these platforms. If you want to use these features on a smartphone, we recommend using AnkiWeb instead.
:::
