import React from 'react';
import { motion } from 'framer-motion';

const CV = () => {
  const rawUrl = process.env.REACT_APP_CV_URL || 'https://drive.google.com/file/d/1CfBzbk1ZjHiIOscyGjF4jA-uR06KSf3Y/view?usp=sharing';

  const buildCvLinks = (url) => {
    if (!url) return { embedSrc: '', downloadHref: '', openHref: '' };

    // Google Drive: /file/d/FILE_ID
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveMatch) {
      const id = driveMatch[1];
      return {
        embedSrc: `https://drive.google.com/file/d/${id}/preview`,
        downloadHref: `https://drive.google.com/uc?export=download&id=${id}`,
        openHref: `https://drive.google.com/file/d/${id}/view`,
      };
    }

    // Google Drive: open?id=FILE_ID
    const openId = url.match(/[?&]id=([^&]+)/);
    if (url.includes('drive.google.com') && openId) {
      const id = openId[1];
      return {
        embedSrc: `https://drive.google.com/file/d/${id}/preview`,
        downloadHref: `https://drive.google.com/uc?export=download&id=${id}`,
        openHref: `https://drive.google.com/file/d/${id}/view`,
      };
    }

    // Google Docs: /document/d/DOC_ID
    const docsMatch = url.match(/docs\.google\.com\/document\/d\/([^/]+)/);
    if (docsMatch) {
      const id = docsMatch[1];
      return {
        embedSrc: `https://docs.google.com/document/d/${id}/preview`,
        downloadHref: `https://docs.google.com/document/d/${id}/export?format=pdf`,
        openHref: `https://docs.google.com/document/d/${id}/view`,
      };
    }

    // Fallback: assume direct PDF or generic URL
    return {
      embedSrc: url,
      downloadHref: url,
      openHref: url,
    };
  };

  const { embedSrc, downloadHref, openHref } = buildCvLinks(rawUrl);
  const hasUrl = Boolean(rawUrl);
  return (
    <section id="cv" className="py-20 relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-4">CV</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            View or download my latest CV.
          </p>
          <div className="flex justify-center mt-6">
            <motion.a
              href={openHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-xl shadow-cyan-400/30`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        

        
      </div>
    </section>
  );
};

export default CV;


