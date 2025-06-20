---
sidebar_position: 7
---

# Flashcard generation

## The idea

One of Anki's greatest strengths is its ability to let users design flashcards using HTML, CSS, and JavaScript. This means we can replicate almost any type of exercise found in other language learning apps. However, one bottleneck that Anki faces is data. Creating content on Anki can be tedious, as users have to manually enter information into individual fields, which are later rendered into flashcards using HTML. What if we could eliminate this intermediate step by using AI to generate the HTML directly?

For example, instead of designing a flashcard template like this:

```html
<div>{{Definition}}</div>
```

We can guide the AI to generate a flashcard by providing it with a format like this:

```html
<div description="the definition of the vocabulary item">...</div>
```

## Create a note type for learning vocabulary

I will use Langki to create a note type for learning vocabulary through multiple-choice questions. While multiple-choice questions are not encouraged in Anki, they serve as a great example to demonstrate the flexibility of this approach. This is because creating multiple-choice questions can be time-consuming, as it requires coming up with distractors.

First, I will clone the `Langki - prototype` to create a new note type called `Langki - Vocabulary (multiple choice)`

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750145160/Langki/gmatfawrd38tg2yn01ch.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750145185/Langki/dmlk3nbbazjfp3zdqer9.png"
    width="400"
    height="500"
  />
</div>

This is the prompt I use to guide the AI in generating the flashcard.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147171/Langki/vsg4c8izce8h0wes9paf.png)

The front and back fields are left empty to trigger flashcard generation

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750319997/Langki/h4hjhhbgmn5hsjyy2edo.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750319973/Langki/plha8siftl00kmxov8hm.png"
    width="400"
    height="500"
  />
</div>

And this is the flashcard AI generates

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147259/Langki/j7fvja4n2ctmjuezrdkx.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147273/Langki/hwqrh8szcx0ud7kkeyfc.png"
    width="400"
    height="500"
  />
</div>

And these are the 'Front' and 'Back' fields after the generation

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147569/Langki/nii3w8iyzgslivep5yjr.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147501/Langki/mi83eius2l0gpq1q8tzo.png"
    width="400"
    height="500"
  />
</div>

Back:

<div class="responsive-flex" style={{ display: 'flex', gap: '8px' }}>
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147634/Langki/ghglrhsgrh2hedm3macf.png"
    width="400"
    height="500"
  />
  <img
    src="https://res.cloudinary.com/dqfb2pujj/image/upload/v1750147653/Langki/nff8uxsqsvhlgmp9gdwy.png"
    width="400"
    height="500"
  />
</div>

The great thing about this approach is that we only need to enter the word, and the AI generates everything we need based on the HTML template we’ve defined. Since the end result is just HTML, we can fully use CSS and JavaScript to style and tweak the flashcard.

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750148230/Langki/w9mb2jwmfgcfo27pos4b.png)

Now let's use JavaScript to modify the flashcard, as 10 options seem a lot. A better design would be to randomly select 3 distractors and shuffle them with the correct option. By using JavaScript for this, each review session will be different. I will use chatGPT to help me write the script

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750148850/Langki/il0e7svz2o4hm4ygjobq.png)

However, to use JS on the generated flashcard we need to put them inside a function callded `jsCode`

![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750148939/Langki/l1tuqcghbasxjyt3gjt5.png)

The end result. You can download this note type here.
![](https://res.cloudinary.com/dqfb2pujj/image/upload/v1750149160/Langki/k7gqu00novix8b00pnbj.png)

:::note
I have to admit that learning vocabulary this way is far from effective, but it demonstrates that by using AI to generate HTML directly, we can theoretically create many flashcards that would otherwise take a lot of time to build manually.
:::
