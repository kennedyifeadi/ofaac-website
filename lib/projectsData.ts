export type Project = {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string[]; // Array of paragraphs for easy rendering
  html?: string;     // Optional rich HTML content for detailed project pages
  image: string;
  tags: string[];
  status: "Ongoing" | "Completed";
};

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "heritage-project",
    title: "The Anioma Heritage Project and the Task Ahead of the Steering Committee",
    date: "Ongoing",
    status: "Ongoing",
    tags: ["Heritage", "Cultural Preservation", "Encyclopaedia", "Community", "Identity"],
    image: "/HeritageProject.jpeg",
    summary:
      "A visionary initiative by OFAAC to systematically document, preserve, and globally present Anioma history, traditions, institutions, and values — anchored by the production of a world-class encyclopaedia.",
    content: [
      "The Anioma nation occupies a unique and historically significant place within the cultural landscape of Nigeria. Rich in traditions, language, customs, oral history, kingship institutions, festivals, migration narratives, artistic expressions, and intellectual contributions, Anioma heritage remains one of the most vibrant cultural identities in the Niger Delta and Igbo-speaking world.",
      "It is against this background that the Organisation For the Advancement of Anioma Culture (OFAAC) has undertaken the visionary initiative known as the Anioma Heritage Project — a landmark effort to establish a comprehensive identity framework for the Anioma people through the systematic documentation, preservation, and global presentation of Anioma history, traditions, institutions, values, and contributions to national and international development.",
    ],
    html: `
<h2>Introduction</h2>
<p>The Anioma nation occupies a unique and historically significant place within the cultural landscape of Nigeria. Rich in traditions, language, customs, oral history, kingship institutions, festivals, migration narratives, artistic expressions, and intellectual contributions, Anioma heritage remains one of the most vibrant cultural identities in the Niger Delta and Igbo-speaking world. Yet, despite its depth and importance, much of Anioma history and cultural memory has remained scattered in oral traditions, undocumented archives, fragmented historical accounts, and rapidly disappearing indigenous knowledge systems.</p>

<p>It is against this background that the Organisation For the Advancement of Anioma Culture (OFAAC) has undertaken the visionary initiative known as the Anioma Heritage Project. This landmark project seeks to establish a comprehensive identity framework for the Anioma people through the systematic documentation, preservation, and global presentation of Anioma history, traditions, institutions, values, and contributions to national and international development.</p>

<p>At the heart of this initiative is the goal of producing a world-class encyclopaedia that will serve as an authoritative reference material locally and internationally. The encyclopaedia is envisioned not merely as a publication, but as a permanent intellectual monument that will preserve the collective memory and cultural essence of the Anioma people for future generations.</p>

<p>To drive this ambitious vision, OFAAC constituted a distinguished Steering Committee headed by <strong>Chief (Prof.) Josephine Mokwunyei</strong>, with membership comprising:</p>

<ul>
  <li>Prof. Eric Eboh</li>
  <li>Associate Professor Uche Oboko</li>
  <li>Chief Ndili</li>
  <li>Dr. Emeka Esogbue</li>
  <li>Prince Walter Eziashi</li>
  <li>Chief Sylvester Enuenweosa</li>
  <li>Mr. Paddy Ugboh</li>
  <li>Mr. Emmanuel Ogwu</li>
  <li>Prince Andrew Obiokolie</li>
</ul>

<p>The composition of the committee reflects a deliberate blend of academic scholarship, cultural leadership, community experience, administrative competence, and deep understanding of Anioma history and identity.</p>

<h2>Vision and Objectives of the Anioma Heritage Project</h2>
<p>The Anioma Heritage Project is fundamentally a cultural preservation and identity restoration initiative. Its objectives extend beyond historical compilation to include cultural reawakening, educational advancement, intergenerational continuity, and international recognition. The project seeks to:</p>

<h3>1. Preserve Anioma History and Cultural Heritage</h3>
<p>Many aspects of Anioma history exist only in oral form, preserved through elders, traditional institutions, folklore, songs, and community practices. Modernization, migration, and globalization pose significant threats to these indigenous knowledge systems. The project therefore aims to safeguard these invaluable cultural assets before they disappear.</p>

<h3>2. Establish a Clear and Documented Anioma Identity</h3>
<p>Anioma identity has evolved through complex historical, linguistic, and political interactions. The project aims to produce a definitive historical and cultural record that clearly articulates the origins, values, traditions, institutions, and contributions of Anioma people.</p>

<h3>3. Produce an Internationally Recognized Encyclopaedia</h3>
<p>The encyclopaedia will stand as a scholarly and cultural reference work documenting:</p>
<ul>
  <li>Historical origins of Anioma communities</li>
  <li>Traditional institutions and leadership systems</li>
  <li>Language and dialect studies</li>
  <li>Festivals and rituals</li>
  <li>Folklore and oral traditions</li>
  <li>Migration patterns</li>
  <li>Notable personalities and achievements</li>
  <li>Religious and spiritual practices</li>
  <li>Arts, music, cuisine, and fashion</li>
  <li>Economic history and development</li>
  <li>Educational and political contributions</li>
  <li>Contemporary Anioma society</li>
</ul>

<p>This encyclopaedia is expected to become a resource for scholars and researchers, educational institutions, cultural organizations, government agencies, international libraries, diaspora communities, and future generations of Anioma people.</p>

<h3>4. Promote Cultural Pride and Unity</h3>
<p>The project will strengthen collective consciousness among Anioma people by reinforcing shared historical roots and cultural values. It provides an opportunity to deepen unity across communities and generations.</p>

<h3>5. Enhance Global Visibility</h3>
<p>By documenting Anioma heritage in a professionally produced and internationally accessible format, the project will project Anioma civilization onto the global cultural stage.</p>

<h2>Strategic Importance of the Project</h2>

<h3>Cultural Survival</h3>
<p>Cultures that are not documented risk extinction. Languages disappear, customs fade, and oral traditions become distorted over time. Documentation provides permanence and continuity.</p>

<h3>Academic Value</h3>
<p>The encyclopaedia will contribute to African studies, Nigerian history, anthropology, linguistics, sociology, and cultural studies. It will become a credible source for future scholarly research.</p>

<h3>Historical Correction and Representation</h3>
<p>Many African histories have historically been underrepresented or interpreted through external perspectives. This project gives Anioma people the opportunity to tell their own story authentically and comprehensively.</p>

<h3>Youth Education</h3>
<p>The project can become a foundational educational tool that teaches younger generations about their roots, values, heroes, and identity.</p>

<h3>Tourism and Cultural Economy</h3>
<p>Documented cultural heritage can stimulate tourism, festivals, museums, cultural exhibitions, and economic activities linked to heritage preservation.</p>

<h2>The Role of the Steering Committee</h2>
<p>The Steering Committee carries enormous responsibility because the success and credibility of the Anioma Heritage Project depend largely on its strategic leadership, organizational effectiveness, and intellectual direction.</p>

<p>The committee's task is not merely administrative; it is historical, cultural, and civilizational. It is worthy of note to state that the Steering Committee has membership across another six subcommittees divided into zones; and they are the ones reporting progress from the various communities with regards to ongoing research works and collection of historical arts and crafts.</p>
    `,
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

