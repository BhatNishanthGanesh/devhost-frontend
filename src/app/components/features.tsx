import React from 'react';
import Image from 'next/image';
import { FEATURES } from '@/app/constant';

type FeatureProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full  p-4 lg:p-7 bg-slate-200">
        <Image src={icon} alt="icon" width={48} height={48} />
      </div>
      <h2 className="font-bold mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 dark:bg-dark text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-12 md:py-24">
      <div className="max-container padding-container relative w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-stretch">
        <div className="flex-1 md:mt-36 mb-10 md:mb-0">
          <Image
            src="/custom/dimg2.jpg"
            alt="phone image"
            width={540}
            height={540}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex-1 w-full md:w-3/5">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl text-center md:text-left font-bold">Our Features..</h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-12">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
