

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, ExternalLink, Award } from 'lucide-react';

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    earned: 'Aug 2024',
    expiry: 'Aug 2027',
    link: 'https://www.credly.com/badges/dc4b7af0-56f6-4819-902c-7d7db497c258/public_url',
  },
  {
    name: 'Microsoft Certified: Azure Associate',
    issuer: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    earned: 'Jul 2023',
    expiry: 'Jul 2027',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/77535166/5787A206D1D50972?sharingId=A29C4E45882AD5E7',
  },
  {
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    issuer: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    earned: 'Oct 2025',
    expiry: 'Oct 2027',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=0371635DDD5343DFEE422EAD20837963239C4784CCF5AE031A156534F6593489',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    earned: 'Jun 2023',
    expiry: 'No Expiry',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/77535166/A80DC26609723E4?sharingId=A29C4E45882AD5E7',
  },
  {
    name: 'Programming, Data Structures And Algorithms Using Python',
    issuer: 'NPTEL',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQHJZGa_G2gwUg/company-logo_200_200/company-logo_200_200/0/1631333024279?e=1776902400&v=beta&t=L9TfpvK9JltfKniGabDsibrbWzzMPncrbqpaeRDrCcs',
    earned: 'Oct 2019',
    expiry: 'No Expiry',
    link: 'https://archive.nptel.ac.in/content/noc/NOC19/SEM2/Ecertificates/106/noc19-cs40/Course/NPTEL19CS40S11401134191136993.jpg',
  },
];

function CertLogo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <Award className="h-5 w-5 text-primary" strokeWidth={2} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" ref={ref} className="relative overflow-hidden bg-transparent py-section">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-adaptive text-3xl sm:text-4xl mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="liquid-glass rounded-2xl border-primary/20 px-5 py-4 shadow-glass transition-all duration-300 hover:shadow-card-hover flex flex-row items-center gap-4"
            >
              {/* Logo */}
              <div className="h-10 w-10 shrink-0 rounded-xl bg-white p-1.5 ring-1 ring-primary/20 overflow-hidden flex items-center justify-center">
                <CertLogo src={cert.logo} alt={cert.issuer} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 min-w-0">
                {/* Name */}
                <h3 className="font-heading text-heading text-sm leading-snug mb-0.5 line-clamp-2">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="font-label text-xs text-primary mb-2">
                  {cert.issuer}
                </p>

                {/* Dates row */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                  <span className="flex items-center gap-1 text-[11px] font-label text-body">
                    <Calendar className="h-3 w-3 text-primary shrink-0" strokeWidth={2} />
                    {cert.earned}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-label text-body">
                    <Clock className="h-3 w-3 text-primary shrink-0" strokeWidth={2} />
                    {cert.expiry}
                  </span>
                </div>

                {/* Verify link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-label text-primary transition-all hover:gap-1.5 w-fit"
                >
                  <ExternalLink className="h-3 w-3" />
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}