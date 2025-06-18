---
sidebar_position: 5
---

# Langki Configuration

Langki templates can be used for various languages, but users need to set up their target languages before using the template.

## Text to speech

To set the language for TTS, first follow [the link](https://mrntn161.github.io/Langki/text-to-speech.html) to choose a voice you like, then copy the voice code into the template as shown below.

<div style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094459/Langki/aokm0dtieosxgmxeogmg.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094505/Langki/axs5brlndrqxkuwxgjpg.png"
    width="400"
    height="500"
  />
</div>

Set `autoplay` to true if you want the AI to automatically read the message after responding.
The `rate` setting allows you to adjust the reading speed.

## Speech analysis

To set the language for speech analysis, you need to set the locale code as follows.

<img
  src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094545/Langki/nntm7qwvsza1jox8kyyv.png"
  width="600"
  height="100%"
/>

The list of supported languages and their locale codes:

| Language & Region                         | Locale Code |
| ----------------------------------------- | ----------- |
| Arabic (Egypt)                            | ar-EG       |
| Arabic (Saudi Arabia)                     | ar-SA       |
| Catalan                                   | ca-ES       |
| Chinese (Cantonese, Traditional)          | zh-HK       |
| Chinese (Mandarin, Simplified)            | zh-CN       |
| Chinese (Taiwanese Mandarin, Traditional) | zh-TW       |
| Danish (Denmark)                          | da-DK       |
| Dutch (Netherlands)                       | nl-NL       |
| English (Australia)                       | en-AU       |
| English (Canada)                          | en-CA       |
| English (India)                           | en-IN       |
| English (United Kingdom)                  | en-GB       |
| English (United States)                   | en-US       |
| Finnish (Finland)                         | fi-FI       |
| French (Canada)                           | fr-CA       |
| French (France)                           | fr-FR       |
| German (Germany)                          | de-DE       |
| Hindi (India)                             | hi-IN       |
| Italian (Italy)                           | it-IT       |
| Japanese (Japan)                          | ja-JP       |
| Korean (Korea)                            | ko-KR       |
| Malay (Malaysia)                          | ms-MY       |
| Norwegian Bokmål (Norway)                 | nb-NO       |
| Polish (Poland)                           | pl-PL       |
| Portuguese (Brazil)                       | pt-BR       |
| Portuguese (Portugal)                     | pt-PT       |
| Russian (Russia)                          | ru-RU       |
| Spanish (Mexico)                          | es-MX       |
| Spanish (Spain)                           | es-ES       |
| Swedish (Sweden)                          | sv-SE       |
| Tamil (India)                             | ta-IN       |
| Thai (Thailand)                           | th-TH       |
| Vietnamese (Vietnam)                      | vi-VN       |

Shortcut is the key that you can quickly press instead of using the mouse to click the recording button.

## Suggested responses

Users can set up suggested responses by following this structure

```
config.suggestions = [
"response 1",
"response 2",
"response 3",
"response 4",
]
```

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094641/Langki/xvuabseaonfmy0niezoa.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094660/Langki/pzfssjy6qdxgkzzxmw0n.png)

## Translate and respond in a specific language

You can also configure the language for the translation function as follows:

<div style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094719/Langki/lhfb3zrzywsh5d6f01ge.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094767/Langki/wpx72bsu5hafcbh9tadb.png"
    width="400"
    height="500"
  />
</div>

Alternatively, for convenience, you can also ask the AI to respond entirely in a specific language directly in the Prompt section.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094797/Langki/vuilgo47qwltgtvmrsiv.png)

## Darkmode and lightmode

If you're using Anki in dark mode, you can also switch the chatbot to dark mode.

<div style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094895/Langki/uhpwdbh7mgqzhy2xmk2j.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750094931/Langki/ygyzkzkavrkh3o6kesvh.png"
    width="400"
    height="500"
  />
</div>

## API key for subscribers

Running Langki’s features costs money on the server side. While each request isn’t that expensive on its own, the total can grow quickly as more users start using the tool. That’s why a daily quota comes into place.

Subscribers will receive an API key to unlock this quota. The key is embedded directly in the Langki template so it works fine in both Anki desktop and Ankiweb, and subscribers have to remove the key before sharing their decks.

The add-on helps conveniently add or remove the API key from all Langki templates in the profile.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750188782/Langki/b7bv3fyax7xdvzj8kku3.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750188815/Langki/sgscjnqzb2nuqzibxrgd.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750188943/Langki/y8c9gmnlkvpthxhzwl5h.png)
