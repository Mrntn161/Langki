---
sidebar_position: 3
---

# The Langki Prototype

In practice, Langki is simply an Anki template, so it shouldn't take you long to get the hang of the framework, as long as you're willing to slightly change how you structure the template.

Each Langki template has three sections: `Prompt`, `Front`, and `Back`.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750064044/Langki/jw5wrjrrbzygvj7mrn2u.png)

## The Prompt Section

This section is where you set up your prompt to guide how the AI responds and evaluates your answer. In some cases, it’s also where you ask the AI to generate flashcards.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750064327/Langki/p2genkl2m2pmh9lsukou.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750060109/Langki/no8eij2napwvelddqsqz.png"
    width="400"
    height="500"
  />
</div>

## The Front Section

This is where you design the front of a Langki flashcard.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066426/Langki/qyb1sfv9v2c3ipjt60ax.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066447/Langki/pcsm7qanjxbmyt3dze9p.png"
    width="400"
    height="500"
  />
</div>
<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
      src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750067073/Langki/qrfk1uroqrtrxwxndm7k.png"
      alt="Ảnh 3"
      width="100%"
      height="100%"
    />
</div>

## The Back Section

Similarly, this is where you design the back of a Langki flashcard.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066737/Langki/ihygbcx7a7fzhmrpiyvh.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066447/Langki/pcsm7qanjxbmyt3dze9p.png"
    width="400"
    height="500"
  />
</div>
<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
<img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066947/Langki/zmyvumwn0ywdf7yxskwz.png"
    alt="Ảnh 3"
    width="100%"
    height="100%"
  />
</div>
## Flashcard generation

Note that the content in the Back section of the flashcard uses [the Conditional Replacement syntax](https://docs.ankiweb.net/templates/generation.html#conditional-replacement)

```
This text is always shown.

{{#FieldName}}
    This text is only shown if FieldName has text in it
{{/FieldName}}

{{^FieldName}}
    This text is only shown if FieldName is empty
{{/FieldName}}
```

We use this syntax to ensure that the back of the Langki flashcard is not empty, even when the Back field itself is blank. This prevents Langki from generating content automatically, as it tries to complete any flashcard where either the front or back is left empty.

For example if the back section is designed like this:

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750067368/Langki/lnsjq1nwdezznmav5cqp.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750066447/Langki/pcsm7qanjxbmyt3dze9p.png"
    width="400"
    height="500"
  />
</div>

The AI will automatically generate content to fill the Back section. Once the flashcard is created, the generated content is saved to the Front and Back fields. Since both fields are already filled, the AI won’t need to regenerate the flashcard during future reviews.

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750067756/Langki/xclewi1crfldaujdtzg1.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750067822/Langki/lyuppcdgnx8fshcexpt1.png"
    width="400"
    height="500"
  />
</div>

---

:::note The Back field is optional
In over 90% of cases when using the Conditional Replacement syntax, we don't need to fill in the Back field. The exception is when the AI hallucinates on certain flashcards. In such cases, what we enter in the Back field will be taken into account when the AI responds and evaluates. This significantly reduces the chance of hallucination.
:::
