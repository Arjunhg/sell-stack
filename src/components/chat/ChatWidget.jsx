'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const exampleQuestions = [
  "How do I sell my license?",
  "What types of software can I sell?",
  "How much can I get for my license?",
  "How quickly will I get paid?",
  "Is the process secure?"
];

const getAIResponse = async (question) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (question.toLowerCase().includes('sell')) {
    return "To sell your license, simply fill out our form with your license details. We'll provide a valuation within minutes and process your payment within 24 hours after acceptance.";
  } else if (question.toLowerCase().includes('type')) {
    return "We accept a wide range of software licenses including Microsoft Office, Adobe Creative Suite, Windows OS, and enterprise solutions. If you're not sure, just ask and we'll let you know!";
  } else if (question.toLowerCase().includes('much') || question.toLowerCase().includes('price')) {
    return "License values vary based on type, remaining duration, and market demand. On average, our users receive 40-60% of the original purchase price for active licenses.";
  } else if (question.toLowerCase().includes('quick') || question.toLowerCase().includes('time') || question.toLowerCase().includes('paid')) {
    return "Once you accept our offer, you'll receive payment within 24 hours through your preferred method (PayPal, bank transfer, or crypto).";
  } else if (question.toLowerCase().includes('secure')) {
    return "Absolutely! We use industry-standard encryption for all transactions. Your personal and financial information is never stored on our servers.";
  } else {
    return "Thanks for your question! Our team will get back to you shortly. If you need immediate assistance, please call our support line or check our FAQ section.";
  }
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hi there! How can I help you with selling your software licenses today?" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // scroll to btm when new msg arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    // add user msg to chat
    const userMessage = { id: messages.length + 1, type: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    
    // show typing mark
    setIsTyping(true);
    
    try {
      // get AI res
      const response = await getAIResponse(inputText);
      
      // add bot res to chat
      setMessages(prev => [...prev, { 
        id: prev.length + 1, 
        type: 'bot', 
        text: response 
      }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, { 
        id: prev.length + 1, 
        type: 'bot', 
        text: "Sorry, I encountered an error. Please try again later." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleExampleClick = (question) => {
    setInputText(question);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 bg-primary rounded-full p-3 text-white shadow-lg hover:shadow-xl z-50 hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 button-text" />
        ) : (
          <ChatBubbleLeftIcon className="h-6 w-6 button-text" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 h-96 bg-card-bg rounded-lg shadow-xl flex flex-col overflow-hidden z-50 border border-card-border"
          >
            {/* Header */}
            <div className="bg-primary button-text p-4 font-medium flex justify-between items-center">
              <span>SoftSell Assistant</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-light rounded-full p-1"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`rounded-lg px-4 py-2 max-w-[80%] shadow ${
                      message.type === 'user' 
                        ? 'bg-primary button-text' 
                        : 'bg-gray-100 dark:bg-gray-700 text-foreground dark:text-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <motion.div
                        className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      />
                      <motion.div
                        className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                      />
                      <motion.div
                        className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Example questions */}
            <div className="px-4 py-2 bg-background/50 border-t border-card-border">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Example questions:</div>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(question)}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-[#9bc121] dark:text-primary-light hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full px-3 py-1 whitespace-nowrap"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <form onSubmit={handleSubmit} className="p-4 bg-card-bg border-t border-card-border flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full px-4 py-2 bg-white dark:bg-gray-700 text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-gray-200 dark:border-gray-600"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className={`bg-primary rounded-full p-2 text-white ${!inputText.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-light'}`}
              >
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
