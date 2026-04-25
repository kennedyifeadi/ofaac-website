import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LeadershipHero from "@/components/LeadershipHero";
import LeadershipFeatured from "@/components/LeadershipFeatured";
import LeadershipGrid from "@/components/LeadershipGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Leaders: Guiding the Future of Anioma Culture",
  description: "Meet the visionary leaders of the Organization for the Advancement of Anioma Culture (OFAAC). Discover the dedicated individuals on our Founding Patrons, Board of Trustees, and Board of Directors who champion Anioma heritage.",
};

const patrons = [
  {
    name: "Late Obi Prof Chike Edozien",
    role: "Grand Patron",
    bio: "As the revered Asagba of Asaba, his unparalleled wisdom and unwavering support laid the foundational bedrock for OFAAC. His legacy continues to inspire our mission to elevate the Anioma cultural identity on the global stage.",
  },
  {
    name: "Chief B.S.C. Elue",
    role: "Founding Patron",
    bio: "A distinguished leader whose foresight and early guidance were instrumental in shaping OFAAC's strategic direction. His contributions remain a guiding light for our community empowerment initiatives.",
  },
  {
    name: "Late Dr. Martha Dunkwu",
    role: "Founding Patron",
    bio: "The Omu of Okpanam and Anioma, her fierce advocacy for cultural preservation and women's roles in traditional leadership significantly strengthened OFAAC's cultural mandate and outreach.",
  },
];

const botMembers = [
  {
    name: "Dr. Newton Jibunoh",
    role: "Chairman",
    bio: "Renowned environmentalist, former Chairman of Costain West Africa, and 'Desert Warrior'. His visionary leadership is central to OFAAC's overarching strategic vision.",
  },
  {
    name: "Chief Philip Asiodu",
    role: "Member",
    bio: "A statesman of immense repute, his invaluable contributions and towering standing in the community provide robust oversight and strategic depth to the Board.",
  },
  {
    name: "Late Sir Fortune Ebie",
    role: "Member",
    bio: "Former Managing Director of the Federal Housing Authority. His profound intellectual input was particularly vital to the establishment of the Anioma Annual Lecture Series.",
  },
  {
    name: "Prof. Pat Utomi",
    role: "Member",
    bio: "Prominent political economist and thought leader. His intellectual contributions and national influence are invaluable assets in advancing our cultural narratives.",
  },
  {
    name: "Arc. Kester Ifeadi",
    role: "National President",
    bio: "With a distinguished architectural background, his dynamic leadership and passion drive the organization's core cultural initiatives and infrastructural vision.",
  },
  {
    name: "Late Hon Emeka Nmadu",
    role: "Member",
    bio: "A dedicated advocate whose foundational contributions and commitment to the Anioma cause continue to be deeply acknowledged and celebrated by the organization.",
  },
];

const directors = [
  {
    name: "Arc. Kester Ifeadi",
    role: "National President",
    bio: "Leads the executive functions, translates strategic vision into actionable programs, and spearheads the daily execution of our cultural mandate.",
  },
  {
    name: "Elder Paddy Ugboh",
    role: "Vice President",
    bio: "His extensive administrative experience and steadfast support are crucial to the cohesive functioning of the executive leadership team.",
  },
  {
    name: "Barr. Monn Olodu",
    role: "National Secretary",
    bio: "Expertly manages organizational communications, legal compliance, and maintains the critical administrative records of OFAAC.",
  },
  {
    name: "Late Hon Emeka Nmadu",
    role: "Media Director",
    bio: "His pivotal role in publicizing OFAAC's activities significantly amplified our voice and brought Anioma culture to a wider audience.",
  },
  {
    name: "Ogbuenyi Afam Ugah",
    role: "Member",
    bio: "A committed director whose hands-on approach and dedication significantly contribute to the success of our grassroots cultural initiatives.",
  },
  {
    name: "Elder Emma Ogwu Emma",
    role: "Finance Director",
    bio: "Meticulously oversees the financial health, resource allocation, and long-term sustainability strategies of the organization.",
  },
  {
    name: "Mr Sunday Oliseh",
    role: "Director of Zonal Affairs",
    bio: "Skillfully coordinates cultural activities and ensures seamless organizational presence across various designated Anioma zones.",
  },
  {
    name: "Mr. Donatus Itoro",
    role: "Director of Zonal Affairs",
    bio: "Works collaboratively to ensure broad regional engagement, mobilizing communities and extending OFAAC's reach.",
  },
  {
    name: "Dr Joseph Egwu",
    role: "Research Director",
    bio: "Leads comprehensive efforts in cultural research, historical documentation, and academic partnerships to preserve our heritage.",
  },
  {
    name: "Prince Andrew Obi",
    role: "Coordinator",
    bio: "Expertly facilitates various organizational activities, logistics, and special projects, ensuring flawless execution of our events.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <LeadershipHero />

      {/* Founding Patrons Section */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900 inline-block relative">
            Founding Patrons
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold"></span>
          </h2>
          <p className="mt-6 text-zinc-500 font-sans max-w-2xl leading-relaxed">
            Our Founding Patrons are revered figures whose initial support and guidance were pivotal in the establishment and early growth of OFAAC. Their foresight laid the groundwork for our enduring mission.
          </p>
        </div>

        {patrons.map((patron, index) => (
          <LeadershipFeatured 
            key={index}
            name={patron.name}
            role={patron.role}
            bio={patron.bio}
            reverse={index % 2 !== 0} // Alternate layout for visual interest
          />
        ))}
      </section>

      {/* Board of Trustees Section */}
      <LeadershipGrid 
        title="Board of Trustees (BOT)"
        description="The BOT provides overarching strategic direction and oversight, ensuring OFAAC remains true to its foundational principles. Chaired by a distinguished personality, the BOT is composed of eminent individuals with a deep commitment to Anioma culture."
        members={botMembers}
      />

      {/* Board of Directors Section */}
      <div className="bg-white">
        <LeadershipGrid 
          title="Board of Directors"
          description="The Board of Directors is responsible for the day-to-day governance and operational management of OFAAC, translating the strategic vision into actionable programs and initiatives."
          members={directors}
        />
      </div>
      <CTASection />
    </main>
  );
}
