// Core content types for CV website
// These interfaces define the structure for JSON content files

// ============================================================================
// Profile & Identity
// ============================================================================

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin?: string;
  github?: string;
  photo: string;
  cvFile?: string;
}

// ============================================================================
// About Section
// ============================================================================

export interface About {
  content: string;
}

// ============================================================================
// Education Section
// ============================================================================

export interface Education {
  university: string;
  degree: string;
  major?: string;
  period: string;
  gpa?: string;
  coursework?: string[];
  publication?: {
    title: string;
    url?: string;
  };
}

// ============================================================================
// Experience Section
// ============================================================================

export interface Experience {
  role: string;
  organization: string;
  period: string;
  contributions: string[];
}

// ============================================================================
// Bootcamp Section
// ============================================================================

export interface Bootcamp {
  organization: string;
  role: string;
  period: string;
  description: string;
  finalProject?: string;
  tags?: string[];
}

// ============================================================================
// Projects Section
// ============================================================================

export interface Project {
  slug: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  documentationUrl?: string;
  featured: boolean;
}

// ============================================================================
// Organization Section
// ============================================================================

export interface Organization {
  name: string;
  period: string;
  contributions: string[];
}

// ============================================================================
// Certifications Section
// ============================================================================

export interface Certification {
  certificate: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

// ============================================================================
// Skills Section
// ============================================================================

export interface SkillGroup {
  category: string;
  skills: string[];
}
