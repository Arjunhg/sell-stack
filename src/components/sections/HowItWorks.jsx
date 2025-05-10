'use client';

import { motion } from 'framer-motion';
import { 
  CloudArrowUpIcon, 
  CurrencyDollarIcon, 
  BanknotesIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    id: '01',
    name: 'Upload License',
    description: 'Simply upload your software license details through our secure platform.',
    icon: CloudArrowUpIcon,
  },
  {
    id: '02',
    name: 'Get Valuation',
    description: 'Receive an instant valuation based on current market rates and license type.',
    icon: CurrencyDollarIcon,
  },
  {
    id: '03',
    name: 'Get Paid',
    description: 'Accept the offer and get paid securely within 24 hours.',
    icon: BanknotesIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Selling your software licenses has never been easier. Follow these three simple steps to get started.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <motion.div key={step.id} variants={item} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{step.description}</p>
                  <p className="mt-6">
                    <span className="text-sm font-semibold leading-6 text-primary">
                      Step {step.id}
                    </span>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
} 