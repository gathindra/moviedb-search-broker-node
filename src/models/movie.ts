import { Result } from './result';

export interface MovieResponse {
    page: number;

    total_results: number;

    otal_pages: number;

    results: Result[];
}
