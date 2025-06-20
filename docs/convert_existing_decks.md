---
sidebar_position: 8
---

# Convert existing decks to Langki

In this tutorial, I will convert [4000 Essential English Words (all books) deck](https://ankiweb.net/shared/info/1104981491) to Langki. This is an excellent resource for English learners, containing clear definitions, sample sentences, audio, and images. While the deck is already well-crafted, Langki adds an extra layer of interactivity and support. For example, with suggested responses, learners can easily ask the AI for additional help, such as translations in their native language, translated examples, collocations, synonyms, antonyms, more example sentences, etc

## Modify the template

First, we need to back up the Front Template, Back Template, and styling of the deck. (just save them somewhere).

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750412819/Langki/sup0nxxsk46sxwref2kk.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750412831/Langki/ep9qsssnm8dlag2uzz06.png)

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750413237/Langki/xpehty4wzjjhqe0qs1to.png)

Since Langki is just a template, copying its **Front** and **Back** templates into another note type will automatically embed the chatbot into that new note type.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750413364/Langki/vrj8sdv0eswoqq3fgbib.png)

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750413459/Langki/soyeegx047qs378da5rt.png)

Next, update the fields in both the Front and Back of the flashcard to match the schema of the 4000 Essential English Words deck.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750413850/Langki/wtfmyehvqqiasmyokmrn.png)

Similarly, copy and paste the **Back Template** from the Langki – Prototype into this note type.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750421262/Langki/utqdmk4k9alsqbiprdxh.png)

Since the 4000 Essential English Words deck uses a dark background, we should enable **dark mode** for Langki to match

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750435228/Langki/k29j4sxg7eimxbkyabtn.png)

Now, let’s compare it to the original version.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750437551/Langki/yrcx8h4q3eg9sgwiscll.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750439271/Langki/ljnjacdfzjm72c7fycjm.png"
    width="400"
    height="500"
  />
</div>

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750437587/Langki/junmtpuhpbyq1ifyuilq.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750439249/Langki/w3aevz39ycjv2n2dv5tc.png"
    width="400"
    height="500"
  />
</div>

## Fixing the autoplay audio problem

In Langki, both the front and back of the flashcard are set up within the Front Template. However, this can cause an issue when autoplay audio is enabled and there's audio intended for the back section. In this case, the audio meant to play on the back will instead play on the front. So, we need to remove all audio from the back section in the Front Template.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750435523/Langki/rjlexbszns4iqtd7ocrm.png)
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750415191/Langki/fdqidxzchcychryba1zw.png)

However, if we do that, the back of the flashcard will no longer include audio.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750418273/Langki/o9xhhafvwymmwqcyrmpg.png)

So, we need a workaround to add audio to the back section when the flashcard turns to the Back template.
We can do this by creating an HTML element that contains the audio in the Back Template, and then using custom JavaScript to insert the audio element into the back section only if that element exists.

```
<div class="back-side">
    {{FrontSide}}
</div>

<div id="audio">
    {{Sound_Meaning}}
    [sound:_1sec.mp3]
    {{Sound_Example}}
</div>
```

```js
if (document.getElementById("audio")) {
  document.getElementById("back").appendChild(document.getElementById("audio"));
}
```

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750418392/Langki/v9l6hi64bcoyluujszk8.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750438604/Langki/mk621ef3iq3jd65h7bzw.png"
    width="400"
    height="500"
  />
</div>
