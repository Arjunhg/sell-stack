'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "SoftSell made selling our unused Microsoft licenses incredibly easy. The process was smooth, and we received payment within 24 hours.",
    author: {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions",
      image: "/testimonials/sarah.jpg"
    }
  },
  {
    content: "As a small business owner, I was skeptical about selling software licenses. But SoftSell's platform was transparent and secure. Highly recommended!",
    author: {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupX",
      image: "/testimonials/michael.jpg"
    }
  }
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

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Trusted by Businesses Worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground">
            See what our customers have to say about their experience with SoftSell.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="animated-outline card rounded-2xl p-8 hover-gradient hover:scale-105 transition-transform duration-300 shadow-lg bg-card-bg dark:bg-gray-800"
            >
              <div className="flex flex-col gap-4">
                <motion.svg
                  className="h-8 w-8 text-primary/40"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </motion.svg>
                <p className="text-lg leading-7 text-foreground/80">
                  {testimonial.content}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-x-4">
                <motion.div 
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.author.name.charAt(0)}
                  </span>
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                  <div className="text-sm text-foreground/70 dark:text-gray-300">
                    {testimonial.author.role}, {testimonial.author.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}