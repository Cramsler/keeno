import { ProductionStatusEnum } from '../Types/productionStatus.enum';
import { MediaTypesEnum } from '../Types/mediaTypes.enum';

export class FilmDto {
  kinopoiskId: number;
  imdbId?: string;
  nameRu?: string;
  nameEn?: string;
  nameOriginal?: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl?: string;
  logoUrl?: string;
  reviewsCount: number;
  ratingGoodReview?: number;
  ratingGoodReviewVoteCount?: number;
  ratingKinopoisk?: number;
  ratingKinopoiskVoteCount?: number;
  ratingImdb?: number;
  ratingImdbVoteCount?: number;
  ratingFilmCritics?: number;
  ratingFilmCriticsVoteCount?: number;
  ratingAwait?: number;
  ratingAwaitCount?: number;
  ratingRfCritics?: number;
  ratingRfCriticsVoteCount?: number;
  webUrl: string;
  year?: number;
  filmLength?: number;
  slogan?: string;
  description?: string;
  shortDescription?: string;
  editorAnnotation?: string;
  isTicketsAvailable: boolean;
  productionStatus?: ProductionStatusEnum;
  type: MediaTypesEnum;
  ratingMpaa?: string;
  ratingAgeLimits?: string;
  hasImax?: boolean;
  has3D?: boolean;
  lastSync: string;
  countries: string[];
  genres: string[];
  startYear?: number;
  endYear?: number;
  serial?: boolean;
  shortFilm?: boolean;
  completed?: boolean;
}
