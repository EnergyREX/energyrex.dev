export const EXPERIENCE_SLUGS = ["retelia", "globomatik"] as const;

export type ExperienceSlug = (typeof EXPERIENCE_SLUGS)[number];

export interface Job {
  slug: string;
  company: string;
  color: string;
  logo?: string;
  role: string;
  period: string;
  bullets: string[];
}

export const JOBS: Job[] = [
  {
    slug: "retelia",
    company: "RETELIA",
    color: "#95c123",
    logo: "/retelia.jpg",
    role: "Software Engineer",
    period: "Septiembre 2025 - Presente",
    bullets: [
      "Desarrollo backend de una plataforma de e-commerce en producción, con arquitectura hexagonal y DDD.",
      "Procesos asíncronos con BullMQ para integrar servicios externos.",
      "Nuevo frontend en Next.js, con validación de esquemas en runtime (Zod) y React Query.",
    ],
  },
  {
    slug: "globomatik",
    company: "GLOBOMATIK",
    color: "#fcc22f",
    logo: "/gmatik.jpg",
    role: "Desarrollador en prácticas",
    period: "Marzo 2025 - Junio 2025",
    bullets: [
      "Prácticas profesionales de CFGS de DAW.",
      "Consistieron principalmente en aplicar mejoras de diseño para el frontend del e-commerce de Retelia.",
    ],
  },
];

export function isExperienceSlug(slug: string): slug is ExperienceSlug {
  return (EXPERIENCE_SLUGS as readonly string[]).includes(slug);
}

export function getJob(slug: ExperienceSlug): Job {
  const job = JOBS.find((candidate) => candidate.slug === slug);
  if (!job) throw new Error(`Falta la entrada de experiencia "${slug}" en JOBS`);
  return job;
}
