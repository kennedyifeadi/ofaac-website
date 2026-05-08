// import heritage from "@/public/Blog 1.jpg";
export type Project = {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string[]; // Array of paragraphs for easy rendering
  image: string;
  tags: string[];
  status: "Ongoing" | "Completed";
};

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "heritage-project",
    title: "The Anioma Heritage Project",
    date: "Ongoing",
    status: "Ongoing",
    tags: ["Heritage", "Cultural Preservation", "Community"],
    image: "/Blog 1.jpg",
    summary:
      "A palace-driven cultural and historical initiative established to preserve, document, and promote the rich heritage, traditions, and ancestral legacy of the Anioma people.",
    content: [
      "The Anioma Heritage Project is a palace-driven cultural and historical initiative of the Organization For the Advancement of Anioma Culture (OFAAC) established to preserve, document, and promote the rich heritage, traditions, and ancestral legacy of the Anioma people for present and future generations. Through respectful fieldwork visits to traditional rulers and communities across Anioma land, the project seeks to collect authentic historical accounts, oral traditions, royal genealogies, migration narratives, indigenous knowledge, and cultural practices that define the identity of the Anioma nation.",
      "The project recognizes traditional institutions as vital custodians of history and culture and therefore works in partnership with monarchs, elders, historians, and community stakeholders to safeguard endangered cultural memories and preserve the integrity of Anioma civilization. It is dedicated to creating a permanent archive of historical records, palace histories, artifacts, folklore, language expressions, and sacred traditions while also supporting research, education, cultural awareness, and intergenerational knowledge transfer.",
      "The Anioma Heritage Project further aims to strengthen unity, identity, pride, and historical consciousness among Anioma people at home and in the diaspora by celebrating the achievements, values, and enduring contributions of Anioma communities to society. Through publications, documentaries, digital preservation, exhibitions, and cultural engagements, the project seeks to ensure that the true story of the Anioma people is accurately documented, globally recognized, and permanently preserved as a lasting legacy of cultural excellence and ancestral dignity."
    ],
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}
