"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import imgContemporary  from "@/public/partners/ContemporaryGroup.jpeg";
import imgDeltaState    from "@/public/partners/DeltaState.jpeg";
import imgMTN           from "@/public/partners/MTN.jpeg";
import imgOnuIka        from "@/public/partners/OnuIka.jpeg";
import imgPVRoofing     from "@/public/partners/P&VRoofing.jpeg";
import imgPeculiar      from "@/public/partners/Peculiar.jpeg";
import imgSeamans       from "@/public/partners/Seamans.jpeg";
import imgSinoma        from "@/public/partners/Sinoma.jpeg";
import imgWemaBank      from "@/public/partners/WemaBank.jpeg";

const partners: { name: string; logo: StaticImageData }[] = [
  { name: "Contemporary Group",        logo: imgContemporary },
  { name: "Delta State Government",    logo: imgDeltaState   },
  { name: "MTN Nigeria",               logo: imgMTN          },
  { name: "Onu Ika",                   logo: imgOnuIka       },
  { name: "P&V Roofing",              logo: imgPVRoofing    },
  { name: "Peculiar",                  logo: imgPeculiar     },
  { name: "Seaman's Schnapps",         logo: imgSeamans      },
  { name: "Sinoma",                    logo: imgSinoma       },
  { name: "Wema Bank",                 logo: imgWemaBank     },
];

export default function SponsorPartners() {
  return (
    <section id="sponsor-partners" className="w-full bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 mb-4">
            Our Valued Partners
          </h2>
          <p className="font-sans text-zinc-500 max-w-2xl mx-auto">
            We are incredibly grateful for the support of our past and present partners who have helped us achieve our mission. Their commitment to Anioma culture is invaluable.
          </p>
        </motion.div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="group bg-white rounded-2xl h-24 md:h-32 flex items-center justify-center p-4 border border-zinc-100 hover:border-gold/40 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-2"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 font-sans text-sm text-zinc-400 italic"
        >
          ...and many more dedicated individuals and organizations.
        </motion.p>
      </div>
    </section>
  );
}
