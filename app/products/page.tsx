import React from 'react';
import Image from 'next/image';
import { ShieldAlert } from 'lucide-react';
import styles from './page.module.css';
import { Button } from '@/components/Button/Button';

export const metadata = {
  title: 'Product Levels - InvisiShield ArmorFilm™',
  description: 'Compare Standard, PRO, ULTRA, and Shadow Tint series.',
};

export default function ProductsPage() {
  const products = [
    {
      id: 'standard',
      title: 'InvisiShield Standard',
      description: 'The foundation of transparent defense. Ideal for home and standard commercial use, providing highly robust resistance against smash-and-grabs, riots, and blunt force attacks.',
      image: '/images/invisi-shield-in-home.png',
      features: [
        '8-mil to 12-mil thickness selection.',
        'Prevents blunt-force entry.',
        'Tear and rip-resistant.',
        'Optically clear and UV protective.'
      ]
    },
    {
      id: 'pro',
      title: 'InvisiShield PRO',
      description: 'The standard for schools and heavy commercial environments. Increased gauge significantly improves ballistic deceleration when paired with properly rated window frames.',
      image: '/images/invisi-shield-in-school-bus.png',
      features: [
        '14-mil to 18-mil heavy gauge.',
        'Survives sustained kinetic impacts.',
        'Deters light-caliber handguns.',
        'Recommended for large storefronts and school glass.'
      ]
    },
    {
      id: 'ultra',
      title: 'InvisiShield ULTRA',
      description: 'Our apex formulation for government buildings and police tactical cruisers. Utilizing maximum nano-layering to trap high-velocity projectiles and contain violent spall.',
      image: '/images/invisi-shield-in-cop-car.png',
      features: [
        '21-mil+ extreme multi-layer gauge.',
        'Maximum spall reduction for armor packages.',
        'Withstands heavy weaponry and blast pressures.',
        'Unmatched tension strength in the civilian market.'
      ]
    },
    {
      id: 'shadow',
      title: 'Shadow Tint Series',
      description: 'Combining elite physical protection with critical visual privacy. Prevent attackers from identifying targets inside a vehicle or building, confusing their aim and providing crucial seconds to react.',
      image: '/images/applying-invisi-shield-on-car-window.png',
      features: [
        'Available in multiple darkness level tints.',
        'Prevents visual target acquisition.',
        'Drastically reduces interior heat build-up.',
        'Same ballistic-grade containment as our PRO tier.'
      ]
    }
  ];

  return (
    <div className={styles.main}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Uncompromising Product Lines</h1>
        <p className={styles.subtitle}>
          Compare the protective tiers of InvisiShield ArmorFilm to find the perfect application for your security needs.
        </p>
      </header>
      
      {products.map((prod) => (
        <section key={prod.id} id={prod.id} className={styles.section}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>{prod.title}</h2>
              <p className={styles.description}>{prod.description}</p>
              
              <ul className={styles.featuresList}>
                {prod.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <ShieldAlert className={styles.icon} size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className={styles.actions}>
                <Button href="/quote" variant="primary">Quote This Product</Button>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image 
                src={prod.image} 
                alt={`${prod.title}`} 
                fill 
                className={styles.image} 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
