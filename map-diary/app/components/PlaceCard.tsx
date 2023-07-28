import React from "react";
import { DiaryEntry } from "../models/diaryEntry";
import { Picture } from "../models/picture";

const getRandomEmoji = () => {
  const emojis = [
    "⛲",
    "⛺",
    "🌁",
    "🌃",
    "🏙",
    "🌄",
    "🌅",
    "🌆",
    "🌇",
    "🌉",
    "♨",
    "🎠",
    "🛝",
    "🎡",
    "🎢",
    "💈",
    "🎪",
    "🏔",
    "⛰",
    "🌋",
    "🗻",
    "🏕",
    "🏖",
    "🏜",
    "🏝",
    "🏞",
    "🏟",
    "🏛",
    "🏗",
    "🧱",
    "🪨",
    "🪵",
    "🛖",
    "🏘",
    "🏚",
    "🏠",
    "🏡",
    "🏢",
    "🏣",
    "🏤",
    "🏥",
    "🏦",
    "🏨",
    "🏩",
    "🏪",
    "🏫",
    "🏬",
    "🏭",
    "🏯",
    "🏰",
    "💒",
    "🗼",
    "🗽",
  ];
  return emojis[~~(Math.random() * emojis.length)];
};

export default async function PlaceCard({
  diaryEntry,
}: {
  diaryEntry: DiaryEntry;
}) {
  const bgUrl =
    process.env.S3_BUCKET_URL + (diaryEntry.pictureIds[0] ?? "default.png");

  return (
    <div className="p-0 bg-blue-columbia rounded-xl shadow-lg">
      <div className="flex justify-between p-2 font-medium text-black-rich">
        <p className="text-lg truncate">{diaryEntry.name}</p>
        <p className="text-xl">{getRandomEmoji()}</p>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
        className="bg-cover h-28 sm:h-44 rounded-b-xl"
      ></div>
    </div>
  );
}
