import { Movie } from "@/lib/movies";
import { atom } from "jotai";

export const currentMovieAtom = atom<Movie | null>(null);
