import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/star-mark-svgrepo-com.svg').default,
    description: (
      <>
        Langki is just an Anki template, meaning you can seamlessly integrate it into your existing workflow, note types, and decks.
      </>
    ),
  },
  {
    title: 'Cross-Device Accessibility',
    Svg: require('@site/static/img/devices-svgrepo-com.svg').default,
    description: (
      <>
        Written in JavaScript, Langki is available on Anki Desktop, AnkiDroid, AnkiMobile, and AnkiWeb, offering cross-device access.
      </>
    ),
  },
  {
    title: 'Multi-Language Support',
    Svg: require('@site/static/img/language-planet-svgrepo-com.svg').default,
    description: (
      <>
      Supports over 30 languages, making it an ideal tool for learners worldwide. 
      </>
    ),
  },
  {
    title: 'Battery-Included',
    Svg: require('@site/static/img/book-drawing-compass-education-learning-school-study-svgrepo-com.svg').default,
    description: (
      <>
        Everything language learners need in one place: AI chatbot, flashcard generation, text-to-speech, speech-to-text, and speech analysis.
      </>
    ),
  },
  {
    title: 'Highly Customizable',
    Svg: require('@site/static/img/book-education-learning-puzzle-school-study-svgrepo-com.svg').default,
    description: (
      <>
        Language learners can easily design Langki note types to create a wide range of practice activities.
      </>
    ),
  },
  {
    title: 'Free to start',
    Svg: require('@site/static/img/money-svgrepo-com.svg').default,
    description: (
      <>
        No sign-up is required, just install the add-on and download a Langki note type to begin. 
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
