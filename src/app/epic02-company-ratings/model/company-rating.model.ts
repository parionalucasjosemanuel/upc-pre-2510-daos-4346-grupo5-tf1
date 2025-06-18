export interface CompanyRating {
  id: number;
  company: string;
  stars: number; // de 1 a 5
  comment: string;
  author: string;
  date: string; // formato ISO
}
