import type { CollectionEntry } from "astro:content";

type TrainingData = CollectionEntry<"pages">["data"];
type SeasonKey = "summer" | "winter";

export function getOrderedSeasons(training: TrainingData) {
  if (!training.currentSeason || !training.seasons) {
    throw new Error("Training data is missing currentSeason or seasons.");
  }

  const currentSeason = training.currentSeason;
  const alternateSeason: SeasonKey = currentSeason === "summer" ? "winter" : "summer";

  return [
    { key: currentSeason, ...training.seasons[currentSeason] },
    { key: alternateSeason, ...training.seasons[alternateSeason] },
  ];
}
