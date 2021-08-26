import React from 'react';
import clsx from 'clsx';
import styles from './WelcomeFeatures.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '@docusaurus/Link';
import { faNewspaper, faCompass, faKeyboard, faPaperPlane } from '@fortawesome/free-regular-svg-icons'


const FeatureList = [
  {
    title: 'Getting Started',
    icon: faCompass,
    url: '/docs/getting_started',
    description: (
      <>
        Fast discover Neon EVM. Community and Wiki sources.
      </>
    ),
  },
  {
    title: 'Introduction',
    icon: faNewspaper,
    url: '/docs/intro',
    description: (
      <>
        Short technology presentation, writing in couple paragraphs
      </>
    ),
  },
  {
    title: 'Development Manuals',
    icon: faKeyboard,
    url: '/docs/software_manuals/how_to_guides/deploy_contract/',
    description: (
      <>
        How to deploy an Ethereum contract
      </>
    )
  },
  {
    title: 'Neon Swap',
    icon: faPaperPlane,
    url: '/docs/neonswap/neonswap/',
    description: (
      <>
        Porting the uniswap service to Neon EVM
      </>
    ),
  },
];

function Feature({title, icon, url, description}) {
  return (
    <div className={clsx('col col--4')} >
      <div className={styles.feature}>
      <Link to={url} className={styles.featureCard}>
        <div className={styles.featureCardHeader}>
          <FontAwesomeIcon className={styles.featureIcon} icon={icon}  size='lg'/>
          <h3 className={styles.featureCardTitle}>{title}</h3>
        </div>
        <p>{description}</p>
      </Link>
      </div>
    </div>
  );
}

export default function WelcomeFeatures() {
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

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//         </div>
//       </div>
//     </section>
//   );
// }