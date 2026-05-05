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
    date: "2025 - Present",
    status: "Ongoing",
    tags: ["Infrastructure", "Cultural Preservation", "Community"],
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    summary:
      "A landmark initiative dedicated to constructing a state-of-the-art cultural center and museum that will serve as the physical heartbeat of the Anioma nation.",
    content: [
      "The Anioma Heritage Project represents one of the most ambitious infrastructure endeavors undertaken by OFAAC. Designed to be a magnificent architectural marvel, this facility will house the collective memory, art, and history of the Anioma people.",
      "The building will feature a world-class museum, an expansive auditorium for annual lectures, and dedicated exhibition spaces for traditional crafts such as Akwa-Ocha weaving. It is envisioned not just as a monument, but as a living, breathing cultural hub where youths can learn, and elders can pass down invaluable traditions.",
      "Currently in its developmental phase, the project is rallying support from Anioma sons and daughters globally. The design integrates modern sustainable building practices while paying deep homage to indigenous Anioma architectural motifs, ensuring the structure itself tells a story of our heritage.",
      "As construction progresses, this space will ultimately become the permanent home for the Anioma Cultural Festival's administrative operations and a sanctuary for preserving our rich tapestry of history for generations unborn."
    ],
  },
  {
    id: "proj-2",
    slug: "anioma-youth-empowerment-initiative",
    title: "Anioma Youth Empowerment Initiative",
    date: "Completed 2023",
    status: "Completed",
    tags: ["Youth", "Education", "Skill Acquisition"],
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    summary:
      "A comprehensive skill acquisition program that trained over 500 youths across the nine LGAs in traditional crafts and modern digital skills.",
    content: [
      "Understanding that the future of the Anioma culture lies in the hands of its youth, OFAAC launched this comprehensive empowerment initiative to bridge the gap between traditional heritage and modern economic realities.",
      "Over the course of six months, more than 500 youths from across the nine Local Government Areas participated in intensive workshops. These sessions covered traditional skills like Akwa-Ocha weaving and indigenous pottery, alongside modern capabilities such as digital marketing and basic web design.",
      "The project successfully instilled a sense of pride and self-reliance among the participants, many of whom have gone on to establish their own small-scale enterprises, directly contributing to the economic stabilization of their local communities."
    ],
  },
  {
    id: "proj-3",
    slug: "akwa-ocha-revitalization",
    title: "Akwa-Ocha Revitalization Campaign",
    date: "Completed 2021",
    status: "Completed",
    tags: ["Arts & Crafts", "Economy", "Culture"],
    image: "https://images.unsplash.com/photo-1606225457115-9b0de873c5db?q=80&w=1974&auto=format&fit=crop",
    summary:
      "A targeted campaign to boost the production, appreciation, and global export of the iconic Anioma traditional fabric.",
    content: [
      "The Akwa-Ocha is the sartorial identity of the Anioma people. However, production had seen a decline due to modern textile alternatives. This project was initiated to revive the art of weaving this sacred fabric and reposition it as a premium cultural export.",
      "OFAAC provided micro-credit facilities to local weavers and organized exhibitions that showcased the fabric to a broader Nigerian and international audience. By partnering with fashion designers, the campaign demonstrated how Akwa-Ocha could be integrated into contemporary fashion.",
      "Today, the demand for authentic Akwa-Ocha has surged, providing a sustainable livelihood for hundreds of local artisans and ensuring the fabric remains a central part of our cultural expression."
    ],
  },
  {
    id: "proj-4",
    slug: "rural-healthcare-outreach",
    title: "Anioma Rural Healthcare Outreach",
    date: "Completed 2019",
    status: "Completed",
    tags: ["Healthcare", "Community", "Welfare"],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2069&auto=format&fit=crop",
    summary:
      "A medical outreach program providing free healthcare services, insurance registration, and medical supplies to underserved rural communities.",
    content: [
      "In alignment with OFAAC's commitment to the holistic well-being of the Anioma people, this project focused on bringing vital medical services to the most remote parts of the region.",
      "A team of volunteer doctors, nurses, and medical professionals conducted free health screenings, treated common ailments, and dispensed essential medications. Additionally, the project facilitated the enrollment of hundreds of rural dwellers into the OFAAC Health Insurance Program.",
      "The outreach not only addressed immediate health concerns but also provided long-term health security for vulnerable populations, reinforcing the organization's role as a true umbrella body that cares for its people."
    ],
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}
