'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Secure Transactions',
    description: 'Our platform ensures all transactions are secure and verified, protecting both buyers and sellers.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Quick Process',
    description: 'Get your valuation within minutes and receive payment within 24 hours of accepting an offer.',
    icon: ClockIcon,
  },
  {
    name: 'Best Market Rates',
    description: 'We offer competitive rates based on current market values and license conditions.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Trusted Platform',
    description: 'Join thousands of satisfied users who have successfully sold their software licenses.',
    icon: UserGroupIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <div id="why-choose-us" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Why Choose SoftSell
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground">
            We make selling your software licenses simple, secure, and profitable.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="animated-outline card rounded-2xl p-8 hover-gradient hover:scale-105 bg-card-bg dark:bg-gray-800 duration-300 shadow-md"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-foreground/80 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}