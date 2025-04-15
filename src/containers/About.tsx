'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Abubakar Imran, a third-year BSCS student at{' '}
            <Link
              href="https://nust.edu.pk/"
              target="_blank"
              className="text-accent"
            >
              National University of Sciences and Technology (NUST)
            </Link>
            .<br />
            I'm a Full-Stack Developer with a passion for AI, specializing in the MERN stack, Next.js, and cutting-edge machine learning. I create secure, scalable web apps and innovate with NLP, LLMs, and real-world ML solutions.
          </p>
          {/* <p>
            Fast-forward to today, and I've had the privilege of working at -{' '}
            <Link
              href=""
              target="_blank"
              className="text-accent"
            >
              SoftPyramid
            </Link>
            .
          </p> */}
          <p>
            My main focus these days is exploring ML and contributing to real-world AI solutions.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
